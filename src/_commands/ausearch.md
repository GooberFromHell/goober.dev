---
title: ausearch
tags: [unix, auditing, security, logs]
updated: 2021-09-27
categories: [Auditing]
---

### ausearch

#### find user accoutn creation dates and times
```bash
ausearch -x useradd -i 
```
```bash
aureport -m | grep <UserName>
```

#### find when a user ran a particular command.
```bash
ausearch -m USER_START -x <Command> -ts DD/MM/YYYY HH:MM:SS | grep <UserName>
```