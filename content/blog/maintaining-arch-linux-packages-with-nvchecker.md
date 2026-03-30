---
title: "Maintaining Arch Linux Packages With Nvchecker"
date: 2026-03-30T10:00:00+04:00
draft: false
description: "A look into my current workflow for maintaining Arch Linux packages using nvchecker and custom automation scripts."
tags:
    - linux
    - archlinux
    - aur
    - automation
---

Maintaining Arch Linux packages can be a time-consuming task, especially when you have to keep track of upstream updates across various platforms.

## The Old Way: GitHub Watch

Previously, my main method for staying informed about new releases was using the **Watch** (watch -> custom -> releases) feature on GitHub. While this worked reasonably well for projects hosted on GitHub, it had significant limitations:

- It doesn't scale well when you maintain many packages.
- It's difficult to track projects hosted on other forges like GitLab, Codeberg, or self-hosted instances.
- It requires manual intervention for every single update.
- It does not work with packages repository like pypi of rubygems.

## The New Workflow: nvchecker

My current workflow is much more automated and forge-agnostic. It relies on [nvchecker](https://github.com/lilydjwg/nvchecker) and a set of custom scripts from my [dotfiles](https://github.com/BarbUk/dotfiles).

### 1. Cloning and Updating Package Repositories

I use two main scripts to manage my local package repositories:

- [clone_aur_package_by_maintainer](https://github.com/BarbUk/dotfiles/blob/master/bin/clone_aur_package_by_maintainer): To bulk clone all packages I maintain.
- [update_git_dir](https://github.com/BarbUk/dotfiles/blob/master/bin/update_git_dir): To keep all my local clones up to date.

### 2. Version Tracking with .nvchecker.toml

Each package directory contains a `.nvchecker.toml` file that describes how to check for the latest upstream version. I generate this file once using [gen_dot_nvchecker_toml](https://github.com/BarbUk/dotfiles/blob/master/bin/gen_dot_nvchecker_toml).

### 3. Daily Update Checks

Every day, I run a routine to check for updates:

1. [gen_nvchecker_config](https://github.com/BarbUk/dotfiles/blob/master/bin/gen_nvchecker_config): This script scans my package directories and generates a global `nvchecker` configuration.
2. `nvchecker`: I run the tool to compare local versions with upstream.

### 4. Automation with nvupdate

When an update is detected, I use [nvupdate](https://github.com/BarbUk/dotfiles/blob/master/bin/nvupdate). This script automates several steps:

- Updating the `PKGBUILD` with the new version and checksums.
- Building the package to ensure it still compiles.
- Running basic tests.

## Conclusion

While the heavy lifting of detecting and preparing updates is now automated, the final validation and pushing to the AUR remain manual steps. This ensures that I still have a "human in the loop" to catch any potential issues before they reach other users.
