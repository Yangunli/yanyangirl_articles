# [react] Hooks: useReducer

> useReducer is a React Hook that lets you add a reducer to your component.

```
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

```js title="Simple state"
const reducer = (state, action) => {
  switch (action.type) {
    //case 最多5個
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "reset":
      return initialValue;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const [state, dispatch] = useReducer(reducer, initialValue);

<input
  onChange={(e) => dispatch({ type: "email", payload: e.target, value })}
/>;
```

```js title="Complex state"
const reducer = (state, action) => {
  switch (action.type) {
    //case 最多5個
    case "data":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "reset":
      return initialValue;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

dispatch({
  type: "data",
  payload: { key: event.target.name, value: event.target.value },
});

const [state, dispatch] = useReducer(reducer, initialValue);
```

> [參考資料 1: React.dev ](https://react.dev/reference/react/useReducer "游標顯示")
