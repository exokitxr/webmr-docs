---
id: SDKLanding
title: Exokit SDK
sidebar_label: Exokit SDK 
---

## SDK Bundle

The [SDK bundle](Install.md) includes Exokit engine, which lets you run apps (regular web sites) in Exokit.

> Exokit is a fast browser engine, without the browser (though you can [use it to build a browser](https://github.com/shaneharris/aframe-in-app-browser)!)

## SDK components

There are two main parts to the Exokit SDK:
  - Web APIs
  - Native integrations

### Web APIs

 <img src="http://via.placeholder.com/600x120" alt="SDK diagram 1"/>

Exokit engine runs regular [HTML](https://en.wikipedia.org/wiki/HTML) sites.

If the site uses [WebXR](https://immersive-web.github.io/webxr/), [WebGL](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebAudio](https://www.w3.org/TR/webaudio/), and other multimedia web specifications, it should work on Exokit (if it doesn't, please [file a bug](https://github.com/webmixedreality/exokit/issues/new)!)

This means existing web documentation applies to Exokit as well.

**Docs**: [Web APIs](API.md)

## Native integrations

 <img src="http://via.placeholder.com/600x120" alt="SDK diagram 2"/>

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

**Docs**: [Native integrations](Integrations.md)
