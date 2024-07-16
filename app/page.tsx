"use client";

import mockData from "@/lib/constants/mock.json";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Post as PostType } from "./page.type";
import { POST_LIMIT } from "@/lib/constants";
import Spinner from "./ui/spinner";
import Post from "@/app/ui/post";

export default function Home() {
	const ref = useRef<HTMLDivElement>(null);

	const [posts, setPosts] = useState<PostType[]>([]);
	const [offset, setOffset] = useState(0);
	const [isIntersecting, setIsIntersecting] = useState(false);

	const ioFunction = useCallback<IntersectionObserverCallback>(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsIntersecting(true);
					setTimeout(() => {
						setPosts((prev) => [
							...prev,
							...mockData.slice(offset, offset + POST_LIMIT),
						]);
						setOffset(offset + POST_LIMIT);
						setIsIntersecting(false);
					}, 2000);
				}
			});
		},
		[offset]
	);

	useEffect(() => {
		const observer = new IntersectionObserver(ioFunction, { threshold: 1 });

		if (!ref.current) return;
		const sentinel = ref.current;
		observer.observe(sentinel);

		return () => {
			observer.unobserve(sentinel);
		};
	}, [ioFunction]);

	const randomImageId = useMemo(() => Math.trunc(Math.random() * 500), []);

	return (
		<div className="flex flex-wrap">
			{posts.map((post, i) => (
				<Post
					key={i + post.comments.slice(0, 10)}
					post={post}
					randomImageId={randomImageId + i}
				/>
			))}
			<div className="h-12 w-full flex justify-center my-12" ref={ref}>
				{isIntersecting && <Spinner />}
			</div>
		</div>
	);
}
