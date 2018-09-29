# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial32"
  config.vm.network :forwarded_port, guest: 80, host: 8080
  config.vm.provision "shell", path: "bootstrap.sh"

  #config.vm.boot_timeout = 600
  #config.vm.provider :virtualbox do |vb|
  #  vb.gui = true
  #end

end
