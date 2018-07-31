---
id: whatisexo
title: What is the Exokit Engine?
sidebar_label: What is the Exokit Engine?
---

 <img src="http://via.placeholder.com/800x600" alt="Diagram of a regular browser engine with 2D garbage and Exokit that only does 3D straight to headset"/>

 > Exokit Engine is an HTML/Javascript engine that runs regular web sites, but only supports 3D via WebGL/WebXR.
 > A window in Exokit is just the contents of a WebGL `<canvas>`.
 
 Exokit Engine is primarily intended for AR/VR/mixed reality applications. It is _not_ based on anoth browser -- specifically it is not a fork of Blink, Gecko, Webkit, or Trident.

 <img src="http://via.placeholder.com/400x300" alt="Cross out other browsers to make it clear this is not a fork"/>
 
 ## Exokit is an Exobrowser.
 
 **Exobrowser** _n._
   - A web browser flipped inside-out.
   - A web browser in which the engine is written in Javascript, so the browser is a site. This site in turn is the browser; it has full access to bindings.

 # No 2D

 Exokit it throws away support for old web technology that is not used in in mixed reality. Exokit is a post-screen Exobrowser engine.
  
  ## Why another browser?

  > Chrome and Firefox are great! Solid at 3D and mixed reality too!
  >
  > But they straddle the 2D and 3D worlds, and something has to give. Your renderloop can't be drawing a synchronous 2D scene while drawing a 3D scene.
  >
  > We needed a browser engine that starts from what a 3D engine can be. Not an engine that starts with 20 years of 2D thinking.

  *We took Exokit back to first principles.*
  
  We didn't start with a 2D browser in order to add MR. We what imagined a runtime for VR would look like on a web stack, and then we did that. We ignored everything else.
  
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

 <img src="http://via.placeholder.com/200x200" alt="Team picture 1"/>
 <img src="http://via.placeholder.com/200x200" alt="Team picture 2"/>
 <img src="http://via.placeholder.com/200x200" alt="Team picture 3"/>

  Avaer Kazmer and friends.
