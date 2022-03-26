<template>
  <q-page class='row justify-around'>
    <div class='col-md-8'>
      <q-card class='q-mt-lg'>
        <q-card-section>
          <h2 class='text-center'>Hello,World</h2>

          <div id='md-content'>
            <v-md-editor v-model="text" height="100%" mode='preview' ref='mdRef' ></v-md-editor>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class='col-md-3'>
      <profile-card class='q-mt-lg'></profile-card>
      <toc-bar class='q-mt-lg' style='position: sticky; top: 100px;'>
        <ul class='md-toc'>
          <li
            v-for="(anchor, inx) in titles"
            :key='inx'
            :style="{ 'padding': `4px 0 4px ${anchor.indent}em` }"
            @click="handleAnchorClick(anchor)"
          >
            <a style="cursor: pointer">{{ anchor.title }}</a>
          </li>
        </ul>
      </toc-bar>
    </div>
  </q-page>
</template>
<script>
import ProfileCard from '../SlideBarLayout/ProfleCard.vue';
import TocBar from '../SlideBarLayout/TocBar.vue';
import { ref } from 'vue'

export default {
  components: { TocBar, ProfileCard },
  data() {
    return {
      titles: []
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
    const text = ref('## hello,world \n' +
      '#### DTTT\n' +
      '\n' +
      '### DTDDT\n' +
      '\n' +
      '## hello,world1\n' +
      '\n' +
      '### PPT \n' +
      '\n' +
      '### PTA\n' +
      '\n' +
      '#### AAA \n' +
      '\n' +
      '##### BBB \n' +
      '\n' +
      '## hello,world2\n' +
      '\n' +
      '#### TTT\n' +
      '\n' +
      '## hello,world3\n' +
      '\n' +
      '### OOO\n' +
      '\n' +
      '#### YYY\n' +
      '\n' +
      '## hello,world4\n' +
      '#### TYYT\n' +
      '## hello,world5\n' +
      '## hello,world6\n' +
      '## hello,world7\n' +
      '## hello,world8\n' +
      '## hello,world9\n' +
      ' hello,world \n')



    return {
      text
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
