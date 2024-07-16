import Image from "next/image";

export default function ProfileHighlights() {
	return (
		<div className="flex justify-start items-center h-30 w-full">
			<div className="cursor-pointer w-24 h-24 border-2 rounded-full flex justify-center items-center">
				<div className="flex justify-center items-center rounded-full w-22 h-22 bg-neutral-100">
					<div className="w-12 h-12 relative">
						<Image
							src="images/highlight-plus.svg"
							alt="하이라이트 추가"
							fill
							className="opacity-40"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
