# HTTP

### HTTP Cookies

RFC 6265 定義了 cookies 的工作方式，當 HTTP 請求一個服務時，一個伺服器可以發送一個 Set-Cookie 的 HTTP header 回應。客戶端將以 header 的方式回傳 cookie 值給每個請求的同 一個伺服器，Cookie 也會在某些時間進行更新，或是限制一個實體網域或路徑。

### HTTP Access Control (CORS)

Cross-site HTTP requests 是來自不同網域的資源請求。舉個例子，一個 HTML 網頁從網域 A 從網域 B 請求一個圖片，經由 img 元件。現今的網頁通常會讀取跨站資源，包括 CSS 樣式表、圖片、腳本與其他資源。CORS 允許網頁開發人員的網站響應跨站讀取。

### HTTP Headers

HTTP 訊息檔頭（header）用於描述資源、伺服器或用戶端的行為。可以透過 X- 前綴以增加自定義的專有項目。其他的項目可以在 IANA registry 中找到，其原始定義在 RFC 4229。IANA 同時也維護 新 HTTP 訊息檔頭的提案登記（registry of proposed new HTTP message headers）。
HTTP 請求方法

透過 HTTP 有幾種不同操作方法：GET、POST，或是較少見的請求方法，如 OPTIONS (en-US)、DELETE (en-US)、或 TRACE (en-US)。

### HTTP 狀態碼

HTTP 狀態碼用來表示特定的 HTTP 請求是否已成功完成。回應分為五類：資訊回應、成功回應、重定向、用戶端錯誤、以及伺服器錯誤。

### CSP 指令

Content-Security-Policy 回應檔頭讓網站管理員控制哪些頁面上的資源能被用戶端程式（user agent）載入。除了少數特例外，此政策主要關於指定來源伺服器和腳本程式的端點（endpoints）。
