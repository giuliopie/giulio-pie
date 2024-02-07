<!-- Header.vue -->
<template>
  <header>
    <h1>Il Tuo Header</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Servizi</a></li>
        <li><a href="#">Contatti</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
});
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
  
}

h1 {
  margin: 0;
}

nav {
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}
</style>
