import { Comment } from "./post-modal-comments";
import PostModalProfile from "./post-modal-profile";

interface PostModalCommentProps {
	comment: Comment;
}

export default function PostModalComment({ comment }: PostModalCommentProps) {
	return (
		<div className="w-full p-[14px] flex gap-4">
			<div className="flex">
				<div className="shrink-0">
					<PostModalProfile src={comment.profile} />
				</div>
				<p className="break-all">
					<span className="font-semibold">{comment.account} </span>
					{comment.comment}
				</p>
			</div>
		</div>
	);
}
