---
title: dump2fs
tags: []
updated: 2021-09-30
categories: []
---


#### Display filesystem device information.
```bash
dumpe2fs /dev/<Partition/Volume>
```

#### Display partition or volume Superblock information.
```bash
dumpe2fs -h /dev/<Partition/Volume> | sort | more
```