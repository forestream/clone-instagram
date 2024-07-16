import ProfileEmptyPosts from "../ui/profile/profile-empty-posts";

export default function Page() {
	return (
		<div>
			<div className="flex justify-between text-xs my-8">
				<p>저장한 내용은 회원님만 볼 수 있습니다.</p>
				<button className="text-sky-500 font-bold text-sm">+ 새 컬렉션</button>
			</div>

			<ProfileEmptyPosts
				title="저장"
				info="다시 보고 싶은 사진과 동영상을 저장하세요. 콘텐츠를 저장해도 다른
					사람에게 알림이 전송되지 않으며, 저장된 콘텐츠는 회원님만 볼 수
					있습니다."
			>
				<div className="bg-sprite-sheet bg-saved w-16 h-16" />
			</ProfileEmptyPosts>
		</div>
	);
}
