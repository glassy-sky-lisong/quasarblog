<template>
  <q-card class="q-pa-md">
      <q-card-section class="row justify-center">
        <q-avatar
         size="100px"
        >
          <q-img
            :src="currentUser ? currentUser.avatar : ''"
            class="fit"
          />
        </q-avatar>
      </q-card-section>
      <q-card-section class="row justify-center">
        <div class="text-h5 full-width text-center">{{ currentUser ? currentUser.username : '' }}</div>
        <div class="text-subtitle q-mt-sm">{{ currentUser ? currentUser.sign : '' }}</div>
      </q-card-section>
      <q-card-section class="row justify-center">
        <q-btn
          icon="fab fa-github"
          type="a"
          href="https://www.github.io"
          target="_black"
          flat
          round
          text-color="primary"
        ></q-btn>
        <q-btn
          icon="fab fa-github"
          type="a"
          href="https://www.github.io"
          target="_black"
          flat
          round
          text-color="primary"
        ></q-btn>
        <q-btn
          icon="fab fa-github"
          type="a"
          href="https://www.github.io"
          target="_black"
          flat
          round
          text-color="primary"
        ></q-btn>
        <q-btn
          icon="fab fa-github"
          type="a"
          href="https://www.github.io"
          target="_black"
          flat
          round
          text-color="primary"
        ></q-btn>
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'ProfileCard',
  setup() {
    //     https://uploadfile.bizhizu.cn/2016/0812/20160812061159971.jpg
    const store = useStore()
    const currentUser = ref(null)
    // const user = computed(() => currentUser)


    onMounted(() => {
      store.dispatch('fetchCurrentUser').then(
        res => {
          if(res) {
            currentUser.value = res
          }
        }
      ).catch(err => console.error(err))
    })

    return { currentUser }
  }
})
</script>
