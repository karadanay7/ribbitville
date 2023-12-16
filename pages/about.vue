<template>
  <main>
    <div
      v-if="isAnimationRequired"
      class="min-h-screen pt-16 text-center flex justify-center items-center relative overflow-hidden pb-44 md:pb-96"
      :style="`transform: scale(${initial}); transform-origin: center center;`"
    >
      <div class="icon-container">
        <Icon name="twemoji:frog" :size="iconSize" />
      </div>
      <div class="absolute pt-12 md:pt-[140px] justify-center flex mx-3">
        <div
          class="mouth absolute w-[200px] md:w-[498px] h-10 md:h-24 border-8 border-black bg-gray-700"
        ></div>
        <div
          class="tongue absolute w-[110px] md:w-[260px] h-6 md:h-20 mt-6 md:mt-16 bg-pink-200 z-20"
        ></div>
      </div>
    </div>
    <div v-else class="bg-pink-200">
      <transition
        appear
        :key="isAnimationRequired ? 'animation' : 'no-animation'"
        enter-from-class="opacity-0"
        enter-active-class="duration-200 ease-in transition-opacity"
        enter-to-class="opacity-100"
        leave-to-class="opacity"
      >
        <div v-if="!isAnimationRequired" class="min-h-screen w-full">
          <div
            class="py-20 font-main font-bold grid grid-col-1 gap-5 text-center mx-auto p-4"
          >
            <h1 class="text-4xl lg:text-7xl font-extrabold text-center pt-4">
              Welcome to Ribbitville!
            </h1>
            <p class="bg-green-600 w-auto h-1 mt-2" />

            <p class="text-lg md:text-2xl">
              Dive into the pond of ribbeting knowledge, where our resident
              frogs are always ready to share their hoppy tales and croak-tastic
              stories. 📚🐸
            </p>

            <p class="text-lg md:text-2xl">
              Our community of leap enthusiasts is as diverse as the frog
              species themselves! Join us in the Lily Pad Lounge, where
              discussions range from favorite pond snacks to the latest in
              froggy fashion. 🌈👗
            </p>

            <p class="text-lg md:text-2xl">
              Don't miss out on our legendary Ribbit Rendezvous events, where
              frogs from near and far come together to showcase their most
              spectacular leaps and groovy moves. 🎉💃
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
      </transition>
    </div>
  </main>
</template>

<script setup>
const isAnimationRequired = ref(true);
const initial = ref(1);
let animationInterval;
const iconSize = ref(500);

const startAnimation = () => {
  animationInterval = setInterval(() => {
    initial.value += 0.08; // Adjust the increment as needed
    if (initial.value >= 20) {
      clearInterval(animationInterval);
      nextTick(() => {
        isAnimationRequired.value = false;
      });
    }
  }, 16.6); // 60 FPS (1000 ms / 60 frames ≈ 16.6 ms per frame)
};
const updateIconSize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    iconSize.value = 500; // Set your desired size for larger screens
  } // Set your desired size for medium-sized screens
  else {
    iconSize.value = 200; // Set your desired size for smaller screens
  }
};
onMounted(() => {
  updateIconSize();
  window.addEventListener("resize", updateIconSize);
  setTimeout(() => {
    startAnimation();
  }, 600);
});

onBeforeRouteLeave(() => {
  window.removeEventListener("resize", updateIconSize);
  clearInterval(animationInterval);
  isAnimationRequired.value = true;
});
</script>

<style>
.mouth {
  border-radius: 50% / 0 0 100% 100%;
}
.tongue {
  border-radius: 50% / 0 0 100% 100%;
}

@media screen and (min-width: 768px) {
  .min-h-screen {
    transform-origin: 50% 1%;
  }
}

@media screen and (min-width: 1024px) {
  .min-h-screen {
    transform-origin: 50% 90%;
  }
}
</style>
