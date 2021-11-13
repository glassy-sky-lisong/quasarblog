<template>
  <q-list style="width: 100%;">
      <slot></slot>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostList',
})
</script>
