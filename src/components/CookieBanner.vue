<template>
  <div class="cookie-banner-modal" v-if="!accepted">
    <p>
      This website uses cookies to ensure you get the best experience on our
      website. Look at the
      <router-link style="text-decoration: underline" to="/cookie-policy"
        >terms</router-link
      >
    </p>
    <button @click="acceptCookies">Accept</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CookieBanner",
  data() {
    return {
      accepted: false,
    };
  },
  mounted() {
    const acceptedCookies = localStorage.getItem("acceptedCookies");
    if (acceptedCookies === "true") {
      this.accepted = true;
    }
  },
  methods: {
    acceptCookies() {
      this.accepted = true;
      localStorage.setItem("acceptedCookies", "true");
    },
  },
});
</script>

<style scoped>
.cookie-banner-modal {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
.cookie-banner-modal button {
  background-color: #fff;
  color: #333;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
