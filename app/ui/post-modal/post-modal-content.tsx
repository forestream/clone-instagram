import PostModalProfile from "./post-modal-profile";

interface PostModalContentProps {
	src: string;
	account: string;
	content: string;
}

export default function PostModalContent({
	src,
	account,
	content,
}: PostModalContentProps) {
	return (
		<div className="w-full p-[14px] flex gap-4">
			<div className="flex">
				<div className="shrink-0">
					<PostModalProfile src={src} />
				</div>
				<p className="break-all">
					<span className="font-semibold">{account} </span>
					{content}
				</p>
			</div>
		</div>
	);
}
