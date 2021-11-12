<template>
  <q-list style="width: 100%;">
    <q-item class="q-px-none" v-for="i of [1,2]" :key="i" >
      <q-card  style="width: 100%;" >
        <q-card-section horizontal >
          <div class="col-4 border-p overflow-hidden">
            <q-img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            class="fit"
            />
          </div>
          <div class="col-8 q-py-md q-px-lg">
            <div
              class="text-h5 text-center title-hidden q-mx-auto"
              style="width: 90%;"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat odio rem minus aliquam? Explicabo illo, eligendi quas ipsa facilis consectetur vel libero impedit perspiciatis excepturi doloremque ullam iusto enim.
            </div>
            <div class="q-mt-sm">
              <q-chip icon="bookmark" size="xs" >Bookmark</q-chip>
              <q-chip icon="bookmark" size="xs" >Bookmark</q-chip>
              <q-chip icon="bookmark" size="xs" >Bookmark</q-chip>
              <q-chip icon="bookmark" size="xs" >Bookmark</q-chip>
            </div>
            <p class="q-mt-xs text-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium dolorem omnis ex, atque dicta obcaecati modi sequi optio inventore! Saepe quidem repellendus recusandae incidunt reprehenderit accusamus molestias ea repudiandae.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quam minima quod debitis dolore et repellat maiores amet inventore nesciunt placeat dolorem fugit doloribus laudantium, dolores eum. Alias, eos fuga.
            </p>
            <q-card-section class="row justify-end q-py-none">
              <q-btn
                flat
                rounded
                color="primary"
                label="Click me"
                type="a"
                to="/"
              >

              </q-btn>
            </q-card-section>
          </div>
        </q-card-section>
      </q-card>
    </q-item>

  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostList',
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
