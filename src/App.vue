<script setup>
import 'vue3-toastify/dist/index.css';
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen font-roboto bg-base-primary">
    <RouterView />
  </div>
</template>
