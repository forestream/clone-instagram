import { PropsWithChildren } from "react";

interface ProfileEmptyPostsProps {
	title: string;
	info: string;
}

export default function ProfileEmptyPosts({
	title,
	info,
	children,
}: PropsWithChildren<ProfileEmptyPostsProps>) {
	return (
		<div className="mx-auto my-24 flex flex-col gap-4 items-center w-[350px]">
			{children}
			<h2 className="text-[30px] font-extrabold">{title}</h2>
			<p className="text-center leading-[18px] text-sm">{info}</p>
		</div>
	);
}
