export default function ProfileButtons() {
	return (
		<div className="flex gap-2">
			<button className="text-sm font-semibold cursor-pointer py-1.5 px-4 bg-neutral-200 rounded-lg">
				프로필 편집
			</button>
			<button className="text-sm font-semibold cursor-pointer py-1 px-4 bg-neutral-200 rounded-lg">
				보관된 스토리 보기
			</button>
			<button className="text-sm font-semibold cursor-pointer py-1 px-4 bg-neutral-200 rounded-lg">
				광고 도구
			</button>
		</div>
	);
}
