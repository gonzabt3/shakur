#!/bin/bash
php-fpm
composer install 
php artisan key:generate 
php artisan config:cache 
php artisan migrate 
php artisan db:migrate 
php artisan db:seed 
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
echo 'deb https://dl.yarnpkg.com/debian/ stable main' | sudo tee /etc/apt/sources.list.d/yarn.list 
npm install
npm run dev 
php artisan passport:install 
php artisan storage