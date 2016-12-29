---
title: Running WordPress Behind an SSL/HTTPS Terminating Proxy
author: FelicianoTech
date: 2015-08-21T13:00:43+00:00
url: /blog/running-wordpress-behind-an-sslhttps-terminating-proxy/
dsq_thread_id:
  - 4052174716
categories:
  - WordPress
tags:
  - NodeBalancer
  - Proxy
  - SSL
  - WordPress

---
When creating Feliciano.Tech, I decided to go HTTPS only. Nowadays there&#8217;s no reason not to, the cost is negligible (both in server resources & money). I started to build the site first in a virtual machine (VM) then on my actual server. Everything done over HTTP. Preparring to publish my site, I imported my old post, installed Jetpack, and set the WordPress & Site URLs to &#8216;https://&#8217;. I immediately broke everything.

The problems that I ran into were due to how my WordPress website was being run. In the spirit of high-availability my server architecture is three web-backends behind a load-balancer (LB). With this setup, I am terminating SSL on the LB itself. This means public traffic comes in to the LB on port 443, gets decrypted, then gets forwarded to one of my backends on port 80 via the private network. This confused WordPress and caused several issues. You&#8217;ll run into these same issues if you terminate SSL on a proxy rather then with the web server WordPress is running. This can be a load-balancer or even CloudFlare. I&#8217;ll review how to fix them below.<!--more-->

## Issues That Cropped Up

### Missing CSS and Images

When I changed the &#8216;WordPress Address&#8217; and &#8216;Site Address&#8217; URLs to https://Feliciano.Tech, things immediately broke. Visiting the frontend of my website (the non-admin site) presented a page with text but absolutely no images, color, layout, etc. Basically, the CSS stylesheet and my images failed to load.

### Redirect Loop

In my virtual host file, I put in a RewriteRule that redirects HTTP request to HTTPS request. This is so I can force the use of SSL for browsing my site. This caused a redirect loop with Apache eventually crapping out.

### Jetpack &#8220;Connect to WordPress.com&#8221; Error

When trying to connect Jetpack to my WordPress.com account, I got the following error:

> site\_inaccessible Error Details: The Jetpack server was unable to communicate with your site [IXR -32300: transport error: http\_request_failed SSL certificate problem: unable to get local issuer certificate]

Visiting https://Feliciano.Tech clearly showed that my website was indeed working via HTTPS. Hmm.

### Jetpack -> Publicize Errors

I got several problems here. Facebook was having trouble authorizing and Twitter authorization flatout failed and caused an error. Here are the two Jetpack errors I was getting:

> Error Details: The Jetpack server could not communicate with your site&#8217;s XML-RPC URL.
> 
> Something which should never happen, happened. Sorry about that. If you try again, maybe it will work. Error: -32601

Both of these errors stem from WordPress not being aware that it should be sending and processing request via HTTPS/port 443. Let&#8217;s fix that.

## Solutions

<a href="https://jetpack.me" target="_blank">Jetpack</a> not recognizing my SSL certificate was my fault. For my LB, instead of building my own I am using a <a href="https://www.linode.com/nodebalancers" target="_blank">NodeBalancer</a> (NB) from <a href="https://www.linode.com" target="_blank">Linode</a>. When terminating SSL on the NB, you&#8217;re presented with text areas to paste your SSL private key and your SSL certificate. Turns out you need to also paste any intermediate and root certificate authority (CA) certificates as well. I never did that. My website worked fine in my browser because Google Chrome already had the immediate certificate and went about it&#8217;s business. Jetpack on the other hand doesn&#8217;t make any assumptions and expects the entire certificate chain in order for it to connect to your website via SSL successfully.

To fix all of the other issues, we simply need to let WordPress know what protocol and port to use. For many LBs including NBs, when they forward traffic they will add some &#8216;X-FORWARDED-\*&#8217; headers. We just need to tell WordPress that when the &#8220;HTTP\_X\_FORWARDED_PROTO&#8221; is set to &#8220;https&#8221;, use SSL. We do this by editing \`wp-config.php\`. Before the line, &#8220;/\* That&#8217;s all, stop editing! Happy blogging. */&#8221;, add the following:

    if($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https'){
    
        $_SERVER['HTTPS'] = 'on';
        $_SERVER['SERVER_PORT'] = 443;
    }

These two changes fixed all of the issues I was having with WordPress, Jetpack, and HTTPS.

## Conclussion & Discussion

I don&#8217;t work for Automattic (the company behind WordPress and Jetpack), however I am always happy to help. If you have any questions or suggestions please comment 🙂 Do you have a better way to solve this problem? I’d love to hear it.

Also, while it&#8217;s not my specific setup, Linode has a great guide on <a href="https://www.linode.com/docs/websites/cms/high-availability-wordpress" target="_blank">how to create a highly available WordPress website</a>.
