<template>
  <div class="app-footer pt-10 md:pt-20 block pl-5 pr-5">
    <section class="container">
      <div class="text-center md:flex items-center md:justify-between py-6 px-4 md:p-16 bg-theme rounded-md mb-10">
        <div>
          <h2 class="text-xl md:text-4xl leading-tight font-bold">
            We have what you are looking for.
          </h2>
          <p class="text-lg md:text-3xl text-dark font-bold">
            Let us help you out!
          </p>
        </div>
        <div class="mt-4">
          <nuxt-link to="/get-a-quote" class="app-btn app-btn-light app-btn-lg md:app-btn-md">
            Get A Quote
          </nuxt-link>
        </div>
      </div>
      <footer class="text-light md:grid grid-cols-4 justify-between my-20">
        <div class="flex items-start justify-start my-10">
          <p>
            <nuxt-link to="/">
              <img src="/images/logo-white.png" class="h-10" alt="Logo">
            </nuxt-link>
          </p>
        </div>
        <div class="my-10">
          <h4 class="footer-header">
            Company
          </h4>
          <p>
            <nuxt-link to="/about">
              About
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/products">
              Products
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/technology/distributed-acoustic-sensing">
              Technology
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/news">
              News
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/careers">
              Careers
            </nuxt-link>
          </p>
        </div>
        <div class="my-10">
          <h4 class="footer-header">
            Applications
          </h4>
          <p>
            <nuxt-link to="/sectors/fire">
              Fire
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/sectors/power">
              Power
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/sectors/pipeline">
              Pipeline
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/sectors/security">
              Security
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/sectors/defense">
              Defense
            </nuxt-link>
          </p>
        </div>
        <div class="my-10">
          <h4 class="footer-header">
            Get in touch
          </h4>
          <p>
            <nuxt-link to="/contact">
              Contact
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/get-a-quote">
              Get a quote
            </nuxt-link>
          </p>
        </div>
      </footer>
      <div class="py-4">
        <small class="text-light">&copy; {{ new Date().getFullYear() }}. Kifta Technologies is a subsidiary of
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
  name: 'AppFooter'
}
</script>

<style scoped>
  .app-footer{
    /*background-color: #151E29;*/
    background-color: #001c40;
    @apply text-white;
  }
  .footer-header {
    @apply text-white font-bold mb-2;
  }
</style>
