const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	".terminal": {
		backgroundColor: defaultTheme.colors.gray["700"],
		borderRadius: defaultTheme.borderRadius.md,
		overflow: "hidden",
		boxShadow: defaultTheme.boxShadow.lg,
		"& .bar": {
			display: "flex",
			padding: "0.25rem",
			backgroundColor: defaultTheme.colors.gray["700"],
			justifyContent: "end"
		},
		"& .bar > div": {
			width: "0.75rem",
			height: "0.75rem",
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
		},
		"& code::before": {
			content: "'root# '",
			color: defaultTheme.colors.green["500"]
		},
		"& code, & .terminal-content": {
			display: "block",
			backgroundColor: defaultTheme.colors.gray["800"],
			margin: defaultTheme.spacing[1],
			borderRadius: defaultTheme.borderRadius.md,
			boxShadow:
				"inset 0 4px 10px -1px rgb(0 0 0 / 0.1), inset 0 2px 4px -3px rgb(0 0 0 / 0.6)",
			paddingLeft: defaultTheme.spacing[1],
			paddingRight: defaultTheme.spacing[1],
			paddingTop: defaultTheme.spacing[1]
		}
	}
}
