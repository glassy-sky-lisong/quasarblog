<template>
  <div>
    <q-card class="q-pa-md">
      <q-card-section class="row justify-center">
        <q-avatar
         size="100px"
        >
          <q-img
            src="https://uploadfile.bizhizu.cn/2016/0812/20160812061159971.jpg"
            class="fit"
          />
        </q-avatar>
      </q-card-section>
      <q-card-section class="row justify-center">
        <div class="text-h5">远方有你伴余生</div>
        <div class="text-subtitle q-mt-sm">事需缓急，欲速不达也</div>
      </q-card-section>
      <q-card-section>
        <q-btn
          icon="fab fa-github"
          type="a"
          href="https://www.github.io"
          target="_black"
          flat
        ></q-btn>
      </q-card-section>

    </q-card>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SlideBar'
})
</script>
