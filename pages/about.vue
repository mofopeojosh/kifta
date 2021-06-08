<template>
  <main>
    <AppHeader />
    <div class="main">
      <div class="container pt-20">
        <div class="md:grid grid-cols-4 gap-6">
          <div class="col-span-2 col-start-2 text-center">
            <h1 class="page-banner-title mb-10">
              About Us
            </h1>

            <p class="product-paragraph">
              Kifta Technologies is Africa's top innovation driven defense company that
              provides technology solutions used for the protection, security and
              optimization of assets for both civilian and military purposes.
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center my-10 md:my-20">
          <img src="/images/logo-dark.png" class="object-contain h-40">
        </div>
        <div class="md:grid grid-cols-3 gap-6 md:my-24">
          <article class="my-6 flex align-center p-5 md:p-10 border ">
            <img src="/images/about-globe.svg" class="inline mr-5">
            <span class="font-bold">More than 50 installations worldwide</span>
            <p />
          </article>
          <article class="my-6 flex align-center p-5 md:p-10 border ">
            <img src="/images/about-install.svg" class="inline mr-5">
            <span class="font-bold">10,000KM of installed fiber being monitored</span>
            <p />
          </article>
          <article class="my-6 flex align-center p-5 md:p-10 border ">
            <img src="/images/about-component.svg" class="inline mr-5">
            <span class="font-bold">MTBF of over 31 years for key components</span>
            <p />
          </article>
        </div>
        <div class="md:grid grid-cols-2 gap-6 my-24">
          <p class="product-title">
            Our Vision
          </p>
          <div class="px-5 md:px-10 py-5 bg-gray-100 border-l border-blue-500">
            <p class="product-paragraph">
              Kifta’s Vision is to help every African country attain sustainability by
              providing access to necessary defense products and intelligence
              solutions in it's growth to industrialization.
            </p>
          </div>
        </div>
        <div class="md:grid grid-cols-2 gap-6 my-24">
          <p class="product-title">
            Our Team
          </p>
          <div class="px-5 md:px-10 py-5 bg-gray-100 border-l border-blue-500">
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
