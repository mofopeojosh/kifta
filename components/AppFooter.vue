<template>
  <div class="bg-dark pt-20">
    <section class="container">
      <div class="flex items-center justify-between p-10 bg-theme rounded-md mb-20">
        <div>
          <h2 class="text-4xl mb-0 leading-tight font-bold">
            We have what you are looking for.
          </h2>
          <p class="text-3xl text-dark font-bold">
            Let us help you out!
          </p>
        </div>
        <div>
          <button class="app-btn">
            Get A Qoute
          </button>
        </div>
      </div>
      <footer class="text-light grid grid-cols-4 justify-between mb-10">
        <div class="flex items-start justify-start">
          <p>Logo</p>
        </div>
        <div>
          <h4 class="footer-header">
            Company
          </h4>
          <p>About</p>
          <p>Products</p>
          <p>Career</p>
          <p>Get a quote</p>
        </div>
        <div>
          <h4 class="footer-header">
            Applications
          </h4>
          <p>Fire</p>
          <p>Power</p>
          <p>Pipeline</p>
          <p>Security</p>
          <p>Defense</p>
        </div>
        <div>
          <h4 class="footer-header">
            Get in touch
          </h4>
          <p>Contact</p>
          <p />
        </div>
      </footer>
      <div class="py-4">
        <small class="text-light">&copy; 2020. Kifta Technologies is a sunsidiary of
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
  .footer-header {
    @apply text-white font-bold mb-2;
  }
</style>
