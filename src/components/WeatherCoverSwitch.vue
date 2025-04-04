<template>
  <img
      :src="WEATHER_COVER[code]"
      alt="sunny image"
      :class="$parent"
      loading="lazy"
  >
</template>

<script>
const WEATHER_COVER = {
  1000: '/img/sunny.jpg',
  1006: '/img/cloud.jpg',
  1003: '/img/partly-cloudy.jpg',
  1009: '/img/cloudy.jpg',
  1030: '/img/fog.jpg',
  1135: '/img/fog.jpg',
}
</script>

<script setup>
defineProps({
  code: {
    type: Number,
    required: true
  }
})
</script>
