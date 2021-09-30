---
title: route
tags: [networking, unix, smf]
updated: 2021-09-22
categories: [Networking]
---

```bash
route add default <IPAddress>
   # Add default route
```

```bash
route delete default <IPAddress>
   # Remove default route
```

```bash
route add <RoutedNetwork>/<Netmask> <GatewayToTake>
   # Add route
```

```bash
route delete <RoutedNetwork>/<Netmask> <GatewayToTake>
   # Delete route
```

```bash
route add default <IPAddress>
   # Add default route
```

```bash
route del default <IPAddress>
   # Remove default route
```

```bash
route add -net <RoutedNetwork> netmask <Netmask255Form> gw <Gateway>
```

```bash
route del -net <RoutedNetwork> netmask <Netmask255Form>
   # Delete route
```

```bash
route delete default <OldDefaultGatewayIP>
   # Change default gateway.
route add default <NewDefaultGatewayIP>
```

```bash
route add <Network/CIDR> <LocalInterfaceIP>
   # Add static route.
```

```bash
route delete <Network/CIDR> <LocalInterfaceIP>
   # Delete static route.
```
