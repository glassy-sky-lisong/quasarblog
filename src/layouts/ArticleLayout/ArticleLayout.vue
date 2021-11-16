<template>
  <q-page padding class="row q-pt-xl justify-around">
    <div class="col-3 bg-grey-7">
      <profile-card class="q-mb-md" />
      <notice-card />
    </div>
    <div class="col-7 bg-grey-7" >
      <article-content />
    </div>
  </q-page>
</template>

<script lang="ts">
import ProfileCard from '../SlideBarLayout/ProfleCard.vue'
import NoticeCard from '../SlideBarLayout/NoticeCard.vue'
import ArticleContent from './ArticleContent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ArticleLayout',
    components: { ProfileCard, NoticeCard, ArticleContent }
})
</script>