---
title: "[Daily Journaling] Report 3"
slug: daily-journaling-report-3
published: 2025-08-12
description: >
  The third report in the series on "daily journaling" with my second-brain setup.

---

It has been just under 7 months since my last overhaul of my daily journaling system and how I use
it. In that time, I have had some significant life changes that have led me to a different usage
pattern of my devices. My needs have changed with respect to my "second brain".

Last year, every morning would start with me making a cup of coffee (a pourover) and sitting down to
turn on my computer. As soon as I was logged in, I would pop open my second-brain and write all of
my morning subconcious/shower thoughts, review the previous day, set an intention for that day, and
then make a todo list. It quickly became my mornning ritual, cultivating my digital home where I
track of my tasks and any thoughts that pop into my head. 

However, this year has brought on a more nomadic lifestyle. The months of April and May barely saw
me turn on my computer more than once a week. During this time, I still needed some-what daily todo
lists and reverted to using the ever-present Obsidian on my phone. As this muscle memory was
defined, I found myself duplicating my todo list between devices on the days where I would use both,
depending on the context and what I needed. And every pragmatic software engineer bristles at
breaking DRY principles. 


## Updates - Goodbye Apple (Set up Note Syncing)

How do you solve a duplication error when data in needed in more than one place? You've probably
already guessed. I needed to sync my notes between my mobile device and my laptop. So, as any
engineering leader worth their salt, I sat down and did a return on investment analysis:

<details>
  <summary>Journal Excerpt - Investment ROI</summary>

> ## Notes Syncing
> ### Problem
> I keep running into the issue where I want my `~/second-brain` and my phone
> notes app to sync so that I don't have to manually copy my list between devices.
> ### Solution Requirements
> 1. Full Neovim use while on laptop (unopinionated markdown files)
> 2. Mobile App markdown editor
> 3. Note syncing (could be manual)
> 4. Optimize for laptop power usage and only an extension with the phone
> 
> | ID | Solution | Cost |
> | -- | -------- | ---- |
> |  1 | Pay for Obsidian Sync | $4/mo |
> |  2 | SyncThing + Android | $400 |
> |  3 | Custom Mobile App | $400+ |
> |  4 | Mobile Git Editor | $35/yr |
> 
> #### Obsidian Sync
> 
> This incurs an ongoing cost forever. I also believe that I would have to open
> Obsidian on my laptop to make sure that it syncs before opening my second brain.
> This workflow feels pretty clunky and I don't think it solves my issue with
> syncing.
> 
> #### Syncthing + Android
> 
> SyncThing doesn't work on iOS because of folder "security" measures.
>
> This could be free if I use the current Pixel that I have. However, I really
> dislike the bulky camera on the back. I think if I went this route, I'd like to
> get a new phone.
> 
> #### Custom Mobile App
> 
> This is the most interesting, but also most complicated. I would love a PWA that
> has an offline mode that I built myself. However, this would take quite a bit of
> time to build the mobile/web app portion and then the backend portion.
> 
> Even with a PWA, iOS makes it completely frustrating...I would probably switch
> to Android anyway.
> 
> #### Mobile Git Editor
> 
> Since `~/second-brain` already uses git to sync, I could just figure out how to
> use Git on the phone. However, this doesn't come with automations built-in to do
> things like Daily Notes and the like.
> 
> 
> ### Selected Solution
> 
> Set up Obsidian and SyncThing on the current Pixel. If it works, buy the 9a with
> the smaller camera. I have until 8/15 for the current $400 deal.

</details>

**TL;DR:**
> I will be experimenting with Obsidian and SyncThing on my current Pixel tomorrow
> evening. If it works, I'll buy the 9a because of the smaller camera. I have
> until 8/15 for the current $400 deal.

In the end, I decided not to purchase a new Pixel since my Pixel 7 works just fine and seems a lot
thinner with a the needed protective case.


### Solution Implementation

SyncThing is designed to be a distributed file syncing system. This means that you can share a local
folder with many other devices. While my phone is almost never off, it might lose internet access
through a connection issue or airplane mode. While syncing dirctly between my laptop and phone would
probably work for the majority of the time, I decided on a more complex syncing architecture through
my NAS.

I have a somewhat extensive homelab setup that includes a Synology NAS. Installing SyncThing from
the third-party registry was easy. Adding SyncThing to my NixOS laptop was a little more interesting
with the general lack of user friendly documentation for most NixOS packages, but it quickly fit
into the declarative nature of its configuration.

Choosing this solution required switching to an Android-based phone over an iPhone. iPhones have
pretty locked down security features which do not allow applications to share files, which is needed
in this case.

I took this time to finally switch to GrapheneOS since I have been meaning to switch for the last
few years (and even had a Pixel 7 from a few years ago when I was trying to get ready to switch).
The setup of SyncThing and Obsidian was straight forward and the Storage Space feature was a great
use to allow both both Obsidian and SyncThing to access the same files.

### Gotchas 
I did run into a few issues that needed resolving while testing the end-to-end system. The first is
that reusing folder labels and folder IDs after deletion leads to weird global sync states. During
any future testing, I would recommend rotating at least the folder ID with every additional folder
test, if not both. I ended up wiping the NAS SyncThing index DB multiple times to fix the global
issue because I had been testing with the `second-brain` label with the same static folderID from
the NixOS declarative configuration.

Additionally, the `.stignore` file is different on every device and should be created before syncing
anything off the local device. I wanted to ignore the `.obsidian` directory on my phone because it
is different than the one on my laptop (on the rare occasion that I use Obsidian on my laptop). I
also didn't want the updates to the obsidian workspace files to constantly sync. I made a similar
choice with the laptops's `.zk/notebook.db` file which constantly changes with every edit. However,
care must be taken if the file was previously synced. In such a case, the file should be added to
the remote device's `.stignore` file before deleting to make sure that the deletion is not synced
across all devices as well.

## Conclusion

In the short few days since getting this set up, it has been great to be able to drop in on my
laptop's daily note from my phone, and make updates on the move as needed. It has been well worth
the pain of switching phones.
