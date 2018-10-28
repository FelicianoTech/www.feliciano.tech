---
title: "Configure Static Networking on an Ubuntu 18.04 Linode Server"
author: FelicianoTech
date: 2018-09-10T09:00:00-04:00
categories:
  - "How To"
tags:
  - "ubuntu-18.04"
---

Ubuntu 18.04 now uses `netplan` together with `systemd` to manage networking.
No longer do we edit the `/etc/network/interfaces` file in order to configure static networking.
At the time of this writing (September 10th, 2018), Linode has static networking instructions for Ubuntu 17.10, which is EOL'd, but not Ubuntu 18.04 specifically.
More importantly, while the 17.10 instructions do work, it's not the recommended way according to Ubuntu and most websites I've visited around the Internet.

Here's how I configured my Ubuntu 18.04 server on Linode.

<!--more-->

## Steps

1. If you're not already logged in as the `root` user (or prefix all of the following commands with `sudo`):

    ```bash
    sudo su
    ```

1. The first real step is to remove the Linode generated (via DHCP) file that already exists:

    ```bash
    rm /etc/systemd/network/05-eth0.network
    ```

1. Then create the new networking config file:

    ```bash
    vim /etc/netplan/eth0.yaml
    ```
    I am using the text editor `Vim` here but this can also be `nano` or whatever editor you prefer.

1. Copy and paste the template below.
Feel free to remove the comments (the `#` and everything after it) if you desire. 
A quick explanation of some of the pieces is available at the end of this post.

    ```yaml
    network:
      version: 2
      renderer: networkd
      ethernets:
        eth0:
          dhcp4: no
          dhcp6: no
          addresses:
            - 1.2.3.4/24                                    # Primary public IPv4 address
            - 192.168.1.2/17                                # A private IPv4 address
            - "2001:0db8:85a3:0000:0000:8a2e:0370:7334/64"  # Primary IPv6 address
          gateway4: 1.2.3.1                                 # Primary public IPv4 address's gateway
          gateway6: "fe80::1"                               # Primary IPv6 address's gateway
          nameservers:
            search: [members.linode.com]                    # Search domain
            addresses: [8.8.8.8, 8.8.4.4]                   # Google's DNS Servers
    ```

1. With the network configuration complete, we can validate and apply it with `netplan`:

    ```bash
    netplan apply
    ```

You're done!

## Explanation

The network config is written in a syntax called [YAML][explain-yaml].
Here's a quick summary of what we have in the file.

**Primary public IPv4 address** - The primary public IPv4 address is the one a Linode is automatically assigned when created.
It can be found in the "Remote Access" tab for that Linode, as can all the IPs.
The format is the IP address and then a `/24` at the end of it, which is called a [CIDR][explain-cidr].
If you have more than one public IPv4 address, you list additional ones on their own lines.

**Private IPv4 address** - A private IPv4 address.
The format is the IP address and then a CIDR of `/17` at the end of it.
One can automatically be assigned to a Linode by clicking the link in the Linode's "Remote Access" tab.
Additional private IPs need to be requested via Linode Support.
As with public addresses, additional private IPv4 addresses can be added on additional lines.

**Primary IPv6 address** - The primary IPv6 address is the one a Linode is automatically assigned when created.
The format is the IP address and then a CIDR of `/64`, all wrapped in double quotes.

**gateway4** - This is the primary public IPv4's gateway, the IP where all traffic is routed to when data needs to leave the data center and into the Internet.
It can be found in the "Remote Access" tab for that Linode.
The IPv4 gateway will always be your primary IPv4 address with the last octet (the digits after the last decimal) changed to a `1`.

**gateway6** - This is the primary IPv6's gateway, the IP where all traffic is routed to when data needs to leave the data center and into the Internet.
It can be found in the "Remote Access" tab for that Linode however it is the same for all Linodes, `"fe80::1"`.
This too needs to be wrapped in double quotes.

**Search Domain** - It helps with autocompleting hostnames along with the `/etc/hosts` file.
If you don't know what this is, I'd just leave it alone.

**Nameservers** - The nameservers the Linode will use to translate hostnames into IP addresses.
In the example above, I used Google's nameservers.
Linode provides several nameservers for your use if you choose.
They're all listed in the "Remote Access" tab.
For publicly provided nameservers though, here's my recommendations (use 2 or more):

Provider | Primary IP | Backup IP
--- | --- | ---
Google | 8.8.8.8 | 8.8.4.4
Cloudflare | 1.1.1.1 | 1.0.0.1 
OpenDNS | 208.67.222.222 | 208.67.220.220


## Discussion

I hope this was helpful.
Please leave a comment if you have any questions.



[explain-yaml]: https://learnxinyminutes.com/docs/yaml/
[explain-cidr]: https://searchnetworking.techtarget.com/definition/CIDR
