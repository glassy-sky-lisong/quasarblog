<template>
  <q-layout view="lHh Lpr lFf" @scroll="layoutScroll" @resize='layoutResize' >
    <q-header elevated class="text-black header" :class='{ "header-hidden" : headerToggle, "header-show": headerShow }' id='q-header' >
      <q-toolbar inset ref="headerRef" style='color: white' >

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
      <div class="row" ref="bgRef" style="margin-top: -50px;height: calc(100vh - 50px); position: relative;" >
        <q-icon
          name='keyboard_arrow_down'
          color='white'
          class='bg-down'
          size='xl'
          @click='bgDownHandler'
        ></q-icon>
        <q-parallax
          src='https://cdn.quasar.dev/img/parallax2.jpg'
          :height='mediaHeight'
        >
          <h1 class="text-white bg-title">远方有你伴余生</h1>
          <change-shape-text
            style='position: absolute; top: 65%;width: 100%;'
            :texts='bgTexts'
            distance='3'
            color='white'
            :text-style='{ fontSize: "1.4rem", fontFamily: "cursive", fontWeight: "bold", color: "white" }'
          ></change-shape-text>
        </q-parallax>
      </div>

      <router-view v-slot='{ Component }'>
        <keep-alive>
          <component :is='Component' v-if='$route.meta.keepAlive'></component>
        </keep-alive>
        <component :is='Component' v-if='!$route.meta.keepAlive'></component>
      </router-view>
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

    <q-page-sticky position="bottom-right" :offset="[50, 50]">
      <q-fab
        icon="touch_app"
        direction="up"
        color="accent"
        :disable="false"
        padding='7'
        v-show='toolModel'
      >
        <q-fab-action
          color="primary"
          icon="keyboard_arrow_up"
          :disable="false"
          @click='upHandler'
        />
        <q-fab-action  color="primary" icon="mail" :disable="false" />
      </q-fab>
    </q-page-sticky>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import { useStore } from 'src/store'
import { defineComponent, ref, onMounted } from 'vue';
import ChangeShapeText from '../components/ChangeShapeText/ChangeShapeText.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    ChangeShapeText,
    EssentialLink
  },

  setup () {
    const categoryFlag = ref(false)
    const headerRef = ref(null)
    const bgRef = ref(null)
    let headerEl = document.getElementById('q-header')
    const headerToggle = ref(true)
    const headerShow = ref(false)
    const toolModel = ref(false)
    const store = useStore()
    const currentUser = ref(null)
    const mediaHeight =ref(0)
    const bgTexts = ref([
      '爱是一种无法描述的感觉，想你在我的每一天，我愿一直陪伴你，在生生世世，从此决定：爱你一万年',
      '逃避是暂时的，总不能一辈子都这样啊？希望你能够早日走出来，迎接更明媚的阳光和所有关怀',
      '我深深地恳求你；不要把我逐出你的爱门之外，我一分一秒也不能缺少你的爱。只有赢得你的爱，我的生命才有光彩',
      '爱你，就是会把伤害我的匕刃给了你，却坚信你不会伤害我。我放得下一些人，放得下一些事。却始终放不下你，放不下和你在一起',
      '可爱的你偷走我的情，盗走我的心，我决定告你上法庭，该判你什么罪呢？法官翻遍所有的犯罪记录和案例，最后陪审团一致通过：判你终生归'
    ])

    const upHandler = () => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })

    const bgDownHandler = (e: Event) => {
      const target = e.target as HTMLElement
      document.documentElement.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      })
    }

    const layoutResize = ({ height, width }: { height: number; width: number; }) => {
      console.log(height, width)
      mediaHeight.value = window.innerHeight
    }

    onMounted(() => {
      headerEl = document.getElementById('q-header')

      mediaHeight.value = window.innerHeight

      store.dispatch('autoLogin', {
        username: 'admin',
        password: '950714ls',
        remember: '0'
      }).then(
        res => {
          if (res) {
            console.log(res)
            currentUser.value = res
          }
        }
      ).catch(err => console.error(err))

      setTimeout(() => {

        store.dispatch('fetchArticleList').then(
          res => {
            console.log(res)
          }
        ).catch(err => console.log(err))
      }, 1000)
    })

    return {
      categoryFlag,
      layoutScroll (details: { position: number; }) {
        if(bgRef.value && headerRef.value && headerEl) {
          const bgReact = (bgRef.value as HTMLElement)
          const bgReactHeight = bgReact.offsetHeight + bgReact.offsetTop

          if (details.position <= headerEl.getBoundingClientRect().height) {
            headerToggle.value = true
          } else {
            headerToggle.value = false
          }

          if(details.position <= bgReactHeight) {
            headerShow.value = false
          }else {
            headerShow.value = true
          }

          if(document.documentElement.scrollTop <= window.innerHeight + 100) {
            toolModel.value = false
          } else {
            toolModel.value = true
          }
        }
      },
      headerRef,
      bgRef,
      headerToggle,
      headerShow,
      toolModel,
      upHandler,
      bgDownHandler,
      mediaHeight,
      layoutResize,
      bgTexts
    }
  }
})
</script>

<style>
  .header {
    background-color: rgba(0, 0, 0, .12);
    backdrop-filter: blur(7px);
    transition: all 0.3s ease-in;
  }

  .header-hidden {
    background-color: transparent;
    backdrop-filter: none;
  }

  .header-hidden .q-layout__shadow::after {
    box-shadow: none;
  }

  .header::before, .header::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-size: 100%;
    transition: all .1s ease-in;
  }

  .header::after {
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 65%;
    z-index: -2;
  }

  .header:before {
    backdrop-filter: blur(0px);
    background-color: transparent;
    z-index: -1;
  }

  .header-show::after {
    background-image: url(https://cdn.quasar.dev/img/mountains.jpg);
    background-repeat: no-repeat;
    background-position: 50% 75.45% !important;
    z-index: -2;
  }

  .header-show::before {
    backdrop-filter: blur(7px);
    background-color: rgba(0,0,0,.1);
    z-index: -1;
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

  .bg-title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0%);
    color: #f5f5f5;
    font-size: 3.5rem;
    z-index: 99;
    letter-spacing: 0.2em;
    font-family: cursive;
  }

  .bg-down {
    position: absolute;
    bottom: -50px;
    left: 50%;
    z-index: 99;
    transform: translate(-50%, 0px);
    cursor: pointer;
    scroll-behavior: smooth;
  }
</style>
