---
title: "Install Gnome Shell Extensions via Your Browser"
author: FelicianoTech
date: "2024-12-12T20:30:00-05:00"
tags:
  - "gnome-shell-extensions"
  - "gnome-shell"
---

I went through this process today and, well it was less clear than I would like.
Here's how to get browser installations of Gnome Shell extensions working.
This post specifically covers using Firefox or Google Chrome as the browser and Ubuntu as ~~the best operating system ever~~ the operating system.

<!--more-->


## Get the browser extension

The first step to making this all work is getting the appropriate browser extension.
It's one of two tools to interface the Gnome Shell Extensions website with your desktop.
The browser extension to install if you are using Firefox can be found [here](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/), while the one for Google Chrome can be found [here](https://chromewebstore.google.com/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep).


## Get the Apt package

The second piece to the puzzle is to install a package from the repositories.
This package connects the browser extension to Gnome Shell.
If you follow the description in either browser extension, the package to install is `chrome-gnome-shell` however that is only correct for older versions of Ubuntu.
Newer ones use `gnome-browser-connector`.
Here's what to type:

```bash  
# For Ubuntu 22.10 Kinetic and earlier  
sudo apt install chrome-gnome-shell

# For Ubuntu 23.04 Lunar and later  
sudo apt install gnome-browser-connector  
```


## Get some fun Gnome Shell Extensions

Alright! Now, we are ready to browse and install Gnome Shell extensions via our browser.
You can visit the homepage at [https://extensions.gnome.org/](https://extensions.gnome.org/) to find some extensions.

There's a page on that website called [Installed Extensions](https://extensions.gnome.org/local/) where you can view the extensions you already have on your system.
If this is your first time installing extensions, don't be alarmed to see that you already have some there.
Canonical pre-installs a few as part of their effort to differentiate Ubuntu from stock Gnome Shell.

Enjoy.
