---
title: systemctl
tags: []
updated: 2021-09-30
categories: []
---

#### Display boot chain in Systemd
```bash
systemd-analyze
```

#### List boot services
```bash
systemctl list-unit-files --type service
```

#### Display total service enabled.
```bash
systemctl list-unit-files -t service | grep enabled | wc -l
```

#### Display all Loaded and active units.
```bash
systemctl list-units
```

#### Display all unit files that are on the system.
```bash
systemctl list-unit-files
```

#### Enable systemd service at boot.
```bash
systemctl enable <ServiceName>
```

#### list dependencies for unit
```bash
systemctl list-dependencies <UnitName>
```

#### list units that are dependent on a unit.
```bash
systemctl list-dependencies <UnitName> --reverse
```