---
title: sed
tags: []
updated: 2021-09-30
categories: []
---
#### Replace exact string in file.
```bash
sed -i 's/\<StringToFind\>/StringReplaceWith/g' <PathToFile>
```

#### Comment lines that contain TEXT.
```bash
sed -i '/<pattern>/s/^/#/g' file
```

#### Uncomment lines that contain TEXT.
```bash
sed -i '/<pattern>/s/^#//g' file
```
