---
title: How to use jQuery 2.0 with Drupal 7
author: FelicianoTech
date: 2013-04-30T21:33:34+00:00
url: /blog/how-to-use-jquery-2-0-with-drupal-7/
dsq_thread_id:
  - 4015413722
categories:
  - Drupal
tags:
  - Drupal
  - Drupal 7
  - how-to
  - jQuery
  - jQuery 2.0
  - jQuery 2.x

---
On April 18th, <a title="View Release Post" href="http://blog.jquery.com/2013/04/18/jquery-2-0-released/" target="_blank">jQuery 2.0 was released</a>. With dropped support for Internet Explorer 6, 7, and 8 (finally!), the code base is now 12% smaller. Add to that some bug fixes and a few new features and jQuery 2.0 is gearing up the be a no-brainer for the modern website. So here&#8217;s how to start using it in your Drupal 7 site.<!--more-->We&#8217;ll cover two ways to do this.

## Use a 3rd Party Plugin

For non-coders, the easiest way to get the latest version of jQuery on Drupal 7 is to use a module. There&#8217;s probably a few modules out there to do the job, but here I&#8217;ll suggest using <a title="Visit the jQuery Update project page." href="http://drupal.org/project/jquery_update" target="_blank">jQuery Update</a>. You can install it the usual way, and it will update the jQuery version&nbsp;used for you. Just make sure to check the _status report_ page to verify that jQuery was updated.

<p style="padding-left: 30px;">
  <strong>Note</strong>: As of this writing, the jQuery Update module doesn&#8217;t yet support jQuery 2.0. I decided to include it anyway because the module seems to be fairly good at updates, with a dev release posted only 21 days ago. I&#8217;d suggest install it, use jQuery 1.82, and wait till they update it for jQuery 2.0.
</p>

## Include it in Your Theme

We can use jQuery 2.0 on our site just by making some quick changes to our theme.

<span style="line-height: 13px;">Download jQuery 2.0 (duh).&nbsp;</span><span style="line-height: 13px;">You can get the minified version (for production) <a title="jQuery 2.0 Download (minified)" href="http://code.jquery.com/jquery-2.0.0.min.js">here</a> or the regular version (for testing) <a title="jQuery 2.0 Download (regular)" href="http://code.jquery.com/jquery-2.0.0.js">here</a>. If your theme has a <code>/js</code> or <code>/javascript</code> folder, place it there. If your theme doesn&#8217;t, like the default theme Bartik, then just place it in the theme folder.</span>

Now edit template.php. Look for a function that ends in **\_js\_alter()**. If it doesn&#8217;t exists, create it `function THEMENAME_js_alter( &$javascript )` replacing THEMENAME with the name of your theme.

In the function, we will tell Drupal to remove the version of jQuery that comes bundled, and include our version.

<pre>$jq_path = drupal_get_path( 'theme', 'THEMENAME' ).'/js/jquery-2.0.0.min.js';

$javascript[ $jq_path ] = $javascript[ 'misc/jquery.js' ];

$javascript[ $jq_path ][ 'version' ] = "2.0.0";

$javascript[ $jq_path ][ 'data' ] = $jq_path;

unset( $javascript[ 'misc/jquery.js' ] );</pre>

Once again, replace THEMENAME with the name of your theme. For `$jq_path`, make sure this matches the path to where you put the jQuery file at the beginning.

Now save everything, upload it to the server if it&#8217;s not already there, and clear the Drupal cache. Go ahead and check the _status report_ page to&nbsp;verify&nbsp;that jQuery was updated.

### Discussion & Support

I don&#8217;t make jQuery nor Drupal, however I am always happy to help. If you have any questions or suggestions, please comment 🙂