# [vue] ref

- 直接往 DOM 下手的存在

```
<template>
  <h1>Example</h1>
  <p>Click the button to put "Hello!" as the text in the green p element.</p>
  <button @click="changeVal">Change Text</button>
  <p ref="pEl">This is the initial text</p>
</template>

<script>
  export default {
    methods: {
      changeVal() {
        this.$refs.pEl.innerHTML = "Hello!";
      }
    }
  }
</script>
```

```
//把某個ref數值改成另一個的input  value
<template>
  <h1>Example</h1>
  <p>Start writing inside the input element, and the text will be copied into the last paragraph by the use of the '$refs' object.</p>
  <input ref="inputEl" @input="getRefs" placeholder="Write something..">
  <p ref="pEl"></p>
</template>

<script>
  export default {
    methods: {
      getRefs() {
        this.$refs.pEl.innerHTML = this.$refs.inputEl.value;
      }
    }
  };
</script>
```
