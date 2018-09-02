---
id: architecture
title: Architecture
sidebar_label: Architecture
---

## Overview

 <img style="display: block !important" src="https://cdn.rawgit.com/webmixedreality/webmr-docs/media-upload/website/static/media/exokitmediacopy/architecture.jpg" alt="Diagram of Node on bottom, running a layer of javascript, linked to native bindings, and then a device/headset on top"/>

Exokit Engine is a Node module.

The core is Javascript, which fetches HTML, runs `<script>` tags, and provides all of the regular mixed reality web APIs like WebGL/WebXR/WebAudio.

The hardware-dependent parts are implemented as native bindings to Javascript. Exokit Engine uses GLFW for contexts, OpenGL for graphics, OpenVR for VR, ARCore for mobile AR, Leap Motion for hands detection, and a lot more, check out our [Integrations](http://docs.webmr.io/docs/techIntegrations.html) page for a more complete list.

## Embeddability

Exokit Engine runs on Windows, OSX, and Linux.

You can `require('exokit')` into another Javascript environment.

As far as the operating system is concerned, Exokit is a game. You can link Exokit to other apps such as webcam software, the Magic Leap simulator, and more.

## Exensibility

Because Exokit Engine is a node module, the browser is a site. You can use any module from `npm` inside of Exokit.

Additionally, you can use native code and libraries via native bindings. Exokit Engine is especially well suited to binding C/C++ APIs to the web stack.

## Data flowchart
<br>

![Flow Chart](https://raw.githubusercontent.com/ChrisEddy/webmr-docs/master/website/static/img/docsImages/FlowChart.svg?sanitize=true)

