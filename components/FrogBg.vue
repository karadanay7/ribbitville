<template>
  <div class="flex flex-col">
    <div class="flex flex-col justify-between min-h-screen">
      <!-- Use v-for to generate 10 columns -->
      <div v-for="col in 10" :key="col">
        <div class="flex flex-row justify-between">
          <!-- Use v-for to generate 10 rows within each column -->
          <div v-for="row in 15" :key="row">
            <div class="flex items-center justify-between">
              <Icon name="twemoji:frog" size="50" class="hover:scale-125" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
