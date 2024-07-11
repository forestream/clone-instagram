import Image from "next/image";
import ProfileButtons from "./profile-buttons";
import ProfileTexts from "./profile-texts";
import ProfileHighlights from "./profile-highlights";

export default function Profile() {
	return (
		<header>
			<div className="flex flex-col gap-8">
				<div className="h-52 w-full flex gap-7">
					<div className="w-72 flex justify-center items-center">
						<div className="h-[150px] w-[150px] rounded-full bg-neutral-200 cursor-pointer"></div>
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
				<div className="w-full h-[3.25rem] border-t-2 flex justify-center text-xs font-semibold">
					<button className="flex items-center gap-[6px] mr-[3.75rem]">
						<Image
							src="images/profile-posts.svg"
							alt="게시물"
							width={12}
							height={12}
						/>
						게시물
					</button>
					<button className="flex items-center gap-[6px] mr-[3.75rem]">
						<Image
							src="images/profile-saved.svg"
							alt="저장됨"
							width={12}
							height={12}
						/>
						저장됨
					</button>
					<button className="flex items-center gap-[6px] mr-[3.75rem]">
						<Image
							src="images/profile-tagged.svg"
							alt="태그됨"
							width={12}
							height={12}
						/>
						태그됨
					</button>
				</div>
			</div>
		</header>
	);
}
