<template>
  <h4>Погода на 3 дня</h4>
  <div class="flex gap-3 items-center *:flex-1">
    <button @click="$emit('chooseDayHandler', index)" :class="clsx(
        'w-[100px] py-4 px-2 border-2 border-gray-400 flex flex-col items-center rounded-lg gap-5 backdrop-blur shadow',
        index === chooseDay && 'scale-105 border-gray-100'
        )" v-for="(weatherItem, index) in forecastWeather" :key="index">
      <div class="flex flex-col">
        <span class="text-xl font-bold text-shadow-black">{{parseInt(weatherItem.day.maxtemp_c)}}°C</span>
        <span class="text-lg text-white/80 font-bold text-shadow-black">{{parseInt(weatherItem.day.mintemp_c)}}°C</span>
      </div>
      <img :src="weatherItem.day.condition.icon" alt="weather icon">
      <span class="font-bold text-xl uppercase">{{parseWeekDayShort(weatherItem?.date)}}</span>
    </button>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {parseWeekDayShort} from "@/helpers/date.js";
import clsx from "@/helpers/clsx.js";
import 'swiper/css';

defineProps({
  forecastWeather: {
    type: Array,
    required: true
  },
  chooseDay: {
    type: Number,
    default: 0
  }
})

defineEmits(['chooseDayHandler'])
</script>
