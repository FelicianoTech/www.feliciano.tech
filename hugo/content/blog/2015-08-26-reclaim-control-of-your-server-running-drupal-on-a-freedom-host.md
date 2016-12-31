---
title: Reclaim Control of Your Server – Running Drupal on a Freedom Host
author: FelicianoTech
date: 2015-08-26T22:54:42+00:00
url: /blog/reclaim-control-of-your-server-running-drupal-on-a-freedom-host/
dsq_thread_id:
  - 4070138925
categories:
  - Drupal
  - Hosting
tags:
  - Drupal
  - freedom
  - hosting
  - root-access
  - servers

---
We&#8217;ve all experienced these before: slooow server hardware; unlimited disk space that is capped once you begin to actually fill it; local directory software installs because you&#8217;re not allowed to alter the root system. Managed hosting emerged to help solve these problems. And it did &#8211; but sacrificed the true power of a host&#8217;s infrastructure. Fortunately, an alternative exists that overcomes the deficiencies of both shared and managed hosting. I call it a “Freedom Host.”

## What is a Freedom Host?

A Freedom Host respects your needs and creativity. It gives you full root access to the server leaving you with the most powerful processor and lightning-fast, solid-state storage. Think of your <a href="https://www.linode.com/" target="_blank">Linodes</a>, <a href="https://www.digitalocean.com/" target="_blank">DigitalOceans</a>, etc.

## Why choose a Freedom Host?

> &#8220;Getting off the Island&#8221;

This counters a long-standing community practice of exclusively using <a href="https://www.drupal.org/" target="_blank">Drupal</a>. We now see large opportunities in combining Drupal with other powerful auxiliary software. Managed providers have long offered users click-to-deploy for Drupal; but where’s the Node.js button? HA Proxy button? Split-DNS? Magento? These options don&#8217;t exist on a managed host.

## A Freedom Host allows you to run what you want when you want.

Security is a priority when running your Drupal website, right? You verify file permissions, sanitize all site forms and enforce strict password rules to protect against risky Internet traffic. But what about protection from other websites on the same server? What about local containers running on the same private subnet as your own? A Freedom Host, whether dedicated or VPS, [offers you greater security][1] than what&#8217;s provided through today&#8217;s shared-hosting or containers.

## How do I get Managed comfort with Freedom’s power?

_Deployment_ &#8211; Deploying on a Freedom Host doesn&#8217;t have to be difficult. Between pre-made images, [StackScripts][2], [cPanel][3], or Bitnami, plenty of Drupal deployment options exist.

_<a href="https://www.drupal.org/project/drush" target="_blank">Drush</a>_ – You can install Drush in seconds with full functionality on any Freedom Host.

_Control Panels_ &#8211; While many Freedom Hosts provide you with a remote terminal to get started, you can install and run the GUI you want, not just what you&#8217;re limited to. cPanel for example comes free with Linode&#8217;s <a href="https://www.linode.com/managed" target="_blank">Managed</a> service.

_Backups & Monitoring_ &#8211; Any reputable Freedom Host provides a backup solution but additional options are limitless. Save your Drupal site as a tarball, dump your MariaDB/MySQL database or mirror to an external slave server. You can even image the entire server to backup or test locally in [VirtualBox][4]. System metric software, including [Longview][5], New Relic or Piwik, measure, graph and store server traffic.

## So, what can I do with all this Freedom?

While impossible to compile a full list, some interesting Drupal projects I&#8217;ve seen include:

  * swapping out “Zen” PHP for Facebook’s HHVM for speed improvements in Drupal 8
  * <a href="http://www.midwesternmac.com/blogs/jeff-geerling/major-improvements-drupal-vm" target="_blank">testing Drupal 8 using PHP7</a>
  * compiling Nginx to include custom features for Drupal
  * custom compiling a kernel for improved performance.

A Freedom Host provides options when choosing what and how you run your Drupal website. Options aside, a Freedom Host is more powerful and less expensive than most managed providers. You can&#8217;t lose with Freedom.

_<span style="font-size: smaller;">This post was originally <a href="https://assoc.drupal.org/blog/felicianotech/sponsored-post-reclaim-control-your-server-running-drupal-freedom-host" target="_blank">published</a> on the Drupal Association&#8217;s <a href="https://assoc.drupal.org/blog/" target="_blank">Blog</a> back in May 2015. I&#8217;ve reposted it here mainly to have a single archive of my content.</span>_

 [1]: https://zeltser.com/security-risks-and-benefits-of-docker-application/
 [2]: https://www.linode.com/stackscripts
 [3]: http://cpanel.com/
 [4]: https://www.virtualbox.org/
 [5]: https://www.linode.com/longview