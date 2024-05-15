<!-- RightMain.vue -->
<script lang="ts">
import { defineComponent } from "vue";
import WelcomeItem from "./WelcomeItem.vue";
import TalksIcon from "./icons/IconTalks.vue";
import BlogIcon from "./icons/IconBlog.vue";
import SupportIcon from "./icons/IconSupport.vue";

export default defineComponent({
  name: "RightMain",
  components: {
    WelcomeItem,
    SupportIcon,
    TalksIcon,
    BlogIcon,
  },
  data() {
    return {
      mediumBlogUrl: "https://medium.com/@giuliopiepoli.dev",
      talksUrl:
        "https://talks.codemotion.com/distribuzione-e-monitoraggio-di-una-web-?_ga=2.260599566.2062845881.1649685326-23647107.1637597475",
      buyMeCoffeeUrl: "https://www.buymeacoffee.com/giuliopie",
    };
  },
});
</script>

<template>
  <div class="right-main">
    <!-- Blog -->
    <WelcomeItem :dynamicHref="mediumBlogUrl">
      <template #icon>
        <BlogIcon />
      </template>
      <template #heading>Blog</template>
      <template #caption>Read my blog on Medium.</template>
    </WelcomeItem>

    <!-- Talks -->
    <WelcomeItem :dynamicHref="talksUrl">
      <template #icon>
        <TalksIcon />
      </template>
      <template #heading>Talks</template>
      <template #caption>Look at the speech I gave.</template>
    </WelcomeItem>

    <!-- Support Me -->
    <WelcomeItem :dynamicHref="buyMeCoffeeUrl">
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Me</template>
      <template #caption>If you want you can buy me a coffe.</template>
    </WelcomeItem>
  </div>
</template>

<style scoped>
/* Stili specifici per la colonna sinistra */
.right-main {
  width: 50%;
  background-color: var(--background-color-main);
  /* background-color: #126782; */
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 60px;
}

/* Media query per dispositivi mobili */
@media (max-width: 768px) {
  .right-main {
    width: 100%;
    min-height: 10vh;
  }
}
</style>
