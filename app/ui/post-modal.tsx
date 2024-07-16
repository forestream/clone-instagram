import Image from "next/image";
import withModal from "./modal/withModal";

interface PostModalProps {
	src: string;
}

const PostModal = withModal<PostModalProps>(({ src }) => {
	return (
		<div className="max-h-post-modal max-w-post-modal w-full h-fit flex justify-center">
			<div className="bg-white max-w-post-modal-inner w-full min-h-[450px] flex rounded overflow-hidden">
				<div className="bg-black w-full h-full aspect-square relative">
					<Image
						src={src}
						alt="게시물 이미지"
						fill
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div className="min-w-[405px] max-w-[500px] w-full bg-white"></div>
			</div>
		</div>
	);
});

export default PostModal;
