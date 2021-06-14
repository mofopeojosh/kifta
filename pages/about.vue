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

            <div class="flex justify-center items-center my-10 md:my-20">
              <img src="/images/logo-dark.png" class="object-contain h-40" />
            </div>
            <p class="product-paragraph">
              KIFTA Technologies is an integrated defence technology company,
              founded in 2018 , with a mission to be a critical lever in the
              crucial efforts by African countries to indigenize their capacity
              to meet their defence needs as they tackle ongoing developmental
              and security imperatives in the 21st Century.
            </p>
            <p class="product-paragraph">
              Our team members have over 40 years combined experience in the defence and security eco-system. All with multiple jurisdictions having worked with countries and  private firms in Africa, Asia and Europe.
            </p>
            <p class="product-paragraph">
              KIFTA is a military and defence technology innovator, manufacturer and solutions provider. It has, however, through a rigorous product innovation process as well as sizeable research and development investments, developed a spectrum of tested and ready-to-market product prototypes, which cut across a wide range of military, civilian, public and private sector needs.
            </p>
            <p class="product-paragraph">
              Our expertise in deep learning, the core driver for AI and AR has enabled us in creating products where algorithms can create value. Our cloud based identity authentication solutions enabled by facial recognition is one of the largest in Africa.
            </p>
            <p class="product-paragraph">
              Successful commercialization of our advanced technologies, has enabled us achieve leading positions in IOT and digitization for  both military and civilian applications.
            </p>
          </div>
        </div>
        <div class="md:grid grid-cols-3 gap-6 md:my-24">
          <article class="my-6 flex align-center p-5 md:p-10 border ">
            <img src="/images/about-globe.svg" class="inline mr-5" />
            <span class="font-bold">More than 50 installations worldwide</span>
            <p />
          </article>
          <article class="my-6 flex align-center p-5 md:p-10 border ">
            <img src="/images/about-install.svg" class="inline mr-5" />
            <span class="font-bold">10,000KM of installed fiber being monitored</span>
            <p />
          </article>
          <article class="my-6 flex align-center p-5 md:p-10 border ">
            <img src="/images/about-component.svg" class="inline mr-5" />
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
              Kifta’s Vision is to help every African country attain
              sustainability by providing access to necessary defense products
              and intelligence solutions in it's growth to industrialization.
            </p>
          </div>
        </div>
        <div class="md:grid grid-cols-2 gap-6 my-24">
          <p class="product-title">
            Our Team
          </p>
          <div class="px-5 md:px-10 py-5 bg-gray-100 border-l border-blue-500">
            <p class="product-paragraph">
              KIFTA Technologies is an integrated defence technology company, founded in 2018 , with a mission to be a critical lever in the crucial efforts by African countries to indigenize their capacity to meet their defence needs as they tackle ongoing developmental and security imperatives in the 21st Century.
            </p>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import AppFooter from "~/components/AppFooter";
import AppHeader from "~/components/AppHeader.vue";

export default {
  components: {
    AppFooter,
    AppHeader
  }
};
</script>

<style scoped></style>
