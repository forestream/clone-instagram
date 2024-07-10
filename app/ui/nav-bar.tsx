import Image from "next/image";
import NavBarButton from "./nav-bar-button";

export default function NavBar() {
	return (
		<div className="fixed top-0 bottom-0 left-0 w-20 flex flex-col border-r-2 gap-4 justify-start items-center py-8">
			<NavBarButton>
				<Image src="images/instagram.svg" alt="instagram icon" fill />
			</NavBarButton>
			<NavBarButton>
				<Image src="images/home.svg" alt="홈" fill />
			</NavBarButton>
			<NavBarButton>
				<Image src="images/search.svg" alt="검색" fill />
			</NavBarButton>
			<NavBarButton>
				<Image src="images/explore.svg" alt="탐색" fill />
			</NavBarButton>
			<NavBarButton>
				<Image src="images/reels.svg" alt="릴스" fill />
			</NavBarButton>
			<NavBarButton>
				<Image src="images/direct.svg" alt="DM" fill />
			</NavBarButton>
			<NavBarButton>
				<Image src="images/notification.svg" alt="알림" fill />
			</NavBarButton>
			<NavBarButton>
				<Image src="images/new-posts.svg" alt="새로운 게시물" fill />
			</NavBarButton>
			<NavBarButton>
				<div className="w-full h-full bg-neutral-200 rounded-full"></div>
			</NavBarButton>
		</div>
	);
}
