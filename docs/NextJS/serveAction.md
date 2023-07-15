# [Next.js] Server action

- Server Actions 是 13.4 推出的 alpha feature
- 由於是 alpha feature，必須在 next.config 的 experimental 添加 serverActions 的設定，未添加會報錯。
- 使用方式是在 async function 裡面加入'use server'，便可使用

  > Create a Server Action by defining an asynchronous function with the "use server" directive at the top of the function body.

```js title="next.config.js"
module.exports = {
  experimental: {
    serverActions: true,
  },
};
```

```js title="Server action"
export async function consolelog() {
  "use server";
  console.log("hello");
}

// When using a top-level "use server" directive, all exports will be considered Server Actions.

("use server");

export async function consolelog() {
  console.log("hello");
}
```

### action 搭配 formAction

<details>
  <summary>action</summary>
  <div>
    <div>You can use React's action prop to invoke a Server Action on a form element. Server Actions passed with the action prop act as asynchronous side effects in response to user interaction.</div>
  </div>
</details>

<details>
  <summary>formAction</summary>
  <div>
    <div>You can use formAction prop to handle Form Actions on elements such as button, input type="submit", and input type="image". The formAction prop takes presedence over the form's action.</div>
  </div>
</details>

[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#convention)

### startTransition

不使用 action 搭配 formAction，使用 startTransition。

> You can achieve this by using startTransition provided by the useTransition hook, which can be useful if you want to use Server Actions outside of forms, buttons, or inputs.
