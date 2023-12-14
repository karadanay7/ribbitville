<template>
  <div
    v-if="!animationEnd"
    class="min-h-screen pt-16 text-center flex justify-center items-center relative overflow-hidden pb-96"
    :style="`transform: scale(${initial}); transform-origin: center center;`"
  >
    <div class="icon-container">
      <Icon name="twemoji:frog" size="500" />
    </div>
    <div class="absolute pt-[140px] justify-center flex mx-3">
      <div
        class="mouth absolute w-[498px] h-24 border-8 border-black bg-gray-700"
      ></div>
      <div
        class="tongue absolute w-[240px] h-16 mt-16 rounded-full bg-pink-200 z-10"
      ></div>
    </div>
  </div>
  <div v-if="animationEnd" class="min-h-screen bg-pink-200 w-full">
    <div
      class="py-20 font-main font-bold grid grid-col-1 gap-5 text-center mx-auto p-4"
      :style="{ opacity: initialOpacity }"
    >
      <h1 class="text-4xl lg:text-7xl font-extrabold text-center pt-4">
        Welcome to Ribbitville!
      </h1>
      <p class="bg-green-600 w-auto h-1 mt-2" />

      <p class="text-lg md:text-2xl">
        Dive into the pond of ribbeting knowledge, where our resident frogs are
        always ready to share their hoppy tales and croak-tastic stories. 📚🐸
      </p>

      <p class="text-lg md:text-2xl">
        Our community of leap enthusiasts is as diverse as the frog species
        themselves! Join us in the Lily Pad Lounge, where discussions range from
        favorite pond snacks to the latest in froggy fashion. 🌈👗
      </p>

      <p class="text-lg md:text-2xl">
        Don't miss out on our legendary Ribbit Rendezvous events, where frogs
        from near and far come together to showcase their most spectacular leaps
        and groovy moves. 🎉💃
      </p>

      <p class="text-lg md:text-2xl">
        So, whether you're a seasoned froggy fanatic or a curious tadpole,
        Ribbitville is the place to be. Ribbit, ribbit! 🏡🌳
      </p>

      <p class="text-lg md:text-2xl">
        Ribbitville – where every hop is an adventure and every croak is a
        symphony! 🐾🎶
      </p>
      <div class="flex flex-wrap justify-between">
        <Icon name="vscode-icons:file-type-lilypond" size="100" />
        <Icon name="vscode-icons:file-type-lilypond" size="100" />
        <Icon name="vscode-icons:file-type-lilypond" size="100" />
        <Icon name="vscode-icons:file-type-lilypond" size="100" />
        <Icon name="vscode-icons:file-type-lilypond" size="100" />
        <Icon name="vscode-icons:file-type-lilypond" size="100" />
      </div>
    </div>
  </div>
</template>

<style>
.mouth {
  border-radius: 50% / 0 0 100% 100%;
}
.tongue {
  border-radius: 50% / 0 0 100% 100%;
}

@media screen and (min-width: 768px) {
  /* Apply styles for screens with a width of 768 pixels or more */
  .min-h-screen {
    transform-origin: 50% 80%; /* Change the transform origin for larger screens */
  }
}

@media screen and (min-width: 1024px) {
  /* Apply styles for screens with a width of 1024 pixels or more */
  .min-h-screen {
    transform-origin: 50% 68%; /* Change the transform origin for even larger screens */
  }
}
</style>

<script setup>
const initial = ref(0.5);
const animationEnd = ref(false);
const initialOpacity = ref(0);
let scalingComplete = false;

const startAnimation = () => {
  requestAnimationFrame(scaleAnimation);
};

const scaleAnimation = (timestamp) => {
  const progress = timestamp / 2500; // Convert timestamp to seconds

  initial.value = lerp(0.5, 15, progress);

  if (initial.value >= 15) {
    scalingComplete = true;
    animationEnd.value = true;
    startOpacityAnimation();
    return;
  }

  requestAnimationFrame(scaleAnimation);
};

const startOpacityAnimation = () => {
  if (!scalingComplete) {
    // Wait for scaling to complete
    requestAnimationFrame(startOpacityAnimation);
    return;
  }

  requestAnimationFrame(opacityAnimation);
};

const opacityAnimation = (timestamp) => {
  const progress = timestamp / 4000; // Convert timestamp to seconds

  initialOpacity.value = lerp(0, 1, progress);

  if (initialOpacity.value >= 1) {
    return;
  }

  requestAnimationFrame(opacityAnimation);
};

const lerp = (start, end, progress) => {
  return start + progress * (end - start);
};

onMounted(() => {
  startAnimation();
});
</script>
