import Image from "next/image";
import ProfileButtons from "./profile-buttons";
import ProfileTexts from "./profile-texts";
import ProfileHighlights from "./profile-highlights";
import ProfilePageTab from "./profile-page-tab";
import ProfileImage from "./profile-image";

export default function Profile() {
	return (
		<header>
			<div className="flex flex-col gap-8">
				<div className="h-52 w-full flex gap-7">
					<div className="w-72 flex justify-center items-center">
						<ProfileImage />
					</div>
					<div className="w-full flex flex-col gap-4">
						<div className="flex gap-2 justify-start items-center grow">
							<p className="mr-4 cursor-pointer text-xl">account</p>
							<ProfileButtons />
							<div className="">
								<Image
									src="images/option.svg"
									alt="옵션"
									width={24}
									height={24}
								/>
							</div>
						</div>
						<div className="flex">
							<p className="w-28 cursor-pointer">
								게시물 <span className="font-semibold">0</span>
							</p>
							<p className="w-28 cursor-pointer">
								팔로워 <span className="font-semibold">0</span>
							</p>
							<p className="w-28 cursor-pointer">
								팔로우 <span className="font-semibold">0</span>
							</p>
						</div>
						<ProfileTexts />
						<div>
							<p className="text-sm">
								최근 30일 동안 계정 0개에 도달했습니다.{" "}
								<span className="font-semibold">인사이트 보기</span>
							</p>
						</div>
					</div>
				</div>
				<ProfileHighlights />
				<ProfilePageTab />
			</div>
		</header>
	);
}
