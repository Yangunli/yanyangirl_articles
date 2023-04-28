# [JS] math methods

#### 取最小值

```js title="Math.min( )"
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1
// 最大值就改成Math.max()
```

#### 無條件捨去

```js title="Math.floor( )"
// 無條件捨去
console.log(Math.floor(5.95));
// Expected output: 5
console.log(Math.floor(5.05));
// Expected output: 5
```

#### 無條件進位

```js title="Math.ceil( )"
console.log(Math.ceil(7.004));
// Expected output: 8
console.log(Math.ceil(-7.004));
// Expected output: -7
```

#### 四捨五入

```js title="Math.round( )"
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5
```

#### 介於 0~1 隨機數

```js title="Math.random( )"
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1
```

#### 開根號

```js title="Math.sqrt( )"
function calcHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

console.log(calcHypotenuse(3, 4));
// Expected output: 5

console.log(calcHypotenuse(5, 12));
// Expected output: 13

console.log(calcHypotenuse(0, 0));
// Expected output: 0
```

#### 次方

```js title="Math.pow( )"
console.log(Math.pow(7, 3));
// Expected output: 343

console.log(Math.pow(4, 0.5));
```
