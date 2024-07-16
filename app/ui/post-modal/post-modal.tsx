import Image from "next/image";
import withModal, { ModalProps } from "../modal/withModal";
import PostModalProfile from "./post-modal-profile";
import PostModalInput from "./post-modal-input";
import PostModalContent from "./post-modal-content";
import { Post } from "@/app/page.type";
import PostModalComments, { Comment } from "./post-modal-comments";
import {
	FormEvent,
	FormEventHandler,
	MouseEventHandler,
	useRef,
	useState,
} from "react";

interface PostModalProps extends ModalProps {
	src: string;
	post: Post;
}

const PostModal = withModal<PostModalProps>(({ src, post, closeModal }) => {
	const [comments, setComments] = useState<Comment[]>([]);
	const ref = useRef<HTMLDivElement>(null);

	const handleSubmitComment: FormEventHandler = (
		event: FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		const data = new FormData(event.target as HTMLFormElement);
		const comment = data.get("comment") as string;

		setComments((prev) => [
			...prev,
			{ profile: src, comment, account: "account" },
		]);
	};

	const handleClickOutside: MouseEventHandler = (e) => {
		if (ref.current && !ref.current.contains(e.target as HTMLElement))
			closeModal();
	};

	return (
		<div
			className="max-h-post-modal max-w-post-modal w-full h-fit flex justify-center"
			onClick={handleClickOutside}
		>
			<div
				className="bg-white max-w-post-modal-inner w-full min-h-[450px] flex rounded overflow-hidden"
				ref={ref}
			>
				<div className="bg-black w-full h-full aspect-square relative min-w-[100px]">
					<Image
						src={src}
						alt="게시물 이미지"
						fill
						style={{ objectFit: "contain" }}
					/>
				</div>

				<div className="min-w-[405px] max-w-[500px] w-full bg-white flex flex-col ">
					<div className="h-[60px] p-[14px] flex justify-between border-b-2">
						<div className="flex">
							<PostModalProfile src={src} />
							<p className="font-semibold">account</p>
						</div>
					</div>
					<div
						className="overflow-y-scroll border-b-2 grow relative"
						style={{ scrollbarWidth: "none" }}
					>
						<div className="flex flex-col absolute">
							<PostModalContent
								src={src}
								account="account"
								content={post.comments}
							/>
							<PostModalComments comments={comments} />
						</div>
					</div>
					<div className="h-[60px] py-3 px-4 flex justify-between border-b-2">
						<span className="text-sky-500 font-bold text-sm cursor-pointer self-center">
							인사이트 보기
						</span>
						<button className="py-2 px-4 text-sm bg-sky-500 rounded-lg text-white flex justify-center items-center font-semibold">
							다시 홍보하기
						</button>
					</div>
					<div className="h-[60px] p-[14px] flex justify-between">
						<div className="flex gap-4">
							<Image
								className="cursor-pointer hover:opacity-40"
								src="images/post-modal/like.svg"
								alt="좋아요"
								width={24}
								height={24}
							/>
							<Image
								className="cursor-pointer hover:opacity-40"
								src="images/post-modal/comment.svg"
								alt="댓글 달기"
								width={24}
								height={24}
							/>
							<Image
								className="cursor-pointer hover:opacity-40"
								src="images/post-modal/share.svg"
								alt="게시물 공유"
								width={24}
								height={24}
							/>
						</div>
						<div>
							<Image
								className="cursor-pointer hover:opacity-40"
								src="images/post-modal/save.svg"
								alt="저장"
								width={24}
								height={24}
							/>
						</div>
					</div>
					<div className="h-[60px] pb-3 px-4 flex justify-between border-b-2">
						<div className="flex flex-col text-sm">
							<p className="font-bold">
								좋아요 <span>2</span>개
							</p>
							<p>7월 7일</p>
						</div>
					</div>

					<PostModalInput onSubmit={handleSubmitComment} />
				</div>
			</div>
		</div>
	);
});

export default PostModal;
