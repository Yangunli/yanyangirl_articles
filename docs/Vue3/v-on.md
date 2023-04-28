# [vue] v-on

## v-on:[event] / @event

```js title="onclick"
//v-on 可置換成 @
<button v-on:click="doThis"></button>
<button @:click="doThis">t</button>

```

```
//@ is v-on:
v-on:[event] //動態事件寫法
v-on:click.right.ctrl //同時按滑鼠右鍵和Ctrl時，才會反應的事件
v-on:input //input事件(React裡的onChange)
v-on:mousemove //mousemove事件
@click.once //只觸發一次的click事件
@submit.prevent //prevent是指prevent default
@click.stop.prevent // stopPropagation() 且 preventDefault()
@:keyup.s //只有在鍵盤輸入s時才會有反應的設定
```

- Modifiers:
  - stop - stopPropagation().
  - prevent - preventDefault().
  - capture - 捕獲事件.
  - self - only trigger handler if event was dispatched from this element.
  - {keyAlias} - 鍵盤上的名字(像是 Ctrl / i / Enter 之類的)
  - once - 只觸發一次，第二次開始不會有反應
  - left - 指滑鼠左鍵事件
  - right - 指滑鼠右鍵事件
  - middle - 指滑鼠中間那顆滾輪的事件
  - passive - attaches a DOM event with { passive: true }.

```js title="v-on in a v-for Loop"
<li v-for="food in manyFoods" v-on:click="imgUrl=food.url">{{ food.name }}</li>
```

```js title="mouse event"
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```
