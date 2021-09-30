const jekyllEnv = process.env.JEKYLL_ENV || "development"

module.exports = {
	plugins: [
		require("postcss-import"),
		require("tailwindcss")("./tailwind.config.js"),
		require("autoprefixer")
	]
}
