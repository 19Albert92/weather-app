<template>
  <div class="flex flex-col gap-3">
    <h4>Погода по времени</h4>
    <div>
      <swiper
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
          :slides-per-view="3.5"
          :space-between="5"
      >
        <swiper-slide v-for="(weatherItem, index) in weatherDay" :key="index">
          <div class="py-4 px-2 border-2 border-gray-400 flex flex-col items-center items-center rounded-lg gap-2 backdrop-blur shadow">
            <span class="text-lg font-bold text-shadow-black">{{parseInt(weatherItem.temp_c)}}°C</span>
            <img :src="weatherItem.condition.icon" alt="weather icon" class="size-16">
            <span class="font-bold text-lg uppercase">{{parseTime(weatherItem?.time)}}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import {Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
import {parseTime, parseWeekDayShort} from "@/helpers/date.js";
import {Swiper, SwiperSlide} from "swiper/vue";

defineProps({
  weatherDay: {
    type: Array,
    required: true
  }
})
</script>
