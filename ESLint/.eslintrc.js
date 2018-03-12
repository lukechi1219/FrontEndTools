module.exports = {
//	"extends": "eslint:recommended",
//	"extends": "standard",
//	"extends": "google",
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
	rules: {
		// 下面這些 rulles 不適用 or 太嚴格, 所以 off
		"strict": "off",
		"quotes": "off", // ' vs "
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
		"no-console": "error",
		"no-alert": "warn",
		"unicode-bom": "error",
		"no-irregular-whitespace": "error",
		"no-sequences": "error",
		"no-unreachable": "error",

		// ----------------------
		"no-shadow": "warn",
		"one-var": "warn",
		"one-var-declaration-per-line": "warn",
		"no-unused-vars": "warn",
		"no-unused-expressions": "warn",
		"semi": ["warn", "always"],
		"no-extra-semi": "warn",

		"new-cap": "warn",
		"new-parens": "warn", // Missing "()" invoking a constructor
		"no-else-return": "warn",
		"no-lonely-if": "warn",
		"no-useless-return": "warn",
		"no-useless-escape": "warn",

		"no-array-constructor": "warn",
		"no-fallthrough": "warn",
		"operator-assignment": "warn",
		"quote-props": ["warn", "as-needed", { "keywords": true, "unnecessary": false, "numbers": true }],

		/*
		 * 需要更嚴格的檢查的話, 可以把以下的 rule 打開
		 */
		// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
//		"block-scoped-var": "warn", // Java has block-level scope, JavaScript has function-level scope.
		"block-scoped-var": "off", // for(var i=0; i<splitResult.length; i++) {
//		"guard-for-in": "warn",
		"guard-for-in": "off",
//		"eqeqeq": "warn",
		"eqeqeq": "off",
//		"no-script-url": "warn", // Using javascript: URLs is considered by some as a form of eval.
		"no-script-url": "off",
//		"no-redeclare": ["warn", { "builtinGlobals": true }], // for(var i=0; -> xx.forEach() IE9
		"no-redeclare": "off",
//		"no-param-reassign": "warn",
		"no-param-reassign": "off",
//		"no-plusplus": "warn",
		"no-plusplus": "off",
//		"comma-dangle": "warn", //  IE8 and below will throw an error
		"comma-dangle": "off",
//		"dot-notation": "warn",
		"dot-notation": "off",
//		"padded-blocks": "warn", // 改善 code 可讀性
		"padded-blocks": "off",
//		"wrap-iife": "warn",
		"wrap-iife": "off",

		/*
		 * often & or | is simply a mistyped && or ||
		 */
//		"no-bitwise": ["warn", { "allow": ["&"] }],
		"no-bitwise": "off",

		/*
		 * var num = parseInt("071"); // return 57
		 * var num = parseInt("071", 10); // return 71
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
		"no-var": "off", // ES6, require let or const instead of var
		"object-shorthand": ["warn", "never"], // ES6
		"prefer-arrow-callback": "off", // ES6
		"prefer-destructuring": "off", // ES6
		"prefer-rest-params": "off", // ES6
		"prefer-spread": "off", // ES6
		"prefer-template": "off", // ES6

		"no-restricted-globals": [
			"warn",
			"NaN",
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

		"no-restricted-properties": "warn",

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
		"no-spaced-func": "off",

		// spacing
		"array-bracket-spacing": "off",
		"block-spacing": "off",
		"comma-spacing": "off",
		"computed-property-spacing": "off",
		"func-call-spacing": "off",
		"key-spacing": "off",
		"keyword-spacing": "off",
		"object-curly-spacing": "off",
		"semi-spacing": "off",
		"switch-colon-spacing": "off",

		// newline
		"function-paren-newline": ["warn", "consistent"],
		"object-curly-newline": "warn",
		"object-property-newline": "warn",
		"no-multiple-empty-lines": "warn",
		"newline-per-chained-call": "warn",

		"brace-style": "off",
		"comma-style": "off",
		"operator-linebreak": "off",
		"eol-last": "off",
	},
};
