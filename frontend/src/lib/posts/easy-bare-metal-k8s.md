!! title: Easy Bare Metal K8s
!! slug: easy-bare-metal-k8s
!! published: 2023-10-16
!! description: Easy approach to bare metal k8s at home

---

We are going to deviate this week to discuss the recent approach that was used to restart my home k8s cluster. We will
get back to the scheduled series next week. In the meantime, hopefully you will enjoy the opinionated piece of how to do
easy bare metal k8s at home (if there is such a thing as easy k8s...). 

---

## Background

I have been running kubernetes (k8s) on a home cluster for just under three years. I am embarrassed to say that my
extensive setup that had many grand plans has mostly been a proving ground for work :/. I moved at the
beginning of the year and only had to figure out a quick way to replace a single selfhosted service to not have to 
change any of my personal workflows. And since that move ten months ago, those NUCs have been mostly powered down and 
definitely not running k8s. 

All of the pressure was removed since I did not require k8s in my life to do anything, so I shot for the stars. 
[Khue has an amazing setup](https://homelab.khuedoan.com/) that I really wanted to replicate. It is so well put together
and documented that I was inspired and wanted to do something similar. 

A quick pause for hardware context: My home network is comprised of a TekLager router running OPNSense, a managed
switch, TP-Link Omada WAPs, a Synology NAS, random SBCs (mostly Libre Computers because Raspberry Pis are way too
expensive), and three 8th gen Intel NUCs for cluster shenanigans. Ok, back to the clustering.

The first go-around was way too over-engineered. I got proxmox set up on the NUCs and was making my way through
automating VM images so that I could run both a Production cluster and a Staging cluster. I dumped hours into getting
the latest Ubuntu image to run from a template with cloudinit, even trying out a colleague's personal setup, and some
configuration was wrong or bit was flipped. If I had to manually create VMs without a template and couldn't automate
them, there was no point in going down that path anymore.

Next stop, NixOS on the server! NixOS is great for declarative OS configuration. I use it on my daily driver. There is a
really steep learning curve (which I am still very much in), but it has been worth it so far. I went about using
[pixiecore](https://github.com/danderson/netboot/tree/main/pixiecore) in conjunction with Nix to build an image and then
host it for PXE booting. This worked out pretty well for getting a clean install of NixOS onto the NUCs. Now, how best
to get one of all of the different possibilities of K8s running? My past solution was to use Canonical's `microk8s`. But
since I am not running Ubuntu Server on the NUCs anymore, I wasn't keen on installing `snap` (especially on NixOS).
While searching around for answers, one snarky comment caught me in a good mood: "You don't. Use Talos Linux instead". I
had heard of Talos previously, but hadn't entertained the idea. I really wanted a nice declarative configuration like
NixOS would provide. Well, I am glad that it hit my curiosity bone, because I took another peek into the documentation.
It turns out that Talos Linux is declarative and already has K8s set up. 


## Chosen Solution

If k8s is the only thing that the server is going to be doing, Talos is the easy way to go. Talos locks down the server
to only be accessible via the Talos API (and the k8s API, once enabled). Talos nodes are configured and updated with a
YAML configuration file that is passed to the node over the Talos API. There are a few different ways of getting the OS
booted. I chose to keep the nice [pixiecore](https://github.com/danderson/netboot/tree/main/pixiecore) route with some
quick tooling built around it specifically for Talos.

Talos provides [PXE Installation documentation](https://www.talos.dev/v1.5/talos-guides/install/bare-metal-platforms/pxe/) 
with a helpful note about the `talos.config` kernel parameter (which we will come back to shortly). They also have great
documentation on the different things that are necessary for a 
[Production Cluster](https://www.talos.dev/v1.5/introduction/prodnotes/#further-details-about-talosctl-endpoints-and-nodes).
I would highly suggest giving those a read through. Now the interesting part that `talos.config` parameter. It can be
used to point a newly booted kernel to a web server to grab a specific configuration, for something like hostname
configuration where the configs cannot be identical.

Now since we are using `pixiecore`, standing up a quick web server on the same machine wasn't too difficult. A quick
docker compose file later, we have a nice reusable network installation framework. If you'd like to follow along while
referencing code, here's the [git repo](https://github.com/joseph-flinn/k8s-build-along/tree/main/metal). There were a
few other commands that I needed to run and I didn't want to have to type out every time, so I also created a
`Taskfile.yaml` to "automate" those. Our end product (following the technical guidelines in the README), is a cluster
fully installed with Talos. After bootstrapping k8s on one of the nodes (see the Talos documentation), there's a quick
and easy way of installing k8s on bare metal.

---

I hope that, with all of the constraints from my opinionated homelab setup, that my installation process of Talos was
helpful. If nothing else, I hope this post was entertaining as I descend into the madness that is hosting k8s at home.





