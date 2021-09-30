const autoprefixer = require("autoprefixer")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	".terminal": {
		backgroundColor: defaultTheme.colors.gray["700"],
		borderRadius: defaultTheme.borderRadius.sm,
		overflow: "hidden",
		boxShadow: defaultTheme.boxShadow.lg,
		width: "min-content",
		"& .terminal-bar": {
			display: "flex",
			padding: "0.2rem",
			backgroundColor: defaultTheme.colors.gray["700"],
			justifyContent: "end",
			"&  div": {
				width: "0.50rem",
				height: "0.50rem",
				borderRadius: defaultTheme.borderRadius.full
			},
			"& .close": {
				marginRight: ".5rem",
				backgroundColor: defaultTheme.colors.red["500"]
			},
			"& .max": {
				marginRight: ".5rem",
				backgroundColor: defaultTheme.colors.yellow["300"]
			},
			"& .min": {
				backgroundColor: defaultTheme.colors.green["500"]
			}
		},

		"& code::before": {
			content: "'> '",
			color: defaultTheme.colors.green["500"]
		},
		"& code, & .terminal-content": {
			display: "block",
			backgroundColor: defaultTheme.colors.gray["800"],
			margin: "0 .25rem .25rem .25rem",
			borderRadius: defaultTheme.borderRadius.sm,
			boxShadow:
				"inset 0 4px 10px -1px rgb(0 0 0 / 0.2), inset 0 2px 4px -3px rgb(0 0 0 / 0.6)",
			padding: ".5rem !important"
		}
	}
}
