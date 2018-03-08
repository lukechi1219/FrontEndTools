echo off

echo ================================
echo need install npm package first: 
echo run "npm install"
echo ================================

rem NOTE: 可以用絕對路徑. 跟 ESLint 不用在同一個硬碟.
set JS_FOLDER=D:\Work\Projects\YB_CashMPS\codebase\trunk\CashMPS\src\main\webapp\js\h5


rem Do NOT change this line. config file: .eslintrc.js
set ES_LINT_COMMAND=node ./node_modules/eslint/bin/eslint.js -c .eslintrc.js --format ./node_modules/eslint-friendly-formatter/index.js
rem Do NOT change this line. config file: .eslintrc.js
set ES_LINT_COMMAND_HTML=node ./node_modules/eslint/bin/eslint.js -c .eslintrc.js -f html

rem set CHANGE_JS_FOLDER= n

echo .
echo current JS_FOLDER is %JS_FOLDER%

rem set /p CHANGE_JS_FOLDER= press y to change folder. press enter to continue: 

rem if %CHANGE_JS_FOLDER% == n goto NOT_CHANGE_FOLDER

rem echo .
rem set /p JS_FOLDER= please input js folder path: 

:NOT_CHANGE_FOLDER
rem echo .
rem echo use JS_FOLDER = %JS_FOLDER%
rem echo .

echo.
echo %ES_LINT_COMMAND% %JS_FOLDER%
call %ES_LINT_COMMAND% %JS_FOLDER%
timeout 1

echo.
echo generate report to esLintResult.html
echo %ES_LINT_COMMAND_HTML% %JS_FOLDER%
call %ES_LINT_COMMAND_HTML% %JS_FOLDER% > esLintResult.html
timeout 1

echo .
@pause
