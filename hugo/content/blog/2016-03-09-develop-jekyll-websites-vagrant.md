---
title: Develop Jekyll Websites with Vagrant
author: FelicianoTech
date: 2016-03-09T20:12:36+00:00
url: /blog/develop-jekyll-websites-vagrant/
dsq_thread_id:
  - 4648541919
categories:
  - Development
  - F/OSS
tags:
  - jekyll
  - ruby
  - rvm
  - vagrant
  - virtualbox

---
Recently I needed to get a Ruby environment going so that I can run Jekyll. I work back-and-forth between two laptops. A Macbook Pro 13&#8243; graciously provided by <a href="https://circleci.com" target="_blank">CircleCI</a> and a <a href="https://feliciano.tech/blog/dell-xps-13-developer-edition-more-than-a-laptop-running-linux/" target="_blank">Dell XPS 13 Developer Edition</a> that I am in love with. Getting the proper setup going with Ruby was a PITA. Here&#8217;s how you can use Vagrant to easily bring up Jekyll on Linux, OS X, and maybe Windows (but who cares really?).<!--more-->

## The Software

I like using modern software whenever possible. If there&#8217;s a new, stable, version of something, that&#8217;s what I should be using. This is the list of software that I am using in this post with their corresponding versions:

  * Git &#8211; system version is good enough
  * VirtualBox &#8211; latest
  * Vagrant &#8211; latest
  * Ubuntu &#8211; Ubuntu 14.04 LTS
  * Ruby &#8211; v2.3.0
  * RVM &#8211; latest
  * Jekyll &#8211; latest

## Requirements

To get going, you only need to have VirtualBox (or another Vagrant provider) and Vagrant installed. While **brew** and **apt-get** can both do this for you, I&#8217;ve had a better experience downloading them directly from their download pages (<a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">VirtualBox</a>, <a href="https://www.vagrantup.com/downloads.html" target="_blank">Vagrant</a>).

## Setup

You can start by cloning <a href="https://github.com/felicianotech/jekyll-vagrant-setup/tree/2db7abb056b2ae40d23264cb68c0d764e12d7ae9" target="_blank">the repository for this post</a> from GitHub or copy and paste the files from below. I like to keep all of my code in a &#8216;Repositories&#8217; directory.

    cd ~/Repositories
    git clone https://github.com/felicianotech/jekyll-vagrant-setup
    cd jekyll-vagrant-setup
    ls -la
    

As you&#8217;ll see, there&#8217;s very little in here so far. The main files of interest are **Vagrantfile** and **bootstrap.sh**. We&#8217;ll go over each below.

### The Vagrantfile (<a href="https://github.com/felicianotech/jekyll-vagrant-setup/blob/master/Vagrantfile" target="_blank">GitHub</a>)

    # vi: set ft=ruby :
    # -*- mode: ruby -*-
    
    Vagrant.configure(2) do |config|
        config.vm.box = "ubuntu/trusty64"
        config.vm.hostname = "jekyll"
        config.vm.network "forwarded_port", host: 4000, guest: 4000
        config.vm.provision "shell", path: "bootstrap.sh", privileged: false
    
        config.ssh.forward_agent = true
    end
    

The Vagrantfile tells Vagrant exactly what we want in our virtual machine. It is saved in source control so that anyone can clone your repository and bring up the exact same environment.

    # vi: set ft=ruby :
    # -*- mode: ruby -*-
    

The first two lines tell text editors such as Vim and Emacs to use Ruby syntax highlighting on the file.

    Vagrant.configure(2) do |config|
        config.vm.box = "ubuntu/trusty64"
        config.vm.hostname = "jekyll"
    

This starts the Vagrant configuration loop. We choose Ubuntu 14.04 LTS as our based image (distro to use) and give the VM a hostname of &#8216;jekyll&#8217;. You could name this anything really.

        config.vm.network "forwarded_port", host: 4000, guest: 4000
    

This tells Vagrant to forward traffic from port 4000 on the host to port 4000 in the VM. Since Jekyll will be listening to port 4000, this allows you to use your browser on your host machine to view your Jekyll site running in Vagrant.

        config.vm.provision "shell", path: "bootstrap.sh", privileged: false
    

This tells Vagrant that once the VM is created and booted, run the file **bootstrap.sh**, available in our repo, in the VM. This installs any prerequisites for Jekyll and automatically gets Jekyll up and running for us. We&#8217;ll cover the file below.

        config.ssh.forward_agent = true
    end
    

Forward agent simply allows us to log into a server from within the VM using our host&#8217;s SSH keys. This is useful for deployment or working directly with GitHub from within the VM.

