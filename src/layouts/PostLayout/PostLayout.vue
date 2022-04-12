<template>
  <post-list class="post-list">
    <post-item v-for="(item, index) in viewPosts" :post='item' :key="index"></post-item>
  </post-list>
  <div class='q-mt-lg q-pa-md flex justify-center' style='border-bottom:1px solid #ccc; width: 96%;'>
    <q-pagination
      v-model="current"
      :max="maxPage"
      :max-pages='pageNumber'
      boundary-links
      direction-links
      size='lg'
    />
  </div>

</template>

<script  lang="ts">
import PostList from './PostList.vue'
import PostItem from './PostItem.vue'
import { computed, defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'src/store'

export default defineComponent({
  name: 'PostLayout',
  components: { PostList, PostItem },
  setup() {
    const store = useStore()
    const posts = ref([])
    const viewPosts = computed(() => posts.value.filter((_, i) => {
      const start = (current.value - 1) * pageNumber.value - 1
      const end = current.value * pageNumber.value - 1

      return i >= start && i <= end
     })
    )
    const current = ref(1)
    const pageNumber = ref(6)
    const maxPage = computed(() => Math.ceil(posts.value.length / pageNumber.value))

    onMounted(() => {
      store.dispatch('fetchArticleList').then(
        res => {
          if (res) {
            posts.value = res
          }
        }
      ).catch(err => console.error(err))
    })

    return {
      posts,
      current,
      pageNumber,
      maxPage,
      viewPosts
    }
  }
})
</script>
