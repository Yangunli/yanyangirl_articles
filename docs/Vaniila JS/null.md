# [JS] null & undefined

### 所以我說那個 null 和 undefined

```js title="Diffrence with Null & Undefined"
typeof null; // object (bug in ECMAScript, should be null)
typeof undefined; // undefined
null === undefined; // false
null == undefined; // true
```

有時我們會使用 isNaN()去判斷是不是 NaN，這也會發現 null 和 undefined 的差別。

## isNaN()

```js title="Is it not a number ?"
isNaN(null); //false
isNaN(undefined); //trur
isNaN(123); //false
isNaN("123"); //false
isNaN("0"); //false
isNaN("string"); //true
```

因為是虛無，所以問是不是就返回否，確定不是 NaN。(但不表示它一定是數字)

## Number.isNaN()

_The Number.isNaN() method determines whether the passed value is NaN and its type is Number._

```js title="Number.isNaN()"
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

Number.isNaN("NaN"); // false
isNaN("NaN"); //true
Number.isNaN(undefined); // false
isNaN(undefined); //true
Number.isNaN({}); // false
isNaN({}); //true
Number.isNaN("string"); // false
isNaN("string"); //true
```
