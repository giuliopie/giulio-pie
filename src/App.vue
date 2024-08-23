<script setup lang="ts">
import AdsenseAd from "@/components/AdsenseAd.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import CookieBanner from "@/components/CookieBanner.vue";
</script>

<template>
  <AppHeader />
  <router-view />
  <AdsenseAd />
  <CookieBanner />
  <AppFooter />
</template>

<style scoped></style>
