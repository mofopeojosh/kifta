<template>
  <div class="app-footer pt-20">
    <section class="container">
      <div
        class="flex items-center justify-between p-16 bg-theme rounded-md mb-20"
        :class="{'footer-banner-alt': offsetBanner}"
      >
        <div>
          <h2 class="text-4xl mb-0 leading-tight font-bold">
            We have what you are looking for.
          </h2>
          <p class="text-3xl text-dark font-bold">
            Let us help you out!
          </p>
        </div>
        <div>
          <nuxt-link to="/get-a-quote" class="app-btn">
            Get A Quote
          </nuxt-link>
        </div>
      </div>
      <footer class="text-light grid grid-cols-4 justify-between mb-10">
        <div class="flex items-start justify-start">
          <p>
            <nuxt-link to="/">
              <img src="/images/logo-white.png" class="h-10" alt="Logo">
            </nuxt-link>
          </p>
        </div>
        <div>
          <h4 class="footer-header">
            Company
          </h4>
          <p>
            <nuxt-link to="#">
              About
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="#">
              Products
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/get-a-quote">
              Get a quote
            </nuxt-link>
          </p>
        </div>
        <div>
          <h4 class="footer-header">
            Applications
          </h4>
          <p>
            <nuxt-link to="/products/fire">
              Fire
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/products/power">
              Power
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/products/pipeline">
              Pipeline
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/products/security">
              Security
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/products/defense">
              Defense
            </nuxt-link>
          </p>
        </div>
        <div>
          <h4 class="footer-header">
            Get in touch
          </h4>
          <p>
            <nuxt-link to="/contact">
              Contact
            </nuxt-link>
          </p>
          <p />
        </div>
      </footer>
      <div class="py-4">
        <small class="text-light">&copy; 2020. Kifta Technologies is a subsidiary of
          <a href="https://kiftaindustries.com" class="font-bold">
            Kifta Industries.
          </a>
        </small>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'AppFooter',
  props: { offsetBanner: Boolean }
}
</script>

<style scoped>
  .app-footer{
    background-color: #151E29;
    @apply text-white;
  }
  .footer-banner-alt{
    margin-top: -160px;
  }
  .footer-header {
    @apply text-white font-bold mb-2;
  }
</style>
