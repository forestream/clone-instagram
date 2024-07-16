import Image from "next/image";

interface PostModalProfileProps {
	src: string;
}

export default function PostModalProfile({ src }: PostModalProfileProps) {
	return (
		<div className="w-8 h-8 mr-4 relative rounded-full overflow-hidden">
			<Image src={src} alt="프로필 이미지" fill />
		</div>
	);
}
