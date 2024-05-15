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
  <div class=""><h1>Ops! You seem to be lost..</h1></div>
</template>
