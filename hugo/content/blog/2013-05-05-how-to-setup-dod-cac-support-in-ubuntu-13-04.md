---
title: How to setup DoD CAC support in Ubuntu 13.04
author: FelicianoTech
date: 2013-05-05T21:22:34+00:00
url: /blog/how-to-setup-dod-cac-support-in-ubuntu-13-04/
dsq_thread_id:
  - 4015413772
dsq_needs_sync:
  - 1
categories:
  - Ubuntu
tags:
  - CAC
  - coolkey
  - DoD
  - firefox
  - how-to
  - pcscd
  - ubuntu-13.04

---
Forget what you heard. Setting up Ubuntu to use your Department of Defense (DoD) Common Access Card (CAC) doesn&#8217;t require installing several packages, a library that can only be obtained USING a CAC (like that ever made sense), installing tons of SSL certificates that are already expired, nor installing a Firefox plugin that spits out errors at you. Instead, just one line in Terminal and a quick setting change in Firefox. Let&#8217;s get to it!<!--more-->

## Step 1

First we need to install **pcscd** and **coolkey**. pcscd is the software that helps connect to our card correctly, and coolkey is the library used for the cryptography side of things. In this case coolkey provides the public-key infrastructure (PKI) for us. To install pcscd and coolkey, simple type in Terminal:

`sudo apt-get install coolkey pcscd`

&nbsp;<figure id="attachment_193" style="width: 1000px" class="wp-caption aligncenter">

<figure><img class="size-full wp-image-193" alt="Installing pcscd and coolkey in Terminal" src="/assets/img/article/dod-cac-setup-step1.png?resize=640%2C320&#038;ssl=1" srcset="https://i1.wp.com/feliciano.tech/wp-content/uploads/2013/05/dod-cac-setup-step1.png?w=1000&ssl=1 1000w, https://i1.wp.com/feliciano.tech/wp-content/uploads/2013/05/dod-cac-setup-step1.png?resize=300%2C150&ssl=1 300w" sizes="(max-width: 640px) 100vw, 640px" data-recalc-dims="1" /><figcaption class="wp-caption-text">Installing pcscd and coolkey in Terminal</figcaption></figure> 

## Step 2

Once everything is installed, we just need to tell Firefox to use coolkey for our CAC. Open Firefox, go to the menu at the top and click  Edit -> Preferences. In preferences, click Advanced, then the Encryption sub-tab. Click the Security Devices button.

&nbsp;<figure id="attachment_194" style="width: 669px" class="wp-caption aligncenter">

<figure><img class="size-full wp-image-194" alt="Edit -> Preferences -> Advanced -> Encryption Security Devices" src="https://i0.wp.com/felicianotech.com/wp-content/uploads/2013/05/dod-cac-setup-step2-1.png?resize=640%2C599&#038;ssl=1" srcset="https://i2.wp.com/feliciano.tech/wp-content/uploads/2013/05/dod-cac-setup-step2-1.png?w=669&ssl=1 669w, https://i2.wp.com/feliciano.tech/wp-content/uploads/2013/05/dod-cac-setup-step2-1.png?resize=300%2C281&ssl=1 300w" sizes="(max-width: 640px) 100vw, 640px" data-recalc-dims="1" /><figcaption class="wp-caption-text">Edit -> Preferences -> Advanced -> Encryption Security Devices</figcaption></figure> 

In the window that opens up, called Device Manager, click the Load button on the right. For Module Name, type DoD CAC. Technically this can be anything, but put something descriptive. For Module filename, you have to tell Firefox where coolkey is installed. Click browse, click filesystem on the left. Coolkey is located at **/usr/lib/pkcs11/libcoolkeypk11.so**. Click okay, close out of everything, and restart Firefox.

&nbsp;<figure id="attachment_195" style="width: 1071px" class="wp-caption aligncenter">

<figure><img class="size-full wp-image-195" alt="Telling Firefox where Coolkey is" src="https://i1.wp.com/felicianotech.com/wp-content/uploads/2013/05/dod-cac-setup-step2-2.png?resize=640%2C375&#038;ssl=1" srcset="https://i2.wp.com/feliciano.tech/wp-content/uploads/2013/05/dod-cac-setup-step2-2.png?w=1071&ssl=1 1071w, https://i2.wp.com/feliciano.tech/wp-content/uploads/2013/05/dod-cac-setup-step2-2.png?resize=300%2C176&ssl=1 300w, https://i2.wp.com/feliciano.tech/wp-content/uploads/2013/05/dod-cac-setup-step2-2.png?resize=1024%2C599&ssl=1 1024w" sizes="(max-width: 640px) 100vw, 640px" data-recalc-dims="1" /><figcaption class="wp-caption-text">Telling Firefox where Coolkey is</figcaption></figure> 

You should now be able to log into any site that requires a CAC with Firefox on Ubuntu.

### Discussion & Support

I don&#8217;t own nor work for any of the software/companies mentioned in this article, however I am always happy to help. If you have any questions or suggestions please comment 🙂
