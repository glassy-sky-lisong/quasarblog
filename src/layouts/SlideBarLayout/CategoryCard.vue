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
           <q-card>
             <q-card-section horizontal>
               <q-avatar
                size="md"
                class="col-4"
                square
               >
                 <q-img
                  src="https://uploadfile.bizhizu.cn/2016/0812/20160812061159971.jpg"
                  class="fit"
               />
               </q-avatar>

              <span class="col-7">
                Vue入门和React入门
              </span>
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
