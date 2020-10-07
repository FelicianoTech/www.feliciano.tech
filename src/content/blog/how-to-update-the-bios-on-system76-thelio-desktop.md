---
title: "How to Update the BIOS on System76's Thelio Desktop"
author: FelicianoTech
date: 2019-06-09T15:20:00-04:00
categories:
  - "How To"
tags:
  - "bios"
  - "thelio"
  - "system76"
  - "ubuntu-1904"
  - "ubuntu"
feature: "system76-thelio-bios.png"
---

**Update:** An engineer from System76 chipped in suggesting that this is not a good way to update the BIOS.
Their method is still unavailable though.
While this may not be the best way to update the BIOS for Thelio computers, this method should still work for GIGABYTE based PCs that don't support Linux the way System76 does.

---

<!--< tweet 1137809054057750528 >-->

I bought a [System76 Thelio][s76-thelio] desktop computer earlier this year (btw, I love it).
The BIOS on its Gigabyte motherboard is two releases old.
All of the instructions I found on how to update the BIOS involved Windows or formatting and imaging a USB flash drive.
It's 2019, there are easier ways.

Here's how I updated the UEFI BIOS on my Thelio's Gigabyte motherboard using only Ubuntu and the Q-Flash.

<!--more-->


***disclaimer 1:*** &nbsp;Many people suggest that when it comes to BIOS updates, if your BIOS is behaving correctly, you're probably better off not updating it to avoid any risk of messing it up.
I like to have all my firmware/software up-to-date.
I followed the exact steps below on my own computer and it worked great.


## How to update Gigabyte BIOS using Ubuntu and EFI partition

### Hardware & Software

Here's what I started with:

- Thelio with GIGABYTE H370N WiFi Motherboard
- BIOS was at version F11 (September 2018)
- Ubuntu 19.04 UEFI installed

### Download the BIOS Update

Download the update via GIGABYTE's official website.
It's important to have the official files for your specific motherboard.
I have the H370n WiFi motherboard so my BIOS updates were [here][dl-bios].

Each Thelio (by size and Intel vs AMD) has a different motherboard so make sure to download the BIOS update for the correct model.
You can find the right files from [GIGABYTE's Support Page][gb-sup].

### Extract Into EFI Partition

The download comes as a `.zip` file.
It needs to be extracted into your boot partition.
Mine is located at `/boot/efi`.
Here's the command I ran:

```bash
sudo unzip ~/Downloads/mb_bios_h370n-wifi_f13_v1.zip -d /boot/efi/EFI/bios-update
```

### Boot Into Q-Flash

Restart the computer.
On the boot up screen, press the <End> key on the keyboard to boot into Q-Flash.

### Flash BIOS

1. The first screen will ask to update BIOS or save BIOS.
Choose the first option.
1. Find and choose the update file.
The file system will be presented from the EFI partition. Find the `bios-update` directory created earlier and in it will be the update file.
1. Now a choice of mode will be presented.
First, on the left side you'll see information on your BIOS current version and what it will be updated to.
If everything looks correct, choose "intact" mode.

The flashing process will begin, and then eventually the computer will reboot.

### Finishing Up

When the computer reboots, you should re-enter the BIOS to configure the settings.
Most BIOS updates will cause some or all of the settings to return to factory defaults.
You'll want to check over everything and make sure it's as you expect.

Lastly, when you can confirm that everything is running well, you'll want to delete the update files from the EFI partition.
That partition isn't that large so you don't want to keep extra files on there that aren't needed.

Hopefully one day GIGABYTE will join the Linux Firmware Vendor program.
This will enable Ubuntu to update the BIOS firmware as a built-in feature as Dell does with the XPS 13 Developer Edition.



[s76-thelio]: https://system76.com/desktops
[dl-bios]: https://www.gigabyte.com/us/Motherboard/H370N-WIFI-rev-10#support-dl
[gb-sup]: https://www.gigabyte.com/us/Support/Motherboard
