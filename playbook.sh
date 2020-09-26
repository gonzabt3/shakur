#!/bin/bash
echo STEP 1 COPY .ENV
cp .env.example .env
echo STEP 2 COMPOSER UPDATE
composer update
echo STEP 3 COMPOSER INSTALL
composer install
echo STEP 13 PHP ARTISAN STORAGE
php artisan storage:link
chown -R www-data:www-data storage
echo STEP 4 PHP ARTISAN KEY:GENERATE
php artisan key:generate
echo STEP 5 PHP ARTISAN CONFIG:CACHE
php artisan config:cache
echo STEP 6 PHP ARTISAN MIGRATE
php artisan migrate
echo STEP 8 PHP ARTISAN DB:SEED
php artisan db:seed
echo STEP 10 YARN
npm install
echo STEP 11 RUN YARN dev
yarn dev
echo STEP 12 PHP ARTISAN PASSAPORT:INSTALL
php artisan passport:install
echo STEP 13 PHP ARTISAN CONFIG:CACHE
php artisan config:cache