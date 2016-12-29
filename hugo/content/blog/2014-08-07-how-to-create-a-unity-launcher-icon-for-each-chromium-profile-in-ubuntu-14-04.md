---
title: How To Create a Unity Launcher Icon for Each Chromium Profile in Ubuntu 14.04
author: FelicianoTech
date: 2014-08-08T00:38:00+00:00
url: /blog/how-to-create-a-unity-launcher-icon-for-each-chromium-profile-in-ubuntu-14-04/
dsq_thread_id:
  - 4015431312
categories:
  - Ubuntu
tags:
  - chromium
  - google-chrome
  - ubuntu
  - ubuntu-14.04
  - unity-launcher

---
I&#8217;ve written a <a title="How To Create a Unity Launcher Icon for Each Chrome/Chromium Profile in Ubuntu" href="http://RicardoFeliciano.me/how-to-create-a-unity-launcher-icon-for-each-chromechromium-profile-in-ubuntu/" target="_blank">similar article</a> for older versions of Ubuntu. Unfortunately newer versions of Chromium dropped support for the &#8211;class flag which means my method no longer works. After careful digging, it looks like Chromium now appends the user profile directory as a part of its class name. Below are the new steps required to get multiple launchers to work.

<!--more-->

## Step by Step

&nbsp;

  1. Make a copy of the Chromium launcher (.desktop file) and place it into your user&#8217;s custom launcher directory. Be sure to give the file a unique name. Since this is for my business account, I called it chromium-business.desktop.`cp /usr/share/applications/chromium-browser.desktop ~/.local/share/applications/chromium-business.desktop`
  2. Open the new .desktop file in a text editor. Use can use any editor you prefer. I&#8217;ll be using Gedit here.`gedit ~/.local/share/applications/chromium-business.desktop`
  3. Where it says **Name=Chromium Web Browser**, I replaced &#8220;Chromium Web Browser&#8221; with Chromium Business. _Note: Many of the lines in this file will have a language code in square brackets after the variable name. [en_US] is one example. I removed all the language specific lines from the entire file._
  4. Where it says **Exec=chromium-browser %U** is where we&#8217;ll be adding our tweaked command. We&#8217;ll be adding the &#8211;user-data-dir flag. The value for this flag is a new Chromium profile directory right along the pre-existing one.`Exec=chromium-browser --user-data-dir=/home/ironpatriotny/.config/chromium-business %U`
  5. Where it says **StartupWMClass=Chromium-browser** is where we&#8217;re going to tell Unity which launcher group we want to use. We&#8217;re going to add &#8221; (user-data-dir)&#8221; to the end of the line. There&#8217;s a space before the parentheses and within the parentheses should be the user-data-dir that you choose in step 4. Here&#8217;s mine:`StartupWMClass=Chromium-browser (/home/ironpatriotny/.config/chromium-business)`
  6. (optional) Where it says **Icon=chromium-browser**, change that to a unique name. I used, of course, &#8220;chromium-business&#8221;. Place an icon with the name you choose here into the **~/.local/share/icons** directory. My was in &#8220;~/.local/share/icons/chromium-business.png&#8221;. I also customized the &#8220;Exec&#8221; lines of the &#8216;New Window&#8217; section.
  7. Restart Unity. I usually just reboot though logging out and back in should work too. You&#8217;ll find your new launcher in Dash by searching for whatever name you gave in step 3.

For reference, here&#8217;s what my chromium-business.desktop file looks like:
  
`[Desktop Entry]<br />
Version=1.0<br />
Name=Chromium Business<br />
GenericName=Web Browser<br />
Comment=Access the Internet<br />
Exec=chromium-browser --user-data-dir=/home/ironpatriotny/.config/chromium-business %U<br />
Terminal=false<br />
X-MultipleArgs=false<br />
Type=Application<br />
Icon=chromium-business<br />
Categories=Network;WebBrowser;<br />
MimeType=text/html;text/xml;application/xhtml_xml;x-scheme-handler/http;x-scheme-handler/https;<br />
StartupWMClass=Chromium-browser (/home/ironpatriotny/.config/chromium-business)<br />
StartupNotify=true<br />
Actions=NewWindow;Incognito;TempProfile;<br />
X-AppInstall-Package=chromium-browser</p>
<p>[Desktop Action NewWindow]<br />
Name=Open a New Window<br />
Exec=chromium-browser --user-data-dir=/home/ironpatriotny/.config/chromium-business</p>
<p>[Desktop Action Incognito]<br />
Name=Open a New Window in incognito mode<br />
Exec=chromium-browser --incognito</p>
<p>[Desktop Action TempProfile]<br />
Name=Open a New Window with a temporary profile<br />
Exec=chromium-browser --temp-profile`

### Discussion & Support

I do not own nor work for any of the software/companies mentioned in this article however I am always happy to help. If you have any questions or suggestions please comment 🙂 Do you have a better way to solve this problem? I&#8217;d love to hear it.