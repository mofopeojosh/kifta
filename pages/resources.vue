<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container my-10">
        <h1 class="text-5xl font-bold leading-tight">
          Document Archive
        </h1>
        <div class="text-gray-700 text-xs mb-10">
          Download and view our brochures and manuals offline.
        </div>
      </div>
      <section class="container pb-20">
        <div class="col-span-2">
          <TabNavigation default-tab="general">
            <template v-slot:nav="{ tab }">
              <TabMenuItem v-model="tab.activeTab" name="general">
                General
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="technology">
                Technology
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="power">
                Power
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="fire-and-security">
                Fire and Security
              </TabMenuItem>
              <TabMenuItem v-model="tab.activeTab" name="pipelines">
                PipelineSecurity
              </TabMenuItem>
            </template>
            <template v-slot:general>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  General Brochures
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Main Brochure
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Fire Brochure
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Power Brochure
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Pipeline Brochure
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Security Brochure
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                </div>
              </div>
            </template>
            <template v-slot:technology>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Distributed Acoustic Sensing
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      DAS Technology Overview
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Horizon Data Sheet
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Face Sentry Data Sheet
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Face Sentry Cable Data Sheet
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Das Technology Overview
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                </div>
              </div>
              <div class="mb-20">
                <h4 class="product-subtitle-sm">
                  Distributed Temperature Sensing
                </h4>
                <div class="grid grid-cols-5 gap-6 mt-4">
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      DTS Technology Overview
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Das Technology Overview
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Fibre TTT Datasheet
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Fire Fibre AT Data Sheet
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Fire Laser Data Sheet
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Fire Laser Mobdus Data Sheet
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                  <article class="app-card text-center">
                    <p class="h-12 mb-3">
                      Fire Laser Relay Data Sheet
                    </p>
                    <button class="app-btn-sm">
                      download
                    </button>
                  </article>
                </div>
              </div>
            </template>
          </TabNavigation>
        </div>
      </section>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import TabNavigation from '~/components/TabNavigation'
import TabMenuItem from '~/components/TabMenuItem'
import AppFooter from '~/components/AppFooter'
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader,
    TabMenuItem,
    TabNavigation
  }
}
</script>

<style scoped>

</style>
