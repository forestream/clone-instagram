import { ChangeEventHandler, MouseEventHandler, useRef } from "react";
import withModal from "../modal/withModal";

interface ProfileImageOptionProps {
	onImageChange: (image: string) => void;
}

const ProfileImageOption = withModal<ProfileImageOptionProps>(
	({ closeModal, onImageChange }) => {
		const formRef = useRef<HTMLFormElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);

		const handleClickUpload: MouseEventHandler = () => {
			if (!inputRef.current) return;
			inputRef.current.click();
		};

		const handleCancel = () => closeModal();

		const handleChange: ChangeEventHandler = () => {
			if (!inputRef.current || !inputRef.current.files) return;
			const imageObj = inputRef.current.files.item(0);
			const imageURL = imageObj ? URL.createObjectURL(imageObj) : "";
			onImageChange(imageURL);
			closeModal();
		};

		const handleDelete = () => {
			if (!formRef.current) return;
			formRef.current.reset();
			onImageChange("");
			closeModal();
		};

		return (
			<div className="max-w-[400px] w-full bg-white rounded-xl flex flex-col animate-open-modal">
				<p className="text-center py-6 text-xl">프로필 사진 바꾸기</p>
				<button
					className="active:bg-neutral-200 py-4 border-t-2 text-sm w-full text-sky-500 font-bold"
					onClick={handleClickUpload}
				>
					사진 업로드
				</button>
				<button
					className="active:bg-neutral-200 py-4 border-t-2 text-sm w-full text-red-500 font-bold"
					onClick={handleDelete}
				>
					현재 사진 삭제
				</button>
				<button
					onClick={handleCancel}
					className="active:bg-neutral-200 py-4 border-t-2 text-sm w-full"
				>
					취소
				</button>
				<form ref={formRef} className="opacity-0 w-0 h-0">
					<input
						ref={inputRef}
						type="file"
						accept=".jpeg, .jpg, .png"
						onChange={handleChange}
					/>
				</form>
			</div>
		);
	}
);

export default ProfileImageOption;
