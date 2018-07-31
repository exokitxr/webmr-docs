---
id: devsetup 
title: Setting up a development environment
sidebar_label: Development environment
---

 <img src="http://via.placeholder.com/800x300" alt="Diagram of engine cloned from Github, running on machine with some code view, and machine linked to various devices"/>

The main project repository is at [`webmixedreality/exokit`](https://github.com/webmixedreality/exokit). You can clone it the regular way:

```
git clone https://github.com/webmixedreality/exokit.git
```

> Note: Exokit Engine and Exokit Browser both run off of the same codebase.

## Install and build

All of the Exokit depedencies and native code can be build with `npm install`:

```
npm install
```

## Linux dependencies

> Linux additionally requires that you install some local dependencies. For `debian`/`ubuntu` they are:
> ```
> apt-get install -y \
>   build-essential wget python libglfw3-dev libglew-dev libfreetype6-dev libfontconfig1-dev uuid-dev libxcursor-dev libxinerama-dev libxi-dev libasound2-dev libexpat1-dev
> ```

#### Notes

1. Exokit's bindings code is a native module build using the [`binding.gyp` recipe](https://github.com/webmixedreality/exokit/blob/master/binding.gyp).
1. Exokit downloads and uses several prebuilt dependencies. They have been pre-compiled for all supported architectures and uploaded to npm. They self-extract themselves with .

# Run Exokit Engine

> Exokit Engine is just a node module, so you can run it with node.

From the `exokit` git clone directory, do:

```
node .
```

This will start the Exokit Engine CLI.

```
[x] // enter code here
```

Here, you can enter:

- A URL, which will trigger navigation
- `<dom>` elements
- `dom = <assignment>` expressions
- Commands to run in the context of the `window`

> Note: This is the same experience as you get with the Exokit installer when running `Exokit Engine CLI`.

## Debugging

You can use the regular Node debugging tools to debug Exokit Engine.

To start Exokit in inspector mode from the `exokit` git clone directory:

```
node --inspect .
```

After the above you should be able to use `chrome://inspect` in the Chrome browser to connect to the `node` running Exokit Engine. You can use this to:

1. Inspect values from the browser
1. Set deugging breakpoints
1. Capture heap snapshots
1. Capture CPU profiles of live sites

#### Example session

 <img src="http://via.placeholder.com/800x300" alt="Example gif or video running the above procedure"/>

#### Wait for attach

You may also be interested in starting Exokit Engine so that it doesn't run until you get a chance to attach the inspector. For that you can use:

```
node --inspect-brk .
```

## Contributing

See something? Please do [file an issue](https://github.com/webmixedreality/exokit/issues)!

Pull Requests are very much welcome as well.

#### Troubleshooting

- `<SkImage.h> not found`, or a missing header: this means a prebuilt dependency did not extract. Clear your `npm`/`yarn` cache, `rm -Rf node_modules` and `npm install` again.


