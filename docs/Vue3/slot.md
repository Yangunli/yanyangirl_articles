# [vue] slot

- v-slot: is #
- 在` <template>`時，傳給 child component 數值，child component 接收的方式是`<slot></slot>`
- 當我們不只一個`<slot>`時，使用 name 賦值。使用 slot 的 Parent component，再以 v-slot 去判斷使用哪個`<slot>`

**Named Slots**

```
// in SlotComp.vue

<h3>Component</h3>
<div>
  <slot name="topSlot"></slot>
</div>
<div>
  <slot name="bottomSlot"></slot>
</div>

// in App.vue

<h1>App.vue</h1>
<p>The component has two div tags with one slot in each.</p>
<slot-comp v-slot:bottomSlot>'Hello!'</slot-comp>

```

**Default Slots**

```
// in SlotComp.vue

<template>
    <h3>Component</h3>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="bottomSlot"></slot>
    </div>
</template>

// in App.vue

<template>
  <h1>App.vue</h1>
  <p>The component has two &lt;div&gt; tags with one &lt;slot&gt; in each.</p>
  <slot-comp>'Hello!'</slot-comp>
  // or
  <slot-comp v-slot:default>'Hello!'</slot-comp>

</template>

```

**v-slot in `<template>`**

```
// in SlotComp.vue

<h3>Component</h3>
<div>
  <slot></slot>
</div>
<div>
  <slot name="bottomSlot"></slot>
</div>


// in App.vue

<h1>App.vue</h1>
<p>The component has two div tags with one slot in each.</p>
<slot-comp>
  <template  #bottomSlot>
    <h4>To the bottom slot!</h4>
    <p>This p tag and the h4 tag above are directed to the bottom slot with the v-slot directive used on the template tag.</p>
  </template>
  <p>This goes into the default slot</p>
</slot-comp>


// 因為是寫在Parent Component裡，<template>裡的是該v-slot，<template>外的<p>則是沒有被呼喚到的slot

```
