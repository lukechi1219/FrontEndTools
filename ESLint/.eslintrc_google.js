module.exports = {
    "extends": "google",
	env: {
		browser: true
	},
	rules:{
		"linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
		"no-tabs": "off",
		"no-var": "off",
		"padded-blocks": "off"
	}
};