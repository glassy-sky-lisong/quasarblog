<template>
  <div style="height: 250px; overflow: auto">
    <q-infinite-scroll
      @load="onLoad"
      :offset="250"
    >
      <div v-for="(item, index) in items" :key="index" class="caption" >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas atque rerum eaque, reiciendis corporis recusandae eveniet provident doloremque. Vero sit asperiores impedit magnam porro aut nostrum quos aliquid similique deleniti?</p>
      </div>
    </q-infinite-scroll>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Article',
  setup () {
    const items = ref([{}, {}, {}, {}, {}])
    return {
      items,
      onLoad (index: number, done) {
        setTimeout(() => {
          if (items.value) {
            console.log('onload')
            items.value.push({}, {}, {}, {}, {})
            done()
          }
        }, 2000)
      }
    }
  }
})
</script>
