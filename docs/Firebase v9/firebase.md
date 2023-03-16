# Firebase Hosting

_這篇文章需要有基礎的 Firebase 知識_

### Configure Hosting behavior

在 firebase init 的階段時，會設定讓 firebase 支持 SPA。實現在使用 BrowserRouter 的情況下，支持任何外連子頁面需求。
但 init 的 SPA 設定只有支援到第一層。倘若 router 有很多層的話，依舊是會報錯的。要解決這個問題，必須進 **firebase.json** ，改變 rewrites rule 的設定。

> [官方文件裡的相關內容](https://firebase.google.com/docs/hosting/full-config "游標顯示")

```js title="firebase.json"

{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [

      {
        "source": "**",
        "destination": "/index.html"
      },

//新增的設定

      {
        "source": "/taipei{,/**}",
        "destination": "/index.html"
      },

    ]
  }
}
```
