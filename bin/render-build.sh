#!/usr/bin/env bash
# exit on error
# set -o errexit

# bundle install
# bundle exec rails db:migrate
# bundle exec rails assets:precompile
# bundle exec rails assets:clean

set -e
echo "Installing dependencies..."
bundle install

echo "Running database migrations..."
rails db:migrate RAILS_ENV=production

echo "Seeding the database..."
rails db:seed RAILS_ENV=production

echo "Precompiling assets..."
rails assets:precompile

echo "Build completed."