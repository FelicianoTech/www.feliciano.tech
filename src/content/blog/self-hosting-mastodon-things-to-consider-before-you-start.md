---
title: "Self-Hosting Mastodon: Things to Consider Before You Start"
author: FelicianoTech
date: "2025-01-16T15:00:00-05:00"
categories:
  - "Tech Thoughts"
tags:
  - "mastodon"
  - "hosting"
---

I've self-hosted three separate Mastodon instances, one of which ran for four years.
I've run a "traditional install" on a Linode VPS and a Raspberry Pi, and now I am attempting a new instance via Docker Compose.
As I get this new instance up and running, I wanted to share some thoughts on what should be considered before deploying your own instance.

<!--more-->

## Is self-hosting really the solution?

I'd rate self-hosting Mastodon as an intermediate endeavor on a difficulty scale of Easy, Intermediate, and Hard.
We have the well-discussed technical challenges: wrangling the web app, streaming server, and databases.
However, the very draw of Mastodon, federation, is a huge factor when running a server.
Running a server that has connectivity issues or suddenly disappears from the Internet negatively affects other nodes in the federation.

Before starting your own Mastodon server, consider joining an existing one or using a hosting provider that offers managed instances.
In my eyes, self-host Mastodon because you want a challenge and are genuinely interested in how the pieces work together, not because you want a social media instance.


## Instance Use Cases

It is handy to have a solid idea of how you plan on using your instance.
Depending on how you use the instance, you might configure the initial server differently.

Built-in to Mastodon is support for "single user mode".
This is when you plan to have one user (and one user only) on the instance.
Mastodon makes some changes in the UI and navigation to support this use case.
Keep in mind that if you create an admin user as setup asks, this is that single user you'll have.
There's [an open issue](https://github.com/mastodon/mastodon/issues/22869) for better documentation on this.

Other use cases aren't directly supported in code but are based on the chosen hostname and settings flipped on/off.
**Completely public instances** such as [Mastodon.Social](http://Mastodon.Social) are commonplace but may become hard to maintain, afford, and moderate.
Vetting new users before they can sign in makes things more manageable.
I call these **filtered public servers**. **Invite servers** require the admin to invite people in.
These are used for groups of friends, exclusive communities, some organizations, etc.

An example is [Ubuntu.Social](http://Ubuntu.Social), a Mastodon instance where you must be a registered "Ubuntu Member" to create an account on the server.
The last instance use case isn't common but it's my favorite when you can pull it off: **hostname instances**.

Hostname instances are Mastodon servers where the hostname for the server has a contextual meaning to the accounts.
I'll explain with one of my favorite examples, [mastodon.blaede.family](https://mastodon.blaede.family).
A longtime open-source developer and designer, Cassidy Blaede created this instance, and each user's username is a family member's first name.
His account on this instance is then, @cassidy@blaede.family, which spells out his name.
Very cool.
Other examples of this would be usernames that form that person's public email address, or @report@newsoutlet.com.


## Choosing a hostname

**Hostnames cannot be changed.**
It's important to think it through ahead of time.
Aside from attempting to create a "hostname instance" (mentioned above), the important aspect of a hostname is that it can be a subdomain of the full username.
Many people don't realize this and end up buying new domains for their Mastodon server.
I blame the Mastodon Docs. 😀
Let's break this down with an example.

In the early days of Mastodon, the hostname you use, let's say, example.com, was then how users were mentioned.
A user named "brenda" of example.com can be found at @brenda@example.com.
This means that no other website can be run on example.com.
Modern Mastodon has a solution for this with `LOCAL_DOMAIN`.
Now, we can run our instance on social.example.com while still referring to the same user as @brenda@example.com.
We then could use example.com as a website for something else.


## Docker vs Traditional Installs

Mastodon can be installed with Docker or the traditional way on a Linux system. Both methods have their pros and cons.

With Docker, the instance can more easily be migrated to a different server, can be used with modern DevOps tools, and with orchestration such as Kubernetes.
As for cons, installing Mastodon via Docker is poorly documented.
Also, customizing the codebase or adding user themes is more difficult when running a Docker install.

A traditional install has many more moving pieces in SystemD services, files to keep track of, etc.
Dependencies such as PostgreSQL and Ruby need to be managed manually.
That said, traditional installs are very well documented on the website.
Old school system administrations will be very comfortable with this setup.


## Warnings

1. Open sign ups - this may sound fun and utopian-like but this can be a moderation nightmare. Between spam sign ups, sexually explicit content, NSFW posts, unmoderated users can affect your server's reputation and get it blocked by other servers. The bigger the user base, the larger the moderation load.  
2. High storage usage - whenever you see and interact with other user's posts, your server is downloading the images and videos they are sharing. The amount of disk space will ride rapidly. Be prepared with enough storage, and keep tabs on the admin tools available to you to keep the amount of media saved to a minimum.  
3. Take backups - this applies to practically everything you have involving your data. Keep backups of media files, the database, and app secrets. Automate this so you can't forget.  
4. RAM -  you may get away with having a small amount of RAM when running your server but the memory needs will spike when running certain tasks, including upgrades. Keep this in mind.  
5. Federation is slow - your server being able to "discover" other users from other servers will take time. Don't expect a huge network on day 1.

These last two points are covered in much greater detail in James Ashford's blog post, [What I've Learnt From Setting up My Own Mastodon Instance](https://jrashford.com/2023/11/16/what-ive-learnt-from-setting-up-my-own-mastodon-instance-2/).
I suggest reading it; it's useful.
