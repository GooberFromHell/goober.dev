---
title: getent
tags: []
updated: 2021-09-30
categories: []
---

#### get all users that can logon the system with interactive shell.
```bash
for i in $(getent passwd | tr -s ':' ' ' | awk '{ if ( $3 >= 500) if ($3 <= 1019) print $0}' | cut -d ' ' -f1); do getent shadow $i; echo; done
```


#### get all users from database (will not work with sss)
```bash
getent -s <database> passwd
```