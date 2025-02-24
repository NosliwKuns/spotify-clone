/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 4,
	singleQuote: false,
	trailingComma: "none",
	semi: false,
	printWidth: 100,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		}
	]
}
