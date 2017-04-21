---
title: 10 Tips on Running HTTPS Websites (Always-On SSL)
author: FelicianoTech
date: 2015-09-03T18:02:32+00:00
url: /blog/10-tips-on-running-https-websites-always-on-ssl/
dsq_thread_id:
  - 4094435255
categories:
  - Hosting
tags:
  - HTTPS
  - list
  - security
  - SSL
  - tips
  - TLS
---
Yesterday I wrote about [why you would want to run HTTPS for every page of your website][1]. Today I would like to share 10 tips when doing so.

<!--more-->

1. **Set calendar reminders to renew SSL certificates.** Like domain names, SSL certificates have a shelf life. Once expired, users will get a nasty error message when visiting your website saying that it&#8217;s insecure. That&#8217;s the exact opposite experience you want your users to have. I have a Google Calendar strictly for domain names, SSL certificates, and WHOIS privacy protection so I know exactly when I need to renew everything. If you&#8217;re a larger company with maintenance schedules, this fits right in.
2. **Use protocol agnostic URLs for third-party resources.** Many 3rd party libraries such as jQuery now suggest <a href="https://jquery.com/download/#using-jquery-with-a-cdn" target="_blank">using their protocol agnostic URLs</a>. This allows the browser to use HTTPS URLs if your website was loaded via HTTPS or HTTP URLs if that&#8217;s what your site was loaded with. This prevents the &#8220;secure vs insecure content&#8221; warning messages that some browsers give when URLs are mixed. Here&#8217;s jQuery&#8217;s tag as an example: 

        <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>

3. **Utilize HTTP Strict Transport Security.** If you&#8217;re running your website HTTPS only, you should enable <a href="https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security" target="_blank">HTTP Strict Transport Security</a> in your web server. This tells the browser that if just the domain name of the site is provided, default to HTTPS instead of HTTP. This can help prevent &#8220;downgrade attacks&#8221; as well as cookie hijacking.
4. **Use 301-Redirects for HTTPS only websites.** If you&#8217;re running your website HTTPS only, some people might still link to your site with just HTTP. To prevent a loss of visitors (and Google juice), have Apache (or Nginx) redirect request for the HTTP URL to the HTTPS version. This way you redirect people to the right place, and they can happily and safely browse your website. In Apache this can be done with the following lines: 

        RewriteEngine On
        RewriteCond %{HTTP:X-Forwarded-Proto} !https
        RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R=301,NE]

5. **Passphrase protect and backup your SSL private key.** When creating an SSL certificate, you get the option to encrypt your private key with a passphrase. This is so that if someone happens upon your server and can see your files, the SSL key is useless to them. They would need the passphrase in order to unlock the key and use it. In addition to using a passphrase, you want to make sure to back up your key someplace safe. If you lose the key, your SSL certificate is rendered useless. Keep a copy of the key backuped somewhere safe, probably away from the rest of your files. Some people go as far as placing it on a flash drive which is then locked in a fireproof safe somewhere. The point is, back it up!

6. **You don&#8217;t need multiple IP addresses for multiple SSL certificates.** Don&#8217;t get me wrong, it&#8217;s perfectly okay to do so but some hosting providers charge for additional IPs and some are restricting the number of IPv4 addresses that they give out (<a href="https://en.wikipedia.org/wiki/IPv4_address_exhaustion" target="_blank">as they should</a>). Using something called <a href="https://en.wikipedia.org/wiki/Server_Name_Indication" target="_blank">Server Name Indication (SNI)</a>, you can serve multiple websites and multiple SSL certificates using a single IPv4 address.

7. **Understand the difference between a Wildcard Certificate and a Multi-Domain Certificate.** A wildcard certificate allows a single SSL cert to cover multiple subdomains of a domain. The following would be acceptable: 

	* example.com
	* forum.example.com
	* news.example.com
	* wiki.example.com
    
	A multi-domain certificate is used for varying top-level domains (TLDs) of the same domain. This is typically for a .com/.net/.org version or even to include country TLDs. The following would be acceptable:

	* example.com
	* example.net
	* example.org
	* example.co.uk
	* example.ca
    
	Don't confuse this type of cert for one that can cover all of your domains for completely different websites. You need to buy separate certificates for each domain like the rest of us.
    
8. **If HTTPS is optional on your website, force it for the sensitive pages.** If you decide you don&#8217;t want to make SSL mandatory on your site ( 🙁 ), you still need to force it for login pages, registration pages, forget password pages, pages involving monetary transactions (including BitCoin), and maybe even for pages that including private messages. The more you protect the better, but at minimum these pages should be covered.

9. **Free SSL certificates (with restrictions) can be obtained from StartSSL.** For non-enterprise, non-commercial needs, <a href="https://www.startssl.com/" target="_blank">StartSSL</a> can provide you with a free certificate. Unlike a self-signed certificate, StartSSL validates just fine in browsers. Protection for you and your users for free. The <a href="https://letsencrypt.org/" target="_blank">Let&#8217;s Encrypt</a> project is also working on providing free encryption for everyone.

10. **Turn off support for insecure SSL ciphers.** With vulnerabilities released such as <a href="https://www.linode.com/docs/security/security-patches/patching-openssl-for-the-heartbleed-vulnerability" target="_blank">Heartbleed</a> and <a href="https://www.linode.com/docs/security/security-patches/disabling-sslv3-for-poodle" target="_blank">POODLE</a>, people have become much more aware that old versions of SSL are no longer secure. If you&#8217;re managing your own SSL server, make sure that the software is up-to-date and old protocols/ciphers are turned off. The two articles I linked can help with that.

11. **BONUS &#8211; Don&#8217;t use SSL, use TLS!** &#8211; Technically, many of us aren&#8217;t really even using SSL anymore. SSL 3.0 was the last version of SSL. It was deprecated in favor of a new protocol version called TLS. Step 10 briefly mentions why you should use TLS in favor of SSL. I&#8217;ve also found a <a href="https://luxsci.com/blog/ssl-versus-tls-whats-the-difference.html" target="_blank">great article</a> for a more in-depth explanation.
    
## Conclusion & Discussion

SSL is important and I&#8217;ve provided 10 tips (plus a bonus) on how to use it. Do you have your own tips to share?



[1]: /blog/always-on-ssl-what-it-is-and-why-you-should-implement-it/
