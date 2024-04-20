#!/bin/bash

# Define a list of words to use in the commit message
WORDS=("update", "fix", "refactor", "improve", "patch", "enhance", "optimize", "revise", "debug", "overhaul")

# Function to generate a commit message with a timestamp and one random word
generate_random_message() {
  # Get the current timestamp
  local timestamp=$(date "+%Y%m%d%H:%M:%S")
  # Pick a random word from WORDS
  local rand_word=${WORDS[$RANDOM % ${#WORDS[@]}]}
  # Combine timestamp and random word for the commit message
  echo "$timestamp $rand_word"
}

# Check if a commit message was provided as an argument
if [ -z "$1" ]; then
  COMMIT_MESSAGE=$(generate_random_message)
else
  # Add the timestamp to the provided commit message
  local timestamp=$(date "+%Y%m%d%H:%M:%S")
  COMMIT_MESSAGE="$timestamp $1"
fi

# Step 1: Install Jupyter via pip
# pip install jupyter

# Step 2: Delete Gemfile.lock
# rm -f Gemfile.lock

# Step 3: Run bundle install
bundle install

# Step 4: Format all files with prettier and write changes
npx prettier . --write

# Step 5: Check formatting with prettier
npx prettier . --check

# Step 6: Stage all changes for git commit
git add .

# Step 7: Commit changes with the generated or provided message
git commit -m "$COMMIT_MESSAGE"

# Step 8: Push all branches to remote origin
git push origin --all

# Step 9: Serve the site using Jekyll
bundle exec jekyll serve
