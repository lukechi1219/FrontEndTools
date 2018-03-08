module.exports = {
    "extends": "airbnb-base",
	env: {
		browser: true,
		jquery: true,
	},
	globals: {
		$j: true,
		Trace: true,
		I18N: true,
		JsCache: true,
		PageConfig: true,
	},
	rules:{
		"new-cap": "off",
		"prefer-spread": "off", // ES6
		"prefer-rest-params": "off", // ES6
		"block-scoped-var": "off", // ? for(var i=0; i<splitResult.length; i++) {
		"no-redeclare": "off", // ?

//		"yoda": ["error", "never"],
		"yoda": "off",
		"quotes": "off",
		"no-undef": "off",
		"wrap-iife": "off",
		"no-mixed-spaces-and-tabs": "off",
		"eol-last": "off",
		"no-useless-escape": "off",
		"spaced-comment": "off",
//		"no-unused-vars": "off", // change to on

		"space-infix-ops": "off", // change to on
		"space-in-parens": "off", // change to on
		"array-bracket-spacing": "off", // change to on
		"block-spacing": "off", // change to on
		"comma-spacing": "off", // change to on
		"key-spacing": "off", // change to on
		"keyword-spacing": "off", // change to on
		"semi-spacing": "off", // change to on
		"space-before-blocks": "off", // change to on
		"no-multi-spaces": "off", // change to on
		"no-extra-semi": "off", // change to on
		"max-len": "off", // change to on
		"no-alert": "off", // change to on ?

		"no-restricted-globals": [
			"error",
			{
                "name": "top",
                "message": "Use local parameter instead."
            },
			{
                "name": "event",
                "message": "Use local parameter instead."
            },
			{
                "name": "error",
                "message": "Use local parameter instead."
            }
		],

//		"linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
		"linebreak-style": "off",
//		"indent": ["error", "tab", { "CallExpression": {"arguments": 1} }],
		"indent": "off",
		"no-tabs": "off",
		"space-unary-ops": "off",
		"space-before-function-paren": "off",
		"func-names": ["error", "never"],
		"padded-blocks": "off",
		"no-var": "off",
		"prefer-arrow-callback": "off",
		"prefer-template": "off",
		"prefer-destructuring": "off",
		"eqeqeq": "off",
		"comma-dangle": ["error", "never"],
		"function-paren-newline": ["error", "consistent"],
		"object-shorthand": ["error", "never"],
		"quote-props": ["error", "as-needed", { "unnecessary": false }],
		"vars-on-top": "off",
		"no-plusplus": "off",
		"no-bitwise": ["error", { "allow": ["&"] }],
		"no-trailing-spaces": "off",
		"no-use-before-define": "off",
		"radix": "off"
	},
};