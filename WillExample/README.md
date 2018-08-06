# Angular 常用指令

## npm

### npm基本指令

將套件安裝在專案裡

`npm install`

更新案裡的套件

`npm update`

列出專案裡的套件

`npm ls`

## 啟動開發伺服器

`npm start`

開啟網頁: `http://localhost:4200/`

## 加入靜態檔案

將檔案放置src目錄下，手動更新angular.json

EX: 增加api資料夾、blog-index.html

```json

"assets": [
                "src/favicon.ico",
                "src/assets",
                "src/api",
                "src/blog-index.html"
            ]

```

## ng

查詢可建立哪些component類型

`ng generate -h`

建立component

`ng generate component page1`

`ng g c page1`

部屬

`ng build`

部屬(minify))

`ng build --prod`

## ng Biding

### 內嵌繫結 (interpolation)

```JS

{{property}}

```

### 屬性繫結 (Property Binding)

```JS

[property] = 'statement'

```

### 事件繫結 (Event Binding)

```JS

(event) = 'Method($event)'


//EX:
on-click = 'Method($event)'
(click) = 'Method($event)'

```

### 雙向繫結 (Two-way Binding)

```JS

[(ngModel)] = 'property'

```