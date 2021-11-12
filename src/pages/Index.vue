<template>
  <q-page class="row">
    <post-layout />
  </q-page>
</template>

<script lang="ts">
import PostLayout from 'src/layouts/PostLayout/PostLayout.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { PostLayout  },
  setup() {

    return {  };
  }
});
</script>
