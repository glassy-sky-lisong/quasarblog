<template>
  <q-item class="q-px-none" >
      <q-card  style="width: 100%;" >
        <q-card-section horizontal >
          <div class="col-4 border-p overflow-hidden">
            <q-img
            :src="post ? post.avatar : 'https://cdn.quasar.dev/img/mountains.jpg'"
            class="fit"
            />
          </div>
          <div class="col-8 q-py-md q-px-lg">
            <div
              class="text-h5 text-center title-hidden q-mx-auto"
              style="width: 90%;"
            >
              {{ post ? post.articleName : '' }}
            </div>
            <template v-if='categories.length > 0'>
              <div class="q-mt-sm">
                <q-chip icon="bookmark" size="xs" v-for='(item, index) in categories' :key='index' >{{ item }}</q-chip>
              </div>
            </template>
            <p class="q-mt-xs text-hidden">
              {{ post ? post.description : '' }}
            </p>
            <q-card-section class="row justify-end q-py-none">
              <q-btn
                flat
                rounded
                color="primary"
                label="Click me"
                type="a"
                to="/article"
              >

              </q-btn>
            </q-card-section>
          </div>
        </q-card-section>
      </q-card>
    </q-item>
</template>

<script lang="ts">
import { defineComponent,PropType, computed } from 'vue'
import { PostProp } from '../post';

export default defineComponent({
  name: 'PostItem',
  props: {
    post: {
      type: Object as PropType<PostProp>,
      default: () => null,
      required: true
    }
  },
  setup(props) {
    const categories = computed(() => (props.post && props.post.category && props.post.category != '') ? props.post.category.split(',') : [] )

    return {
      categories
    }
  }
})
</script>

<style scoped>
.border-p {
    border-radius: inherit;
  }

  .text-hidden {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow:ellipsis;
    overflow: hidden;
  }

  .text-indent {
    text-indent: 2em;
  }

  .title-hidden {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
