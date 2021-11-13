<template>
    <post-list class="post-list" style="max-height: 1000px; overflow: auto;">
      <q-infinite-scroll @load="onLoad" :offset="250" scroll-target=".post-list">
        <post-item v-for="(item, index) in posts" :key="index"></post-item>

        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </post-list>
</template>

<script  lang="ts">
import PostList from './PostList.vue'
import PostItem from './PostItem.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PostLayout',
  components: { PostList, PostItem },
  setup() {
    const posts = ref([{}, {}, {}, {}])
    return {
      posts,
      onLoad(index: number, done: () => void) {
        setTimeout(() => {
          if (posts.value) {
            console.log('onload')
            posts.value.push({}, {}, {}, {})
            done()
          }
        }, 2000)
      }
    }
  }
})
</script>
