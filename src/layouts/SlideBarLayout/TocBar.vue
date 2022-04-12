<template>
  <q-card>
    <q-card-section>
      <q-item-label style='font-size: 1.35rem' caption>文章目录</q-item-label>
      <ul class='md-toc' v-if='tocs.length > 0' style='padding-left: 0.125rem;'>
        <li
          v-for="(anchor, inx) in tocs"
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
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, onMounted, watch, ref } from 'vue'

export default defineComponent({
  name: 'TocBar',
  props: {
    target: {
      type: String,
      required: true,
    },
    texts: {
      type: String,
      required: true
    }
  },
  emits: [ 'anchor' ],
  setup(props, { emit }) {
    const tocs = ref([])

    const generateTitle = (target) => {
      if(typeof target === 'string' && target && target !== '') {
       setTimeout(() => {
         const targetEl = document.querySelector(target)
         const anchors = targetEl.querySelectorAll('h2,h3,h4,h5')
         const titles = Array.from(anchors).filter(title => title.innerText.trim() !== '')

         if(!titles.length) {
           return
         }

         // const hTags = Array.from(titles.map(title => title.tagName)).sort();

         let a = 1
         let b = 1
         let c = 1
         let d = 1
         let prev = 0

         tocs.value = titles.map(title => {
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
       }, 500)
      }
    }

    const handleAnchorClick = (anchor) => {
      const { lineIndex } = anchor;
      const targetEl = document.querySelector(props.target)

      const heading = targetEl.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        emit('anchor', {
          target: heading,
          scrollContainer: window,
          top: 60
        })
      }
    }

    watch(() => props.texts ,(n, o) => {
      generateTitle(props.target)
    })

    onMounted(() => {
      console.log('mounted')
      generateTitle(props.target)
    })


    return { handleAnchorClick, tocs }
  }
})
</script>

<style scoped>
.md-toc li {
  list-style: none;
  font-size: 1.08rem;
  color:#7f74db;
}
</style>
