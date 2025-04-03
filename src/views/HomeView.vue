<template>
  <main class="container text-white">

    <SearchQuery
        @change-query="getSearchResults"
    />

    <CitiesList :cities="cities" @delete_city="deleteCity"/>

  </main>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import SearchQuery from "@/components/SearchQuery.vue";
import {onMounted, ref} from "vue";
import CitiesList from "@/components/CitiesList.vue";

const cities = ref([]);

const deleteCity = (cityId) => {
  cities.value = [...cities.value.filter(city => city?.id !== cityId)];
  localStorage.setItem("cities", JSON.stringify(cities.value));
  toast.success('Город успешно удален', {
    autoClose: 1500,
    theme: 'dark'
  });
}

const getSearchResults = (searchQuery) => {

  if (cities.value.length >= 5) return toast.dark('Больше нельзя добавлять городов', {
    autoClose: 1500,
  });

  if (cities.value.findIndex(el => el.id === searchQuery.id) === -1) {

    cities.value = [...cities.value, {...searchQuery}];

    localStorage.setItem("cities", JSON.stringify(cities.value));

    toast.success('Город успешно добавлен', {
      autoClose: 1500,
    });
  } else {
    toast.dark('Такой город у вас уже есть', {
      autoClose: 1500,
    });
  }
}

onMounted(() => {
  if (localStorage.getItem("cities")) {
    cities.value = JSON.parse(localStorage.getItem("cities"));
  }
})
</script>
