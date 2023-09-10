---
title: "Adjusting LG UltraFine Brightness on Linux"
author: FelicianoTech
date: 2023-09-08T01:00:00-04:00
categories:
  - "How To"
tags:
  - monitor
  - ultrafine
  - gnome-extension
---

*Not interested in my rambling and want to go straight to the solution? [click here](#solution)*

The year before Covid hit, what feels like a decade ago, I was setting up my little home office in New York.
I sort of knew what I was getting for most of my computer gear but choosing a monitor was difficult.
I'm not a fan of large monitors but **I am** a fan of high definition.
The thought of a small 4k resolution monitor made my eyes light up.
There weren't really any choices on the market except for one, an LG UltraFine 4K 21.5".
The problem was, it was only designed to support macOS.
As a Linux user I'm use to not having support but not even Windows support? Hmm....
I bought it... and immediately ran into issues.

First of all, this is the specific monitor I bought: UltraFine 4K 21.5" model 22MD4KA-B
The first problem was that this monitor is USB-C only.
No HDMI or DisplayPorts.
I figured out a solution but this isn't a blog post for that problem.
The other issue was, there are no buttons anywhere on the monitor!
A common task such as changing the brightness can't be done on Linux.
On macOS you are expected to use the on-screen controls for this but they didn't exist on Linux.
It's all good.

I broke out Vim (my text editor), Google, and went to working creating a command-line solution to this problem.
Suprisingly it worked and now I had a little tool to raise and lower the brightness of my screen, finally!
Covid hit, I got sick and spent less time in the office.
Two years later I moved and my office equiptment spent months and months in boxes.
Unsuprisngly, my little project grew stale.

A few days ago I built my new office in my new home, dusted off my monitors, and rediscovered this problem and the need for my project.
Before I put time into my project to bring it up-to-date I decided to do some research.
There were needs by others out there for a project like this to not just work in the terminal, but through GNOME.
I also saw requests to make it work for multiple of these monitors at the same time.
Fortunately I found a couple of projects that work together to meet all of these goals: a command-line tool and a GNOME extension.
This means I can archive my project and work together on the extension to support more models than I did, and look better doing it. :wink:

## Solution

The brightness of LG UltraFine monitors can be adjusted natively on Debian based Linux distributions by installing a package called `ddcutil`.
This will allow you to control the monitor via the terminal.
More information on the tool can be found at [their website](https://www.ddcutil.com/).
It can be installed by running:

```bash
sudo apt install ddcutil
```

Now the kicker for me was getting the brightness control to work natively with GNOME and I was able to do that with a GNOME extension called [Adjust Display Brightness](https://extensions.gnome.org/extension/4652/adjust-display-brightness/).
You can install the extension via the link I just provided and boom, control your monitor's brightness.
Here's how it looks on my computer:

{{< figure src="brightness-control.jpg" >}}

Enjoy.

P.S. If you did want to see my project, which is now deprecated, you can find it here: https://github.com/felicianotech/go-lguf
