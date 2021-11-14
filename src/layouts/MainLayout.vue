<template>
  <q-layout view="lHh Lpr lFf" @scroll="layoutScroll" >
    <q-header elevated class="text-black header">
      <q-toolbar inset ref="headerRef" >

        <q-toolbar-title>
          <q-avatar>
            <q-img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            />
          </q-avatar>
          Quasar App
        </q-toolbar-title>

        <q-space />

        <q-btn
          label="主页"
          stretch
          flat
          type="a"
          class="text-weight-bold"
          v-ripple
          to="/"
        >
        </q-btn>
        <q-btn-dropdown
          label="分类"
          flat
          stretch
          class="text-weight-bold"
          v-model="categoryFlag"
        >
          <q-list>
            <q-item clickable v-for="i of [1, 2, 3, 4]" :key="i" >
              <q-item-section>
                <q-item-label>分类-{{ i }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn
          flat
          stretch
          class="text-weight-bold"
          type="a"
          to="/article"
          label="文章页"
        >
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="row" ref="bgRef" style="margin-top: -50px;min-height: 350px" >
        <q-img
          src="https://cdn.quasar.dev/img/mountains.jpg"
          style="height: 100vh;width: 100vw;"
          contain
        />
      </div>
      <router-view />
    </q-page-container>

    <q-footer elevated reveal class="bg-grey-2 q-pa-md" style="position: relative;" >
      <div class="row justify-center q-mb-md q-mt-xs q-gutter-md text-white">
        <q-btn round icon="fab fa-github" type="a" href="https://www.github.io" target="_black" color="primary" />
        <q-btn round icon="fab fa-twitter" type="a" href="https://www.github.io" target="_black" color="primary" />
        <q-btn round icon="fab fa-qq" type="a" href="https://www.github.io" target="_black" color="primary" />
        <q-btn round icon="fab fa-facebook-square" type="a" href="https://www.github.io" target="_black" color="primary" />
      </div>
      <div class="row justify-center text-primary q-pt-sm" >
        <a href="#" class="doc-link q-mx-md" target="_black" >MIT LICENSE </a> |
        <a href="#" class="doc-link q-mx-md" target="_black" >隐私政策 </a> |
        <a href="#" class="doc-link q-mx-md" target="_black" >Quasar艺术作品 </a>
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const categoryFlag = ref(false)
    const headerRef = ref(null)
    const bgRef = ref(null)
    return {
      categoryFlag,
      layoutScroll (details: Record<string, unknown>) {
        if(bgRef.value && headerRef.value) {
          console.log(details.position, headerRef.value, bgRef.value)
        }
      },
      headerRef,
      bgRef
    }
  }
})
</script>

<style scoped>
  .header {
    background-color: rgba(0, 0, 0, .12);
    backdrop-filter: blur(7px);
  }

  .doc-link {
    color: #00b4ff;
    font-weight: 500;
    text-decoration: none;
    outline: 0;
    border-bottom: 1px dotted currentColor;
    vertical-align: middle;
    transition: opacity 0.2s;
    white-space: nowrap;
  }
</style>
