# 效能筆記

_什麼時候才會成為調校能者呢?_

### 那些 Lighthouse 給的建議

- Reduce payload size，optimize your images(圖檔縮小但不失真)
- Avoid large layout shifts
  - 會影響畫面大小的尺寸盡可能用絕對數值，降低 layout shifts 的比例
- Reduce unused JavaScript and defer loading scripts until they are required/Minify JavaScript

### 不是 Lighthouse 給的建議

- Caching

- SSG

- 使用 CDN -靜態資源一多就會影響到使用者體驗，CDN cache 可以降低網路延遲
  - 可以透過卸載 CDN 降低網路流量
- CSS 嵌套不要太多層(讀取是由右至左)，可以使用 BEM 寫法增加語義

### React 優化的部分

- web worker(另一個 thread)
- 使用 Profiler API(React Developer Tools)計算效能
- React.lazy(Code-splitting)，將 bundle 拆成多包，需要時再引用
- 只是要包住 child elements 時，使用 React.Fragments
- 不需要 re-render 的地方改用 useRef()
- 使用 React.memo，避免元件(component)不必要的 re-renders
- 使用 useCallback & useMemo (搭配 memo)，前者針對函式(function)，後者針對值(value)
- Windowing or list virtualization in React applications
- Lazy loading images(但有些情況是需要先行載入!!)
- Using immutable data structures
- Using Reselect in Redux to Optimize Rendering
