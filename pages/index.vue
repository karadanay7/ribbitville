<template>
  <div class="bg-white min-h-screen overflow-hidden pt-16">
    <!-- Use FrogBg as the background -->
    <FrogBg />

    <!-- Centered container for the GIF -->
    <div
      class="absolute inset-0 flex items-center justify-center pt-16 overflow-auto"
    >
      <div
        class="relative grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden"
      >
        <div class="my-auto p-4 md:p-8">
          <div
            class="bg-white border-4 border-pink-200 rounded-2xl font-main font-bold text-center p-4"
          >
            <h1 class="text-3xl md:text-5xl lg:text-7xl font-extrabold">
              Welcome to Ribbitville!
            </h1>
            <Icon
              name="bxs:down-arrow"
              size="50"
              class="text-green-600 animate-bounce mt-4"
            />
            <NuxtLink to="/about" class="text-2xl md:text-4xl block"
              >Click me!</NuxtLink
            >
          </div>
        </div>
        <div class="order-first md:order-last p-8 mt-36 md:mt-0">
          <img
            src="/assets/froggy.gif"
            alt="Centered GIF"
            class="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
