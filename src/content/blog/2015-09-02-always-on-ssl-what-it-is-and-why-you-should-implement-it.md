---
title: 'Always-On SSL: What It Is and Why You Should Implement It'
author: FelicianoTech
date: 2015-09-02T22:17:52+00:00
url: /blog/always-on-ssl-what-it-is-and-why-you-should-implement-it/
dsq_thread_id:
  - 4091719998
categories:
  - Hosting
tags:
  - SSL

---
We all know what <a href="https://en.wikipedia.org/wiki/Transport_Layer_Security" target="_blank">SSL is</a>. It puts the padlock in your browser&#8217;s address bar and secures the connection to the website you&#8217;re visiting. If you&#8217;re sitting at Starbucks purchasing something online with your credit card, you&#8217;re protected. The problem is, most website owners only use SSL for online transactions. Uploading files to your website via FTP, writing a post on your WordPress blog, or logging into your favorite forum are actions that all go unprotected leaving you vulnerable. Always-On SSL is the concept that we should be secure always. Not just for logins, but for the privacy of people browsing your website as well.<!--more-->The Internet has become an increasingly more dangerous place. With script kiddies trying to prove themselves, crackers creating ransomware for large payouts, and even governments hacking movie studios because they didn&#8217;t like their jokes, there&#8217;s bad guys everywhere. Protect your website by enabling SSL. Every URL on your site should begin with &#8216;https://&#8217;.

Always-On SSL means that everyone should be using SSL on every page of their website, always. We&#8217;re seeing large companies such as Google, Facebook, Twitter, etc take this approach but we need to follow as individuals. This site for example (Feliciano.Tech) is available via HTTPS. In fact, if you try to visit this site using HTTP, you&#8217;ll simply get a permanent redirect to the secured URL.

## Why bother, specifically?

**Passwords.** Always-On SSL allows you to protect usernames and passwords for a website that you have. If you log into a blog, especially if it&#8217;s one with multiple authors, you can prevent people from stealing your credentials by sniffing the WiFi signal.

**Privacy.** Many ISPs modify and monitor traffic. This simply may be to make sure your PlayStation 4 online game has enough bandwidth to prevent lag. Monitoring however can sometimes be more personal and it&#8217;s a boss, rouge IT employee, stalker, etc who want to see what you&#8217;re doing. Without HTTPS, someone can easily see every email that you send, Facebook status you post, blog post comment, etc.

**Security.** Running HTTPS allows you to prevent someone from conducting a man-in-the-middle attack against a potential visitor to your website.

## What about all of the detractions?

What detractions? Many of the &#8216;cons&#8217; that I&#8217;ve heard to implementing Always-On SSL are simply false. This can be seen in a very popular <a href="http://stackoverflow.com/questions/4495570/to-use-or-not-to-use-ssl-why-use-ssl-always" target="_blank">Stack Overflow question</a>. Here are some of the typical excuses:

**Unless someone has the password to your router, they can&#8217;t see your traffic.**

This is false. Firstly, if you&#8217;re using WiFi, you&#8217;re screwed. WEP, one of the early WiFi encryption protocols <a href="http://www.dummies.com/how-to/content/understanding-wep-weaknesses.html" target="_blank">has been compromised</a>. WPA/WPA2, the newer encryption protocol for WiFi, <a href="https://www.us-cert.gov/ncas/alerts/TA12-006A" target="_blank">has been compromised via Wi-Fi Protected Setup (WPS)</a>. With that being said, many people use public, unencrypted Wi-Fi (Starbucks, McDonald&#8217;s, library, etc) leaving everything you&#8217;re doing out in the open. Even in wired networks, wiretaps, ARP poisoning, and compromised network devices cause concern.

**SSL certificates are expensive.**

This is (an opinion but) false. There are now many places that sell SSL certificates for $6 a year. That&#8217;s less than $0.02 a day. Granted, some people still may not be able to afford that but comparatively, if you can afford a domain name and hosting, you likely can afford an SSL certificate.

It gets better. There are now ways to get SSL for free. If you&#8217;re using <a href="https://www.cloudflare.com/" target="_blank">CloudFlare</a>, you can use their free plan and get HTTPS support for your website for FREE. The awesome people at the <a href="https://letsencrypt.org/isrg/" target="_blank">Internet Security Research Group</a> have put together an initiative to bring SSL encryption to the Internet for FREE! (It&#8217;s called <a href="https://letsencrypt.org/" target="_blank">Let&#8217;s Encrypt</a>, go check it out).

**SSL is CPU-intensive.**

This is only true for crappy hosting providers with crappy servers. I work at <a href="https://www.linode.com" target="_blank">Linode</a> and I can tell you right now even with our cheapest plans, our CPUs will muscle through any cryptography work you throw its way. It&#8217;s 2015, CPUs are much more powerful than they use to be. Technically yes, HTTPS uses more CPU cycles than HTTP, but the difference is negligible. Especially when put it against all the pros that I&#8217;ve mentioned earlier in this article.

If CPU load still worries you, here&#8217;s a solution. If you terminate SSL on a proxy, say a <a href="https://www.linode.com/nodebalancers" target="_blank">NodeBalancer</a> or CloudFlare, then your web servers don&#8217;t even need to do the CPU work. It&#8217;s all done on the proxy. You get the benefits of SSL without the load.

## Conclusion & Discussion

Always-On SSL is a concept that encourages the use of SSL on every page of every website. You don&#8217;t need to have an online store to have SSL. We can all benefit from the pros of SSL encryption, whether we are a website owner or the awesome people who come and read the things on our site.

If you run a website, be it a forum, blog, news site, whatever, try it out. There&#8217;s plenty of <a href="https://linode.com/docs/search?q=SSL" target="_blank">guides out there</a> on how to set up SSL for your website and there&#8217;s plenty of people (like me) who are willing to help because it&#8217;s just that important.

<a href="https://letsencrypt.org/" target="_blank">Let&#8217;s Encrypt</a> (mentioned earlier) is a really awesome, extremely important project that can help set the tone for Internet privacy and security in the future. Check them out and maybe even help them out if you can.

Did I miss some benefits of SSL? Is there a really good reason why you may not want to use SSL that I didn&#8217;t mention? Please comment and let me know.
