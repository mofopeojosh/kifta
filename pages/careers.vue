<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container page-banner">
        <h1 class="page-banner-title text-4xl text-center mb-6">
          Career
        </h1>
        <h2 class="product-title text-center">
          Current Openings
        </h2>
      </div>
      <section class="container md:grid grid-cols-3 gap-6 pb-20">
        <div class="col-span-3">
          <div>
            <div class="mt-10">
              <div class="md:grid grid-cols-1 gap-6">
                <template v-for="(career, i) in careers">
                  <article :title="career.name ? career.name : ''" class="app-card my-10 md:my-0 border-secondary flex flex-col justify-between" :key="'career-'+i">
                    <div>
                      <h5 class="text-xl font-bold mb-2">
                        {{ career.name ? career.name : '' }}
                      </h5>
                      <p class="">
                        {{ career.description }}
                      </p>
                    </div>
                    <div class="mt-5 mb-3">
                      <nuxt-link :to="career.path ? career.path : '#'" class="btn app-btn app-btn-dark app-btn-sm">
                        Read more
                      </nuxt-link>
                    </div>
                  </article>
                </template>
              </div>
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
import { mapGetters } from 'vuex'

export default {
  scrollToTop: true,
  components: {
    PageNavigation,
    AppFooter,
    AppHeader
  },
  computed:mapGetters({
      careers: 'careers/all'
    })
}
</script>
<style scoped>
.main {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
}
</style>
