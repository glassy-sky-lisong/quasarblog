<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">分类</div>
    </q-card-section>
    <q-card-section>
      <q-list>
         <q-expansion-item
           label="Vue指南"
           icon="fas fa-book-open"
         >
           <q-card v-for="i of [1, 2, 3, 4]" :key="i" >
             <q-card-section horizontal class="q-px-md row flex-center" style="height: 3rem;" >
               <div class="row col-2">
                  <q-avatar
                   size="2rem"
                 >
                  <q-img
                    src="http://img.mp.itc.cn/upload/20170326/19c6d3c4f535424f9b04822e5951dff3_th.jpeg"
                    class="fit"
                  />
                </q-avatar>
               </div>

              <div class="col-9 q-px-md single-line-hidden">
                Vue入门和React入门
              </div>

             </q-card-section>
           </q-card>
         </q-expansion-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CategoryCard'
})
</script>

<style scoped>
.single-line-hidden {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
