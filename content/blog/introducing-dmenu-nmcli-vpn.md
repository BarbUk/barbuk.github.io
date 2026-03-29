---
title: "Quick and Dirty VPN Switching: dmenu_nmcli_vpn"
date: 2026-03-29T12:00:00+00:00
draft: false
description: "A small script to stop fighting with nmcli and switch VPNs quickly using rofi or fzf."
tags:
    - linux
    - vpn
    - wireguard
    - nmcli
    - rofi
    - fzf
    - tools
---

`nmcli` / `network-manager` are great, but clicking the applet just to change the VPN is a pain. I finally got tired of it and put together a tiny script called `dmenu_nmcli_vpn` that I just pushed to my [dotfiles](https://github.com/BarbUk/dotfiles).

## The Annoyance

I switch VPNs a lot, and I wanted something that just works without me having to remember exactly what I named my WireGuard profile or checking which one is currently active before switching. I wanted a simple list, a quick search, and a single click (or tap).

## How I solved it

The script is basically a tiny wrapper around `nmcli`. It grabs everything marked as `vpn` or `wireguard` and throws it into a menu.

The best part? It's smart enough to know where you are:

- If you're in a terminal, it pops up `fzf`.
- If you're just on your desktop, it uses `rofi`.

It also handles the "old connection" problem, it'll automatically drop your current VPN before bringing up the new one, so you don't end up in a routing mess.

## Grab it

If you want to try it out, you can find it in my [dotfiles bin folder](https://github.com/BarbUk/dotfiles/blob/master/bin/dmenu_nmcli_vpn).
