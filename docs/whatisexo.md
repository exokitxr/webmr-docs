---
id: whatisexo
title: What is the Exokit Engine?
sidebar_label: What is the Exokit Engine?
---

 Exokit Engine is a post-screen web browser engine.

 The engine only does 3D, and it's intended for AR/VR and other mixed reality applications. It is _not_ based on any other browser -- it's not a fork of Blink, Gecko, Webkit, or anything else.

 <img src="http://via.placeholder.com/800x600" alt="Diagram of a regular browser engine with 2D garbage and Exokit that only does 3D straight to headset"/>
 
 Exokit is an exo-browser; it flips the regular browser inside out. The engine is written in Javascript as a Node module, so the browser is basically a site. The engine doesn't do most "browser things", like 2D web pages.

 Instead it throws away support for old web technology nobody cares about in mixed reality, and only does futuristic things. It's a post-screen mixed reality exo-browser engine.
  
  ## Why another browser?

  Chrome and Firefox have great browser engines, but they straddle the 2D and 3D worlds. These worlds are impossible to reconcile. 2D in the browser has 20 years of history. You have DOM, HTML, CSS, scripting, and hundreds of other specifications that you _have_ to implement to be a 2D browser.
  
  This is *much* harder than making a 3D browser engine! And it makes the task of building a great 3D browser engine impossible.

  So we took Exokit back to first principles. We _didn't_ start with a 2D browser so we could slap some VR into it. We imagines a runtime for VR would look like on a web stack, and then we did that. We ignored everything else.
  
  The result is that Exokit is the fastest, smallest, and most flexible 3D browser engine. Exokit does almost nothing between your code and your headset.

  Additionally, we don't know which way the magical winds of mixed reality will blow. That's why we wrote Exokit in Javascript -- so we can add and remove APIs in a weekend. We sometimes do that ;).

  # What's the platform support?

  Exokit Browser is just Javascript with some C++ bindings to libraries, such as OpenGL, FFmpeg, Skia, OpenVR, and others. It binds to Vive, Oculus, Leap Motion, Magic Leap, and keyboard/mouse on Windows, OSX, or Linux.

  ## Who is Using This Thing?
  
  Users get the benefits of free, persistent, multi-user content experience on the web at a low switching cost with plenty of entertainment and social opportunities. Developers of the platform get value from costless customer outreach to very large engine/device matrix with ease of integration (Unity, Unreal, web) with standard web APIs and future planned hosting products and payments platform. 

  # Who made it?

  Avaer Kazmer and friends. The engine is open source.

  ## Why Another VR/AR Engine?
  
  We realize that between the big ones now, there is a lot of comfort in knowing Chrome and Firefox are at the top and there is a lot to be said about the progress that they have brought to the web browsing field. However, at this point moving forward for them into new fields and platforms is like towing a glacier with a car and rope, it takes too long and leaves people wanting.
   
  With new innovations in web development, VR, and MR (e.g. Magic Leap, Leap Motion) we here at Exokit see a huge need for fast, easy to develop and use, web based needs. We aren't trying to be a normal browser, we are **made** specifically for delivering the fastest and highest quality web VR/MR/AR experiences and have no intention of changing that goal.
  
  ## What Sites Work?
  
  Well the goal is that we can say, "All of them." As of now however we are chugging our way through getting more VR web experiences running smoothly, as well as VR web apps like Emukit (our Web-VR-Console Emulator). Of course you can always join us on [Twitch](https://www.twitch.tv/avaer), [Discord](https://discord.gg/cf5tfTV), or [Slack](https://exoslack.now.sh/) if you have some specific use case which seems to not work, you could also submit an issue on [Github](https://github.com/webmixedreality/exokit),  or better yet submit a PR (we're open source).
  
  ## Give Me the TL;DR
  
We have made and shipped a mixed reality web browser, from scratch, that can run WebVR/XR faster than anything else and a Nintendo64 immersive emulator (Emukit) that runs on top of the Exokit Engine. The challenges we face are not tech related. The team going forward will face stiff competition from people with way more money to throw at acquisition, other platform owners not wanting to play ball and rejecting us, marketing resources, and not having enough money to hire developers.
 
 With your help as a user or a developer or even as someone that just hangs out with us in the Twitch chat or Discord, that can all change.

