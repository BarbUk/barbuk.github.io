---
title: "Updating Termite And Vte"
date: 2021-03-23T23:29:04+04:00
draft: false
tags:
    - linux
    - terminal
    - compilation
---

## State of termite

[Termite](https://github.com/thestinger/termite) is my favorite terminal, because:
 - it's simple and fast
 - it works well with a tiling window manager
 - it has a very cool feature: *selection mode*

The project has not been updated since June 2019 and uses a patched version of VTE, so it needed an update.

## Cherry picking cool PR

Several pull request were interesting:
 - [Enable drag and drop text into termite from another program](https://github.com/thestinger/termite/pull/707) which I then upgraded to [handle drag and drop of file to terminal](https://github.com/BarbUk/termite/pull/7). ![Demo](/images/draganddrop.gif)
 - [Add config option to set VTE word character exceptions](https://github.com/thestinger/termite/pull/779)
 - [Add blink string to the properties](https://github.com/thestinger/termite/pull/763) because why not ?
 - [Add smart_copy option](https://github.com/thestinger/termite/pull/725). This one is really cool, because it allows to use `CTRL + C` and `CTRL + V` directly. `CTRL + C` only copy in the clipboard if a text is selected first.
 - [Require Control to be pressed to open URLs](https://github.com/thestinger/termite/pull/697) is another great one.

The result is available in [my fork](https://github.com/BarbUk/termite).

## Building an up to date VTE

[VTE-ng](https://github.com/thestinger/vte-ng) need to be built with 5 patches to enable the use of termite selection mode.

I made a [fork](https://github.com/BarbUk/vte-ng/commits/vte-0-62-ng) and merged the five patches + another one to enable static build.

## PKGBUILD

{{< gist BarbUk 3a5dcf6df28ba2523ed68023f06fbbdf "PKGBUILD" >}}
