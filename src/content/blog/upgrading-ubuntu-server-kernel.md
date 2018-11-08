---
title: "Upgrading the Ubuntu Server Kernel"
author: FelicianoTech
date: 2018-11-08T10:10:00-05:00
categories:
  - "How To"
tags:
  - "ubuntu"
  - "ubuntu-server"
---

If you run an Ubuntu-based server (as most of the world does) you should know that keeping the server up-to-date is important for security and stability.
Occasionally certain kernel updates will come through that won't get installed.
Instead, you'll see this message:

> The following packages have been kept back:
>   linux-generic linux-headers-generic linux-image-generic

Here's how to install these updates safely.

<!--more-->

Most people update their server with the following commands:

```
sudo apt-get update && sudo apt-get upgrade
```

This works great until you get the "The following packages have been kept back" message.
Here's how to install these updates safely:

```
sudo apt-get --with-new-pkgs upgrade
```

Check the output of the command to make sure it's installing what you expect, which should be kernel packages.


## More Useful Information

### Automated Updates

If you're updating servers manually, don't, there're better ways.
You can use tools such as [SaltStack][salt] or [Ansible][ansible] to manage updates for multiple servers.
To keep it simple and low tech, you tell Ubuntu to manage its own updates.
You can learn how to do that [here][unattended-upgrades].

### Hardware Enablement Kernels

From the Ubuntu Wiki:

> The Ubuntu LTS enablement (also called HWE or Hardware Enablement) stacks provide newer kernel support for existing Ubuntu LTS releases. These enablement stacks can be installed manually but are also available when installing with Ubuntu LTS point release media.

This allows you to run newer kernels in LTS release while still being supported by Ubuntu/Canonical.
Here's what the kernel releases look like for Ubuntu 18.04:

![Chart showing when specific Ubuntu 18.04 kernels will be released](/assets/img/article/ubuntu-18.04-kernel-support-schedule.svg)

You can check if you're already enrolled into the HWE program by running: 

```
hwe-support-status --verbose
```

and if you choose to, enroll by running:

```
sudo apt-get install --install-recommends linux-generic-hwe-18.04
```

Swap out `18.04` for `16.04` if you're running the older LTS.
Personally, I wouldn't recommend the HWE program if you're running a server in "the cloud" as the hardware isn't really changing.
There will likely be no benefit.

### Rebooting

Some upgrades, such as many kernel updates, will require a server reboot.
You'll see a message when logging in but you can confirm if a reboot is needed by the existence of the file `/var/run/reboot-required`.

If your hosting provider supports it, you can reboot by running:

```
sudo reboot
```

Otherwise use your providers manager/dashboard to reboot.

You can also get an email whenever your server requires a reboot.
Learn how to do this [here][blog-reboot-email].



[unattended-upgrades]: https://help.ubuntu.com/community/AutomaticSecurityUpdates#Using_the_.22unattended-upgrades.22_package
[salt]: https://www.saltstack.com/
[ansible]: https://www.ansible.com/
[blog-reboot-email]: /blog/get-emailed-when-ubuntu-server-needs-reboot/
