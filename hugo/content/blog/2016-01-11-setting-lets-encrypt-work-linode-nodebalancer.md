---
title: Setting up Let’s Encrypt to Work With a Linode NodeBalancer
author: FelicianoTech
date: 2016-01-11T15:00:58+00:00
url: /blog/setting-lets-encrypt-work-linode-nodebalancer/
dsq_thread_id:
  - 4481571184
categories:
  - Hosting
tags:
  - http-proxy
  - lets-encrypt
  - linode
  - NodeBalancer
  - Proxy
  - security
  - SSL

---
For some people, the first time setting up Let&#8217;s Encrypt can be a little daunting. That&#8217;s okay. It&#8217;s beta software that doesn&#8217;t yet have a fully polished process. It&#8217;s beta software that turned the whole process of obtaining a commercially signed SSL certificate on its head. I was a bit confused at first because I have several websites (including this one) running on a load-balanced setup using a Linode NodeBalancer.

This means that my backends, where my sites live, do not handle HTTPS traffic at all. The SSL certificate for my domain name is actually loaded on the NodeBalancer via Linode Manager and serves as the HTTPS endpoint for all my traffic. So how do I get Let&#8217;s Encrypt to properly generate an SSL certificate for me and then what do I do with it? Here&#8217;s how I got everything to work. This same process would also work on custom-made load-balancers. It doesn&#8217;t have to be a NodeBalancer, I just like the convenience of having one.

To compare your situation to mine, let me quickly explain my setup. I have multiple Linodes serving as backends to a NodeBalancer. My domain names Feliciano.Tech, FelicianoTech.com, Ricardo.Tech, and RicardoFeliciano.me (yes, that many) all point to the NodeBalancer&#8217;s IP. On the NodeBalancer, I have a configuration for port 443 with the protocol set to HTTPS. Public, encrypted traffic reaches my NodeBalancer, gets terminated there, and then forwarded to one of my backends for actual processing (showing you the page you want). The backends are synced using GlusterFS for the filesystem and MariaDB + Galera for the database. With this setup noted, let&#8217;s continue.

## How I configured Feliciano.Tech for Let&#8217;s Encrypt on a NodeBalancer:

1. Log into a backend. If everything is synced as I have it, it doesn&#8217;t matter which backend you use. 

		ssh <USER>@<BACKEND_HOSTNAME>

2. Install Let's Encrypt. These instructions are verbatim from their [documentation][1]. 

		git clone https://github.com/letsencrypt/letsencrypt
		cd letsencrypt

3. Generate the SSL certificate for each domain you want on the certificate. If you use multiple domains in one command like I did, the first domain given is the main domain, called the &#8216;common name&#8217;, while the additional domains are designated &#8216;alternate names&#8217; (a.k.a. a SAN certificate). 

		./letsencrypt-auto certonly --rsa-key-size 4096 --webroot --webroot-path &lt;MY_WEBSITE_DOCUMENT_ROOT&gt; -d feliciano.tech -d felicianotech.com -d ricardo.tech -d ricardofeliciano.me

4. Copy the root and intermediate certificates into the NodeBalancer&#8217;s &#8216;SSL Certificate&#8217; box via Linode Manager. Let&#8217;s Encrypt will automatically have all of them in one convenient file for you. Since my main domain was feliciano.tech, the file was located here: 

		/etc/letsencrypt/live/feliciano.tech/fullchain.pem

	<figure id="attachment_1010" style="width: 600px" class="wp-caption aligncenter"><img class="size-medium wp-image-1010" src="/assets/img/article/nb-ssl-cert-box.png?resize=600%2C100&#038;ssl=1" alt="This box appears when you select the HTTPS protocol on a NodeBalancer configuration." data-recalc-dims="1" /><figcaption class="wp-caption-text">This box appears when you select the HTTPS protocol on a NodeBalancer configuration.</figcaption></figure>
    
5. Copy your SSL private key into the NodeBalancer&#8217;s &#8216;Private Key&#8217; box via Linode Manager. Again, Let&#8217;s Encrypt puts this in a predictable location for you: 

		/etc/letsencrypt/live/feliciano.tech/privkey.pem

	<figure id="attachment_1006" style="width: 600px" class="wp-caption aligncenter"><img class="size-medium wp-image-1006" src="/assets/img/article/nb-private-key-box.png?resize=600%2C100&#038;ssl=1" alt="This box appears when you select the HTTPS protocol on a NodeBalancer configuration." data-recalc-dims="1" /><figcaption class="wp-caption-text">This box appears when you select the HTTPS protocol on a NodeBalancer configuration.</figcaption></figure>
        
Once everything has been configured and you can verify that it all works, I would remove your SSL private key from your backends. This file should be kept in a secure location, where only you can read it. A secure flash drive, safety deposit box, encrypted partition, etc. Make sure you actually keep a copy because, for security reasons, you won&#8217;t be able to recover your private key from the NodeBalancer.
        
### More Information & Discussion
        
[Let&#8217;s Encrypt][2] ([documentation][3]) &#8211; the homepage and documentation for Let&#8217;s Encrypt.
 
[NodeBalancers][4] ([documentation][5]) &#8211; the product page and documentation for a Linode NodeBalancer. Their [SSL sub-article][6] might be of particular interest.
        
Do you have any questions or comments on this post? Maybe alternative ways to setup Let&#8217;s Encrypt in this situation? Please let me know in the comments.

[1]: http://letsencrypt.readthedocs.org/en/latest/using.html#installation
[2]: https://letsencrypt.org/
[3]: http://letsencrypt.readthedocs.org/en/latest/using.html
[4]: https://www.linode.com/nodebalancers
[5]: https://www.linode.com/docs/platform/nodebalancer/
[6]: https://www.linode.com/docs/platform/nodebalancer/nodebalancer-ssl-configuration
