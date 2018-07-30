---
id: whatisexo
title: What is the Exokit Engine?
sidebar_label: What is the Exokit Engine?
---

 Exokit Engine is a post-screen web browser engine.

 <img src="http://via.placeholder.com/800x600" alt="Diagram of a regular browser engine with 2D garbage and Exokit that only does 3D straight to headset"/>

 It's an HTML/Javascript engine that runs regular web sites. Except the sites must be 3D via WebGL/WebXR. Exokit engine is primarily intended for AR/VR/mixed reality applications. It is _not_ based on anoth browser -- specifically it is not a fork of Blink, Gecko, Webkit, or Trident.
 
 Exokit is an exo-browser; it flips the regular browser inside out. The engine is written in Javascript as a Node module, so the browser is a site. This site itself is the browser; it has the full power of OpenGL and other native bindings. Additionally, the engine doesn't do most "browser things", like 2D web pages.

 Instead it throws away support for old web technology nobody cares about in mixed reality, and only does futuristic things. It's a post-screen exo-browser engine.
  
  ## Why another browser?

  Chrome and Firefox are great! Solid at 3D and mixed reality too!
  
  But they straddle the 2D and 3D worlds. This impossible to reconcile in the technology. 2D in the browser has 20 years of history -- DOM, HTML, CSS, scripting, and literally hundreds of specifications that you _have_ to implement to be a 2D browser.
  
  This is *much* harder than making a 3D browser engine! And it makes the task of building a great 3D browser engine impossible.

  So we took Exokit back to first principles. We _didn't_ start with a 2D browser to slap some VR into it. We what imagined a runtime for VR would look like on a web stack, and then we did that. We ignored everything else.
  
  The result is that Exokit is the fastest, smallest, and most flexible 3D browser engine. It's not magic; Exokit simply does nothing between your code and your headset.

  Additionally, we don't know which way the magical winds of mixed reality will blow. That's why Exokit is uniquely written in Javascript -- so we can add API and hardware support in a weekend. We sometimes do that ;).

  # So it's written from scratch?

  Yes. We use an npm module for HTML parsing, resurrected an old OpenGL binding from Github, WebAudio extracted out of Chrome, and so on. And we glued it together and wrote a custom binding to the HTML and Javascript that powers your web site.

  # What's the platform support?

  Exokit Browser is just Javascript with some C++ bindings to libraries, such as OpenGL, FFmpeg, Skia, OpenVR, and others. It builds on Window, OSX, and Linux. It binds to Vive, Oculus, Leap Motion, Magic Leap, and keyboard/mouse.

  # What's the status?

  Not 1.0. We need to improve site support and testing more until we call it.

  If you have a site that doesn't work, there's high chance it's a silly corner case. We encourage you to [file an issue](https://github.com/webmixedreality/exokit/issues/new).

  # Can I use it?

  Sure! It's [open source on Github](https://github.com/webmixedreality/exokit).

  # Why should I use it?

  - You want your WebGL/WebXR to run fast.
  - You want the hot new web APIs.
  - You want to add your own integrations -- including native -- into a browser environment.
  - You want a lightweight browser as a hackable node module.
  - You want to combine the web with a 3D engine like Unity.

  # Why should I *not* use it?

  <img src="http://via.placeholder.com/800x300" alt=""/>

  - You're just looking for a "web browser".
  - You don't care about 3D or mixed reality.
  - You're looking for strict and/or legacy standards support.

  # Can I embed it?

  [It's a node module](https://github.com/webmixedreality/exokit/blob/master/package.json). Have fun.

  # Who made it?

 <img src="http://via.placeholder.com/800x300" alt="Team pctures"/>

  Avaer Kazmer and friends.
