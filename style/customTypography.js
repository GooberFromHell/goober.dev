const standard = (theme) => {
	return {
		pre: false,
		code: false,
		h1: false,
		h2: false,
		h3: false,
		h4: false,
		h5: false,
		h6: false,
		"pre code": false,
		"pre *": false,
		"code::before": false,
		"code::after": false,
		color: theme("colors.green.400")
	}
}

const style = (theme) => {
	return {
		"ul > li::before": {},
		"ol > li::before": {
			top: "12%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: theme("colors.accent.300"),
			height: theme("height.6"),
			width: theme("width.6"),
			borderRadius: theme("borderRadius.full"),
			backgroundColor: theme("colors.accent.600"),
			border: "1px solid black",
			"-webkit-text-stroke": "1px",
			"-webkit-text-stroke-color": "#010101"
		}
	}
}

module.exports = { standard, style }
