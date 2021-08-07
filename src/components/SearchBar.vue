<template>
  <div class="lg:max-w-screen-xl lg:mx-auto lg:px-8">
    <div
      class="box-content border-b border-transparent  bg-light-secondary dark:bg-dark-secondary lg:rounded-t-3xl"
    >
      <div class="h-full border-b border-gray-400 dark:border-gray-800">
        <form class="relative group" @submit.prevent>
          <!-- Search icon -->
          <label
            class="absolute inset-y-0 left-0 pointer-events-none"
            for="search-input"
          >
            <span class="sr-only">{{ placeholderText }}</span>
            <div class="flex flex-row h-full px-6 lg:px-8">
              <div class="flex flex-row items-center">
                <div
                  class="w-6 h-6 text-gray-500  dark:text-gray-600 group-focus-within:text-blue-500"
                >
                  <div class="transition duration-200 ease-out">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </label>

          <!-- Input search -->
          <div class="block w-full h-full bg-transparent">
            <input
              class="w-full py-6 pl-16 pr-6 text-xl text-gray-800 placeholder-gray-500  lg:pl-20 lg:pr-8 focus:outline-none dark:placeholder-gray-600 dark:text-gray-200 bg-light-secondary dark:bg-dark-secondary lg:rounded-t-3xl"
              id="search-input"
              ref="searchInput"
              type="search"
              :placeholder="placeholderText"
              :value="modelValue"
              @input="updateValue"
              autocomplete="off"
              autocorrect="off"
              autofocus
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onKeyStroke } from "@vueuse/core";
import { ref } from "vue";

// Press "/" to focus on search bar
const searchInput = ref<HTMLInputElement>();
onKeyStroke("/", (e) => {
  e.preventDefault();
  searchInput.value?.focus();
});

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const placeholderText = "Search a corporate acronym";

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>
