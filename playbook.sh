#!/bin/bash
echo STEP 2 COMPOSER UPDATE
composer update
echo STEP 3 COMPOSER INSTALL
composer install 
echo STEP 4 PHP ARTISAN KEY:GENERATE
php artisan key:generate 
echo STEP 5 PHP ARTISAN CONFIG:CACHE
php artisan config:cache 
echo STEP 6 PHP ARTISAN MIGRATE
php artisan migrate 
echo STEP 8 PHP ARTISAN DB:SEED
php artisan db:seed 
echo STEP 9 INSTALL YARN
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
echo 'deb https://dl.yarnpkg.com/debian/ stable main' | sudo tee /etc/apt/sources.list.d/yarn.list 
echo STEP 10 NPM INSTALL
npm install
echo STEP 11 RUN DEV
npm run dev 
echo STEP 12 PHP ARTISAN PASSAPORT:INSTALL
php artisan passport:install 
echo STEP 13 PHP ARTISAN STORAGE
php artisan storage
echo STEP 1 PHP-FPM
php-fpm