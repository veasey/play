#! /usr/bin/env bash
###
# bootstrap file for vagrant machine
###

# php
sudo apt-get -y install php

# nginx
sudo apt-get -y install nginx
sudo service nginx start

# set up nginx server
sudo cp /vagrant/.provision/nginx/nginx.conf /etc/nginx/sites-available/site.conf
sudo chmod 644 /etc/nginx/sites-available/site.conf
sudo ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf
sudo service nginx restart

# clean /var/www
sudo rm -Rf /var/www/html

# symlink /var/www => /vagrant
sudo ln -s /vagrant /var/www/html
