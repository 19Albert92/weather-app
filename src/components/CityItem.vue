<template>
  <button @click="goCity" v-if="currentWeather" class="w-full rounded-2xl pt-2 pb-10 bg-base-secondary items-center relative shadow-2xl btn-animation-active-sm overflow-hidden">
    <WeatherCoverSwitch :code="currentWeather.condition.code" class="absolute top-0 object-cover h-full w-full brightness-80"/>
    <div class="flex flex-col gap-2 px-4">
      <div class="relative flex items-end gap-2">
        <img :src="currentWeather.condition.icon" alt="weather icon">
        <h1 class="text-5xl ordinal">{{ parseInt(currentWeather.temp_c) }}</h1>
        <span>{{currentWeather.condition.text}}</span>
      </div>
      <div class="flex flex-col gap-2 text-start">
        <span class="text-xs text-gray-400">Last update date: {{ parseDate(currentWeather.last_updated) }}</span>
        <span class="text-xs text-gray-400">Local time: {{ parseTime(currentWeather.localtime) }}</span>
      </div>
    </div>

    <div class="flex gap-2 absolute bottom-2.5 w-full px-4">
      <h2>{{currentWeather.name}}, <span class="text-xs text-gray-300">{{currentWeather.region}}</span></h2>
      <button class="ms-auto btn-animation-active" @click.prevent="$emit('delete_city')">
        <TrashIcon class="size-5"/>
      </button>
    </div>
  </button>
</template>

<script setup>
import {TrashIcon} from "@heroicons/vue/24/outline/index.js";
import {getCurrentWeather} from "@/api/queries.js";
import {onMounted, ref} from "vue";
import {parseDate, parseTime} from "@/helpers/date.js";
import {useRouter} from 'vue-router'
import WeatherCoverSwitch from "@/components/WeatherCoverSwitch.vue";

const router = useRouter();

const goCity = () => {
  router.push({
    name: 'cityView',
    params: {
      state: props.city?.url
    }
  })
}

const currentWeather = ref({
  cloud: 0,
  condition: {
    code: 0,
    icon: '',
    text: ''
  },
  temp_c: 0,
  last_updated: '',
  localtime: ''
});

const props = defineProps({
  city: {
    required: true
  }
})
defineEmits(['delete_city'])

onMounted(() => {
  getCurrentWeather({
    q: props.city?.url
  }).then(res => {
    if (res.status === 200 && res.data) {
      console.log(res.data)
      currentWeather.value = {...res.data.current, ...res.data.location}
    }
  })
})
</script>
