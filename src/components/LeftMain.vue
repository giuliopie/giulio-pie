<!-- LeftMain.vue -->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeftMain',
  props: {
    msg: String
  },
});


</script>

<template>
  <div class="left-main">
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="250" height="250" />

    <div class="wrapper">
    </div>
    <!-- Contenuto della colonna sinistra -->
      <div class="greetings">
      <h1 class="green">Giulio Piepoli</h1>
      <h3>
        You’ve successfully created a project with
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
      </h3>
    </div>
  </div>
</template>

<style scoped>
/* Stili specifici per la colonna sinistra */
.left-main {
  width: 50%;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
