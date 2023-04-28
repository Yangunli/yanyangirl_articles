# [JS] deep copy & shallow copy

```js title="Deep Copy 比較單純的場景"
let newObj = JSON.parse(JSON.stringify(oldObj));
```

**Deep copy -> value**

**Shallow copy -> refrence**

> If undefined, a function, or a symbol is encountered during conversion it is either omitted (when it is found in an object) or censored to null (when it is found in an array). JSON.stringify can also just return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined). \_MDN

也就是說，`undefined`、`function`、`symbol` 會在轉換過程中被忽略~

> In JavaScript, standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) do not create deep copies (instead, they create shallow copies). \_MDN

即便看起來像是 deep copy，它們還是 shallow copy(只能第一層 deep copy)~

```
const myDeepCopy = structuredClone(myOriginal);
```
