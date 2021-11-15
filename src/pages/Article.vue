<template>
  <div class="demo" >
    <q-btn 
      label="Trigger"
    />

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
      },
    }
  }
})
</script>
