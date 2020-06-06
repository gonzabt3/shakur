# Set master image
FROM php:7.2-fpm-alpine

# Copy composer.lock and composer.json
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html

# Install Additional dependencies
RUN apk update && apk add --no-cache \
    build-base shadow vim curl npm\
    php7 \
    php7-fpm \
    php7-common \
    php7-pdo \
    php7-pdo_mysql \
    php7-mysqli \
    php7-mcrypt \
    php7-mbstring \
    php7-xml \
    php7-openssl \
    php7-json \
    php7-phar \
    php7-zip \
    php7-gd \
    php7-dom \
    php7-session \
    php7-zlib

# Add and Enable PHP-PDO Extenstions
RUN docker-php-ext-install pdo pdo_mysql
RUN docker-php-ext-enable pdo_mysql



# Install PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#install yarn
RUN apk update
RUN apk add yarn 
# Remove Cache
RUN rm -rf /var/cache/apk/*

# Add UID '1000' to www-data
RUN usermod -u 1000 www-data
#COPY .env.example .env

COPY --chown=www-data:www-data . /var/www/html

# Change current user to www
USER www-data
#copy .env

RUN yarn
RUN npm run dev
RUN composer update --no-scripts
RUN composer dump-autoload
RUN php artisan key:generate
RUN php artisan config:cache

RUN composer install
#RUN composer update

#RUN php artisan migrate

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]