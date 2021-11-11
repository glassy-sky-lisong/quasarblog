<template>
  <q-page padding class="row q-pt-xl justify-evenly">
    <slide-bar class="col-3 bg-grey-7" />
    <div class="col-7 bg-grey-7" >right</div>
  </q-page>
</template>

<script lang="ts" >
import SlideBar from './SildeBar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SlideBarLayout',
  components: { SlideBar }
})
</script>
