"use client";

import mockData from "@/lib/constants/mock.json";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Post } from "./page.type";
import { POST_LIMIT } from "@/lib/constants";
import Spinner from "./ui/spinner";

export default function Home() {
	const ref = useRef<HTMLDivElement>(null);

	const [posts, setPosts] = useState<Post[]>([]);
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

	const observer = useMemo(
		() => new IntersectionObserver(ioFunction, { threshold: 1 }),
		[ioFunction]
	);

	useEffect(() => {
		if (!ref.current) return;
		const sentinel = ref.current;
		observer.observe(sentinel);

		return () => {
			observer.unobserve(sentinel);
		};
	}, [observer]);

	return (
		<div className="flex flex-wrap">
			{posts.map((post, i) => (
				<div className="basis-1/3 aspect-square pr-1" key={i}>
					<div className="w-full h-full mb-1 bg-neutral-300 cursor-pointer relative group">
						<div className="hidden bg-transparent-black group-hover:flex absolute inset-0 justify-center items-center">
							<div className="flex gap-10 text-white">
								<div className="flex items-center gap-2">
									<div className="inline-block bg-sprite-sheet bg-likes w-5 h-5"></div>
									<span>{post.likes}</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="inline-block bg-sprite-sheet bg-comments w-5 h-5"></div>
									<span>0</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
			<div className="h-12 w-full flex justify-center my-12" ref={ref}>
				{isIntersecting && <Spinner />}
			</div>
		</div>
	);
}
