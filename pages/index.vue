<template>
  <main class="min-h-screen mx-auto text-center">
    <h1 class="text-xl dark:text-blue-100">
      Corporate™ lingo dictionary for the masses
    </h1>

    <div class="flex justify-center px-4 py-4">
      <input
        v-model="searchKeyword"
        type="search"
        placeholder="Enter a corporate acronym"
        class="flex-grow px-4 py-4 text-xl rounded-md dark:bg-gray-900 dark:text-blue-100 focus:outline-none"
      />
    </div>

    <div v-for="item in filteredWords" :key="item" class="px-4 my-4">
      <Card :item="item" />
    </div>
  </main>
</template>

<script>
import { wordbank } from '@/wordbank.js'

export default {
  data() {
    return {
      searchKeyword: '',
      wordbank,
    }
  },
  computed: {
    filteredWords() {
      return this.wordbank.filter((item) => {
        const itemData = `${item.nameEN.toLowerCase()} ${item.nameBM.toLowerCase()} ${item.acronymEN.toLowerCase()} ${item.acronymBM.toLowerCase()}`

        const query = this.searchKeyword.toLowerCase()

        return itemData.includes(query)
      })
    },
  },
}
</script>

<style scoped></style>
