import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
	return (
		<div className="w-full text-neutral-500 text-xs">
			<div className="flex gap-6 flex-wrap justify-center">
				{FOOTER_LINKS.map((link) => (
					<p key={link} className="cursor-pointer ">
						{link}
					</p>
				))}
			</div>
			<div className="flex gap-6 justify-center mt-4 mb-8">
				<select className="cursor-pointer relative" name="language">
					<option value="korean">한국어</option>
				</select>
				<p>Instagram clone project</p>
			</div>
		</div>
	);
}
