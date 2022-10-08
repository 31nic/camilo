module.exports = {
	globDirectory: 'prueva/',
	globPatterns: [
		'**/*.{jpg,html,json,js}'
	],
	swDest: 'prueva/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
