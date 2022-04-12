<template>
  <q-page padding class='row justify-around q-mt-xl q-pt-xl'>
    <div class='col-md-8'>
      <q-card class='q-mt-lg'>
        <q-card-section>
          <h3 class='text-center'>{{ article.articleName }}</h3>

          <div id='md-content' style='min-height: 500px;'>
            <v-md-editor v-model="text" height="100%" mode='preview' ref='mdRef' ></v-md-editor>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class='col-md-3'>
      <profile-card class='q-mt-lg'></profile-card>
      <toc-bar
        class='q-mt-lg'
        style='position: sticky; top: 100px;'
        @anchor='(scroll) => { $refs.mdRef.previewScrollToTarget(scroll) }'
        target='#md-content'
        :texts='text'
      >
      </toc-bar>
    </div>
  </q-page>
</template>
<script>
import ProfileCard from '../SlideBarLayout/ProfleCard.vue';
import TocBar from '../SlideBarLayout/TocBar.vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'src/store'
import { useRoute } from 'vue-router'

export default {
  components: { TocBar, ProfileCard },
  setup() {
    const article= ref({
      articleName: '',
      articleStatus: -1,
      authorName: '',
      avatar: '',
      category: '',
      content: '',
      createTime: '',
      lastTime: '',
      description: '',
      id: -1
    })
    const text = ref(article.value.content)
    const store = useStore()
    const route = useRoute()

    onMounted(() => {
      store.dispatch('fetchArticleById', route.params.id).then(
        res => {
          if (res) {
            console.log(res)
            article.value = res
            text.value = article.value.content
          } else {
            console.log('article is null')
          }
        }
      ).catch(err => console.log(err))
    })

    return {
      text,
      article
    }
  }
}
</script>
