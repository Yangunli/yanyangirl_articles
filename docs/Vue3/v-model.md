# [vue] v-model

> v-model provides us with a two-way binding
> The v-model two-way binding functionality could actually be acheived with a combination of v-bind:value and v-on:input:

```
<div id="app">
  <input type="text" v-model="inpText"> //input綁定v-model
  <p> {{ inpText }} </p> //使用該v-model的值
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    data() {
      return {
        inpText: 'Initial text'
      }
    }
  })
  app.mount('#app')
</script>

```
