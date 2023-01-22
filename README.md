
# Chrome Extension for Managing Salesforce Orgs

This extension is not distributed via the Chrome Web Store. Install it manually.

## Features

### Add New Salesforce Org

<img src="images/extension2.png" width="500">

### Define Color of Favicon

Favicon in Browser Tab of an Org is colored as defined:

<img src="images/extension3.png" width="500">

### Open Different Pages of an Org

<img src="images/extension4.png" width="500">

## Install

1. Build extension (see below).
2. Open `chrome://extensions/` and check the box for **Developer mode** in the top right.
3. Click the **Load unpacked extension** button and select the `build` folder.


## Build Extension

    npm install
    npm run build

## Usage

Open extension on any page using the key shortcut `Command + Shift + S`.

## Development

The extension uses **React** components from [Chakra UI](https://chakra-ui.com/).

    npm start
