<template>
  <q-list style="width: 100%;">
    <q-item>
      <q-card  style="width: 100%;" >
        <q-card-section horizontal >
          <div class="col-4 border-p">
            <q-img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            class="fit"
            />
          </div>
          <div class="col-8 q-pa-md">
            <div
              class="text-h5 text-center text-hidden q-mx-auto"
              style="width: 90%;"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat odio rem minus aliquam? Explicabo illo, eligendi quas ipsa facilis consectetur vel libero impedit perspiciatis excepturi doloremque ullam iusto enim.
            </div>
            <p class="q-mt-sm text-indent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium dolorem omnis ex, atque dicta obcaecati modi sequi optio inventore! Saepe quidem repellendus recusandae incidunt reprehenderit accusamus molestias ea repudiandae.
            </p>
            <q-card-section class="row justify-end q-pb-none">
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .text-indent {
    text-indent: 2em;
  }
</style>
