Steps:
run `pip install jupyter`
delete Gemfile.lock
run `bundle install`
npx prettier . --write
npx prettier . --check

git add .
git commit -m "some message"
git push origin --all
