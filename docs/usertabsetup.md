---
id: usertabsetup 
title: Try Exokit with Reality Tabs 
sidebar_label: For Reality Tabs 
---


1. Visit [get.webmr.io](https://get.webmr.io/) to download Exokit. 

2. Run the downloaded file, and be sure to allow any security clearance the installer might need.
	* (For Linux: `apt-get install build-essential wget python libglfw3-dev libglew-dev libfreetype6-dev libfontconfig1-dev uuid-dev libxcursor-dev libxinerama-dev libxi-dev libasound2-dev libexpat1-dev`)

3. Then let the installer work its magic for a minute or so and congratulations you're (almost) a proud user of Exokit!
	* For Windows Users:
		* Choose your desired folder location (note: if not installing into your main drive then you may have to go into the folder yourself after downloading and find the file 'exokit.cmd')
	* For OSX Users:
		* A window should open with the Exokit app file and your applications folder, simply drag Exokit into that folder.
	* For Linux Users:
If you used the install script all of the above should be in /usr/lib (which is probably in your PATH).

4. Run the exokit application.



## Opening Websites and Examples

* When you run "Exokit Browser" a command prompt and a larger window will open, turn your attention to the larger window. In the window you will see a VR keyboard for our VR users (or legacy if you have time to kill), and our Home enviroment navigation menu.
* If you navigate to "Apps" you'll see a list of approved VR links from our [reddit](https://www.reddit.com/r/exokit/). Go ahead and enter any VR website URL, or point-and-click on any of the sites on the populated list.
* You can also run ["Exokit Command Prompt"](#exokit-s-command-prompt)  and get to sites from there.

**Controls**

* When on a "non-VR only" (e.g. Magic Leap) form of entering Exokit, you will not be immediatly loaded into VR. Go ahead and hit enter VR with the `i` key, enter VR on a Magic Leap with the `o` key.
* For Menu Access (the homepage URL bar and keyboard), "E" opens menu if using a keyboard, with a HTC Vive, accessing the menu comes by hitting the menu button ABOVE the thumb trackpad.

## Examples

Let's open a ThreeJS website in Exokit.

Go to the ThreeJS [examples](https://threejs.org/examples/) page using your web browser of choice (for now).

These ThreeJS examples will run in Exokit, so lets get into it. Let's try the first one, [animation/cloth](https://threejs.org/examples/#webgl_animation_cloth). Observe that this is a WebGL site, and that it renders fine in Chrome:

![three.js](https://i.imgur.com/hClVGcH.png)

Now we're going to open this same site using Exokit.

1. Open your Exokit Browser:

![three.js](https://i.imgur.com/ISM7VwI.png)

2. Then simply paste (Command-V) or type the link of the example into the URL bar:

![three.js](https://i.imgur.com/xN7ToE2.png)

3. Go ahead and hit enter (in VR or on your own keyboard), and the example should load up:

![three.js](https://i.imgur.com/Y3McpFC.jpg)

## Exokit's Command Prompt

Open Exokit Command Prompt and run the command, `.help` :

![three.js](https://i.imgur.com/QQjQEQr.png)

To get to links from the command prompt itself, punch in the command: `.go`, then simply put in your desired URL.

## More info

If you get stuck, check out our [Resources and Support page](Support.md). To continue the fun, check out our [User Guides section](opensite.html). If you'd like to contribute, see [How to Contribute](contribute.md).

