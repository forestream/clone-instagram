"use client";

import useModalOpen from "@/lib/hooks/use-modal-open";
import ProfileImageOption from "./profile-image-option";
import { useState } from "react";
import Image from "next/image";

export default function ProfileImage() {
	const [image, setImage] = useState("");
	const [modalOpen, onModalOpen] = useModalOpen();

	const handleOpenModal = () => onModalOpen(true);

	const handleCloseModal = () => onModalOpen(false);

	const handleImageChange = (image: string) => setImage(image);

	return (
		<>
			<div
				onClick={handleOpenModal}
				className="h-[150px] w-[150px] rounded-full bg-neutral-200 cursor-pointer relative overflow-hidden"
			>
				{image && <Image src={image} alt="프로필 이미지" fill />}
			</div>
			{modalOpen && (
				<ProfileImageOption
					closeModal={handleCloseModal}
					onImageChange={handleImageChange}
				/>
			)}
		</>
	);
}
