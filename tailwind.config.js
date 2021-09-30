// Import custom theme
const customTheme = require("./style/customTheme")

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{md,html}"],
	darkMode: "class",
	theme: {
		extend: {
			...customTheme
		}
	},
	variants: {
		extend: {
			typography: ["dark"]
		}
	}
}

// purge: [
// 	"./_includes/**/*.html",
// 	"./_layouts/**/*.html",
// 	"./_pages/*.html",
// 	"./_posts/*.md",
// 	"./*.html"
// ]
