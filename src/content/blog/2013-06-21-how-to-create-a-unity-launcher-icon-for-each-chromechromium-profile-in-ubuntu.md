---
title: How To Create a Unity Launcher Icon for Each Chrome/Chromium Profile in Ubuntu
author: FelicianoTech
date: 2013-06-21T20:00:32+00:00
url: /blog/how-to-create-a-unity-launcher-icon-for-each-chromechromium-profile-in-ubuntu/
dsq_thread_id:
  - 4015411997
categories:
  - Ubuntu
tags:
  - chromium
  - google-chrome
  - how-to
  - ubuntu
  - unity-launcher

---
<span style="color: #ff0000;">**<a title="How To Create a Unity Launcher Icon for Each Chromium Profile in Ubuntu 14.04" href="http://RicardoFeliciano.me/how-to-create-a-unity-launcher-icon-for-each-chromium-profile-in-ubuntu-14-04/"><span style="color: #ff0000;">Update: Rewritten for Ubuntu 14.04</span></a>***</span>

Like me, I&#8217;m sure there&#8217;s some of you who have more than one Google account. In my case, I have a personal Google/Gmail account I use, then a Google Apps account for business. Using Chromium profiles, I&#8217;m able to keep my bookmarks, tabs, saved fields, etc separate. Cool. However, when both profiles are open in different windows, Unity puts them into the same launcher. Not cool. Here&#8217;s how to fix that.<!--more--><figure id="attachment_230" style="width: 341px" class="wp-caption aligncenter">

<figure><img class="size-full wp-image-230" src="/assets/img/article/two-windows-of-chromium.png" alt="Two Windows of Chromium" /><figcaption class="wp-caption-text">Unity grouping both instances of Chromium.</figcaption></figure> 

Chrome/Chromium has a command line flag that suppose to fix this issue for us called **&#8211;user-data-dir**. This is supposed to tell the browser which profile to load from. This does load the correct profile, but doesn&#8217;t fix the issue of Unity grouping together both browser instances.

The solution I found is to add a new launcher and change **StartupWMClass** in the .desktop file. This tells Unity what application/group is what. Then, as a command line flag for Chromium, add **&#8211;class=<NewClassName>**. I even gave the Chromium icon a nice black makeover. Placing all the files in the proper areas and restarting Unity (by logging in and out for example) will show the separate Chromium icon.

Keep in mind that by using this method, you don&#8217;t use the built-in Chromium profiles feature anymore. It just doesn&#8217;t work for our purposes. Instead, log into a Google account using the normal Chromium launcher (blue in the picture at the beginning of the article). Then, using your new Chromium launcher (mine is the black icon), log into your second account. See the step-by-step guide below for where each file is located and what to do with it.

## Step by Step

These steps are for Chromium, though Chrome would be similar.

&nbsp;

  1. Make a copy of the Chromium launcher (.desktop file) and place it into your local applications folder. Be sure to give the new file a unique name. Since this was for my business account, I called it chromium-business.desktop.`cp /usr/share/applications/chromium-browser.desktop ~/.local/share/applications/chromium-business.desktop`
  2. Open the new .desktop file in an editor. Use can use any text editor you prefer. I&#8217;ll be using Gedit here.`gedit ~/.local/share/applications/chromium-business.desktop`
  3. Where it says **Name=Chromium Web Browser**, I replaced &#8220;Chromium Web Browser&#8221; with &#8220;Chromium (business)&#8221;._Note: If you are using a language other than English, you&#8217;ll need to substitute my directions with the language code for your language._&nbsp;
  4. Where it says **Exec=/usr/bin/chromium-browser %U** (mine was on line 170) is where we&#8217;ll add our magic. We&#8217;ll be adding the **&#8211;user-data-dir** and **&#8211;class** flags. For the user data directory and class, once again I&#8217;ll be using &#8220;chromium-business&#8221;. You can use whatever you please. Just keep is consistent. My final line is `Exec=/usr/bin/chromium-browser --user-data-dir=/home/ironpatriotny/.config/chromium-business --class=chromium-business %U`
  5. Where it says **StartupWMClass=Chromium-browser** is where we&#8217;ll tell Unity which group this belongs to. Change &#8220;Chromium-browser&#8221; to whatever you added for the **&#8211;class** flag in step 4. Here&#8217;s my line: `StartupWMClass=chromium-business`
  6. (optional) Where it says **Icon=chromium-browser**, change that to a unique name. I used, yup, &#8220;chromium-business&#8221;. Now you can place your own custom icon in **~/.icons**. My icon was named chromium-business.png.
  7. Restart Unity. I usually just reboot or log in and out. You&#8217;ll find your new launcher in the Dash for searching for whatever name you gave it in step 3.

### Discussion & Support

I don’t own nor work for any of the software/companies mentioned in this article, however I am always happy to help. If you have any questions or suggestions please comment 🙂 Do you have a better way to solve this problem? I&#8217;d love to hear it.
