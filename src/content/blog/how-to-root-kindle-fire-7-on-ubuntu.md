---
title: "How to Root the 9th Gen Kindle Fire 7 from Ubuntu"
author: FelicianoTech
date: 2020-01-26T23:00:00-05:00
categories:
  - how-to
tags:
  - ubuntu
  - ubuntu-1910
  - kindle-fire
---

I'm working on a useful little project at home for which I hope to have a blog post on in the near future.
For this project, I needed the cheapest controllable/programmable screen that I could find.
This past week Amazon discounted the Kindle Fire 7 to just $35 making it the perfect tool for my project.
To get the tablet to do exactly what I wanted, I did need more control than what Amazon allows out of the box.

Here's how you can root the 9th generation Kindle Fire 7" tablet from Ubuntu.

<!--more-->

## Prerequisites

1. Kindle Fire 7 9th generation codename Mustang (older won't work)
1. The build version needs to be 0002517050244. (see note below)
1. Battery life should be 70% or higher. Don't risk it running out of juice on you.
1. mtk-su - download [here](https://forum.xda-developers.com/attachment.php?attachmentid=4912515)
1. The stock Kindle Fire OS - download [here](https://fireos-tablet-src.s3.amazonaws.com/Tr37jJbMSR96z5WBmVbW6uq32p/update-kindle-NS6312_user_1827_0002517050244.bin)
1. Magisk - download [here](https://github.com/topjohnwu/Magisk/releases/download/v19.3/Magisk-v19.3.zip)
1. amonent - download [here](https://forum.xda-developers.com/attachment.php?attachmentid=4785431&d=1561925516)
1. finalize.zip - download [here](https://forum.xda-developers.com/attachment.php?attachmentid=4785429&d=1561925495)

**Notes:** If you meet these requirements, continue on.
Keep in mind that this process will erase your Kindle Fire.
If you need the data, back it up.
If your Kindle Fire has a newer version of FireOS meaning that your build version doesn't match, it's okay.
You can downgrade the OS first, and then follow these instructions.
Downgrading instructions can be found [here](https://forum.xda-developers.com/showpost.php?p=81064159&postcount=216).


## Rooting the Kindle Fire 7

1. Install some Apt packages that we're going to need. This works for Ubuntu 18.04 and Ubuntu 19.10.
  ```sudo apt update && sudo apt install python3-serial adb fastboot```
1. Temporarily disable ModemManager in Ubuntu.  
  ```sudo systemctl stop ModemManager.service```
1. Enable Developer Mode and USB Debugging on the Kindle Fire.
1. Unzip mtk-su.
1. run adb server as root
1. Tranbsfer to Kindle Fire. adb push arm/mtk-su /data/local/tmp
1. In a second terminal tab or window run adb shell.
1. Then run this:
```
cd /data/local/tmp
./mtk-su
getenforce # Just to confirm it says Permissive
echo 0 > /sys/block/mmcblk0boot0/force_ro
dd if=/dev/zero of=/dev/block/mmcblk0boot0 bs=512 count=8
```
1. back in the first terminal, unzip amonet-mustang.zip.
1. navigate into it and run sudo ./bootrom-step.sh
1. In the second terminal, type reboot
1. press enter
1. Run fastboot devices to make sure the device shows up.
1. sudo ./fastboot-step.sh
1. press power button on tablet twice to turn on screen of recovery
1. you can dip to install Lineage OS here
1. adb push update-kindle-NS6312_user_1827_0002517050244.bin /sdcard/fw.zip
1. adb push Magisk-v19.3.zip /sdcard
1. adb push finalize.zip /sdcard
1. In the recovery, go to "Install", navigate to "/sdcard" and flash fw.zip
1. Go to "Wipe" and do the default wipe, then reboot
1. At the Fire setup screen, select your language. On the next screen, Wifi setup, select any password-protected network, then instead of entering the password press "cancel". Now, back at the wifi setup screen, press "Skip setup" and "Skip" in the dialog pop-up again
1. Wait for the update to finish (wait until the updating fire notification disappears)
1. Hold down the power button, press Restart and hold volume down to boot into recovery.
1. In the recovery, go to "Install", navigate to "/sdcard" and flash Magisk-v19.3.zip
1. Press back, select finalize.zip and flash it
1. Once finalize.zip is flashed, press "Reboot System"

VERY IMPORTANT STUFF:
Only ever flash boot images from TWRP. Since nothing but TWRP is aware of the exploit, if you try to flash a boot image from Android, it won't have the exploit integrated into it! This includes Magisk as well, so do NOT install or uninstall it from Magisk Manager (However, installing modules should be fine; although it depends on the specific module).



## Attribution

This guide is an Ubuntu specific, cleaned up version of one written by "xyz" [on XDA](https://forum.xda-developers.com/amazon-fire/orig-development/fire-7-2019-mustang-unbrick-downgrade-t3944365).
Go check that guide out for the original source as well as the hardware version of this process.
Thanks to "xyz".
