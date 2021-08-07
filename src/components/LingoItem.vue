<template>
  <button
    class="relative flex flex-col items-center justify-center p-4  outline-light-grid dark:outline-dark-grid focus:bg-blue-400 hover:bg-blue-400 focus:text-light-primary hover:text-light-primary dark:hover:bg-blue-600 dark:focus:bg-blue-600 text-light-secondary dark:text-dark-secondary dark:hover:text-white dark:focus:text-white"
  >
    <p v-if="title" class="text-lg font-semibold">
      {{ title }}
    </p>
    <p class="text-sm">
      {{ namePrimary }}
    </p>
    <p v-if="namePrimary && nameSecondary">or</p>
    <p v-if="nameSecondary" class="text-sm">
      {{ nameSecondary }}
    </p>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Lingo } from "../lingobank";

export default defineComponent({
  props: {
    lingo: {
      type: Object as PropType<Lingo>,
      required: true,
    },
  },
  setup(props) {
    const title = computed(() => {
      if (props.lingo.acronymEN && !props.lingo.acronymBM) {
        return props.lingo.acronymEN;
      } else if (!props.lingo.acronymEN && props.lingo.acronymBM) {
        return props.lingo.acronymBM;
      } else if (!props.lingo.acronymEN && !props.lingo.acronymBM) {
        return "";
      } else {
        if (props.lingo.preferredLang === "BM") {
          return `${props.lingo.acronymBM} - ${props.lingo.acronymEN}`;
        } else {
          return `${props.lingo.acronymEN} - ${props.lingo.acronymBM}`;
        }
      }
    });

    const name = computed(() => {
      if (props.lingo.nameEN && !props.lingo.nameBM) {
        return props.lingo.nameEN;
      } else if (!props.lingo.nameEN && props.lingo.nameBM) {
        return props.lingo.nameBM;
      } else {
        return `${props.lingo.nameEN}\nor\n${props.lingo.nameBM}`;
      }
    });

    const namePrimary = computed(() => {
      if (props.lingo.preferredLang === "BM") {
        return props.lingo.nameBM;
      } else {
        return props.lingo.nameEN;
      }
    });

    const nameSecondary = computed(() => {
      if (props.lingo.preferredLang === "BM") {
        return props.lingo.nameEN;
      } else {
        return props.lingo.nameBM;
      }
    });

    return {
      title,
      name,
      namePrimary,
      nameSecondary,
    };
  },
});
</script>
