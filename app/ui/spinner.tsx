const SPINNER_DOTS = [
	{
		color: "border-[#ffffff]",
		degree: "rotate-[0deg]",
	},
	{
		color: "border-[#e9e9e9]",
		degree: "rotate-[30deg]",
	},
	{
		color: "border-[#d4d4d4]",
		degree: "rotate-[60deg]",
	},
	{
		color: "border-[#bfbfbf]",
		degree: "rotate-[90deg]",
	},
	{
		color: "border-[#aaaaaa]",
		degree: "rotate-[120deg]",
	},
	{
		color: "border-[#949494]",
		degree: "rotate-[150deg]",
	},
	{
		color: "border-[#7f7f7f]",
		degree: "rotate-[180deg]",
	},
	{
		color: "border-[#6a6a6a]",
		degree: "rotate-[210deg]",
	},
	{
		color: "border-[#555555]",
		degree: "rotate-[240deg]",
	},
	{
		color: "border-[#3f3f3f]",
		degree: "rotate-[270deg]",
	},
	{
		color: "border-[#2a2a2a]",
		degree: "rotate-[300deg]",
	},
	{
		color: "border-[#151515]",
		degree: "rotate-[330deg]",
	},
];

export default function Spinner() {
	return (
		<div className="w-8 h-8 relative animate-spin">
			{SPINNER_DOTS.map((dot, i) => (
				<div
					key={i}
					className={`absolute top-0 left-1/2 h-full w-[2px] ${dot.degree}`}
				>
					<div className={`h-2 w-full border-l-2 ${dot.color}`}></div>
				</div>
			))}
		</div>
	);
}
