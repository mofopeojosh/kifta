<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container page-banner">
        <h1 class="page-banner-title text-4xl text-center mb-6">
          Products
        </h1>
      </div>
      <section class="container md:grid grid-cols-3 gap-6 pb-20">
        <div class="col-span-3">
          <div>
            <div class="mt-10">
              <ProductsView :active-tab="activeTab" />
            </div>
          </div>
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
import ProductsView from '~/components/products/TabView'

export default {
  scrollToTop: true,
  components: {
    PageNavigation,
    AppFooter,
    AppHeader,
    ProductsView
  },
  data() {
    return {
      activeTab: ''
    }
  },
  beforeMount() {
    if(this.$route.query){
      this.activeTab = this.$route.query['type'] ? this.$route.query['type'] : '';
    }
  },
}
</script>
