<template>
  <main class="relative min-h-full flex-1 text-white">
    <WeatherCoverSwitch v-if="currentWeather.condition.code > 0" :code="currentWeather.condition.code" class="absolute bottom-0 object-cover h-full w-full brightness-80"/>

    <button class="absolute top-10 start-10 size-10 bg-white/20 flex justify-center items-center rounded-full btn-animation-active-sm" @click="goBack">
      <ChevronLeftIcon class="size-5"/>
    </button>

    <div v-if="currentWeather.name" class="absolute bottom-20 start-20 flex flex-col gap-2 items-start">
      <div class="flex items-start">
        <h1 class="text-9xl leading-none">{{parseInt(currentWeather.temp_c)}}&deg;</h1>
        <img :src="currentWeather.condition.icon" alt="weather icon">
      </div>
      <div>
        <h4 class="text-5xl">{{ currentWeather.name }}</h4>
        <span class="text-sm font-light">{{ parseTime(currentWeather.localtime) }} - {{ parseDate(currentWeather.last_updated) }}</span>
      </div>
    </div>

    <div class="absolute right-0 end-0 bg-gray-500/25 w-1/3 backdrop-blur h-full border-l-2 border-l-gray-200/20 p-5 overflow-y-auto shadow-xl">
      <div class="flex flex-col gap-6 text-white *:border-b-2 *:border-gray-400/20 *:pb-5">
        <WeatherDetail
            v-if="forecastWeather.length > 0"
            :current-weather="forecastWeather[chooseDay].day"
        />

        <WeatherWeek
            :choose-day="chooseDay"
            @choose-day-handler="index => chooseDay = index"
            :forecast-weather="forecastWeather"
            v-if="forecastWeather.length > 0"
        />

        <WeatherDay
            v-if="forecastWeather.length > 0"
            :weather-day="forecastWeather[chooseDay].hour"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import {ChevronLeftIcon} from "@heroicons/vue/24/solid/index.js";
import WeatherCoverSwitch from "@/components/WeatherCoverSwitch.vue";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getForecastWeather} from "@/api/queries.js";
import {parseDate, parseTime} from "../helpers/date.js";
import WeatherWeek from "@/components/WeatherWeek.vue";
import WeatherDetail from "@/components/WeatherDetail.vue";
import WeatherDay from "@/components/WeatherDay.vue";

const chooseDay = ref(0);

const route = useRoute()

const router = useRouter();

const goBack = () => router.back();

const forecastWeather = ref([]);

const currentWeather = ref({
  cloud: 0,
  condition: {
    code: 0,
    icon: '',
    text: ''
  },
  temp_c: 0,
  last_updated: '',
  localtime: '',
  wind_degree: 0,
  wind_kph: 0,
  humidity: 0
});

onMounted(() => {

  const cities = JSON.parse(localStorage.getItem("cities"));

  if (cities && cities?.findIndex(prev => prev.url === route.params.state) !== -1) {

    getForecastWeather({
      q: route.params.state??'',
      days: 3
    }).then(res => {
      if (res.status === 200) {
        forecastWeather.value = res.data.forecast.forecastday;
        currentWeather.value = {...res.data.current, ...res.data.location}

        document.title = res.data.location.name;
      }
    })

  } else {
    router.push({name: 'home'})
  }
})
</script>
