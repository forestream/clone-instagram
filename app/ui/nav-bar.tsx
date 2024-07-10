import Image from "next/image";

export default function NavBar() {
	return (
		<div className="fixed top-0 bottom-0 left-0 w-20 flex flex-col border-r-2 gap-4 justify-start items-center py-8">
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<Image
					className=" "
					src="images/instagram.svg"
					alt="instagram icon"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<Image
					className=" "
					src="images/home.svg"
					alt="홈"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<Image
					className=" "
					src="images/search.svg"
					alt="검색"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<Image
					className=" "
					src="images/explore.svg"
					alt="탐색"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<Image
					className=" "
					src="images/reels.svg"
					alt="릴스"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<Image
					className=" "
					src="images/direct.svg"
					alt="DM"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<Image
					className=" "
					src="images/notification.svg"
					alt="알림"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<Image
					className=" "
					src="images/new-posts.svg"
					alt="새로운 게시물"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 hover:scale-110 items-center transition-transform duration-500">
				<div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
			</div>
		</div>
	);
}
