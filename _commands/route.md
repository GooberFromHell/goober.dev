---
title: route
tags: [networking, unix, smf]
updated: 2021-09-22
keywords: [Networking]
---

##### SMF

###### Add default route

```shell
route add default <IPAddress>
```

###### Remove default route

```shell
route delete default <IPAddress>
```

###### Add route

```shell
route add <RoutedNetwork>/<Netmask> <GatewayToTake>
```

###### Delete route

```shell
route delete <RoutedNetwork>/<Netmask> <GatewayToTake>
```

##### Linux Systems

###### Add default route

```shell
route add default gw <IPAddress>
```

###### Remove default route

```shell
routel del default <IPAddress>
```

###### Add route

```shell
route add -net <RoutedNetwork> netmask <br />
<Netmask255Form> gw <GatewayToTake>
```

###### Delete route

```shell
route del -net <RoutedNetwork> netmask <Netmask255Form>
```

###### Change default gateway.

```shell
route add default <NewDefaultGatewayIP>
route delete default <OldDefaultGatewayIP>
```

###### Add static route.

```shell
route add <Network/CIDR> <InterfaceIP>
```

###### Delete static route.

```shell
route delete <Network/CIDR> <InterfaceIP>
```
