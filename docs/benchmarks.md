---
id: benchmarks
title: Benchmarks
sidebar_label: Benchmarks
---

## Exokit Engine vs Chrome vs Firefox

### Test Subject: [A-Frame's Gunters of OASIS](https://aframe.io/examples/showcase/gunters-of-oasis/)

### How was FPS captured?

- **Exokit Engine** - Using the flag `exokit -hup # home uncapped performance-logging` we uncap the Exokit Engine FPS and log FPS to console.

- **Chrome** - Chrome's Dev Tools built in [FPS meter](https://developer.chrome.com/devtools/docs/rendering-settings).

- **Firefox** - Firefox's FPS meter [FPS meter](https://developer.mozilla.org/en-US/docs/Tools/Performance/Frame_rate).

<div id='myChartContainer'>
    <canvas id="myChart" width="400" height="200"></canvas>
</div>

## Our Test Rig

- **OS** - Windows 10 
- **GPU** - Nvidia GTX 980 
- **CPU** - Intel i7 4709k @ 4.6 ghz
- **RAM** - 16GB @ 1800 mhz

## How do we achieve these gains?

Exokit Engine cuts the fat off of the old-school, deprecated browsers.

With less overhead, and the power of Javascript, we achieve 2-3 times faster speeds compared to old-school browsers.
