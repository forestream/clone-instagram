import PostModalProfile from "./post-modal-profile";

interface PostModalCommentProps {
	src: string;
	account: string;
}

export default function PostModalComment({
	src,
	account,
}: PostModalCommentProps) {
	return (
		<div className="w-full p-[14px] flex">
			<div className="shrink-0">
				<PostModalProfile src={src} />
			</div>
			<p className="break-all">
				<span className="font-semibold">{account} </span>
				commentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcomment
			</p>
		</div>
	);
}
