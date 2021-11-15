/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

import { defineComponent, ref, nextTick, onMounted } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const categoryFlag = ref(false)
    const bgRef = ref<HTMLElement | null>(null)
    const ajaxBar = ref(null)

    onMounted(() => {
      let headerLayout = document.getElementsByClassName('q-layout__shadow')[0]
      let headerDom = document.querySelector('.header')

       headerDom && headerDom.classList.add('glassy')
       headerLayout && headerLayout.classList.add('no-shadow')
    })

    return {
      categoryFlag,
      layoutScroll (details: Record<string, any>) {
        if(bgRef.value) {
          void nextTick(() => {
            let offset = details.position

            let rowH = bgRef.value ? bgRef.value.getBoundingClientRect().height : 0
            let headerLayout = document.getElementsByClassName('q-layout__shadow')[0]
            let headerDom = document.querySelector('.header')
            console.log(headerLayout, offset, rowH)
            if(offset >= rowH - 50) {
              console.log('333333333')
              // headerDom && headerDom.classList.add('glassy')
            } else if (offset > 0) {
              console.log('222222')
              headerDom && headerDom.classList.contains('glassy') && headerDom.classList.remove('glassy')
              headerLayout && headerLayout.classList.contains('no-shadow') && headerLayout.classList.remove('no-shadow')
            } else {
              console.log('1111111111')
              headerDom && headerDom.classList.add('glassy')
              headerLayout && headerLayout.classList.add('no-shadow')
            }
          })
        }
      },
      bgRef,
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

<style>
 .glassy {
    background-color: transparent !important;
    backdrop-filter: none !important;
  }

  .no-shadow::after {
    box-shadow: none;
  }
</style>
