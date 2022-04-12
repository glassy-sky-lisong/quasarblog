<template>
  <div class="demo" style="max-height: 600px; overflow: auto">
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Article',
  setup () {
    const text = ref('')
    return {
      text
    }
  }
})
</script>
