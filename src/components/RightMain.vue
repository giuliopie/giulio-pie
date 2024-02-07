<!-- RightMain.vue -->
<script lang="ts">
import { defineComponent } from 'vue';
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import SupportIcon from './icons/IconSupport.vue'

export default defineComponent({
  name: 'RightMain',
  components: {
    WelcomeItem,
    SupportIcon,
    DocumentationIcon
  },
});
</script>

<template>
  <div class="right-main">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>

      Vue’s
      <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Vue</template>
      As an independent project, Vue relies on community backing for its sustainability. You can helpus by
    </WelcomeItem>
  </div>
</template>

<style scoped>
/* Stili specifici per la colonna sinistra */
.right-main {
  width: 50%;
}
</style>
