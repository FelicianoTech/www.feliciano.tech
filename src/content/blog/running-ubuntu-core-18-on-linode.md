---
title: "Running Ubuntu Core 18 on Linode"
author: FelicianoTech
date: 2019-03-23T22:00:00-05:00
tags:
  - "linode"
  - "ubuntu"
  - "ubuntu-core"
---

Ubuntu Core is a variant of the traditional Ubuntu operating system with [Linux Snaps](https://www.feliciano.tech/blog/what-are-linux-snap-packages-why-use-them/) at its heart.
It ditches Apt and Debian packages for Snaps which enables a transactional and lightweight OS.
Ubuntu Core is intended to run for IoT use cases such as on embedded devices and popular single-board computers such as the Raspberry Pi.
I'm going to show you how to run it on Linode because... well because we can!

<!--more-->

*I wrote an [older version of this post](https://www.feliciano.tech/blog/running-ubuntu-snappy-core-on-linode/) back in 2015.*

Ubuntu Core has amd64 system images that we will use on a brand new Linode.
From my limited testing, everything seems to "just work".

Here's how to get Ubuntu Core 18 running on a [Nanode Linode](https://linodians.com/blog/what-is-a-nanode/):

1. Have a Linode with at least 5GB of allocated disk space available.
1. Create a disk for Ubuntu Core by clicking "Create a new Disk" in the Linode's page.
  1. For `Label` I used "Ubuntu Core 18" however you can use whatever you want.
  1. For `Type` select "unformatted / raw".
  1. For `Size` you'll want to set a minimum of "5120" which is 5GB.
1. Boot the Linode into Rescue Mode.
  1. Click the "Rescue" tab.
  1. Your new disk image should already be set as /dev/sda.
  1. Click "Reboot into Rescue Mode".
1. Connect to your Linode via [Lish](https://www.linode.com/docs/networking/using-the-linode-shell-lish).
1. Download and extract the Ubuntu Core 18 image. Then copy it to the disk we created earlier.
    ```
    curl -O "http://cdimage.ubuntu.com/ubuntu-core/18/stable/current/ubuntu-core-18-amd64.img.xz"
    unxz ubuntu-core-18-amd64.img.xz
    dd if=ubuntu-core-18-amd64.img of=/dev/sda bs=1M
    ```

1. Create a new Linode config profile by clicking "Create a new Configuration Profile" on your Linode's Dashboard page.
  1. For `Label`, use whatever you want.
  1. Change kernel to "Direct Disk".
  1. In Block Device Assignment, for /dev/sda, choose the disk we created earlier.
  1. Set all Filesystem/Boot Helpers to "No".
  1. Save changes.
1. Ubuntu Core doesn't have a default username and password. Instead, when you first boot, a setup script runs which asks you to sign in with your Ubuntu SSO account. Once logged it, it will pull your public SSH key from Launchpad allowing you to log into the server via SSH. If you're fine with this, then move on to the next step. If not, here's how you can manually set your SSH key for the `root` user. While still in Rescue Mode, manually paste your public SSH key for the root user:
    ```
    mount -o barrier=0 /dev/sda3
    mkdir -p /media/sda3/system-data/root/.ssh
    nano /media/sda3/system-data/root/.ssh/authorized_keys
    chmod -R 700 /media/sda3/system-data/root/.ssh
    ```

1. Back in Linode Manager, with the newly created Configuration Profile selected, click the "Reboot" button to boot the Linode into Ubuntu Core.
1. If you're authenticating with Ubuntu SSO, go back to Lish and you'll see the Ubuntu Core Setup screen.

Comment and let me know if you happen to be doing anything interesting with Ubuntu Core either on Linode, a Raspberry Pi, or something else.

P.S. Shout out to `mrjones` for writing up how to workaround the Ubuntu SSO login issue. [source](https://blog.plip.com/2018/10/09/bootstrap-ssh-on-ubuntu-core-with-out-ubuntu-sso-credentials/).
