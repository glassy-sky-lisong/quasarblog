<template>
  <div class="demo" style="">
    <q-infinite-scroll
      @load="onLoad"
      :offset="250"
      scroll-target=".demo"
    >
      <div v-for="(item, index) in items" :key="index" class="caption" >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas atque rerum eaque, reiciendis corporis recusandae eveniet provident doloremque. Vero sit asperiores impedit magnam porro aut nostrum quos aliquid similique deleniti?</p>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Article',
  setup () {
    const items = ref([{}, {}, {}, {}, {}, {}, {}])
    return {
      items,
      onLoad (index: number, done:() => void) {
        setTimeout(() => {
          console.log('settimeout')
          if (items.value) {
            console.log('onload')
            items.value.push({}, {}, {}, {}, {}, {}, {})
            done()
          }
        }, 2000)
      }
    }
  }
})
</script>
