<p align="center">
  <a href="http://muffin.cafe">
    <img src="http://i.imgur.com/buhMCWz.png" width="170">
  </a>
</p>

[![Build Status](https://travis-ci.org/muffin/client.svg?branch=master)](https://travis-ci.org/muffin/client)

This repository contains the Ember app that handles muffin's admin area.

While it's definitely a big part of muffin, it's not being treated as a real "package". Every time a new version of muffin gets published, it will simply be included in the [main package](https://github.com/muffin/cli). The only reason why it's a separate repo is because it's much cleaner and the folder structure is less deep.

## Usage

Read [this](https://github.com/muffin/server#use-me) to learn more about how to get started with muffin.

## Contribute

As stated above, this Ember app won't do much on its own. Rather than that, it needs an API endpoint where it can retrieve its data from. Because of this, you'll have to follow [this guide](https://github.com/muffin/server/blob/master/.github/CONTRIBUTING.md) if you want to contribute something.
