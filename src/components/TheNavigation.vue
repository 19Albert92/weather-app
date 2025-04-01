<template>
  <header class="sticky top-0 bg-base-primary shadow-lg">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3 flex-1">
        <Cog8ToothIcon class="size-8"/>
        <h1 class="text-2xl">The Local Weather</h1>
      </RouterLink>

      <div class="flex gap-3">
        <button class="flex-shrink-0 btn-animation-active" @click="toggleModalAction">
          <InformationCircleIcon class="size-5"/>
        </button>
        <button class="flex-shrink-0 btn-animation-active">
          <PlusIcon class="size-5"/>
        </button>
      </div>
    </nav>
  </header>
  <ModalWrapper :is-show="toggleModal" @on-close="toggleModalAction">
    <div class="text-black">
      <h1 class="text-2xl mb-1">About:</h1>
      <p class="mb-4">
        The Local Weather allows you to track the current and
        future weather of cities of your choosing.
      </p>
      <h2 class="text-2xl">How it works:</h2>
      <ol class="list-decimal list-inside mb-4">
        <li>
          Search for your city by entering the name into the
          search bar.
        </li>
        <li>
          Select a city within the results, this will take
          you to the current weather for your selection.
        </li>
        <li>
          Track the city by clicking on the "+" icon in the
          top right. This will save the city to view at a
          later time on the home page.
        </li>
      </ol>

      <h2 class="text-2xl">Removing a city</h2>
      <p>
        If you no longer wish to track a city, simply select
        the city within the home page. At the bottom of the
        page, there will be am option to delete the city.
      </p>
    </div>
  </ModalWrapper>
</template>

<script setup>
import {Cog8ToothIcon, InformationCircleIcon, PlusIcon} from "@heroicons/vue/20/solid/index.js";
import ModalWrapper from "@/components/ModalWrapper.vue";
import {ref} from "vue";

const toggleModal = ref(false);

const toggleModalAction = () => {
  toggleModal.value = !toggleModal.value
}
</script>
