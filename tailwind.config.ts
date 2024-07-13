import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"transparent-black": "rgba(0,0,0,0.3)",
				"modal-black": "rgba(0,0,0,0.6)",
			},
			backgroundPosition: {
				likes: "-340px -333px",
				comments: "-382px -333px",
				saved: "-192px -269px",
				tagged: "-256px -269px",
			},
			backgroundImage: {
				"sprite-sheet": "url('/images/sprite_core.png')",
			},
			padding: {
				"1.5": "0.375rem",
				"98px": "98px",
			},
			spacing: {
				"22": "5.5rem",
				"30": "7.5rem",
				"50": "12.5rem",
			},
		},
	},
	plugins: [],
};
export default config;
