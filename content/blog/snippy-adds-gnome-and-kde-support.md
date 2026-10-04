---
title: "Snippy v1.3.0: Adding GNOME and KDE Support"
date: 2026-10-04T07:00:00+00:00
draft: false
description: "Snippy v1.3.0 expands Wayland support to GNOME and KDE Plasma using dotool and wofi alongside existing rofi and fzf workflows."
tags:
  - linux
  - wayland
  - kde
  - gnome
  - snippet-manager
  - tools
---

When I first introduced [Snippy](https://github.com/BarbUk/snippy) on [this blog](/blog/introducing-snippy/), it was built primarily around my personal workflow: X11 and wlroots-based Wayland compositors (like Sway, Hyprland, and Niri) paired with `rofi` and `fzf`.

## The Motivation: Shared Team Knowledge

I began maintaining a shared snippet repository at work to share knowledge and daily DBA, sysadmin, and security snippets. Most people maintained their own personal cheat sheets locally on their laptops, and I wanted to show how we could collaborate on them together.

While several colleagues were eager to adopt Snippy, we hit an immediate obstacle: the majority desktop environment at work is **GNOME** (running Wayland). Because Snippy relied on wlroots tools, they could not use it.

Solving this for the team became the primary motivation behind **Snippy v1.3.0**: bringing seamless compatibility to **GNOME** and **KDE Plasma** under Wayland.

## The Wayland Input Problem

On X11, simulating keystrokes for automated snippet pasting and cursor placement (`{cursor}`) is straightforward with `xdotool`.

On Wayland, security isolation restricts arbitrary input injection. Snippy previously used `wtype` to simulate key presses, which relies on the `zwp_virtual_keyboard_v1` protocol implemented by wlroots-based compositors. Neither GNOME (Mutter) nor KDE Plasma (KWin) implements this protocol in a way that allows `wtype` to work out of the box.

## How v1.3.0 Solves It: dotool

To bring full Wayland compatibility to KDE Plasma and GNOME, Snippy v1.3.0 introduces support for [dotool](https://git.sr.ht/~geb/dotool).

`dotool` simulates input at the kernel level via `/dev/uinput`. By detecting the active desktop session (`KDE` or `GNOME`), Snippy now routes keystrokes and cursor repositioning commands through `dotool` instead of `wtype`.

This delivers:

- Reliable text pasting across modern Wayland sessions.
- Full `{cursor}` placeholder positioning support in both desktop environments.
- Zero extra configuration required by the user—Snippy automatically detects your desktop environment.

## GNOME Support with wofi

Under GNOME Wayland, standard `rofi` often encounters display and grab limitations. In v1.3.0, Snippy automatically switches to [wofi](https://hg.sr.ht/~scoopta/wofi) when running under GNOME.

On KDE Plasma, Sway, Hyprland, and X11, Snippy continues to use `rofi` as the default GUI launcher, with `fzf` always available for terminal-bound usage.

For manual installations or updates from source, check out the [v1.3.0 release on GitHub](https://github.com/BarbUk/snippy/releases/tag/v1.3.0).
