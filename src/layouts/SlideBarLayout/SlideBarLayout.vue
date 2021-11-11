<template>
  <q-page padding class="row q-pt-xl justify-evenly">
    <div class="col-3 bg-grey-7">
      left
    </div>
    <div class="col-7 bg-grey-7" >right</div>
  </q-page>
</template>

<script lang="ts" >
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SlideBarLayout'
})
</script>
