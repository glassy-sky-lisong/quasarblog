<template>
  <q-page padding class="row q-pt-xl justify-around">
    <slide-bar class="col-3" />
    <div class="col-7" >
      <router-view></router-view>
    </div>
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
