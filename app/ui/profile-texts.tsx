import Image from "next/image";

export default function ProfileTexts() {
	return (
		<div className="text-sm">
			<p className="font-semibold ">username</p>
			<p>description</p>
			<p className="cursor-pointer">
				<Image
					className="inline-block mr-2"
					src="images/link.svg"
					alt="링크"
					width={14}
					height={14}
				/>
				links
			</p>
		</div>
	);
}
