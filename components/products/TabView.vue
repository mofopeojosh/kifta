<template>
  <TabNavigation :default-tab="defaultTab">
    <template v-slot:nav="{ tab }">
      <TabMenuItem v-model="tab.activeTab" name="hardwares">
        Hardwares
      </TabMenuItem>
      <TabMenuItem v-model="tab.activeTab" name="softwares">
        Softwares
      </TabMenuItem>
    </template>
    <template v-slot:hardwares>
      <div class="md:grid grid-cols-4 gap-6">
        <template v-for="(hardware, i) in getHardwares()">
          <article :title="hardware.name ? hardware.name : ''" class="app-card my-10 md:my-0 border-secondary flex flex-col justify-between" v-if="maxDisplay >= i+1" :id="'hardware-'+i" :key="'hardware-'+i">
            <div>
              <img class="w-full mb-2" :src="hardware.image ? hardware.image : 'https://tailwindcss.com/img/card-top.jpg'" :alt="hardware.name">
              <h5 class="text-xl font-bold mb-2">
                {{ hardware.name ? hardware.name : '' }}
              </h5>
              <p class="text-sm">
                {{ hardware.description | truncate(160) }}
              </p>
            </div>
            <div class="mt-5 mb-3">
              <nuxt-link :to="hardware.path ? hardware.path : '#'" class="btn app-btn app-btn-dark app-btn-sm">
                Read more
              </nuxt-link>
            </div>
          </article>
        </template>
      </div>
      <div v-if="moreBtn" class="mt-10 mb-3 view-more">
        <nuxt-link to="/products" class="btn app-btn app-btn-dark app-btn-sm">
          View More Products
        </nuxt-link>
      </div>
    </template>

    <template v-slot:softwares>
      <div class="md:grid grid-cols-4 gap-6">
        <template v-for="(software, i) in getSoftwares()">
          <article :title="software.name ? software.name : ''" v-if="maxDisplay >= i+1" class="app-card my-10 md:my-0 border-secondary flex flex-col justify-between" :key="'software-'+i" :id="'software-'+i">
            <div>
              <img class="w-full mb-2" :src="software.image ? software.image : 'https://tailwindcss.com/img/card-top.jpg'" :alt="software.name">
              <h5 class="text-xl font-bold mb-2">
                {{ software.name ? software.name : '' }}
              </h5>
              <p class="text-sm">
                {{ software.description | truncate(160) }}
              </p>
            </div>
            <div class="mt-5 mb-3">
              <nuxt-link :to="software.path ? software.path : '#'" class="btn app-btn app-btn-dark app-btn-sm">
                Read more
              </nuxt-link>
            </div>
          </article>
        </template>
      </div>
      <div v-if="moreBtn" class="mt-10 mb-3 view-more">
        <nuxt-link to="/products" class="btn app-btn app-btn-dark app-btn-sm">
          View More Products
        </nuxt-link>
      </div>
    </template>

  </TabNavigation>
</template>
<script>
import TabNavigation from '~/components/TabNavigation'
import TabMenuItem from '~/components/TabMenuItem'
import { mapGetters } from 'vuex'

export default {
  scrollToTop: true,
  components: {
    TabMenuItem,
    TabNavigation
  },
  data() {
    return {
      defaultTab: "hardwares"
    }
  },
  props:{
    maxDisplay: {
      type: Number,
      required: false,
      default: 1000
    },
    moreBtn: {
      type: Boolean,
      default: false
    },
    featuredOnly: {
      type: Boolean,
      default: false
    },
    activeTab: {
      type: String,
      default: '',
      required: false
    }
  },
  beforeMount(){
    this.activeTab ? this.defaultTab = this.activeTab : '';
  },
  methods: {
    check(product, i){
      if(!product) return false;
      if(this.featuredOnly && !product.featured) return false;
      return true;
    },
    getProducts(){
      if(this.featuredOnly){
        return this.products.filter(p => p.featured === true);
      } else {
        return this.products;
      }
    },
    getSoftwares(){
      if(this.featuredOnly){
        return this.softwares.filter(p => p.featured === true);
      } else {
        return this.softwares;
      }
    },
    getHardwares(){
      if(this.featuredOnly){
        return this.hardwares.filter(p => p.featured === true);
      } else {
        return this.hardwares;
      }
    }
  },
  computed:mapGetters({
      products: 'products/all',
      softwares: 'products/softwares',
      hardwares: 'products/hardwares'
    })
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
    @apply bg-blue-600;
    opacity: 0.75;
  }

  .app-intro {
    @apply py-20 items-center;
  }

  .app-about {
    @apply py-20 items-center;
  }

  .app-products {
    @apply py-20;
  }

  .app-clients {
    @apply grid grid-cols-3 gap-4;
  }

  .view-more {
    text-align: center;
  }
</style>
