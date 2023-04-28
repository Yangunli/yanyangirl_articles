# [vue] $emit()

- 子傳父的 state
- child component 時，使用 this.$emit
- parent component 時，使用 receiveEmit 取得資料
- 父傳子的 state:props；子傳父的 state: $emit()

```
// in child component
methods: {
  toggleFavorite() {
    this.$emit('toggle-favorite', this.foodName);
  }
}

// in parent component 使用 receiveEmit

methods: {
  receiveEmit(foodId) {
    alert( 'You clicked: ' + foodId );
  }
}

```
