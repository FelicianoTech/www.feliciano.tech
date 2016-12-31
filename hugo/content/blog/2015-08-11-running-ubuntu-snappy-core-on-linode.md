---
title: Running Ubuntu Snappy Core on Linode
author: FelicianoTech
date: 2015-08-11T20:53:24+00:00
url: /blog/running-ubuntu-snappy-core-on-linode/
dsq_thread_id:
  - 4023928614
categories:
  - Ubuntu
tags:
  - linode
  - testing
  - ubuntu
  - ubuntu-snappy-core

---
When I first heard of Ubuntu Snappy Core I was immediately intrigued. Dual file systems, new package manager, the ability to roll-back updates, what in the world was Canonical up to? I had to find it out for myself.

With VirtualBox in tow, I went to Ubuntu&#8217;s website so I can download and install the ISO. No luck. Ubuntu Core was being distributed different from traditional Ubuntu. Tarballs for Internet-of-Things (IoT) devices and &#8216;cloud images&#8217; for everything else. I decided to try to get it running on Linode and it was simply a bit&#8230;. pain, to get working. This was many months ago. Fast forward to today and Linode now has KVM, Ubuntu Core has KVM images&#8230; you get where I&#8217;m going with this. Below are instructions for how to get Ubuntu Snappy Core running on a Linode.

  1. Have a Linode with at least 3,720MB of allocated disk space available. This Linode needs to be one of the new KVM Linodes. If you have a Xen Linode, you can convert it using the link on the bottom right of your Linode&#8217;s Dashboard page.
  2. We&#8217;re going to create a new raw disk. To do this, click the &#8216;Create a new disk&#8217; link in the Dashboard. 
      1. For the &#8216;**Label**&#8216;, I used &#8220;Ubuntu Snappy Core&#8221; however you can name it whatever you want.
      2. For &#8216;**Type**&#8216;, select &#8216;unformatted / raw&#8217; from the drop down.
      3. For &#8216;**Size**&#8216;, type &#8220;**3720**&#8220;.
      4. Click the &#8216;Save Changes&#8217; button.
  3. From the &#8216;Rescue&#8217; tab on the Dashboard, boot into Rescue Mode.
  4. Connect to your Linode via <a href="https://www.linode.com/docs/networking/using-the-linode-shell-lish" target="_blank">Lish</a> or SSH. For this step I prefer Lish.
  5. Download the Ubuntu Snappy Core image to your Linode (takes less than 4 seconds). You can run the first command for the stable release or the second command for the edge release: 
      * wget http://releases.ubuntu.com/15.04/ubuntu-15.04-snappy-amd64-generic.img.xz
      * wget http://cdimage.ubuntu.com/ubuntu-snappy/15.04/edge/ubuntu-15.04-snappy-amd64-generic.img.xz
  6. Decompress the image (took about a minute). 
      * unxz ubuntu-15.04-snappy-amd64-generic.img.xz
  7. Copy the downloaded image to our raw disk (took about 4 seconds): 
      * dd if=ubuntu-15.04-snappy-amd64-generic.img of=/dev/sda bs=1M
  8. Create a &#8216;Configuration Profile&#8217;  (config profile) from the Linode&#8217;s Dashboard by clicking on the &#8216;Create a new Configuration Profile&#8217; link. 
      1. &#8216;Label&#8217; it whatever you want. Mine was &#8220;Ubuntu Snappy Core Test&#8221;.
      2. Change kernel to &#8216;Direct Disk&#8217;.
      3. For &#8216;/dev/sda&#8217; in &#8216;Block Device Assignment&#8217;, make sure that the raw disk you created earlier is selected.
      4. Turn all of the &#8216;Filesystem/Boot Helpers&#8217; off (by selecting &#8216;No&#8217;).
      5. Save Changes
  9. Making sure that your new config profile is selected, click the &#8216;Reboot&#8217; button to boot into your new system.
 10. If you left Lish open earlier, you can see the new system booting. If not, you can now log into your Ubuntu Snappy Core machine via Lish or SSH. The username is going to be &#8216;ubuntu&#8217; and the password will also be &#8216;ubuntu&#8217;.

Notes:

  * IPv4 and IPv6 networking should be already working
  * I would change the password and create a new user before doing anything else.

Please comment and let me know if you happen to be doing anything interesting with Snappy Core either on Linode, a Raspberry Pi, or whatever. I&#8217;m curious to see what people are actually doing with it and possibly start a project of my own.

Helpful/Interesting related links:

  * [Robot spider powered by Ubuntu Snappy Core][1]
  * [Ubuntu Snappy Core&#8217;s main developer page][2]
  * [Some tutorials][3]

&nbsp;

 [1]: http://insights.ubuntu.com/2015/08/05/the-first-app-enabled-spider
 [2]: https://developer.ubuntu.com/en/snappy
 [3]: https://developer.ubuntu.com/en/snappy/tutorials/using-snappy