# 一些 React 題目

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
- Diffing Algorithm(用 key 分辨是不同的 node)

setState 在 event handler 中是非同步

> Both props and state are plain JS objects
> Both props and state changes trigger a render update
> Both props and state are deterministic. If your Component generates different outputs for the same combination of props and state then you're doing something wrong.

> props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned.
> A Component cannot change its props, but it is responsible for putting together the props of its child Components.
> A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.

prop 在自己那層可能是 state，但在 child 會需要使用，傳遞後被稱為 prop。主要是因為 React 是 single data flow，只能 prentNode 傳給 childNode，或是仰賴 useContext 將更遙遠的祖先層(?)傳遞數值。
