<template>
  <main>
    <AppHeader />
    <div class="main">
      <section class="container page-banner grid grid-cols-4 gap-6">
        <div class="col-start-2">
          <h1 v-if="!$route.params.id" class="page-banner-title">
            News
          </h1>
        </div>
      </section>
      <section class="container md:grid grid-cols-4 gap-6 pb-20">
        <div class="col-span-2 col-start-2">
          <nuxt-child />
        </div>
        <div class="col-start-1 row-start-1">
          <h5 class="product-subtitle-sm">
            Follow us
          </h5>
          <div class="flex my-5">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" style="margin-left: -6px;">
            <img src="https://img.icons8.com/color/48/000000/twitter-squared.png">
          </div>
        </div>
      </section>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import AppHeader from '~/components/AppHeader.vue'

export default {
  name: 'NewsVue',
  components: {
    AppFooter,
    AppHeader
  },
  data () {
    return {
      posts: [],
      user: {}
    }
  },
  mounted () {
  },
  methods: {
    async searchPosts (q) {
      const res = await this.$axios.$get('https://kiftatechnologies.com/blog/wp-json/wp/v2/posts', {
        params: { filter: q }
      })
      this.posts = res
    }
  }
}
</script>

<style scoped>

</style>
