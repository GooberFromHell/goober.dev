---
title: 
tags: []
updated: 2021-09-30
categories: []
---#### SMF - Find Milestone
##### <p> - If it errors, the milestone is not set using svcadm and<br>The default milestone is multi-user-server.<p>
```bash
svcprop svc:/system/svc/restarter:default/:properties/options/milestone
```