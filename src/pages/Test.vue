<template>
    <change-shape-text :texts='texts' :distance='speed' :text-style='{ color: "blue" }' ></change-shape-text>
  <button @click='speed = 1'>Click me</button>
  <button @click='speed = 0.1'>Clear me</button>
</template>

<script>
import { ref } from 'vue'
import ChangeShapeText from '../components/ChangeShapeText/ChangeShapeText';
export default {
  name: 'Test',
  components: { ChangeShapeText  },
  setup() {
    const texts = ref(['I', 'hope', 'you', 'happy' ])
    const speed = ref(3)
    return { texts, speed }
  }
}
</script>


