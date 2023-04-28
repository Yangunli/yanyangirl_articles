# [JS] object methods

### 阿捏就不用 forEach 了

```js title="Object.entries( )"
const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
```

```js title="Object.values( )"
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
console.log(Object.values("12345"));
// Expected output: Array ["1", "2", "3","4","5"]
//類似split("")
```

** Object.assign(target, ...sources), 只有 target 會改變**

```js title="Object.assign( )"
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

console.log(target, 333, source);
// Expected output: Object { a: 1, b: 4, c: 5 } 333 Object { b: 4, c: 5 }
```
