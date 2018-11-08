---
title: "Get Emailed When an Ubuntu Server Needs a Reboot"
author: FelicianoTech
date: 2018-11-08T10:00:00-05:00
categories:
  - "How To"
tags:
  - "ubuntu"
  - "ubuntu-server"
---

When your Ubuntu server needs to be rebooted, say after a kernel update, the file `/var/run/reboot-required` is created.
You can check for that file to see if a reboot is needed and usually you'll get a message upon logging into the server saying so.
Here's how you can get an email when a reboot is needed saving you the time of manually checking.

<!--more-->

Make sure the `mailutils` package is installed.
You can accept all the default options:

```
sudo apt-get update && sudo apt-get install mailutils
```

Create the following file `/etc/cron.daily/reboot-check`:

```
#!/usr/bin/env bash

if [ -f /var/run/reboot-required ]; then
	echo "A reboot is required following updates to server <hostname>" | mail -s "Reboot Required" <email-address>
fi
```

Replace `<hostname>` with whatever you call your server and `<email-address>` that you want the email to go to.

Make sure the file is has the right ownership and permissions:

```
sudo chown root:root /etc/cron.daily/reboot-check
sudo chmod 755 /etc/cron.daily/reboot-check
```

Once a day the script will check if a reboot is required and email you if it is.
Be sure to check your spam folder.

You can move this file from `cron.daily` to another directly such as `cron.weekly` to change the frequency.
