source 'https://rubygems.org'
ruby '2.0.0'

gem 'rails', '~> 4.0.0'
gem 'pg', '~> 0.15.1'

group :assets, :development, :production do
  gem 'sass-rails', '~> 4.0.0'
  gem 'uglifier', '>= 1.3.0'
  gem 'coffee-rails', '~> 4.0.0'
end

group :test do
 gem 'factory_girl_rails', '~> 4.2.0'
 gem 'capybara', '~> 2.1.0'
 gem 'capybara-webkit', '~> 1.0.0'
 gem 'shoulda-matchers', '~> 2.1.0'
 gem 'simplecov', :require => false
 gem 'guard-rspec', '~> 3.0.2'
 gem 'guard-spork', '~> 1.5.0'
 gem 'spork-rails', github: 'railstutorial/spork-rails'
 gem 'rb-fsevent', '~> 0.9.3'
 gem 'terminal-notifier-guard', '~> 1.5.3'
end

group :development, :test do
  gem 'rspec-rails', '~> 2.13.2'
  gem 'jasmine-rails', '~> 0.4.5'
  gem 'guard-jasmine-headless-webkit', '~> 0.3.2'
end

group :development do
  gem 'annotate', '~> 2.5.0'
end

group :production do
  gem 'rails_12factor', '~> 0.0.2'
  gem 'newrelic_rpm', '~> 3.6.5'
  gem 'exception_notification', '~> 4.0.0'
end

gem 'devise', '~> 3.0.0'
gem 'puma', '~> 2.2.0'
gem 'bcrypt-ruby', '~> 3.0.0'
gem 'jquery-rails', '~> 3.0.1'
gem 'haml-rails', '~> 0.4'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use debugger
# gem 'debugger', group: [:development, :test]
