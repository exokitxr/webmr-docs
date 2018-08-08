---
id: SDKLanding
title: Exokit SDK
sidebar_label: Exokit SDK 
---

 <img src="http://via.placeholder.com/800x300" alt="Diagram of Exokit SDK surrounded by the APIs listed"/>

## SDK Bundle

The [SDK bundle](Install.md) includes Exokit engine, which lets you run apps (regular web sites) in Exokit.

Exokit is a fast browser engine without the browser (though you can [use it to build a browser](https://github.com/shaneharris/aframe-in-app-browser)!)

 <img src="https://cdn.rawgit.com/webmixedreality/webmr-docs/media-upload/website/static/media/exokitmediacopy/aframe-in-app-browser.gif" alt="shaneharris/aframe-in-app-browser"/>

## Web specifications

Exokit engine runs regular [HTML](https://en.wikipedia.org/wiki/HTML) sites.

If the site uses [WebXR](https://immersive-web.github.io/webxr/), [WebGL](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebAudio](https://www.w3.org/TR/webaudio/), and other multimedia web specifications, it should work on Exokit (if it doesn't, please [file a bug](https://github.com/webmixedreality/exokit/issues/new)!)

This means existing web documentation applies to Exokit as well.

## Extensions

Exokit includes additional support for interfacing with hardware like Magic Leap and Leap Motion.

These are generally exposed on the `browser` object.

For example, for Electron texture streaming:

```
const electron = await browser.electron.createElectron();
const browserWindow = await electron.createBrowserWindow();
browserWindow.loadURL('https://google.com/');
browserWindow.on('paint', message => {
  // ...
});
```

Documentation for these APIs is in the sidebar.
