<template>
  <div>
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-4076643375001776"
      data-ad-format="auto"
    ></ins>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "AdsenseAd",
  setup() {
    onMounted(() => {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    });
  },
});
</script>

<style scoped></style>
