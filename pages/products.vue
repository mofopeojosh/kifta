<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container page-banner">
        <h1 class="page-banner-title">
          Products
        </h1>
      </div>
      <section class="container grid grid-cols-3 gap-6 pb-20">
        <div class="w-64 bg-light">
          <PageNavigation menu-group="products" />
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
  components: {
    PageNavigation,
    AppFooter,
    AppHeader
  }
}
</script>

<style scoped>

</style>
