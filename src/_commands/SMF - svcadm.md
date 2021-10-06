---
title: 
tags: []
updated: 2021-09-30
categories: []
---#### Stop a service and remove it from boot startup.
```bash
svcadm disable svc:<PathToServiceExecuable>
```

#### TEMPORARALLY - Stop a service and remove it from boot startup.
```bash
svcadm disable  -t svc:<PathToServiceExecuable>
```

#### Changes to milestone.
```bash
svcadm milestone multi-user
```

