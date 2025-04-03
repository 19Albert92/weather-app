<template>
  <div class="flex flex-col gap-2 z-0">
    <TransitionGroup name="cities-list">
      <div v-for="city in cities" :key="city.id">
        <CityItem :city @delete_city="$emit('delete_city', city.id)"/>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import CityItem from "@/components/CityItem.vue";

defineProps({
  cities: {
    type: Array,
    required: true
  }
})

defineEmits(['delete_city'])
</script>
