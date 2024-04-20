@echo off
setlocal enabledelayedexpansion

REM Define a list of words to use in the commit message
set WORDS=(update fix refactor improve patch enhance optimize revise debug overhaul)

REM Generate a random number between 0 and 9
set /a "RAND_NUM=%RANDOM% * 10 / 32768"

REM Extract a random word from the list
for /f "tokens=%RAND_NUM%" %%G in ("%WORDS%") do set RAND_WORD=%%G

REM Get the current timestamp
for /f "tokens=1-5 delims=:. " %%a in ("%time%") do set TIMESTAMP=%DATE:~-4%%DATE:~4,2%%DATE:~7,2%%%a%%b%%c

REM Check if a commit message was provided as an argument
if "%~1"=="" (
  set COMMIT_MESSAGE=%TIMESTAMP% %RAND_WORD%
) else (
  set COMMIT_MESSAGE=%TIMESTAMP% %1
)


REM Step 3: Run bundle install
bundle install

REM Step 4: Format all files with prettier and write changes
npx prettier . --write

REM Step 5: Check formatting with prettier
npx prettier . --check

REM Step 6: Stage all changes for git commit
git add .

REM Step 7: Commit changes with the generated or provided message
git commit -m "%COMMIT_MESSAGE%"

REM Step 8: Push all branches to remote origin
git push origin --all

REM Step 9: Serve the site using Jekyll
bundle exec jekyll serve

endlocal
