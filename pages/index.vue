<template>
  <main class="w-full">
    <AppHeader></AppHeader>
    <div class="main">
      <div class="bg-dark">
        <div class="bg-gray-900 app-banner" style="background-image: url('images/kifta-banner-02.jpeg');">
          <div class="container min-h-screen flex flex-col justify-center py-10 padded">
            <div class="md:w-1/2 leading-tight z-20">
              <div class="mb-10">
                <h1 class="font-bold text-4xl md:text-6xl line">
                  Kifta Technologies
                </h1>
                <h2 class="action_text md:text-5xl">
                  Africa's leading in Autonomous Unmanned Systems and Counter UAS Systems.
                </h2>
              </div>
              <nuxt-link to="/get-a-quote" class="app-btn app-btn-dark font-bold app-btn-lg">
                Get A Quote 
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-dark padded">
        <section class="container app-intro grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class="">
            <h6 class="text-xl">
              Application
            </h6>
            <h2 class="text-4xl mb-4">
              Working at the forefront of technology and innovation
            </h2>

            <p class="text-lg mb-4 mt-3 text-light">
              We provide integrated fiber optic sensor monitoring
              for the protection and security of critical assets and personnel within pipeline & process, power, oil,
              gas & fire and security sectors.
            </p>
          </article>
          <div class="mx-auto mt-10">
            <nuxt-link to="/sectors/power" class="sectors-card w-64">
              <div class="mr-3">
                <img src="/images/power.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Power</span>
            </nuxt-link>
            <nuxt-link to="/sectors/fire" class="sectors-card w-64">
              <div class="mr-3">
                <img src="/images/fire.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Fire</span>
            </nuxt-link>
            <nuxt-link to="/sectors/pipeline" class="sectors-card w-64">
              <div class="mr-3">
                <img src="/images/pipeline.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Pipeline</span>
            </nuxt-link>
            <nuxt-link to="/sectors/security" class="sectors-card w-64">
              <div class="mr-3">
                <img src="/images/security.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Security</span>
            </nuxt-link>
            <nuxt-link to="/sectors/defense" class="sectors-card w-64">
              <div class="mr-3">
                <img src="/images/defense.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Defense</span>
            </nuxt-link>
          </div>
        </section>
      </div>
      <div class="bg-dark padded">
        <section class="container app-about md:grid grid-cols-2 gap-6 mb-4">
          <div class="">
            <h6 class="spaced-title">
              About Us
            </h6>
            <h2 class="text-lg mb-4 mt-3 text-light">
              KIFTA Technologies is an integrated defence technology company,
              founded in 2018, with a mission to be a critical lever in the
              crucial efforts by African countries to indigenize their capacity
              to meet their defence needs as they tackle ongoing developmental
              and security imperatives in the 21st Century.
            </h2>

            <h6 class="spaced-title mt-10">
              Our Vision
            </h6>
            <p class="text-lg mb-4 mt-3 text-light">
              Kifta’s Vision is to help every African country attain sustainability by
              providing access to necessary defense products and intelligence
              solutions in it's growth to industrialization.
            </p>
            <div class="mt-10 mb-3">
              <nuxt-link to="/about" class="btn app-btn app-btn-light app-btn-lg">
                Find out more
              </nuxt-link>
            </div>
          </div>
        </section>
      </div>
      <div class="bg-white bg-opacity-75 py-10 padded">
        <section class="container">
          <h2 class="text-4xl text-center mb-8">
            Our Products
          </h2>
          <client-only>
            <ProductsView :max-display="4" :more-btn="false" :featured-only="true"></ProductsView>
          </client-only>
        </section>
        <section class="container">
          <h2 class="text-4xl mt-10 mb-6 text-center">
            Our Clients
          </h2>
          <div class="app-clients mb-20">
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="/images/clients/kifta-client-01.png">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="/images/clients/dutch-power-company.jpg">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="/images/clients/Waha-Oil-Company.jpg">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="/images/clients/Sinopec.svg">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="/images/clients/British-Gas.png">
            </div>
          </div>
        </section>
      </div>
    </div>
    <AppFooter></AppFooter>
  </main>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import AppHeader from '~/components/AppHeader.vue'
import ProductsView from '~/components/products/TabView'

export default {
  components: {
    AppFooter,
    AppHeader,
    ProductsView
  }
}
</script>

<style>
  .app-banner {
    height: 90vh;
    min-height: 100px;
    position: relative;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  .app-banner::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    @apply bg-blue-500;
    opacity: 0.7;
  }

  .action_text {
    line-height: 1.2;
    font-size: 3.3rem;
  }
  .line {
    line-height: 1.2 !important;
  }

  .app-intro {
    @apply py-20 items-center;
  }

  .app-about {
    @apply pb-20 items-center;
  }

  .app-products {
    @apply py-20;
  }

  .app-clients {
    @apply grid grid-cols-3 gap-4;
  }
  .padded {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
  }
</style>
