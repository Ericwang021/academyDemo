# 📁 component react 组件

1. 開發元件放置在 components 之下
2. import 規則 -
   - 由上至下以 A ~ Z 按順序排列。
   - scss 優先引入，在引入 react。
   - component 以大駝峰式命名，其餘以小駝峰式命名。

# 📁 static 靜態文件

設計師所提供客製化 icon、圖檔皆放置在 static 之下。

1. static 放置 public 檔案之下。

# 📁 styles 各頁樣式

此專案共用的 components style，如果是共用元件請以 css module 來進行開發，命名規則小駝峰式命名法(lower camel case)，並將元件盡可能寫成 @mixin 成為一個模板，並在該模版下方@include 該模板元件。

`1. browser` -

- 響應式(RWD)Style 斷點判斷

`2. components` -
此專案共用元件，並以 css module 方式開發。如該元件在頁面上有重複使用兩次（含）以上，建議將 styles 寫至 components 之下

- avatar - 大頭照共用元件，分別為 Sm (20x20) | Ml (30x30) | Lg (40x40) | Xl (60x60)。
- button - 此專案共用 button 例：CTA button 。
- commentDiscuss - 問題與討論共用 styles。
- common - 頁面上重複使用到的 styles 。

`3. global` -

- color - 全域顏色宣告明度彩度  ０為最亮，數字越高顏色越重。如該色域使用到兩次（含）以上，建議建立一個色彩群組。
- reset - format global styles。
- variable - desktop/mobile font-size 宣吿、font-weight 宣告、box-shadow 宣告
- fontSize - 將文字大小的宣告，以 map-get 的方式來開發引用。

`4. pageStyle` -放置 page 所使用的 scss 檔案。

`5. styles` - 引入全站共用 scss 例：reset.scss\pageStyle 下的 scss。

# 📁 next.js 開發套件

- koa
- koa-router

# 啟動步驟

- npm install
- npm start

# 📁 使用套件

- moment.js - formate Date
- react-player - import Video
- react-icons-kit - iconFont
- material-design-icons - Ui component library

# 📁coding style setting

## prettier - prettierrc.js

```jsx
trailingComma: 'all',
tabWidth: 2,
semiColon: true,
singleQuote: true,
arrowParens: 'always',
```

- trailingComma - 盡可能尾隨逗號
- tabWidth - 縮排空格數以兩格為標準
- semiColon - 結束時要加分號
- singleQuote - 使用單引號
- arrowParens - 總是包括號
