import { createApp } from "vue";
// import './style.css'
import "./index.css";
import router from "./router";
import App from "./App.vue";

// Aggiungi il codice AdSense globalmente
const adsenseScript = document.createElement("script");
adsenseScript.async = true;
adsenseScript.src =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4076643375001776";
document.head.appendChild(adsenseScript);

const app = createApp(App);

app.use(router);

app.mount("#app");
