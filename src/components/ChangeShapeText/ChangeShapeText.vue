<template>
  <div class="q-pa-md q-gutter-md" style='max-height: 350px;'>
    <div class="row justify-between">
      <div class="container">
        <span class="prev" :style='!textStyle ? { color: color || "#000" } : textStyle'>i</span>
        <span class="next" :style='!textStyle ? { color: color || "#000" } : textStyle'>want</span>
      </div>
      <svg id="filters" style="display: none">
        <defs>
          <filter id="threshold">
            <!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. -->
            <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"></feColorMatrix>
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script lang='ts'>
import { onMounted, toRefs, PropType, defineComponent } from 'vue'
/*
	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
*/

export default defineComponent({
  name: 'ChangeShapeText',
  props: {
    texts: {
      type: Array as PropType<string[]>,
      default: () => ['I', 'Love', 'you', 'Love', 'Me'],
      required: true
    },
    distance: {
      type: Number,
      default: () => 0.6
    },
    color: {
      type: String,
      default: () => '#000'
    },
    textStyle: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {}
    },
  },
  setup(props) {
    const { texts, distance } = toRefs(props)

    const elts: { text1: HTMLElement | null; text2: HTMLElement | null; } = {
      text1: document.querySelector('.prev'),
      text2: document.querySelector('.next')
    };

    // The strings to morph between. You can change these to anything you want!
    // const texts = props.texts

    // 控制变形的速度
    const morphTime = 1;
    const cooldownTime = distance.value;

    let textIndex = texts.value.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    // elts.text1.textContent = null;
    // elts.text2.textContent = null;

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    const setMorph = (fraction: number) => {
      // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

      if (elts.text2) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }


      fraction = 1 - fraction;

      if (elts.text1 && elts.text2) {
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text1.textContent = texts.value[textIndex % texts.value.length];
        elts.text2.textContent = texts.value[(textIndex + 1) % texts.value.length];
      }
    }

    const doCooldown = () => {
      morph = 0;

      if (elts.text2) {
        elts.text2.style.filter = '';
        elts.text2.style.opacity = '100%';
      }

      if (elts.text1) {
        elts.text1.style.filter = '';
        elts.text1.style.opacity = '0%';
      }
    }

// Animation loop, which is called every frame.
    const animate = () => {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    onMounted(() => {
      elts.text1 = document.querySelector('.prev')
      elts.text2 = document.querySelector('.next');

      if (elts.text1 && elts.text2) {
        elts.text1.textContent = texts.value[textIndex % texts.value.length];
        elts.text2.textContent = texts.value[(textIndex + 1) % texts.value.length];
      }

      animate();
    })

    return { }
  }
})
</script>

<style>
@font-face {
  font-family: 'raleway';
  src: url('https://cdn.jsdelivr.net/gh/glassy-sky-lisong/FontRepo@latest/font/raleway-regular-webfont.woff2') format('woff2'),
  url('https://cdn.jsdelivr.net/gh/glassy-sky-lisong/FontRepo@latest/font/raleway-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: raleway;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.container {
  width: 100%;
  position: relative;
  filter: url(#threshold) blur(0.6px);
}

.container span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  font-size: 80px;
  font-weight: bolder;
  text-align: center;
  user-select: none;
}

</style>

