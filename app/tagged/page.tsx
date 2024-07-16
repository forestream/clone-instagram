import ProfileEmptyPosts from "../ui/profile/profile-empty-posts";

export default function Page() {
	return (
		<ProfileEmptyPosts
			title="내가 나온 사진"
			info="사람들이 회원님을 사진에 태그하면 태그된 사진이 여기에 표시됩니다."
		>
			<div className="bg-sprite-sheet bg-tagged w-16 h-16"></div>
		</ProfileEmptyPosts>
	);
}
