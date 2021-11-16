<template>
  <div>
    <profle-card />

    <notice-card class="q-mt-md" />

    <category-card class="q-mt-md" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CategoryCard from './CategoryCard.vue'
import NoticeCard from './NoticeCard.vue'
import ProfleCard from './ProfleCard.vue'
export default defineComponent({
  components: { ProfleCard, NoticeCard, CategoryCard },
  name: 'SlideBar'
})
</script>
