---
title: "Breaking up With Linux Snaps"
author: FelicianoTech
date: 2021-06-01T13:15:00-04:00
tags:
  - snap
  - snapcraft
---
The honeymoon period is over and quite frankly, I'm done with Linux Snaps.

I've been an intrigued fan of Snaps for about 4 years and have been a Snap developer for about 3.
It's on the development side where love has been lost.
Here's why.

<!--more-->

I may not be a Snap & Snapcraft expert but I have invested a lot of time into the ecosystem.

{{< figure src="/assets/img/article/snapcraft-4year-anniversary.jpg" class="medium aligncenter" >}}

I recently celebrated my 4th anniversary on the forums.
I created and maintained Continuous Integration focused [Docker images](https://hub.docker.com/r/cibuilds/snapcraft).
As part of my Developer Relations (DevRel) work with CircleCI, I created CircleCI [documentation](https://circleci.com/docs/2.0/build-publish-snap-packages/), [VM image support](https://discuss.circleci.com/t/linux-machine-executor-images-october-q4-update/37847?u=felicianotech), and snap'd the [CircleCI CLI](https://snapcraft.io/circleci).
I also maintain snaps for several of my own software or open source software by others that I am a fan of.
You can see most of these in my semi-regular [Snap Metrics blog posts](https://www.feliciano.tech/blog/november-2020-snap-metrics/).
I also made [a blog post](https://www.feliciano.tech/blog/what-are-linux-snap-packages-why-use-them/) discussing what Linux Snaps are and why to use them which did fairly well (by my blog's standards).


## Bumps in the Road

While I had a lot of fun publishing snaps, I've run into several issues which ultimately has caused me to leave snaps behind.

1. **Sandboxing** - One of the major selling points of Snaps happens to also be what causes me some of the most pain.
By default, snaps are sandboxed which means they don't have access to the rest of your system.
This is **great** for security but has also caused a lot of issues with integration.
    
	Whenever I use a several tools where some were installed as snaps and some weren't, I typically run into issues.
Something can't talk to something, something needs credentials all over again, etc.
I spend a lot of time debugging my snap usage rather than using them for work.
Again, this is the intention, I get it but it's frustrating.

    I narrowed down my particular use case to the fact that I tend to use a lot of developer tools.
Using snaps for desktop apps has worked fairly well for me.
When it comes to using Git, Docker, and CLIs that rely on those tools under the hood, the experience falls apart.
There is a workaround, they're called Classic Snaps.
These types of Snaps break sandboxing and thus require approval by Canonical.
This process leads me to my next Snap pain point.
1. **Forum Approval Sucks** - Many actions I've needed to accomplish in the Snap world required me creating a post in the forum.
In the early days I understood.
They were a small, scrappy team working on something new and figuring things out.
Fast forward to today, I don't believe this should be the case anymore.

    I needed to open a forum post to request Snap interfaces, names, aliases, etc.
Not only does this not feel very polished and professional to me, what's worse is that many of these requests come with a 7-day voting period by staff.
I've had to wait 2, 3 weeks or even more sometimes for actual voting to happen.
This greatly impacts my release momentum for my tools.
I'm not fond of waiting for Canonical employees to get around and participate in their own bottleneck'd process while I sit around waiting with my arms crossed.
1. **Major Software Release Delays** - There's gate keeping and delays that tend to happen with some major snaps that are published by Canonical employees themselves.
For example, the [Go Snap](https://snapcraft.io/go).
As of today, June 1st, 2021, the latest released version of Go via the snap is v1.16.3.
Go v1.16.4 was released May 6th and includes a security fix.
It's not available via Snap.
There's also no instructions on the Snapcraft page nor Launchpad page on how to contribute and help get a release out.
Not to mention that if I did, I'd definitely prefer GitHub or GitLab than being forced to do this on Launchpad anyway.

    This same issue applies to the Docker snap.
	Docker v20.10.x came out 6 months ago.
	There's been 6 patch releases since then yet the Docker snap still defaults to a very, very old version.
	You have to switch to the beta or edge branches to get a newer version yet v20.10.x is and has been stable for a long time.

	Again, people are busy I get it.
	This is why we have automation, CI, and DevOps.
	The package manager of the future should be using modern Software Engineering, not HumanOps.
1. **Lack of Open Source Infrastructure** - This is something Snap haters have mentioned since day 1 that I typically ignored.
Snaps are hosted by Canonical, in their store, and there's no alternatives.
Even snap names are gate keeped.
I've had names not approved just because it was short and they want to preserve it.... what?
I've had names taken from me to give to someone else without an email or anything.
In the beginning, there was an effort of an open source Snap Store but that died out.
While I didn't care in the past, the issues I've pointed out above have made me re-think my position.
I now do feel a bit locked in to the blackbox of the Snap Store.

There's other reasons why I want to leave Snaps that are hard for me to explain.
I don't have great examples and there's a bit of opinion involved.
I rather leave it here rather than try to call anyone out.
That's not what this is about.


## It's Not all Bad

I don't want to give the impression that Snaps are a dumpster fire.
I don't believe that at all.
There's still a lot to like about them and for some use cases they are still very valuable.
In order to make this post a bit more balanced, here's a few of the things I like:

1. **Metrics** - As a snap developer, when you are logged in you get metrics on your snap.
Not only is this useful, they are presented in a very visually pleasing way.
1. **Desktop Apps** - Snaps are still my favorite way to get desktop apps, especially proprietary ones.
I still use them to install Spotify, Slack, 1Password, Telegram, and more.
1. **Auto Updating** - This is still a very cool and useful feature.
It's a great feeling to push a new release to the Snap Store and within a few hours see how many users already have the new version.
It's motivating for a developer and helps with support.
1. **Unique Features** - There's random things snaps can do that are pretty cool.
For example, you can install multiple versions of a snap at the same time.
You don't care about it until you do.
There's several random features like this about snaps that make me smile.


## What will Happen to my Snaps

I will eventually get rid of all my snaps.

For snaps of my own software such as [Sonar](https://snapcraft.io/sonar) and [cu-ddns](https://snapcraft.io/cu-ddns), I will slowly phase them out this year in favor of other install methods.
For snaps of other people's software such as [CircleCI](https://snapcraft.io/circleci), [Pocket Casts](https://snapcraft.io/pocket-casts), or [hub](https://snapcraft.io/hub), I will try to hand over the snaps to their original owner or if not, a community member.
If there's no interest from either, then I'd phase out those snaps as well.

It was a fun run but for the time being, my foray into snaps is over.
We'll go our separate ways.
