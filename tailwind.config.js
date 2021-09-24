const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

// Import tailwind components
const terminal = require("./style/components")

// Import custom theme
const customTheme = require("./style/customTheme")

// Import typography
const { standard, style } = require("./style/customTypography")

module.exports = {
	darkMode: false,
	theme: {
		extend: {
			...customTheme,
			typography: (theme) => ({
				DEFAULT: {
					css: { ...standard(theme), ...style(theme) }
				}
			})
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
