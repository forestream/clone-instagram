"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfilePageTab() {
	const pathname = usePathname();

	return (
		<div className="w-full h-[3.25rem] border-t-2 flex justify-center text-xs font-semibold">
			<Link
				href="/"
				className={`flex items-center gap-[6px] mr-[3.75rem] ${
					pathname === "/" && "border-t-[1px]"
				} border-black`}
			>
				<Image
					src="images/profile-posts.svg"
					alt="게시물"
					width={12}
					height={12}
				/>
				게시물
			</Link>
			<Link
				href="/saved"
				className={`flex items-center gap-[6px] mr-[3.75rem] ${
					pathname === "/saved" && "border-t-[1px]"
				} border-black`}
			>
				<Image
					src="images/profile-saved.svg"
					alt="저장됨"
					width={12}
					height={12}
				/>
				저장됨
			</Link>
			<Link
				href="/tagged"
				className={`flex items-center gap-[6px] mr-[3.75rem] ${
					pathname === "/tagged" && "border-t-[1px]"
				} border-black`}
			>
				<Image
					src="images/profile-tagged.svg"
					alt="태그됨"
					width={12}
					height={12}
				/>
				태그됨
			</Link>
		</div>
	);
}
