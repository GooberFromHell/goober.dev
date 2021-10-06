---
title: auditpol
os: windows
tags: [auditing, windows]
updated: 2021-09-22
categories: [auditing]
---

```batch
#### Get all audit policies
auditpol /get /category:*
```
```batch
#### Change subcategory policy
auditpol /set /subcategory:"<SubCategoryName>","<SubCategoryName>" /failure:<enable|disable> /success:<enable|disable>
```
```batch
#### Check if Auditing is enabled.
psexec -s reg query "HKEY_LOCAL_MACHINE\Security\Policy\PolAdtEv"
```