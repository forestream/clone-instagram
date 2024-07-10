import { PropsWithChildren } from "react";

export default function NavBarButton({ children }: PropsWithChildren) {
	return (
		<div className="w-12 h-12 rounded-lg flex justify-center cursor-pointer hover:bg-neutral-200 items-center group">
			<div className="w-6 h-6 relative transition-transform duration-300 group-hover:scale-105">
				{children}
			</div>
		</div>
	);
}
