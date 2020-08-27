<template>
  <div
    class="flex flex-col px-2 py-2 border rounded-lg dark:border-gray-200 dark-hover:bg-green-900"
  >
    <h2 class="text-xl font-semibold dark:text-gray-100">{{ item.nameBM }}</h2>
    <p v-if="item.nameEN !== ''" class="text-md dark:text-gray-300">or</p>
    <h3 class="text-xl font-semibold dark:text-gray-100">{{ item.nameEN }}</h3>
    <p class="text-base dark:text-gray-100">
      Acronym: {{ item.acronymBM }}{{ hasBothAcronyms ? ',' : '' }}
      {{ item.acronymEN }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasBothAcronyms() {
      return this.item.acronymEN !== '' && this.item.acronymBM !== ''
    },
  },
}
</script>
