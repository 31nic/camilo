module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,html,json}'
	],
	
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};