<template>
  <header>
    <nav>
      <div class="logo-container">
        <img
          src="@/assets/giulio_pie_logo.png"
          alt="GiulioPie Logo"
          style="height: 50px"
        />
        <p class="logo-title">Giulio_Pie</p>
      </div>
      <div style="align-items: center">
        <!-- Icona burger per dispositivi mobili -->
        <button
          v-if="isResponsive && !isMenuOpen"
          @click="toggleMenu"
          class="menu-button menu-icon-right"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <!-- Menu principale visibile solo su desktop o quando il menu è aperto -->
        <ul :class="{ open: isMenuOpen }" @click="isMenuOpen = false">
          <li
            v-if="isResponsive"
            class="close-icon-container"
            @click="isMenuOpen = false"
          >
            <span class="close-icon">&#215;</span>
          </li>
          <li><a href="/">Home</a></li>
          <li>
            <a href="https://medium.com/@giuliopiepoli.dev" target="_blank"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="https://talks.codemotion.com/distribuzione-e-monitoraggio-di-una-web-?_ga=2.260599566.2062845881.1649685326-23647107.1637597475"
              target="_blank"
              >Talks</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
      isResponsive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      this.isResponsive = window.innerWidth <= 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
header {
  background-color: var(--background-color-secondary);
  color: var(--color-heading);
  padding: 10px;
  text-align: right;
  width: 100%;
}

nav {
  margin: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}

li {
  margin: 0 20px;
  font-size: 1.2rem;
}

li:hover {
  margin: 0 20px;
  text-decoration: underline;
}

.logo-container {
  display: flex;
  align-items: center; /* Centra verticalmente all'interno del container flessibile */
}

.logo-title {
  margin-left: 10px; /* Aggiunge un margine a sinistra per separare il titolo dal logo */
}

/* Stile per l'icona burger */
.menu-button {
  display: none; /* Nasconde l'icona di default */
  background: none;
  border: none;
  cursor: pointer;
}

.menu-button span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--color-icon);
  margin: 5px;
  transition: transform 0.4s;
}

.menu-button.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-button.open span:nth-child(2) {
  opacity: 0;
}

.menu-button.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Stile per il menu principale quando è aperto */
ul.open {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Stile per l'icona "x" per chiudere il menu su dispositivi mobili */
.close-icon-container {
  margin-left: auto; /* Sposta l'icona a destra */
}

.close-icon {
  color: var(--color-icon);
  font-size: 16px; /* Dimensione dell'icona */
  line-height: 1; /* Altezza della riga */
  cursor: pointer;
}

/* Media query per dispositivi mobili */
@media (max-width: 768px) {
  /* Mostra l'icona burger solo su dispositivi mobili */
  .menu-button {
    display: block;
  }
  .logo-title {
    display: none;
  }

  /* Nasconde il menu principale su dispositivi mobili */
  ul {
    display: none;
  }

  /* Mostra il menu principale quando è aperto su dispositivi mobili */
  ul.open {
    display: flex;
  }
  .menu-icon-right {
    margin-left: auto;
  }
}
</style>
