<template>
  <q-page padding class='row justify-around q-mt-xl q-pt-xl'>
    <div class='col-md-8'>
      <q-card class='q-mt-lg'>
        <q-card-section>
          <h3 class='text-center'>{{ article.articleName }}</h3>

          <div id='md-content' style='min-height: 500px;'>
            <v-md-editor v-model="text" height="100%" mode='preview' ref='mdRef' ></v-md-editor>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class='col-md-3'>
      <profile-card class='q-mt-lg'></profile-card>
      <toc-bar class='q-mt-lg' style='position: sticky; top: 100px;'>
        <ul class='md-toc' v-if='titles.length > 0'>
          <li
            v-for="(anchor, inx) in titles"
            :key='inx'
            :style="{ 'padding': `4px 0 4px ${anchor.indent}em` }"
            @click="handleAnchorClick(anchor)"
          >
            <a style="cursor: pointer">{{ anchor.title }}</a>
          </li>
        </ul>
        <div style='text-align: center;padding: 10px 0px;color: gray;' v-else>
          没有标题
        </div>
      </toc-bar>
    </div>
  </q-page>
</template>
<script>
import ProfileCard from '../SlideBarLayout/ProfleCard.vue';
import TocBar from '../SlideBarLayout/TocBar.vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'src/store'
import { useRoute } from 'vue-router'

export default {
  components: { TocBar, ProfileCard },
  data() {
    return {
      titles: [],
    }
  },
  mounted() {
    const anchors = this.$refs.mdRef.$el.querySelectorAll('h2,h3,h4,h5')
    const titles = Array.from(anchors).filter(title => !!title.innerText.trim())

    if(!titles.length) {
      this.titles = []
      return
    }

    console.log(anchors)

    // const hTags = Array.from(titles.map(title => title.tagName)).sort();

    let a = 1
    let b = 1
    let c = 1
    let d = 1
    let prev = 0

    this.titles = titles.map(title => {
      const tagLevel = Number(title.tagName.split('H')[1])
      let titleText = title.innerText

      if (tagLevel === 2) {
        if(tagLevel < prev) {
          b = 1
          c = 1
          d = 1
        }

        titleText = a + '.  ' + title.innerText
        a++
        prev = 2
      }
      if(tagLevel === 3) {
        if(tagLevel < prev) {
          c = 1
          d = 1
        }

        titleText = (a - 1) + '.' + b + '  ' + title.innerText
        b++
        prev = 3
      }
      if(tagLevel === 4) {
        if(tagLevel < prev) {
          d = 1
        }

        titleText = (a - 1) + '.' + (b - 1) + '.' + c + '  ' + title.innerText
        c++
        prev = 4
      }
      if(tagLevel === 5) {
        titleText = (a - 1) + '.' + (b - 1) + '.' + (c - 1) + '.' + d + '  ' + title.innerText
        d++
        prev = 5
      }

      return {
        title: titleText,
        lineIndex: title.getAttribute('data-v-md-line'),
        indent: (tagLevel - 1).toString()
      }
    })
  },
  methods: {
    handleAnchorClick(anchor) {
      const { mdRef } = this.$refs;
      const { lineIndex } = anchor;

      const heading = mdRef.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        mdRef.previewScrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    }
  },
  setup() {
    const article= ref({
      articleName: '',
      articleStatus: -1,
      authorName: '',
      avatar: '',
      category: '',
      content: '',
      createTime: '',
      lastTime: '',
      description: '',
      id: -1
    })
    const text = ref(article.value.content)
    const store = useStore()
    const route = useRoute()

    onMounted(() => {
      store.dispatch('fetchArticleById', route.params.id).then(
        res => {
          if (res) {
            console.log(res)
            article.value = res
            text.value = article.value.content
          } else {
            console.log('article is null')
          }
        }
      ).catch(err => console.log(err))
    })

    return {
      text,
      article
    }
  }
}
</script>

<style scoped>
.md-toc li {
  list-style: none;
  font-size: 1.08rem;
  color:#7f74db;
}
</style>
