<template>
  <TabNavigation :center-menu="true" :default-tab="defaultTab">
    <template v-slot:nav="{ tab }">
      <TabMenuItem v-model="tab.activeTab" name="hardwares">
        Hardware
      </TabMenuItem>
      <TabMenuItem v-model="tab.activeTab" name="softwares">
        Software
      </TabMenuItem>
    </template>
    <template v-slot:hardwares>
      <div class="md:grid grid-cols-4 gap-6">
        <template v-for="(hardware, i) in getHardwares()">
          <nuxt-link :to="hardware.path ? hardware.path : '#'" :key="'hs-'+i">
            <article :title="hardware.name ? hardware.name : ''" class="app-card my-10 md:my-0 border-secondary flex flex-col justify-between product-card" v-if="maxDisplay >= i+1" :id="'hardware-'+i" :key="'hardware-'+i">
              <div>
                <div class="product-image-thumbnail mb-2">
                  <img class="w-full mb-2" :src="hardware.image ? hardware.image : ''" :alt="hardware.name">
                </div>
                <h5 class="text-lg font-bold mb-2 product-name">
                  {{ hardware.name ? hardware.name : '' | truncate(50) }}
                </h5>
                <p class="text-sm product-description">
                  {{ hardware.description | truncate(95) }}
                </p>
              </div>
              <!-- <div class="mt-3 mb-3">
                <nuxt-link :to="hardware.path ? hardware.path : '#'" class="btn app-btn app-btn-dark app-btn-sm">
                  Read more
                </nuxt-link>
              </div> -->
            </article>
          </nuxt-link>
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
          <nuxt-link :to="software.path ? software.path : '#'" :key="'ss-'+i">
            <article :title="software.name ? software.name : ''" v-if="maxDisplay >= i+1" class="app-card my-10 md:my-0 border-secondary flex flex-col justify-between product-card" :key="'software-'+i" :id="'software-'+i">
              <div>
                <div class="product-image-thumbnail mb-2" :style="'background-image: url(' + setUrl(software.image) + ');'">
                  <img class="w-full mb-2" :src="software.image ? software.image : ''" :alt="software.name">
                </div>
                <h5 class="text-lg font-bold mb-2 product-name">
                  {{ software.name ? software.name : ''  | truncate(50)}}
                </h5>
                <p class="text-sm product-description">
                  {{ software.description | truncate(95) }}
                </p>
              </div>
              <!-- <div class="mt-3 mb-3">
                <nuxt-link :to="software.path ? software.path : '#'" class="btn app-btn app-btn-dark app-btn-sm">
                  Read more
                </nuxt-link>
              </div> -->
            </article>
          </nuxt-link>
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
      defaultTab: "hardwares",
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
  mounted(){
    setTimeout(()=>{
      this.show = true;
    }, 1000)
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
    setUrl(url){
      if(!url) return '';
      if(!process.server) return '"' + url + '"';
      else return '';
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
  .view-more {
    text-align: center;
  }
  .product-card {
    margin-bottom: 2.5rem !important;
  }
  .product-image-thumbnail {
    width: 100%;
    max-height: 200px;
    min-height: 180px;
    max-width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
    overflow: hidden;
  }
  .product-image-thumbnail img {
    width: 100%;
    max-height: 200px;
    max-width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .product-name {
    max-height: 27.8px;
    overflow: hidden;
  }
  .product-description {
    max-height: 60px;
    overflow: hidden;
  }
</style>
