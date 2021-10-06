---
title: iptables
tags: [security, firewall, unix, iptables]
updated: 2021-09-30
categories: [unix]
---

:::info
### Set default policys
$TableName | FILTER, NAT, MANGLE, RAW
$Chain 	| FORWARD, OUTPUT, INPUT
$Policy | ACCEPT, DROP, REJECT
$Rule | [user defined IPTables rule](https://ipset.netfilter.org/iptables.man.html)
$Target |  ACCEPT, DROP, REJECT, LOG, DNAT, SNAT, REDIRECT
:::

```bash
# Append rule to table.
iptables -t $TableName -A $Chain $Rule -j $Policy
```

```bash
# View rules 
iptables -L -n -t $TableName --line-numbers -L
```

```bash
# Delete a rule.
iptables -t $TableName -D $ChainName $LineNumber
```

```bash
# Search for Statefull firewalls in network.
tcpdump -s0 -nn net $TargetsNetwork & nmap -sA -Pn $TargetIP -p $Ports && kill %
```

```bash
# Flush all rules
iptables -t $TableName -F 
```

```bash
# Remove all user-defined chains
iptables -t $TableName -X
```

```bash

iptables -t $TableName -P $Chain $Policy 

```