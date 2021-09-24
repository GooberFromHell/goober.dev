const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

// Import tailwind components
const terminal = require("./style/components")

// Import custom theme
const customTheme = require("./style/customTheme")

// Import typography
const { standard, sm, md, lg } = require("./style/customTypography")

module.exports = {
	darkMode: "class",
	theme: {
		extend: {
			...customTheme,
			typography: (theme) => ({
				DEFAULT: {
					css: { ...standard(theme), ...md(theme) }
				}
			})
		}
	},
	variants: {
		extend: {
			typography: ["dark"]
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(function ({ addComponents }) {
			addComponents(terminal)
		})
	]
}

// purge: [
// 	"./_includes/**/*.html",
// 	"./_layouts/**/*.html",
// 	"./_pages/*.html",
// 	"./_posts/*.md",
// 	"./*.html"
// ]
