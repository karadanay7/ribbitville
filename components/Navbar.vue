<template>
  <div class="w-full font-main absolute top-0 z-10">
    <div
      class="flex items-center justify-between px-8 text-gray-900 font-bold md:px-8 py-2 bg-pink-100 z-10"
    >
      <div class="flex items-center">
        <NuxtLink to="/" class="text-black text-2xl font-main font-extrabold">
          <Icon
            name="twemoji:frog"
            size="50"
            class="border-2 border-green-600 rounded-full p-1"
          />
          Ribbitville
        </NuxtLink>
      </div>
      <button
        @click="toggleMenu()"
        class="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        type="button"
      >
        <Icon
          :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'"
          class="w-6 h-6 text-green-600"
        />
      </button>
      <!-- Desktop menu -->
      <ul
        class="hidden md:flex text-sm sm:text-lg md:text-2xl flex-row text-green-600 font-main navbar"
      >
        <li class="hover:scale-110">
          <NuxtLink to="/" class="pl-4 sm:pl-8 md:pl-12 lg:pl-16 font-main"
            >Home</NuxtLink
          >
        </li>
        <li class="hover:scale-110">
          <NuxtLink to="/about" class="pl-4 sm:pl-8 md:pl-12 lg:pl-16 font-main"
            >About</NuxtLink
          >
        </li>
        <li class="hover:scale-110">
          <NuxtLink to="/game" class="pl-4 sm:pl-8 md:pl-12 lg:pl-16 font-main"
            >Game</NuxtLink
          >
        </li>
        <li class="hover:scale-110">
          <NuxtLink to="/frogs" class="pl-4 sm:pl-8 md:pl-12 lg:pl-16 font-main"
            >Frogs</NuxtLink
          >
        </li>
      </ul>
    </div>
    <ul
      v-if="isMenuOpen"
      class="block md:hidden absolute z-10 w-2/5 right-0 bg-pink-100 border-2 border-gray-200 rounded-lg py-2 text-center font-main"
    >
      <li>
        <NuxtLink
          to="/"
          class="block py-2 px-4 text-black pl-8 hover:text-gray-900 hover:scale-110"
          aria-current="page"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/about"
          class="block py-2 px-4 text-black pl-8 hover:text-gray-900 hover:scale-110"
          >About</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/game"
          class="block py-2 px-4 text-black pl-8 hover:text-gray-900 hover:scale-110"
          >Game</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/frogs"
          class="block py-2 px-4 text-black pl-8 hover:text-gray-900 hover:scale-110"
          aria-current="page"
          >Frogs</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
// Add event listener to close the menu when clicking outside
</script>
