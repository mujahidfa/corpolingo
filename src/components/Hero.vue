<script setup lang="ts">
import About from "./About.vue";
import ThemeToggler from "./ThemeToggler.vue";
</script>

<template>
  <section class="relative">
    <header
      class="flex flex-row justify-center px-4  bg-light-primary lg:px-6 dark:bg-dark-primary"
    >
      <div class="w-full max-w-screen-xl">
        <div
          class="flex items-center justify-end h-16 space-x-4 lg:pr-2 xl:pr-6"
        >
          <About />
          <ThemeToggler />
        </div>

        <div class="flex flex-col items-center justify-center">
          <router-link
            to="/"
            class="rounded-full  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-8 focus:ring-offset-blue-700 dark:focus:ring-offset-blue-900"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight  text-light-primary dark:text-dark-primary sm:text-5xl md:text-6xl"
            >
              CorpoLingo
            </h1>
          </router-link>
          <p
            class="mt-3 text-lg  text-light-primary-lighter dark:text-dark-primary-lighter md:mt-5"
          >
            Corporate™ lingo dictionary for the masses
          </p>
        </div>

        <!-- Create negative spacing for header background overlap -->
        <div class="h-32" aria-hidden="true"></div>
      </div>
    </header>

    <!-- Curved background -->
    <div
      class="absolute inset-x-0 pointer-events-none top-full"
      aria-hidden="true"
    >
      <div class="text-bg-light-primary dark:text-bg-dark-primary">
        <svg
          preserveAspectRatio="none"
          fill="currentColor"
          viewBox="0 0 32 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
        </svg>
      </div>
    </div>
  </section>
</template>
