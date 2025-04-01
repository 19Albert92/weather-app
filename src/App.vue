<script setup>
import {RouterView} from 'vue-router'
import TheNavigation from "@/components/TheNavigation.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen font-roboto bg-base-primary">
    <TheNavigation/>
    <RouterView />
  </div>
</template>
