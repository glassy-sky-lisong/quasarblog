<template>
 <post-list />
</template>

<script  lang="ts">
import PostList from './PostList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostLayout',
  components: { PostList }
})
</script>
