<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue';
import AppMain from '@/components/AppMain.vue';
import AppFooter from '@/components/AppFooter.vue';


</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
  <RouterView />
</template>

<style scoped>

</style>
