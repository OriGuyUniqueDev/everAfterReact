/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bgColorDark: "#1B2234",
				primary: "#7986CB",
				secondary: "#FF80AB",
				error: "#EF5350",
				warning: "#FFB300",
				info: "#64B5F6",
				success: "#4CAF50",
			},
		},
		fontFamily: {
			sans: ["Outfit", "sans-serif"],
			serif: ["Pacifico", "serif"],
		},
	},
	plugins: [],
};
