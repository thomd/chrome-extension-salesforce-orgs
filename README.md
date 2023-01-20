
# Chrome Extension for Managing Salesforce Orgs

<div><img src="src/assets/img/icon-128.png" width="64"/> This extension is not distributed via the Chrome Web Store. Install it manually.</div>

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

The extension uses React components from [Chakra UI](https://chakra-ui.com/).

    npm start
