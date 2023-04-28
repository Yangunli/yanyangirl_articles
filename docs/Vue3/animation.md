# [vue] animations

`<Transition>` Component 裡放要給進場+離場動畫的 Element

內建的六個 className

- v-enter-from
- v-enter-active
- v-enter-to
- v-leave-from
- v-leave-active
- v-leave-to

```
<template>
  <h1>Add/Remove <p> Tag</h1>
  <button @click="this.exists = !this.exists">{{btnText}}</button><br>
  <Transition>
    <p v-if="exists">Hello World!</p>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      exists: false
    }
  },
  computed: {
    btnText() {
      if(this.exists) {
        return 'Remove';
      }
      else {
        return 'Add';
      }
    }
  }
}
</script>

<style scoped>
  .v-leave-from {
    opacity: 1;
  }
  .v-leave-to {
    opacity: 0;
  }
  p {
    background-color: lightgreen;
    display: inline-block;
    padding: 10px;
    transition: opacity 0.5s;
  }
</style>

```

** `<TransitionGroup>` Component**

```
<TransitionGroup tag="ol">
  <li v-for="x in products" :key="x">
    {{ x }}
  </li>
</TransitionGroup>

```
