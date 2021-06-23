<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container page-banner">
        <h1 class="page-banner-title">
          Career
        </h1>
      </div>
      <section class="container md:grid grid-cols-3 gap-6 pb-20">
        <div class="w-64 hidden md:block">
          <div class="inline-block bg-light w-64">
            <PageNavigation menu-group="careers" />
          </div>
        </div>
        <div class="col-span-2">
          <nuxt-child />
        </div>
      </section>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import PageNavigation from '~/components/PageNavigation'
import AppHeader from '~/components/AppHeader.vue'

export default {
  scrollToTop: true,
  components: {
    PageNavigation,
    AppFooter,
    AppHeader
  }
}
</script>

<style scoped>
.main {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
}
</style>
