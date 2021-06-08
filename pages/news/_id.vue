<template>
  <div v-if="Object.keys(post).length > 0" class="py-5">
    <div class="text-sm text-gray-700 mb-3">
      {{ new Date(post.date).toDateString() }}
    </div>
    <h2 class="product-title font-bold mb-4 ">
      {{ post.title.rendered }}
    </h2>
    <img
      v-if="post.image"
      :src="post.image"
      class="my-8 w-full object-cover"
      alt=""
    >
    <!-- eslint-disable-next-line-->
    <div v-html="post.content.rendered" />
  </div>
  <div v-else class="py-5">
    <div class="h-4 w-24 mb-3 bg-gray-100" />
    <div class="h-4 w-40 mb-4 bg-gray-200" />
    <div class="h-56 my-8 bg-gray-100" />
    <div class="h-4 w-3/4 mb-3 bg-gray-200" />
    <div class="h-4 w-5/6 mb-3 bg-gray-100" />
    <div class="h-4 w-4/4 mb-3 bg-gray-200" />
  </div>
</template>

<script>
export default {
  name: 'IdVue',
  data () {
    return {
      post: {}
    }
  },
  mounted () {
    this.fetchPost()
  },
  methods: {
    async fetchPost () {
      const post = await this.$axios.$get('https://kiftatechnologies.com/blog/wp-json/wp/v2/posts/' + this.$route.params.id)
      let image = null
      if (post.featured_media) {
        const response = await this.$axios.$get('https://kiftatechnologies.com/blog/wp-json/wp/v2/media/' + post.featured_media)
        image = response.guid.rendered
      }
      this.post = { ...post, image }
    }
  }
}
</script>

<style scoped>

</style>
