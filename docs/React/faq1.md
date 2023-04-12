# Props & State

在 React 裡使用類似 innerHTML 的方法 =>dangerouslySetInnerHTML

```js title="dangerouslySetInnerHTML 程式範例"
function createMarkup() {
  return { __html: "First &middot; Second" };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

**Reconciliation is dependent on:**

- Virtual Dom
- Diffing Algorithm(用 key prop 分辨是不同的 node)

setState 在 event handler 中是非同步

<details>
  <summary>Props & State</summary>
  <ul>
    <li>JS objects/changes trigger a render update</li>
    <li>If your Component generates different outputs for the same combination of props and state then you're doing something wrong.</li>
    <br />

  </ul>
</details>

> Cannot change its props, but it is responsible for putting together the props of its child Components.

> Manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.

prop 在自己那層可能是 state，但在 children component 會需要使用，傳遞後被稱為 prop。主要是因為 React 是 single data flow，只能 prentNode 將 prop 傳遞給 childNode，或是仰賴 useContext 將更遙遠的祖先層(?)傳遞數值。
