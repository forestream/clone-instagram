import Image from "next/image";
import NavBarButton from "./nav-bar-button";

export default function NavBar() {
	return (
		<div className="w-20 z-10 bg-white top-0 h-screen w-20 flex flex-col border-r-2 justify-start items-center py-8">
			<div className="h-20">
				<NavBarButton>
					<Image src="images/instagram.svg" alt="instagram icon" fill />
				</NavBarButton>
			</div>
			<div className="grow">
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
			<div>
				<NavBarButton>
					<Image src="images/threads.svg" alt="스레드" fill />
				</NavBarButton>
				<NavBarButton>
					<Image src="images/menu.svg" alt="더 보기" fill />
				</NavBarButton>
			</div>
		</div>
	);
}
