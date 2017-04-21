---
title: How to Create an Ubuntu AppIndicator in Python 3
author: FelicianoTech
date: 2016-02-15T17:30:01+00:00
url: /blog/create-ubuntu-appindicator-python-3/
dsq_thread_id:
  - 4580317264
categories:
  - Development
  - Ubuntu

---
There isn&#8217;t a lot of documentation on how to create an AppIndicator (Application Indicator) for Ubuntu. I managed to find a single great <a href="http://candidtim.github.io/appindicator/2014/09/13/ubuntu-appindicator-step-by-step.html" target="_blank">post</a> on the subject however it was written with Python 2 in mind. This is my adaption for Python 3.<!--more-->

## Python 3 & Pokemon Specific Changes

For a basic example, we&#8217;re going to build an AppIndicator that spits out a random Pokemon name. This year is <a href="http://www.pokemon20.com/en-us/" target="_blank">Pokemon&#8217;s 20th Anniversary</a> so I thought this would be a fun tribute :). I suggest reading <a href="http://candidtim.github.io/appindicator/2014/09/13/ubuntu-appindicator-step-by-step.html" target="_blank">the original post</a> first before starting here. I will just go over the changes. You can follow along with the <a href="https://github.com/felicianotech/example-pokemon-appindicator" target="_blank">code on GitHub</a>.

  1. First and foremost we change the hashbang to point to python3.
  2. _urllib2_ is no longer a thing in Python 3. Instead we import _urllib.request_.
  3. We also import the random and string modules for use in the _pokemon_get_ function.
  4. I took out module renaming so I actually use _Gtk_ instead of _gtk_, _AppIndicator3_ instead of _appindicator_, and so on.
  5. The _joke_ and _retrieve_joke_ functions were consolidated and renamed to _pokemon_get_.
  6. _decode(&#8216;utf-8&#8217;)_ is now required to be ran on the output of _json.loads()_.

We utilize <a href="http://pokeapi.co" target="_blank">pokeapi.co</a> to pull in a random Pokemon from the site, instead of the Chuck Norris jokes from the original example.<figure id="attachment_1330" style="width: 600px" class="wp-caption aligncenter">

<figure><img class="size-medium wp-image-1330" src="/assets/img/article/pokeball-icon-appindicator.png" alt="Screenshot of custom Pokemon AppIndicator." data-recalc-dims="1" /><figcaption class="wp-caption-text">That pokeball up in the corner is our custom AppIndicator.</figcaption></figure> 

## More Information & Discussion

<a href="http://candidtim.github.io/appindicator/2014/09/13/ubuntu-appindicator-step-by-step.html" target="_blank">Original Post</a> &#8211; Again, just wanted to link to the original post since 99% of the work here is based on it.
  
<a href="https://github.com/felicianotech/example-pokemon-appindicator" target="_blank">GitHub Project</a> &#8211; My code for the Pokemon AppIndicator.

Do you have any questions or comments on this post? Maybe improvements? Let me know in the GitHub project or as a comment here.
