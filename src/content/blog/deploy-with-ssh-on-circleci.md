---
title: "Deploy with SSH on CircleCI"
author: FelicianoTech
date: 2022-02-09T13:30:00-05:00
categories:
  - How To
tags:
  - circleci
---

One of the most recurring issues I see on the [CircleCI Discuss](https://discuss.circleci.com) forum are people playing around with SSH keys in order to get them to work with external servers.
There are different ways to handle this.
Here's my favorite method to do it.

<!--more-->

## Step 1 - Create a new SSH key pair

First we need to create fresh keys.
You don't want to use an existing pair that's used for some other purpose.
This key pair should be specifically for CircleCI to access your server.
To create a new keypair, run the following on your local machine:

```bash
ssh-keygen -t ed25519 -C "CircleCI Deployer"
```

notes:
1. `-C` is a comment. This should describe what the key is for so you don't forget.
2. When running this command, you'll be asked for a filename.
	- don't use the default, name it something for this purpose
	- when typing the filepath, it needs to be an absolute path
3. When asked for a passphrase, leave both prompts blank


## Place the keys in position

### the public key
The public key (the one ended in .pub) should be placed on the server you want CircleCI to access.
Specifically, there's a file for each user called `~/.ssh/authorized_keys`.
Each line in that file is a public key.
Place your public key in that file for the user you will be accessing the server as.
Here's an easy way to get the key into your clipboard:

```bash
cat ~/.ssh/my-key.pub | xsel -b   # for Linux
cat ~/.ssh/my-key.pub | pbcopy    # for macOS
```

### the private key
The private key (the one that doesn't end in .pub) should be saved to CircleCI.
When viewing your project in the CircleCI webapp, go to "Project Settings", "SSH Keys", scroll to the bottom until you find "Additional SSH Keys".
In that section, click the blue "Add SSH Key" button and paste your private key into the very large text box.
Here's an easy way to get the key into your clipboard:

```bash
cat ~/.ssh/my-key | xsel -b   # for Linux
cat ~/.ssh/my-key | pbcopy    # for macOS
```



## Get your server's public key

Log into the server you want CircleCI to access.
We need to get the public key for the host.
Typically there's around three keys to choose from.
In my experience with CircleCI, it's the ECDSA key that we need but your mileage may vary.
Assuming we care about the ECDSA public key, you need to copy it.
There's a few ways to do this, some more clever than what I will show here.
Here we will "cat" the key to the terminal and then copy it and save it somewhere.

```bash
cat /etc/ssh/ssh_host_ecdsa_key.pub
```


## Setup your CircleCI Config

Now we need to setup the CircleCI config to actually use the SSH key.
The following instructions need to be done in each job that will need to use the SSH key.
Before you can use the key, CircleCI needs to be told to load the SSH key into the build environment.
This is done with the `- add_ssh_keys` special step.
Next we need to save the public key from the previous step into `~/.ssh/known_hosts` in our CircleCI build.
Here's an example:

```bash
echo '<my-hostname> <host-public-key>' >> ~/.ssh/known_hosts
```

notes:
1. `<my-hostname>` should be the hostname you are SSHing to. This can be an IP address or the domain name.
2. `<host-public-key>` is the public key you copied in the previous step.


---

Now CircleCI can SSH into a server.
This will be useful to transfer files via `scp` or even to run commands remotely with `ssh`.
