module.exports = {
//    'extends': 'standard',
//    'extends': 'google',
    'extends': 'airbnb-base',
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
	rules: {
		// 不適用 or 太嚴格, 所以 off
		"quotes": "off", // ' or "
		"vars-on-top": "off",
		"no-undef": "off",
		"no-use-before-define": "off",
		"no-underscore-dangle": "off",
		"func-names": "off",
		// "linebreak-style": ["error", process.env.NODE_ENV === "prod" ? "unix" : "windows"],
		"linebreak-style": "off", // LF vs CRLF

//		"yoda": ["warn", "never", { "onlyEquality": true } ],
		"yoda": "off", // if (200 == status) {

		// ----------------------
		"camelcase": "error",
		"new-parens": "error", // Missing "()" invoking a constructor
		"no-console": "error",
		"no-alert": "warn",
		"unicode-bom": "error",
		"no-irregular-whitespace": "error",
		"no-sequences": "error",
		"no-unreachable": "error",
		"no-unused-expressions": "error",

		// ----------------------
		"one-var": "warn",
		"one-var-declaration-per-line": "warn",
		"no-unused-vars": "warn",
		"no-shadow": "warn",
		"semi": ["warn", "always"],
		"no-extra-semi": "warn",

		"new-cap": "warn",
		"no-else-return": "warn",
		"no-lonely-if": "warn",
		"no-useless-return": "warn",
		"no-useless-escape": "warn",

		"dot-notation": "warn",
		"no-array-constructor": "warn",
		"operator-assignment": "warn",
		"quote-props": ["warn", "as-needed", { "keywords": true, "unnecessary": false, "numbers": true }],

		/*
		 * 需要更嚴格的檢查的話, 可以把以下的 rule 打開
		 */
//		"no-redeclare": ["warn", { "builtinGlobals": true }], // for(var i=0; -> xx.forEach() IE9
		"no-redeclare": "off",
//		"no-plusplus": "warn",
		"no-plusplus": "off",
//		"guard-for-in": "warn",
		"guard-for-in": "off",
//		"wrap-iife": "warn",
		"wrap-iife": "off",
//		"no-param-reassign": "warn",
		"no-param-reassign": "off",
		// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
//		"block-scoped-var": "warn", // Java has block-level scope, JavaScript has function-level scope.
		"block-scoped-var": "off", // for(var i=0; i<splitResult.length; i++) {
//		"no-script-url": "warn",
		"no-script-url": "off",
		"eqeqeq": "off", //"warn",
//		"comma-dangle": "warn", //  IE8 and below will throw an error
		"comma-dangle": "off",
//		"padded-blocks": "warn", // 改善 code 可讀性
		"padded-blocks": "off",

		/*
		 * often & or | is simply a mistyped && or ||
		 * "no-bitwise": ["warn", { "allow": ["&"] }],
		 */
		"no-bitwise": "off",

		/*
		 * var num = parseInt("071"); // 57
		 * var num = parseInt("071", 10); // 71
		 */
//		"radix": "warn",
		"radix": "off",

		// airbnb
//		"no-continue": "warn",
		"no-continue": "off",
//		"no-prototype-builtins": "warn",
		"no-prototype-builtins": "off",

		// google ---------------------------------
		"require-jsdoc": "off",
		"valid-jsdoc": "off",

		// ES6 ----------------------
		"object-shorthand": ["warn", "never"], // ES6
		"no-var": "off", // ES6, require let or const instead of var
		"prefer-arrow-callback": "off", // ES6
		"prefer-destructuring": "off", // ES6
		"prefer-rest-params": "off", // ES6
		"prefer-spread": "off", // ES6
		"prefer-template": "off", // ES6

		"no-restricted-globals": [
			"warn",
//			"isNaN", // https://github.com/airbnb/javascript#standard-library--isnan
			{
				"name": "top",
				"message": "Use window.top instead."
			},
			{
				"name": "location",
				// https://stackoverflow.com/questions/1865837/whats-the-difference-between-window-location-and-window-location-replace
				"message": "Use window.location instead."
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

		/*
		 * * * * * * * * * * * * * * * * * *
		 */
		"no-restricted-syntax": [
			"error",
		//	"BreakStatement",
			"DebuggerStatement",
		//	"ForInStatement",
			"LabeledStatement",
			"WithStatement",
		],

		/*
		 * * * * * * * * * * * * * * * * * *
		 * following can be fixed by js-beautify
		 */
		"max-len": "off",
		// tab
		"indent": "off",
		"no-tabs": "off",
		"no-mixed-spaces-and-tabs": "off",

		 // space
		"no-multi-spaces": "off",
		"no-trailing-spaces": "off",
		"space-in-parens": "off",
		"space-infix-ops": "off",
		"space-before-blocks": "off",
		"space-before-function-paren": "off",
		"space-unary-ops": "off",
		"spaced-comment": "off",

		// spacing
		"array-bracket-spacing": "off",
		"block-spacing": "off",
		"comma-spacing": "off",
		"key-spacing": "off",
		"keyword-spacing": "off",
		"object-curly-spacing": "off",
		"semi-spacing": "off",

		// newline
//		"function-paren-newline": ["warn", "consistent"],
		"function-paren-newline": "off",
		"object-curly-newline": "off",
		"object-property-newline": "warn",
		"no-multiple-empty-lines": "warn",
		"newline-per-chained-call": "off",

		"brace-style": "off",
		"eol-last": "off",
		"operator-linebreak": "off",
	},
};
