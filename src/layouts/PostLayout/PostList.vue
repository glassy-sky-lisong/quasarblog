<template>
  <q-list class="posts" style="width: 100%;">
      <slot></slot>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostList',
})
</script>

<style scoped>

.posts::-webkit-scrollbar {
  width: 4px;
  border-radius: 9px;
  background-color: rgb(2, 123, 227, .2);
  opacity: 0.2;
}
.posts::-webkit-scrollbar-thumb {
  width: 4px;
  border-radius: 9px;
}

</style>
