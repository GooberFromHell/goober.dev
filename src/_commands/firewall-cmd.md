---
title: firewall-cmd
tags: [unix, security, firewall]
updated: 2021-09-27
categories: [Auditing, Firewall, IPTables]
---


### firewall-cmd

!!! note Notes

#### Firewalld Daemon

-   Enabled by default on systemd
-   Applicaitons and services can all their own rules and exceptions to the firewall.
-   The daemon enables the separation of the runtime and permanent configurations.
-   The Daemon allows for dynamic amanagement of the firewall and provides support fo the firewall zones.

#### Rule Matching Order

-   The Source IP address is checked first.
-   The Interface is check if there is no matching rule for the source IP.
-   If neither the source or reciving interface match, the default zine is used.
-   **DENY** takes precidence over **ALLOW**. 

#### Saving Configuration

-   Running configuration is lost if the service is stoped or rebooted before saving.
-   Permanent configuration is read at start or at daemon reload.

#### Firewall-cmd

-   Supports tab completion.

!!!

---

#### Zones



-   trusted
-   home
-   internal
-   work
-   public
-   external
-   dmz
-   block
-   drop


---

#### Configuration Files



| File                          | Purpose                                                                                                                                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /usr/lib/firewalld/           | Defaukt configuration files for firewalld                                                                                                                                                                |
| /etc/firewalld/               | - User defined and system firewalld configurations<br>- If there are no user configurations there may not be any xml files.<br>- If there are user configurations, the file will be names firewalld.conf |
| /etc/firewalld/firewalld.conf | User defined configurations. (Mihgt not exist)                                                                                                                                                           |
| /etc/firewalld/services       | User defined services and rules.                                                                                                                                                                         |
| /etc/firewalld/zones          | User defined Zones and rules.                                                                                                                                                                            |



---

#### Syntax


##### Rich Syntax

Resource: **[Rich Syntax Arguments](<(https://fedoraproject.org/wiki/Features/FirewalldRichLanguage#Handle_rich_rules_with_the_command_line_client)>)**

```bash
firewall-cmd --permanent --zone=public --add-rich-rule='rule family=ipv4 source address=10.8.8.0/24 masquerade'
```


```bash
firewall-cmd --add-rich-rule='rule family=ipv4 source address=192.168.1.0/24 service name=ssh log prefix="SSH Access" level="notice" accept'
```

##### Direct Syntax

```bash
firewall-cmd --permanent --direct --add-rule ipv4 nat POSTROUTING 0 -o enp0s8 -j MASQUERADE
```



---

#### Commands



!!! error IMPORTANT!
Always add **--permanent** to save changes to the firewalld <br>configuration, after Making changes.
!!!

#### View rules

```bash
firewall-cmd --list-all-zones
```

### List direct rules
```bash
firewall-cmd --direct --get-all-rules
```

#### Reload firewalld with zero down-time.

```bash
firewall-cmd --reload-
```

### Block Outbound traffic
```bash
## Can add --dport, --sport
firewall-cmd --direct --add-rule ipv4 filter OUTPUT 0 -p tcp -m tcp -d <IPAddress> -j DROP
```

#### Set Default Zone

```bash
firewal-cmd -set-default-zone=<Zone>
```

#### Route all Traffic from a network into a zone.

```bash
firewall-cmd --permanent --zone=<Zone> --add-source=<NetWorkOrHost>/<24,etc..>
```

#### Route specific service into a zone

```bash
firewall-cmd --permanent --zone=<Zone> --add-service=<ServiceByName>
```
 
### Remove a sevice from DEFAULT zone
```bash
firewall-cmd --remove-service=<ServiceName>
```

