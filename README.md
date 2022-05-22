# vuetify

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
## 初期セットアップはこれを参考に実施
https://reffect.co.jp/vue/vuetify-for-beginner

## エラー対処法
* vuetify Component name "Home" should always be multi-word
  * vue.config.jsに以下を記載する。
  ```
  const { defineConfig } = require('@vue/cli-service')
  module.exports = defineConfig({
    lintOnSave:false, // 追記
    transpileDependencies: [
      'vuetify'
    ]
  })
  ```


