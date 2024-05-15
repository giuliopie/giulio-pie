<!-- Main.vue -->
<script lang="ts">
import {
  defineComponent,
  // ref, onMounted, onBeforeUnmount
} from "vue";
import LeftMain from "./LeftMain.vue";
import RightMain from "./RightMain.vue";

export default defineComponent({
  name: "AppMain",
  components: {
    LeftMain,
    RightMain,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
});
</script>

<template>
  <main>
    <LeftMain v-if="!isMobile" />
    <RightMain v-if="!isMobile" />

    <div v-if="isMobile">
      <LeftMain />
      <RightMain />
    </div>
  </main>
</template>

<style scoped>
/* Stili specifici per il main */
main {
  display: flex;
  justify-content: center;
  /* min-height: 100vh; */
}

.main-container {
  display: flex;
  flex-direction: row; /* Disposizione orizzontale di default */
}
</style>
