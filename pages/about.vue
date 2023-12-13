<template>
  <div
    v-if="!animationEnd"
    class="min-h-screen pt-16 text-center flex justify-center items-center relative overflow-hidden"
    :style="`transform: scale(${initial}); transform-origin: 50% 73%;`"
  >
    <div class="icon-container">
      <Icon name="twemoji:frog" size="500" />
    </div>
    <div class="absolute pt-[140px] justify-center flex mx-3">
      <div
        class="mouth absolute rounded-full w-[498px] h-24 border-8 border-black bg-gray-700"
      ></div>
      <div
        class="tongue absolute w-[240px] h-16 mt-16 rounded-full bg-pink-200 z-10"
      ></div>
    </div>
  </div>
  <div
    v-if="animationEnd"
    class="min-h-screen bg-pink-200 p-4"
    :style="{ opacity: initialOpacity }"
  >
    <div
      class="px-2 py-10 font-main font-bold pt-16 grid grid-flow-col-1 gap-10 text-center"
    >
      <h1 class="text-7xl font-extrabold">Welcome to Ribbitville!</h1>
      <p class="bg-green-600 w-auto h-1" />

      <p class="text-2xl">
        Dive into the pond of ribbeting knowledge, where our resident frogs are
        always ready to share their hoppy tales and croak-tastic stories. 📚🐸
      </p>

      <p class="text-2xl">
        Our community of leap enthusiasts is as diverse as the frog species
        themselves! Join us in the Lily Pad Lounge, where discussions range from
        favorite pond snacks to the latest in froggy fashion. 🌈👗
      </p>

      <p class="text-2xl">
        Don't miss out on our legendary Ribbit Rendezvous events, where frogs
        from near and far come together to showcase their most spectacular leaps
        and groovy moves. 🎉💃
      </p>

      <p class="text-2xl">
        So, whether you're a seasoned froggy fanatic or a curious tadpole,
        Ribbitville is the place to be. Ribbit, ribbit! 🏡🌳
      </p>

      <p class="text-2xl">
        Ribbitville – where every hop is an adventure and every croak is a
        symphony! 🐾🎶
      </p>
      <div class="flex justify-between">
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
</style>

<script setup>
const initial = ref(0);
const animationEnd = ref(false);
const initialOpacity = ref(0);

const scale = setInterval(() => {
  initial.value += 0.6;
  if (initial.value > 20) {
    clearInterval(scale);
    animationEnd.value = true;
    startOpacityAnimation();
  }
  requestAnimationFrame();
}, 120);

function startOpacityAnimation() {
  const opacity = setInterval(() => {
    initialOpacity.value += 0.02; // Adjust the step as needed
    if (initialOpacity.value > 1) {
      clearInterval(opacity);
    }
    requestAnimationFrame();
  }, 40); // Adjust the interval as needed
}
</script>
