---
title: 
tags: []
updated: 2021-09-30
categories: []
---#### Change interface IP address
```bash
ifconfig <INTERFACENAME> down
```
```bash
ifconfig <INTERFACENAME> <IPADDRESS> netmask <NETMASK> up
```

#### Change Interface MAC Address
```bash
ifconfig <InterfaceName> down
```
```bash
ifconfig <InterfaceName> eth <MACAddress>
```
```bash
ifconfig up
```

#### start DHCO on an interface.
```bash
ifconfig <InterfaceName> dhcp start
```
```bash
ifconfig <InterfaceName> dhcp release
```
