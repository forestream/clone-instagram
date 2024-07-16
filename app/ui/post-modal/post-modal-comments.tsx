import PostModalComment from "./post-modal-comment";

export interface Comment {
	profile: string;
	comment: string | null;
	account: "account";
}

interface PostModalCommentsProps {
	comments: Comment[];
}

export default function PostModalComments({
	comments,
}: PostModalCommentsProps) {
	return comments.map((comment, i) => (
		<PostModalComment key={i} comment={comment} />
	));
}
