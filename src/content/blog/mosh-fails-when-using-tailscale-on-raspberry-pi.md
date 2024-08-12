---
title: "Mosh Fails When Using Tailscale on Raspberry Pi"
description: "My second post in a row dealing with weird issues."
author: FelicianoTech
date: "2024-08-11T12:30:00-04:00"
category: Quirks
tags:
  - tailscale
  - raspberry-pi
  - mosh
---

I recently ran into another edge case with some of the software I'm using.
I set up a couple of Raspberry Pis with Raspberry Pi OS (lite) and began to install some of my go-to tools.
One such tool is [Mosh](https://mosh.org/).
If you use `ssh` but don't use Mosh, I strongly suggest checking out the link.
With the basics installed, I then installed [Tailscale](https://tailscale.com/).
These two tools completely elevate my experience connecting to my devices.
On a Raspberry Pi though, I ran into a weird… bug?

If I `ssh` into the Raspberry Pi via a normal IP or local hostname, it works fine.
If I `ssh` using the Tailscale hostname, it also works fine.
When I use `mosh` over the traditional network it works however when I use `mosh` with the Tailscale hostname or IP address, I run into a locale error.
"The locale requested by LANG=en\_US.UTF-8 isn't available here."
The full error text can be found at the end of the blog post.

The error struck me as odd.
When installing the OS, I specifically chose "US" for the Wi-Fi locale and "America/New\_York" for the timezone.
Apparently, that wasn't enough.
Digging around I found the fix in the `raspi-config` utility.

In the Raspberry Pi Software Configuration Tool (raspi-config) you'll want to enter item 5, "Localisation Options", then enter item L1, "Locale".
In the list of locales, find "en\_US.UTF-8 UTF-8" and check it.
Click "\<okay\>", let things generate, and you're good to go.
When I did this I noticed that "en\_GB.UTF-8" was checked.
Considering where the Raspberry Pi Foundation is located that makes sense, but doesn't apply to me, so I unchecked that.

Mosh should now work in all scenarios, including when using Tailscale.

Here's the full error message I got for the curious (and the Google Search Engine):

```bash
The locale requested by LANG=en_US.UTF-8 isn't available here.
Running `locale-gen en_US.UTF-8' may be necessary.

The locale requested by LANG=en_US.UTF-8 isn't available here.
Running `locale-gen en_US.UTF-8' may be necessary.

mosh-server needs a UTF-8 native locale to run.

Unfortunately, the local environment (LANG=en_US.UTF-8) specifies
the character set "US-ASCII",

The client-supplied environment (LANG=en_US.UTF-8) specifies
the character set "US-ASCII".

locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_MESSAGES to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
LANG=en_US.UTF-8
LANGUAGE=
LC_CTYPE="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_PAPER="en_US.UTF-8"
LC_NAME="en_US.UTF-8"
LC_ADDRESS="en_US.UTF-8"
LC_TELEPHONE="en_US.UTF-8"
LC_MEASUREMENT="en_US.UTF-8"
LC_IDENTIFICATION="en_US.UTF-8"
LC_ALL=
```
