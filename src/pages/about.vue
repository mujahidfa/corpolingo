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
          <div class="lg:max-w-screen-xl lg:mx-auto lg:px-8">
            <div
              class="box-content border-b border-transparent  bg-light-secondary dark:bg-dark-secondary lg:rounded-t-3xl"
            >
              <div
                class="flex flex-row items-center h-full py-6 border-b border-gray-400  dark:border-gray-800"
              >
                <!-- Info icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-5 text-blue-500 lg:mx-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h2
                  class="text-xl font-semibold text-gray-800 dark:text-gray-200"
                >
                  About
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Lingo -->
        <div class="lg:max-w-screen-xl lg:mx-auto lg:px-8">
          <div
            class="px-8 py-6 overflow-hidden text-lg shadow-md  lg:rounded-b-3xl bg-light-secondary dark:bg-dark-secondary dark:shadow-none text-light-secondary dark:text-dark-secondary"
          >
            <p>
              This is <span class="font-bold">CorpoLingo™</span>, a lingo
              handbook meant for the new and the lost, wandering aimlessly in
              the ruthless reality of the Corporate World™. This handbook is
              made especially for the average executive who got thrown acronyms
              like it's the early 00's internet. To those who wish to perpetuate
              the illusion of know-it-all, to those who wish to save a minute of
              their working hour from asking a coworker to dissect a cryptic, 3
              (sometimes 4) letter, alphabet-derived acronym, and to those who
              just wants to know WTH is going on; this handbook is for you. ✨✨
            </p>

            <h3 class="pt-4 text-xl font-semibold">Contribute</h3>

            <p class="pt-1">
              If you wish to add more useful lingo, or if you find any mistakes
              or improvements that can be made, you can do it
              <a
                href="https://github.com/mujahidfa/corpolingo/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold underline  focus:outline-none hover:text-bg-light-primary focus:text-bg-light-primary dark:hover:text-blue-400 dark:focus:text-blue-400"
                >here</a
              >.
            </p>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
