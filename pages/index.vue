<template>
  <main class="w-full">
    <AppHeader />
    <div class="main">
      <div class="bg-dark">
        <div class="bg-gray-900 app-banner" style="background-image: url('images/kifta-banner-02.jpeg');">
          <div class="container h-full flex flex-col justify-center py-10">
            <div class="w-1/2 leading-tight z-10">
              <h2 class="text-6xl mb-10">
                Kifta Technologies
                <br>
                <span class="text-light"> World's leading Fibre Optic Technology</span>
              </h2>
              <nuxt-link to="/get-a-quote" class="bg-purple-500 rounded-md text-lg px-6 py-4">
                Get a Quote
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-dark">
        <section class="container app-intro">
          <article class="">
            <h6 class="text-xl">
              Application
            </h6>
            <h2 class="text-4xl mb-4">
              Working at the forefront of technology and innovation
            </h2>

            <p class="text-light">
              We provide integrated fiber optic sensor monitoring
              for the protection and security of critical assets and personnel within pipeline & process, power, oil,
              gas & fire and security sectors.
            </p>
          </article>
          <div class="mx-auto">
            <nuxt-link to="/sectors/power" class="sectors-card w-64">
              <div class="mr-3">
                <img src="images/power.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Power</span>
            </nuxt-link>
            <nuxt-link to="/sectors/fire" class="sectors-card w-64">
              <div class="mr-3">
                <img src="images/fire.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Fire</span>
            </nuxt-link>
            <nuxt-link to="/sectors/pipeline" class="sectors-card w-64">
              <div class="mr-3">
                <img src="images/pipeline.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Pipeline</span>
            </nuxt-link>
            <nuxt-link to="/sectors/security" class="sectors-card w-64">
              <div class="mr-3">
                <img src="images/security.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Security</span>
            </nuxt-link>
            <nuxt-link to="/sectors/defense" class="sectors-card w-64">
              <div class="mr-3">
                <img src="images/power.svg" class="inline" width="18">
              </div>
              <span class="text-lg">Defense</span>
            </nuxt-link>
          </div>
        </section>
      </div>
      <div class="bg-dark">
        <section class="app-about container">
          <div class="">
            <h6 class="spaced-title">
              About Us
            </h6>
            <h2 class="text-4xl mb-4">
              We're on a global mission!
            </h2>

            <h6 class="spaced-title mt-10">
              Our Vision
            </h6>
            <p class="text-light">
              Kifta’s Vision is to help every African country attain sustainability by
              providing access to necessary defense products and intelligence
              solutions in it's growth to industrialization.
            </p>
          </div>
          <div class="section-card bg-light m-8">
            <img class="h-60 object-contain" src="images/kifta-fibre-optic-icon.png">
          </div>
        </section>
      </div>
      <div class="bg-white bg-opacity-75 py-10">
        <section class="app-products container">
          <h2 class="text-4xl text-center mb-6">
            Our Products
          </h2>
          <div class="grid grid-cols-4 gap-6">
            <article class="app-card border-purple-500">
              <h5 class="text-xl font-bold mb-2">
                Horizon DAS
              </h5>
              <div class="h-40">
                <p class="text-sm">
                  The Kifta Horizon technology is a sophisticated Distributed Acoustic Sensing (DAS) technology
                  which forms a key part of a perimeter monitoring and intrusion detection solution...
                </p>
              </div>
              <div class="my-4">
                <nuxt-link to="/products/horizon-das" class="btn app-btn">
                  read more
                </nuxt-link>
              </div>
            </article>
            <article class="app-card border-purple-500">
              <h5 class="text-xl font-bold mb-2">
                Fire Laser DTS
              </h5>
              <div class="h-40">
                <p class="text-sm">
                  The Fire Laser Distributed Temperature Sensing (DTS) system connects to a distributed fiber optic
                  cable and determines temperature and distance data at thousands of points along the length of
                  the cable.
                </p>
              </div>
              <div class="my-4">
                <nuxt-link to="/products/fire-laser-dts" class="btn app-btn">
                  read more
                </nuxt-link>
              </div>
            </article>
            <article class="app-card border-purple-500">
              <h5 class="text-xl font-bold mb-2">
                T Laser DTS
              </h5>
              <div class="h-40">
                <p class="text-sm">
                  T-Laser Distributed Temperature Sensor (DTS) is the ideal solution for medium to long range (5-30km)
                  industrial monitoring applications where reliability, safety and seamless system integration are
                  essential.
                </p>
              </div>
              <div class="my-4">
                <nuxt-link to="/products/t-laser-dts" class="btn app-btn">
                  read more
                </nuxt-link>
              </div>
            </article>
            <article class="app-card border-purple-500">
              <h5 class="text-xl font-bold mb-2">
                UAV
              </h5>
              <div class="h-40">
                <p class="text-sm">
                  Covers all the required sectors and parts of UAV flight platform. Adopt the industrial grade flight
                  control with triple redundancy autopilot system) UAV can go through harsh environmental testing.
                </p>
              </div>
              <div class="my-4">
                <nuxt-link to="/products/uav" class="btn app-btn">
                  read more
                </nuxt-link>
              </div>
            </article>
            <a class="text-purple-500 underline" href="#">View more products</a>
          </div>
        </section>
        <section class="container">
          <h2 class="text-4xl mb-10 text-center">
            Our Clients
          </h2>
          <div class="app-clients">
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="images/clients/kifta-client-01.png">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="images/clients/dutch-power-company.jpg">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="images/clients/Waha-Oil-Company.jpg">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="images/clients/Sinopec.svg">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="images/clients/British-Gas.png">
            </div>
            <div class="my-2">
              <img class="h-20 w-full object-contain" src="images/clients/ihs.png">
            </div>
          </div>
        </section>
      </div>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style>
  .section-card {
    @apply p-10 my-4 shadow-md;
  }

  .sectors-card {
    @apply border-l border-purple-600 rounded-md p-3 flex items-center my-4 bg-gray-900 bg-opacity-75;
  }

  .sectors-card:hover {
    @apply border-0 bg-purple-500;
  }

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
    background-color: #001c40;
    opacity: 0.75;
  }

  .app-intro {
    @apply py-20 grid grid-cols-2 gap-6 items-center;
  }

  .app-about {
    @apply py-20 grid grid-cols-2 gap-6 items-center;
  }

  .app-products {
    @apply py-20;
  }

  .app-clients {
    @apply grid grid-cols-3 gap-4;
  }
</style>
