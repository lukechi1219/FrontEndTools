echo off

echo ================================
echo need install npm package first: 
echo run "npm install -g js-beautify"
echo ================================

rem NOTE: 只能用相對路徑. 跟 jsBeautify.bat 需要在同一個硬碟.
set JS_FOLDER=.\src\main\webapp\js\h5
rem set JS_FOLDER=.\src\main\webapp\js\h5\guest
rem set JS_FOLDER=.\src\main\webapp\js\h5\player

rem set CHANGE_JS_FOLDER= n

rem echo .
rem echo current JS_FOLDER is %JS_FOLDER%
rem echo .
rem set /p CHANGE_JS_FOLDER= do you want to change folder: y / n?

rem if %CHANGE_JS_FOLDER% == n goto NOT_CHANGE_FOLDER

rem echo .
rem set /p JS_FOLDER= please input js folder path?

:NOT_CHANGE_FOLDER
echo .
echo using JS_FOLDER = %JS_FOLDER%
echo .

echo js-beautify -f source.js -o output.js -p true -t -w 140 -n
echo [options]
echo -p true = preserve newlines
echo -t = indent with a tab
echo -w = width
echo -n = end file with new line
echo .

rem 主程式開始
setlocal EnableDelayedExpansion

set counter=0
set arrayObj[0]=%JS_FOLDER%
set /A counter+=1

rem 下面這段是去掃下一層資料夾
for /d %%D in (%JS_FOLDER%\*) do (
   set arrayObj[!counter!]=%%D
   set /A counter+=1
)

set "x=1"
set "pathStr=%JS_FOLDER%"

:SymLoop
if defined arrayObj[%x%] (
    rem call echo %%arrayObj[%x%]%%
	call set pathStr=%%arrayObj[%x%]%%

	echo --------------------------------------------------------
	echo path %pathStr%
	echo --------------------------------------------------------
	for /r %%g in (%pathStr%\*.js) do (
		call js-beautify -f %pathStr%\%%~nxg -o %pathStr%\%%~nxg -p true -t -w 140 -n
		rem	timeout 1
	)

    set /a "x+=1"
    GOTO :SymLoop
)
:SymLoopEnd

echo --------------------------------------------------------
echo path %pathStr%
echo --------------------------------------------------------
for /r %%g in (%pathStr%\*.js) do (
	call js-beautify -f %pathStr%\%%~nxg -o %pathStr%\%%~nxg -p true -t -w 140 -n
	rem timeout 1
)

rem for /r %%g in (%pathStr%/*.js) do (
rem    call echo %pathStr%/%%~nxg
rem    call %ES_LINT_COMMAND% %JS_FOLDER%/%%~nxg
rem    timeout 1
rem )

rem for /r . %%g in (%JS_FOLDER%/*.js) do (
rem   call js-beautify -f %JS_FOLDER%/%%~nxg -o %JS_FOLDER%/%%~nxg -p true -t -w 140 -n
rem   timeout 1
rem )

echo .
@pause
