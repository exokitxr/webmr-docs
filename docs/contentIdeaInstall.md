---
id: userappsetup 
title: Run Apps on Exokit 
sidebar_label: For Running Apps 
---

## Install Exokit

1. Visit [get.webmr.io](https://get.webmr.io/) to download Exokit.         

2. Run the downloaded file, and be sure to allow any security clearance the installer might need.
	* (For Linux: `apt-get install build-essential wget python libglfw3-dev libglew-dev libfreetype6-dev libfontconfig1-dev uuid-dev libxcursor-dev libxinerama-dev libxi-dev libasound2-dev libexpat1-dev`)

3. Then let the installer work its magic for a minute or so and congratulations you're (almost) a proud user of Exokit!
	* For Windows Users:
		* Choose your desired folder location (note: if not installing into your main drive then you may have to go into the folder yourself after downloading and find the file 'exokit.cmd')
	* For OSX Users:
		* A window should open with the Exokit app file and your applications folder, simply drag Exokit into that folder.	
	* For Linux Users:
		* If you used the install script all of the above should be in /usr/lib (which is probably in your PATH).


## Install and Run the Emukit Emulator

1. `git clone https://github.com/webmixedreality/emukit.git`

2. `cd emukit` 

3. `npm install` 

4. `npm start`

5. Drop a ROM into the Emulator and begin!

## More info

If you get stuck, check out our [Resources and Support page](Support.md). To continue the fun, check out our [User Guides section](opensite.html). If you'd like to contribute, see [How to Contribute](contribute.md).

