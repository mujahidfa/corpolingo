<template>
  <section>
    <!-- Negative margin to account for curved background -->
    <div class="flex flex-row items-start justify-center -mt-24">
      <main class="z-10 w-full">
        <div class="sticky top-0 z-10 pt-0 mt-0 lg:-mt-4 lg:pt-4">
          <!-- Spacing on top of the search bar when scrolling -->
          <div class="hidden lg:block" aria-hidden="true">
            <div
              class="absolute inset-x-0 top-0 pointer-events-none"
              style="z-index: -1"
            >
              <!-- Bar matching with the hero's color -->
              <div class="h-16 bg-light-primary dark:bg-dark-primary"></div>
            </div>
          </div>

          <!-- Search bar -->
          <SearchBar v-model="searchKeyword" />
        </div>

        <!-- Lingo -->
        <div class="lg:max-w-screen-xl lg:mx-auto lg:px-8">
          <div
            class="
              overflow-hidden
              lg:rounded-b-3xl
              bg-light-secondary
              dark:bg-dark-secondary
              min-h-[280px]
              shadow-md
              dark:shadow-none
            "
          >
            <div class="app-grid">
              <LingoItem
                v-for="lingo in filteredLingos"
                :key="`${lingo.nameEN}-${lingo.nameBM}`"
                :lingo="lingo"
              >
              </LingoItem>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { lingobank } from "../lingobank";
import SearchBar from "./SearchBar.vue";
import LingoItem from "./LingoItem.vue";

const route = useRoute();
const router = useRouter();

const searchKeyword = computed({
  get(): string | undefined {
    return route.query.query?.toString();
  },
  set(newSearchKeyword: string): void {
    if (newSearchKeyword === "") {
      router.push({ path: "/" });
    } else {
      router.replace({
        query: {
          query: newSearchKeyword,
        },
      });
    }
  },
});

const filteredLingos = computed(() => {
  return lingobank.filter((item) => {
    const itemData = `${item.nameEN.toLowerCase()} ${item.nameBM.toLowerCase()} ${item.acronymEN.toLowerCase()} ${item.acronymBM.toLowerCase()}`;

    let query = "";
    if (searchKeyword.value) {
      query = searchKeyword.value.toLowerCase();
    }

    return itemData.includes(query);
  });
});
</script>

<style scoped>
.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(160px - 1px), 1fr));
  /* gap: 1px; */
}
/* .app-grid > * {
  outline: 1px solid var(--cool-gray-200);
}
.dark .app-grid > * {
  outline: 1px solid var(--cool-gray-800);
} */
</style>
