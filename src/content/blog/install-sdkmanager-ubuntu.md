---
title: "Install Android sdkmanager on Ubuntu"
author: FelicianoTech
date: 2021-12-21T08:00:00-04:00
categories:
  - "How-To"
tags:
  - "sdkmanager"
  - "android"
  - "ubuntu"
---

I tried installing the Android "sdkmanager" on Ubuntu and I ran into several problems.
A lot of the instructions I found online tell you to use Android Studio instead, which I don't want to do, or provided instructions that simply didn't work for me.
Here's how I installed the Android Command Line tool, `sdkmanager` on Ubuntu 20.04.

<!--more-->

First some quick notes:

- Many instructions on the Internet and Stack Overflow right now are for older versions of `sdkmanager`. There's a modern change that affects the directory you install it in.
- The Java SDK needs to be installed. If you don't have it, I cover that below.
- Many of the other Android command line tools, SDKs, emulators, etc can be installed with `sdkmanager` once it itself is installed.

## Instructions

1. Download and unzip.
You can replace the version number in the URL with the current version found [here](https://developer.android.com/studio#command-tools).
    ```bash
    curl -sSL "https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip" -o /tmp/sdkmanager.zip
    mkdir -p ~/android_sdk/cmdline-tools
    unzip /tmp/sdkmanager.zip -d ~/android_sdk/cmdline-tools
	mv ~/android_sdk/cmdline-tools/{cmdline-tools,latest}
    ```
1. Android development requires the Java Development Kit a.k.a. JDK. If you don't already have this installed you can install the default JDK in Ubuntu by running:
    ```bash
    sudo apt update && sudo apt install default-jdk
    ```
1. Setup your shell. Here's examples for Bash and Fish.
If you use another shell you may need to convert to what your shell understands.
For Bash, add to the following to `~/.bashrc` or similar:
    ```bash
    export ANDROID_HOME=$HOME/android_sdk
    export PATH=$PATH;$ANDROID_HOME/cmdline-tools/latest/bin
    export PATH=$PATH;$ANDROID_HOME/platform-tools
	```
For Fish, add the following to `~/.config/fish/config.fish`:
    ```fish
    set -x ANDROID_HOME $HOME/android_sdk
    set -x PATH $PATH $ANDROID_HOME/cmdline-tools/latest/bin $ANDROID_HOME/platform-tools
	```
1. Reload shell (or log out and back in) and then run the following to ensure it works:
    ```bash
	sdkmanager --list
	```

Step 1 can be repeated (with a slight change in commands) in order to update the version of `sdkmanager` you have.
