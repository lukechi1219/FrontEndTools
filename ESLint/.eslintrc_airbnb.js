module.exports = {
    "extends": "airbnb-base",
	env: {
		browser: true
	},
	rules:{
//		"no-undef": "off",
		"linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
		"indent": ["error", "tab"],
		"no-tabs": "off",
		"space-unary-ops": "off",
		"space-before-function-paren": "off",
		"func-names": ["error", "never"],
		"padded-blocks": "off",
		"no-var": "off",
		"prefer-arrow-callback": "off",
		"prefer-template": "off",
		"prefer-destructuring": "off"
	}
};