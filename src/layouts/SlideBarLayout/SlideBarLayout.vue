<template>
  <q-page padding class="row q-mt-xl q-pt-xl justify-around">
    <div class="col-3">
      <profile-card></profile-card>
      <notice-card  class="q-mt-md"></notice-card>
      <category-card  class="q-mt-md"></category-card>
    </div>
    <div class="col-7" >
      <router-view></router-view>
    </div>
  </q-page>
</template>

<script lang="ts" >
import SlideBar from './SildeBar.vue'
import { defineComponent } from 'vue'
import ProfileCard from './ProfleCard.vue';
import NoticeCard from './NoticeCard.vue';
import CategoryCard from './CategoryCard.vue';

export default defineComponent({
  name: 'SlideBarLayout',
  components: { CategoryCard, NoticeCard, ProfileCard, SlideBar }
})
</script>
