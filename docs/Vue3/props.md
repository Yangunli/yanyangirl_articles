# [vue] Props

- props 是唯讀的，不能直接更動
- props 的定義和 React 相同，都是指涉 Parent -> Child/Children 的 state(父傳子的資料傳遞)
- 比較特別的是在 vue，props 可以設 default 和 required，兩者若不需要可以寫 false，或是忽略不寫
- props are validated before a component instance is created

```
// 使用 <script setup>
defineProps({
  title: String,
  likes: Number
})
```

```
// 非 <script setup>
export default {
  props: {
    title: String,
    likes: Number
  }
}
```

### Props Validator Function

validator 裡寫 fucnction 判斷 true 或是 false

```
<script>
  export default {
    props: {
      foodName: {
        type: String,
        required: true
      },
      foodDesc: {
        type: String,
        required: false,
        default: 'This is the default description.',
        validator: function(value) {
          if( 20<value.length && value.length<50 ) {
            return true;
          }
          else {
            return false;
          }
        }
      }
    }
  }
</script>
```
