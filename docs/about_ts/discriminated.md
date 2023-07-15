# [TS] Discriminated type

```
//Discriminated type

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "square"; size: number };

```

```
//一般的寫法

type Shape ={
    radius?: number;
    width?: number;
    height?: number;
    size?: number }
```
