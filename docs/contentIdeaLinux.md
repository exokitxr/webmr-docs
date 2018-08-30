---
id: Linux
title: Linux Startup
sidebar_label: Linux Startup
---

Linux Startup
For Devs: apt-get install libglu1-mesa-dev uuid-dev to run the build

### Troubleshooting

- /usr/lib/x86_64-linux-gnu/libstdc++.so.6: version GLIBCXX_3.4.22 not found

- This means your Linux goes not include the glibc needed at runtime. It might be fixed by either doing the following or equivalent for your package manager.

`sudo apt-get update`
`sudo apt-get disy-upgrade -y`

- Alternatively you might need to use a newer Linux release. This problem has been encountered in Ubuntu LTS versions. See also: https://stackoverflow.com/questions/43070900/version-glibcxx-3-4-22-not-found
