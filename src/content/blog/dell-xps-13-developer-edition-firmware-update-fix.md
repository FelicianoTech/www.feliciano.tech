---
title: "Dell XPS 13 Developer Edition Firmware Update Fix"
author: FelicianoTech
date: 2018-09-11T09:00:00-04:00
categories:
  - "How To"
tags:
  - "ubuntu-18.04"
  - "ubuntu-17.10"
---

I'm running Ubuntu 18.04 on a Dell XPS 13 Developer Edition, model 9350 (though people have had this issue with 9370 as well).
Every couple days Ubuntu Software Center opens up telling me that there is a firmware update.
Specifically it says, "Thunderbolt NVM for XPS 9350".

Clicking the "update" button to the right does nothing.
Clicking the "update all" button at the top fails as well.
Here's how I got my firmware update for my XPS 13 to successfully install.
Hint, it's the command-line to the rescue as usual.

<!--more-->

```bash
sudo apt update && sudo apt upgrade
sudo systemctl restart fwupd
sudo fwupdmgr refresh
sudo fwupdmgr update
```

1. First we make sure `fwupd` is up-to-date as there was an important bug fix earlier in 2018.
1. Then we restart the service.
1. Check for new updates.
1. Install the updates.

This is how I **finally** got the Thunderbolt firmware update to install however it should work for all firmware updates moving forward.
It's much cleaner and faster than using Software Center.
