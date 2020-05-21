<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container py-20">
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2 col-start-2 text-center">
            <p class="product-title">
              About US
            </p>

            <p class="product-paragraph">
              Kifta Technologies is Africa's top innovation driven defense company that
              provides technology solutions used for the protection, security and
              optimization of assets for both civilian and military purposes.
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center my-20">
          <img src="images/logo-dark.png" class="h-40">
        </div>
        <div class="grid grid-cols-3 gap-6 my-32">
          <article class="flex align-center p-10 border ">
            <img src="images/about-globe.svg" class="inline mr-5">
            <span class="font-bold">More than 50 installations worldwide</span>
            <p />
          </article>
          <article class="flex align-center p-10 border ">
            <img src="images/about-install.svg" class="inline mr-5">
            <span class="font-bold">10,000KM of installed fiber being monitored</span>
            <p />
          </article>
          <article class="flex align-center p-10 border ">
            <img src="images/about-component.svg" class="inline mr-5">
            <span class="font-bold">MTBF of over 31 years for key components</span>
            <p />
          </article>
        </div>
        <div class="grid grid-cols-2 gap-6 my-40">
          <p class="product-title">
            Our Vision
          </p>
          <div class="px-10 py-5 bg-light border-l border-purple-500">
            <p class="product-paragraph">
              Kifta’s Vision is to help every African country attain sustainability by
              providing access to necessary defense products and intelligence
              solutions in it's growth to industrialization.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-6 my-40">
          <p class="product-title">
            Our Team
          </p>
          <div class="px-10 py-5 bg-light border-l border-purple-500">
            <p class="product-paragraph">
              Our team of diverse and qualified members and partners are specially
              trained in different fields and jurisdictions and have so far worked in
              five different continents. We work through a tight network of
              multi-jurisdictional qualified engineers, researchers, software
              engineers, data scientists, business intelligence analysts et al to
              provide tailor - made solutions in achieving client’s goal.
            </p>
          </div>
        </div>
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

<style scoped>

</style>
