---
title: "Daily Driving Ubuntu Asahi for Over a Month"
author: FelicianoTech
date: 2024-03-21T14:30:00-04:00
feature: "ubuntu-asahi-30-days-cover.jpg"
featureHide: true
desxcription: "In February, I decided to try Ubuntu Asahi on my M1 MacBook Pro. Around the same time, I ended up redoing my office, which meant this laptop unintentionally became my daily driver for over a month. Here's my experience."
---

I recently got laid off and got 100% custody of my MacBook Pro.
I'm not a fan of macOS, but I run it because Apple's systems are locked down.
Not anymore.
Asahi Linux has come a long way, spawning Fedora Asahi and, more recently, [Ubuntu Asahi](https://ubuntuasahi.org/).
Ubuntu has been my primary operating system for ~14 years, so the chance of running it natively on my MacBook Pro was appetizing.

With full admin access to the laptop, I installed Ubuntu Asahi.
The installer version was v0.7.1 (the current version at the time of this writing).
It was refreshingly simple.
Follow the [instructions on the website](https://ubuntuasahi.org/), and you're good to go.


## Hardware Support

Overall, pretty good. Most of what bothered me had workarounds.

As it is on macOS, the function keys operate as media keys by default.
Pressing the 'fn' button with a function key is required to get the desired task.
While Ubuntu doesn't have a UI method to change this behavior as macOS does, the legendary Arch Linux wiki came to the rescue with a [terminal solution](https://wiki.archlinux.org/title/Apple_Keyboard#Function_keys_do_not_work).
To sum the page up, to make a temporary switch, you'd run:

```bash
echo 2 >> /sys/module/hid_apple/parameters/fnmode
```

To make the switch permanent, you'd place the text:

```text
options hid_apple fnmode=2
``` 

in the file:

```bash
/etc/modprobe.d/hid_apple.conf
```

The permanent solution has yet to work for me.
I've needed to do the temporary one after every reboot.

I've also had both a sound and mic issue.
For sound, it works fine 80% of the time.
In the other 20%, sound "messes up," where I can't alter the volume, the audio sounds loud and shrill, and it wants to blow out the speakers.
I'm not sure of the cause, but it's annoying.
Fortunately, I use earphones with a laptop, so it doesn't affect me often.

For the mic, I've encountered an issue where it doesn't work when using Google Meet.
If I try it in Firefox, the mic is detected but doesn't work.
The mic simply can't be found when I use Google Meet in Chromium.
Weird.

My last hardware note has to do with battery life.
I read a note about Asahi Linux somewhere mentioning that it gets the same battery life out of Apple Silicon as macOS does.
I found this to be true, sometimes.
I frequently observe that battery life depletes at the pace I'm used to with macOS.
The problem for me is around closing the laptop lid.
I don't know what happens behind the scenes, but sometimes, after a few hours, the battery would have only depleted 2%, and sometimes 30%.


## Software Support

The software is the most significant issue I've had with Ubuntu Asahi thus far, but I have good news here.
The problems aren't with packages that ship with Ubuntu but with one exception.
Gnome Shell crashes on me once in a while.
Similar to the battery issue, it only happens, if it happens, when I have locked the screen (via the keyboard or by closing the lid).
When this happens, I have to reopen any apps that I previously had.
This Gnome Shell issue is why I would not recommend Ubuntu Asahi as a daily driver.
If you're working on important files and Gnome Shell crashes, that will lead to frustration.

My issues have been with the availability of third-party software on arm64.
You might assume some of the less Linux-centric software might have this issue, but even veterans such as Firefox and PostgreSQL have been an issue.

Let's start with Google Chrome.
Like many modern tech people, I spend an abnormally large portion of my computer time in a browser.
My browser of choice is Google Chrome.
I won't get into browser politics today, but I like Chrome and use a lot of its features.
A few of which aren't in Chromium.
Google Chrome is not compiled for Linux/arm64.
Do they have builds on Arm for macOS? Yes. Windows? Yes. But not Linux.
This uneven platform support is a major pain for me.

### Snaps

I begrudgingly decided to use Firefox on Ubuntu Asahi, but I wanted to make a quick change.
Canonical decided to force the use of the Firefox snap over the .deb in Ubuntu a few releases ago.
[I'm no fan of snaps](/blog/breaking-up-with-snap/), so I tried to switch over to using the official Mozilla deb repository for Firefox but ran into an issue.
The repository doesn't currently support arm64.
I had to use the PPA instead.

The few snaps that I currently use are all graphical applications, and I have tried to install them.
Mattermost worked, but Slack, Todoist, Simple Note, Spotify, and Telegram did not.
Again, the snaps don't support arm64.

Fortunately, I found two solutions for Telegram.
While the snap doesn't support arm64, it turns out [the Flatpak does](https://flathub.org/apps/org.telegram.desktop). :wink:
A little while later, while listening to the [Linux Matters](https://linuxmatters.sh/) podcast, I found out that one of the co-hosts, Alan, made his own [Telegram snap](https://snapcraft.io/telegram-asahi) specifically for use with Ubuntu Asahi.
While this is awesome, both options are community-made, so use them at your own risk.

Lastly, I'll touch on PostgreSQL.
Since Ubuntu Asahi's newest supported Ubuntu release is Ubuntu 23.10, the latest version of Postgres it includes in the repos is v15.
I needed v16.
Postgres provides repos, but there's a fun twist.
They provide arm64 builds, only for Ubuntu LTS releases, which I'm not using.
This is another compatibility issue for me with Ubuntu Asahi.


## Conclusion

There are only two major issues for me with Ubuntu Asahi right now.
One, Gnome Shell occasionally crashing.
Two, the lack of Google Chrome.

One could easily assume there are many issues running Ubuntu Asahi based on my review.
I only listed the problems that I had because listing everything that worked would take a book's worth of text.
Ubuntu Asahi builds on the great work the Asahi Linux team, Canonical, and the Ubuntu community have been doing, giving them a terrific start.

If you asked me if I recommend daily driving Ubuntu Asahi today, I would say yes if you had more than one machine to use.
If you only have a single computer to use, I would hold off for now.
I don't think the project is far off from being stable, though.
Depending on their momentum, I can give them a solid yes before 2024 is over.
I'm excited to see where the project goes.
