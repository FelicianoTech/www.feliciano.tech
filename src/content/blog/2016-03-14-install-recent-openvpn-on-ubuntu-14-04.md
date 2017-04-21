---
title: Install a Recent Version of OpenVPN on Ubuntu 14.04 “Trusty”
author: FelicianoTech
date: 2016-03-14T14:00:51+00:00
url: /blog/install-recent-openvpn-on-ubuntu-14-04/
dsq_thread_id:
  - 4662242147
categories:
  - F/OSS
  - Ubuntu
tags:
  - openvpn
  - ubuntu-14.04

---
Until Ubuntu 16.04 LTS is released next month, many people like myself are still running Ubuntu 14.04 LTS on their servers. This has led to most tutorials on installing OpenVPN to be based on Ubuntu 14.04. Cool. Issue is, the version of OpenVPN [packaged for that release][1] is v2.3.2. Even the latest Ubuntu, 15.10 &#8220;Wily&#8221; only has OpenVPN 2.3.7. So until the next LTS comes out (and still, you should do this), you can use the official DEB repository provided by OpenVPN to run the latest version of OpenVPN, 2.3.10. This also provides you with updates when future versions are released.

## Configure Apt to Use the Official OpenVPN Repository

To use the official repo, all we need to do is download the repo&#8217;s GPG key (so we can verify the updates) and add their repo URL to Apt. You can run the following as a regular Ubuntu user:

    wget -O - https://swupdate.openvpn.net/repos/repo-public.gpg | sudo apt-key add -
    sudo sh -c 'echo "deb https://swupdate.openvpn.net/apt trusty main" > /etc/apt/sources.list.d/openvpn.list'
    sudo apt-get update
    

## More Information & Discussion

[OpenVPN][2] &#8211; The official open-source site.
  
[OpenVPN 2.3.x Changelog][3] &#8211; The changelog for all releases under 2.3. Some great work for IPv6 was done.
  
[Install OpenVPN on Ubuntu 14.04][4] &#8211; A good guide on install OpenVPN. Follow this after the steps in this post.
  
[Install OpenVPN on Debian 8][5] &#8211; A good guide on install OpenVPN. Follow this after the steps in this post.

Do you have any questions or comments on this post? Maybe improvements? Let me know as a comment here.

 [1]: https://launchpad.net/ubuntu/+source/openvpn
 [2]: https://openvpn.net/index.php/open-source.html
 [3]: https://community.openvpn.net/openvpn/wiki/ChangesInOpenvpn23
 [4]: https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-14-04
 [5]: https://www.linode.com/docs/networking/vpn/set-up-a-hardened-openvpn-server