<template>
  <div class="bg-white min-h-screen">
    <!-- Use FrogBg as the background -->
    <FrogBg />

    <!-- Centered container for the GIF -->
    <div class="absolute inset-0 flex items-center justify-center pt-16">
      <div class="grid grid-cols-1 gap-5">
        <div class="flex-col items-center">
          <div
            class="bg-white border-4 border-pink-200 rounded-2xl font-main font-bold text-center items-end"
          >
            <h1 class="text-7xl font-extrabold">Welcome to Ribbitville!</h1>
            <Icon
              name="bxs:down-arrow"
              size="50"
              class="text-green-600 animate-bounce"
            />
            <NuxtLink to="/about" class="text-4xl block">Click me!</NuxtLink>
          </div>
        </div>
        <div class="justify-end order-first md:order-last">
          <img
            src="/assets/froggy.gif"
            alt="Centered GIF"
            class="max-w-full max-h-full rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