### bootstrap.sh (<a href="https://github.com/felicianotech/jekyll-vagrant-setup/blob/master/bootstrap.sh" target="_blank">GitHub</a>)

    #!/usr/bin/env bash
    
    sudo apt-get update
    sudo apt-get -y upgrade
    sudo apt-get -y install libgmp-dev git
    
    # Install RVM so we can run a recent version of Jekyll.
    gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    \curl -sSL https://get.rvm.io | bash -s stable --ruby=2.3.0
    source ~/.rvm/scripts/rvm
    
    # Install Jekyll an any other gems. You can also swap this out for bundler.
    gem install jekyll
    
    # Create a new Jekyll site if one does not already exists
    cd /vagrant
    if [ ! -f jekyll/_config.yml ]; then
        jekyll new jekyll
    fi
    
    # Run Jekyll, accessible on the host machine
    cd jekyll
    jekyll serve --detach --host=0.0.0.0
    

**bootstrap.sh** initializes our VM with everything we need for a Jekyll website.

    #!/usr/bin/env bash
    
    sudo apt-get update
    sudo apt-get -y upgrade
    sudo apt-get -y install libgmp-dev git
    

We start with some basic system maintenance, a Ruby library requirement, and of course Git.

    # Install RVM so we can run a recent version of Jekyll.
    gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    \curl -sSL https://get.rvm.io | bash -s stable --ruby=2.3.0
    source ~/.rvm/scripts/rvm
    

Pretty self-explanatory. As RVM instructs on their <a href="https://rvm.io/rvm/install" target="_blank">website</a>, we install RVM with Ruby 2.3.0 (latest stable version as of this writing).

    # Install Jekyll an any other gems. You can also swap this out for bundler.
    gem install jekyll
    

In this example, the only gem we are using is Jekyll. It gets installed here. You can also add any additional gems you need in this section. You could also do **gem install bundler** here and have the rest of your gems in a **Gemfile**. I favor the least dependencies route.

    # Create a new Jekyll site if one does not already exists
    cd /vagrant
    if [ ! -f jekyll/_config.yml ]; then
        jekyll new jekyll
    fi
    

We do a quick check here to see if the Jekyll site is already in the repo, a.k.a. you made one already. If not, we initialize a new one in a **jekyll** directory.

    # Run Jekyll, accessible on the host machine
    cd jekyll
    jekyll serve --detach --host=0.0.0.0
    

Last but not least, Vagrant will automatically run Jekyll for you to get you started quickly. **&#8211;detach** runs Jekyll in the background. **&#8211;host=0.0.0.0** has Jekyll listen on all IPs. This is useful so that you can browse the site from your host browser, or even another device from the same network. I use this to test my Jekyll sites on mobile devices easily.

### Finishing Up

Now that we know what everything does, we can follow through. If you have a Jekyll site already, clone it into a directly called **jekyll**. For example, if you were my friend Lev who runs <a href="https://levlaz.org/" target="_blank">Levlaz.org</a>, he would clone his repo like this:

    git clone https://github.com/levlaz/levlaz.git jekyll
    

Whether or not you already have a site, the last step is the same. You start Vagrant for the repository and all the magic happens.

    vagrant up
    

## Summary

Instead of having to deal with the frustration of getting Ruby and Jekyll working on your local machine with is various dependencies and OS specific issues, you can use Vagrant. If your Jekyll-based website is on GitHub, this allows anyone to easily clone the repo, **vagrant up**, and start contributing.

### Tips

If you shutdown the Vagrant VM with **vagrant halt** or turn off your computer, you need to SSH into the machine the start Jekyll back up. You can do that be running the following commands:

    # on your host
    vagrant up
    vagrant ssh
    
    # once inside the VM
    cd /vagrant/jekyll
    jekyll serve --detach --host=0.0.0.0
    

You may need to shut down Jekyll without shutting down the entire VM. Say if you edited the **_config.yml** file. From within the VM you can find the process ID and then use *\*kill\*.

    ps aux | grep jekyll
    kill -9 **JEKYLL_PID**
    

## More Information & Discussion

<a href="https://github.com/felicianotech/jekyll-vagrant-setup" target="_blank">GitHub Project</a> &#8211; The example repository used for this post.
  
<a href="https://www.vagrantup.com/" target="_blank">Vagrant</a> &#8211; The Vagrant website.
  
<a href="https://www.virtualbox.org/" target="_blank">VirtualBox</a> &#8211; The VirtualBox website.
  
<a href="https://rvm.io/" target="_blank">RVM</a> &#8211; The RVM website. I&#8217;m not a fan of Ruby but if I had to use it, I&#8217;d use it with RVM.

Do you have any questions or comments on this post? Maybe improvements? Let me know in the GitHub project or as a comment here.