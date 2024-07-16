import Image from "next/image";
import type { Post } from "../page.type";
import useModalOpen from "@/lib/hooks/use-modal-open";
import PostModal from "./post-modal/post-modal";

interface PostProps {
	post: Post;
	randomImageId: number;
}

export default function Post({ post, randomImageId }: PostProps) {
	const randomImage = `https://picsum.photos/id/${randomImageId}/300`;

	const [modal, handleModal] = useModalOpen();

	const handleCloseModal = () => handleModal(false);

	const handleOpenModal = () => handleModal(true);

	return (
		<>
			<div className="basis-1/3 aspect-square pr-1" onClick={handleOpenModal}>
				<div className="w-full h-full mb-1 bg-neutral-300 cursor-pointer relative group">
					<Image src={randomImage} alt="게시물 이미지" fill />
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
			{modal && <PostModal closeModal={handleCloseModal} src={randomImage} />}
		</>
	);
}
