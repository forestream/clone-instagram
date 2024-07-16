import Image from "next/image";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function PostModalInput() {
	const [value, setValue] = useState("");

	const handleChange: ChangeEventHandler = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		setValue(event.target.value);
	};

	return (
		<form className="h-[60px] p-[14px] flex gap-2 justify-between">
			<div className="flex gap-4 grow">
				<Image
					className="cursor-pointer"
					src="images/post-modal/emoji.svg"
					alt="이모지"
					width={24}
					height={24}
				/>
				<input
					type="text"
					value={value}
					placeholder="댓글 달기..."
					className="grow focus-visible:outline-none"
					onChange={handleChange}
				/>
			</div>
			<button
				type="button"
				className="text-sky-500 font-semibold disabled:opacity-40"
				disabled={!value.length}
			>
				게시
			</button>
		</form>
	);
}
