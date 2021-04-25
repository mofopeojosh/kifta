<template>
  <div>
    <div class="flex justify-between items-center my-3">
      <span class="text-sm text-gray-700">
        {{ posts.length }} posts
      </span>
      <!--            <a class="app-link font-bold" href="https://medium.com" target="_blank">View all posts</a>-->
    </div>
    <div v-if="posts.length">
      <div v-for="(post, key) in posts" :key="key" class="py-5 border-t">
        <div class="text-sm text-gray-700 my-3">
          {{ new Date(post.date).toDateString() }}
        </div>
        <nuxt-link :to="{ name: 'news-id', params: { id: post.id } }">
          <h5 class="text-2xl font-bold mb-4 ">
            {{ post.title.rendered }}
          </h5>
        </nuxt-link>
        <nuxt-link v-if="post.image" :to="{ name: 'news-id', params: { id: post.id } }">
          <img
            :src="post.image"
            class="my-5 w-full h-56 object-cover"
            alt=""
          >
        </nuxt-link>
        <!-- eslint-disable-next-line-->
      <div v-html="post.excerpt.rendered" />
      </div>
    </div>
    <div v-else class="py-5">
      <div class="h-4 w-24 mb-3 bg-gray-100" />
      <div class="h-4 w-40 mb-4 bg-gray-200" />
      <div class="h-56 my-8 bg-gray-100" />
      <div class="h-4 w-3/4 mb-3 bg-gray-200" />
      <div class="h-4 w-5/6 mb-3 bg-gray-100" />
      <div class="h-4 w-4/4 mb-3 bg-gray-200" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsVue',
  data () {
    return {
      posts: [],
      user: {}
    }
  },
  mounted () {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts () {
      const posts = await this.$axios.$get('https://kiftatechnologies.com/blog/wp-json/wp/v2/posts')
      for (const post of posts) {
        let image = null
        if (post.featured_media) {
          const response = await this.$axios.$get('https://kiftatechnologies.com/blog/wp-json/wp/v2/media/' + post.featured_media)
          image = response.guid.rendered
        }

        this.posts.push({ ...post, image })
      }
    }
  }
}
</script>

<style scoped>

</style>
