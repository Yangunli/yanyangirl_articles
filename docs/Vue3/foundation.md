# [vue] Foundation

All \*.vue files only consist of three parts: ` <template> / <script> / <style>`

- Computed props updates automatically when a dependency change.
- methods 就是 function group
- computed 是把寫在{{}}裡的三元運算子提出來
- 寫在`<template>`裡的 Componet 要將駝峰型轉成串型(?) CompOne.vue -> comp-one
- key props 和 react 的 key props 差不多，都是針對 diff 演算法的要求。因此必須是獨立的，不建議使用 index

```
/// 偵測被綁定v-model的狀態而return不同的值,在這裡v-model是指chbxVal

data() {
  return {
    chbxVal: false
  }
},
computed: {
  isImportant() {
    if(this.chbxVal){
      return 'yes'
    }
    else {
      return 'no'
  }
}

```

```
// exlude除了CompOne以外，記得更新後的state。inlude則是只記憶CompOne

<KeepAlive exlude="CompOne">
  <component :is="activeComp"></component>
</KeepAlive>

<KeepAlive include="CompOne">
  <component :is="activeComp"></component>
</KeepAlive>


```

**Fetch data in vue**

```
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("bigLandMammals.json");
      this.data = await response.json();
    }
  }
};
```
