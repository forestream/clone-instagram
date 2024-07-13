"use client";

import useModalOpen from "@/lib/hooks/use-modal-open";
import withModal from "./modal/withModal";

const ProfileImageOption = withModal(() => (
	<div className="max-w-[400px] w-full bg-white rounded-xl flex flex-col">
		<p className="text-center py-6 text-xl">프로필 사진 바꾸기</p>
		<button className="py-4 border-t-2 text-sm w-full text-sky-500 font-bold">
			사진 업로드
		</button>
		<button className="py-4 border-t-2 text-sm w-full text-red-500 font-bold">
			현재 사진 삭제
		</button>
		<button className="py-4 border-t-2 text-sm w-full">취소</button>
	</div>
));

export default function ProfileImage() {
	const [modalOpen, onModalOpen] = useModalOpen();

	const handleOpenModal = () => onModalOpen(true);

	const handleCloseModal = () => onModalOpen(false);

	return (
		<>
			<div
				onClick={handleOpenModal}
				className="h-[150px] w-[150px] rounded-full bg-neutral-200 cursor-pointer"
			></div>
			{modalOpen && <ProfileImageOption closeModal={handleCloseModal} />}
		</>
	);
}
