---
id: SDKLanding
title: SDK 
sidebar_label: SDK 
---


- Exokit is trying to actually be as close to the current web APIs as possible to allow for an easier transition for current web devs (see below for complete list of our tech stack).

- We will also be mirroring as many existing API styles rather than inventing new ones. For example, the tabs capture API from mozilla here.

- The stuff that doesn't exist on the web yet, like Magic Leap + Leap Motion, is going to be heavily inspired by WebXR.

# What technology goes into the Exokit Browser? 

| Tech          | Pure JS or Native       | Spec  | Source |
| ------------- |:-------------:|:-----:|-------:|
| WebVR      | Pure JS | [WebVR](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API) | [Source](https://github.com/webmixedreality/exokit/blob/master/core.js ) |
| WebXR      | Pure JS | [WebXR](https://github.com/immersive-web/webxr) | [Source](https://github.com/webmixedreality/exokit/blob/master/src/XR.js ) |
| React      | Pure JS | [React](https://reactjs.org/docs/getting-started.html) | [Source](https://github.com/webmixedreality/exokit/blob/master/core.js ) |
| HTML5      | Pure JS  | [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)  | [Source](https://github.com/webmixedreality/exokit/blob/master/core.js ) |
| CSS        | Pure JS  | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [Source](https://github.com/webmixedreality/exokit/blob/master/core.js ) |
| THREE.js   | Pure JS  | [THREE.js](https://threejs.org/docs/) | [Source](https://github.com/webmixedreality/exokit/blob/master/lib/three-min.js ) |
| Express    | Pure JS  | [Express](https://expressjs.com/en/api.html) | [Source](https://github.com/webmixedreality/exokit/blob/master/core.js ) |
| WebSockets | Pure JS  | [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) | [Source](https://github.com/webmixedreality/exokit/blob/master/core.js ) |
| FetchAPI   | Pure JS  | [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | [Source](https://github.com/webmixedreality/exokit/blob/master/core.js ) |
| Web Workers| Pure JS  | [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) | [Source](https://github.com/webmixedreality/exokit/blob/master/core.js ) |
| WebGL      | Native | [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) | [Source](https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings/webglcontext ) |
| Canvas2d   | Native | [Canvas 2D](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | [Source]( https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings/canvas) |
| WebAudio   | Native | [WebAudio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | [Source](https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings/webaudiocontext ) |
| WebRTC     | Native | [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) | [Source](https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings ) |
| Node       | Native | [Node](https://nodejs.org/en/docs/) | [Source](https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings/node ) |
| OpenVR     | Native | [OpenVR](https://github.com/ValveSoftware/openvr/wiki/API-Documentation) | [Source]( https://github.com/webmixedreality/exokit/tree/master/deps/openvr) |
| OVR        | Native | [OVR from Oculus](https://developer.oculus.com/) | [Source]( https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings) |
| MLSDK      | Native | [Magic Leap SDK](https://www.magicleap.com/creator) | [Source](https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings/magicleap ) |
| Leap Motion| Native | [Leap Motion Orion](https://developer.leapmotion.com/orion/) | [Source](https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings/leapmotion ) |
| Chromium   | Native | [Chromium](https://www.chromium.org/developers) | [Source](https://github.com/webmixedreality/exokit/tree/master/deps/exokit-bindings ) |


