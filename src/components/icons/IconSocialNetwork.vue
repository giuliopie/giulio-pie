<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SocialNetworkIcon",
  props: {
    dynamicHref: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const href = ref(props.dynamicHref);

    return {
      href,
    };
  },
});
</script>

<template>
  <div class="social-network-icon">
    <a :href="href" target="_blank" rel="noopener noreferrer">
      <slot name="social-network-icon"></slot>
    </a>
  </div>
</template>

<style scoped>
.social-network-icon {
  margin-right: 0.5rem;
}
</style>
