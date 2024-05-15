<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "WelcomeItem",
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
  <div class="item">
    <a :href="href" target="_blank" rel="noopener noreferrer">
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <h2>
          <slot name="heading"></slot>
        </h2>
        <h3>
          <slot name="caption"></slot>
        </h3>
      </div>
    </a>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2.5rem;
  margin-left: 4rem;
  display: flex;
  position: relative;
  padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
}
.item:before {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 5px);
}
.item:after {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 5px);
}
.item:first-of-type:before {
  display: none;
}
.item:last-of-type:after {
  display: none;
}
.details {
  flex: 1;
  margin-left: 3rem;
}
.details:hover {
  text-decoration: underline;
  color: var(--color-text);
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);
  top: calc(50% - 25px);
  left: -26px;
  position: absolute;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  width: 50px;
  height: 50px;
}
h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-caption);
}

@media (max-width: 768px) {
  .item {
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 0.2rem 0 0.5rem 0.5rem;
  }
  .details {
    margin-left: 2rem;
    align-items: flex-start;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1rem;
  }
}
</style>
