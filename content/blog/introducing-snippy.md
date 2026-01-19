---
title: "My Everyday Tool: Snippy"
date: 2026-01-17T12:00:00+00:00
draft: false
description: "Discover why Snippy, a snippet manager for Linux, is an essential part of my daily workflow, integrating seamlessly with rofi and fzf."
tags:
    - linux
    - snippet-manager
    - rofi
    - fzf
    - tools
---

As a terminal user, I often find myself typing the same blocks of code, commands, or text snippets over and over. For years, I've relied on [Snippy](https://github.com/BarbUk/snippy), a project I maintain and use daily. It's a simple yet powerful snippet manager for Linux that integrates seamlessly with my favorite tools: `rofi` and `fzf`.

## Why Snippy?

While there are many snippet managers out there, I wanted something that was lightweight, scriptable, and deeply integrated with the command line. Snippy is designed to be fast, efficient, and highly customizable, allowing you to manage your snippets without leaving the comfort of your terminal.

## Key Features

Snippy comes with a host of features designed to make you more productive:

- **Rofi and FZF Integration:** Browse, search, and paste snippets using the powerful fuzzy finding capabilities of `rofi` and `fzf`.
- **Clipboard and Cursor Control:** Snippy can automatically restore your clipboard after pasting. You can also use placeholders like `{clipboard}` to insert clipboard content into a snippet, and `{cursor}` to position the cursor exactly where you need it after pasting.
- **Script Execution:** Turn your snippets into powerful scripts. Any line starting with a `$` will be executed as a command. You can also place more complex bash scripts in the `$snippets_directory/scripts` folder.
- **Powerful CLI:** While the GUI is great for browsing, Snippy also provides a full-featured command-line interface to `add`, `edit`, `list`, or `cat` your snippets.
- **Bash Completion:** To make the CLI even easier to use, Snippy provides its own bash completion.

## Installation

For Arch Linux users, Snippy is available on the AUR and can be installed with your favorite helper:

```bash
yay -S snippy-snippet
```

## Basic Usage

Once installed, you can start using Snippy immediately.

- `snippy gui`: Open the `rofi` or `fzf` interface to browse and select a snippet.
- `snippy add`: Add a new snippet from the command line.
- `snippy edit`: Edit an existing snippet.
- `snippy cli`: List snippets and copy them to the pasteboard without pasting.

For more details on all the available commands and options, be sure to check out the project's [GitHub page](https://github.com/BarbUk/snippy).

I hope you find Snippy as useful as I do. Give it a try and let me know what you think!
