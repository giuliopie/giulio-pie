<template>
  <footer>Giulio Piepoli ®</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
});
</script>

<style scoped>
footer {
  background-color: var(--background-color-secondary);
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
}
</style>
