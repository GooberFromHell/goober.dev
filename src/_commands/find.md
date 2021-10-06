---
title: find
tags: []
updated: 2021-09-30
categories: []
--- 

#### Display all symlinks in a directory recursively.
```bash
find . -type l -ls
```

#### Display all syslinks in a single directory .
```bash
find . -maxdepth 1 -type l -ls
```

#### Search the entire system for somthing.
```bash
find / -name <filename>
```

#### Search for files and run a command on each one.
```bash
find <directory> -name <FileName>.<Extension> -exec <CommnadToRun> \{\} \;
```
