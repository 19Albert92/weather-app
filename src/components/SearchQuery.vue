<template>
  <div class="pt-4 mb-6 relative flex flex-col z-10">
    <input v-debounce="600"
           @focus="showList = true"
           v-model.lazy="searchQuery"
           class="w-full bg-transparent border-b focus:border-base-secondary focus:outline-none py-2 px-1 focus:shadow-base"
           type="text"
           placeholder="Поиск города или штата">

    <ul v-if="showList && countriesList.length > 0" class="w-full py-2 absolute bg-search-list top-[60px] px-1 rounded-sm rounded-b-xl">
      <li v-for="city in countriesList" :key="city.region" class="cursor-pointer p-2 transition-all duration-150 hover:bg-base-primary active:scale-[.99] rounded-sm" @click="chooseCountry(city)">
        {{ city.region }}
      </li>
    </ul>
    <div class="flex justify-center py-4" v-if="searchQuery !== '' && countriesList.length === 0">
      <span class="font-bold text-2xl">'{{searchQuery}}' не был найден!</span>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import {getAutomationCity} from "@/api/queries.js";

const showList = ref(false);

const searchQuery = ref('');

const countriesList = ref([]);

const emits = defineEmits(['changeQuery']);

const chooseCountry = (city) => {
  emits('changeQuery', {id: city.id, url: city.url});
  showList.value = false;
}

watch(searchQuery, (value) => {
  if (value === "") return countriesList.value = [];

  getAutomationCity({
    q: value
  }).then(res => {
    console.log(res)
    if (res.data.length === 0) {
      if(countriesList.value.length > 0) countriesList.value = [];
      emits('notFond', true);
    } else {
      countriesList.value = res.data;
      showList.value = true;
    }
  })
});
</script>
