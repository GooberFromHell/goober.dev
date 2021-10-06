---
title: svcs
tags: []
updated: 2021-09-30
categories: []
---

#### Display servcie status.
```bash
svcs <ServiceName>
```

#### Display a service's dependencies.
```bash
svcs -d <ServiceName>
```
		
#### Display current milestone. 
##### - It will be the one with the most current STIME.
```bash
svcs milestone*
```

#### Dsplay all online services.
```bash
svcs -a | grep online
```