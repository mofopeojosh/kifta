<template>
  <ul class="text-dark page-navigation" key="page-nav-list">
    <li v-for="(menu , key) in menuItems" :key="'page-nav-list-item-'+key">
      <nuxt-link
        :to="menu.path"
        class="p-4 menu-item block"
        :class="{'active': $route.path === menu.path }"
      >
        {{ menu.name }}
      </nuxt-link>
      <div v-if="menu.children">
        <nuxt-link
          v-for="(childMenu , index) in menu.children"
          :key="index"
          :to="childMenu.path"
          class="pl-8 pr-4 py-2 menu-item block"
          :class="{'active': $route.path === childMenu.path }"
        >
          {{ childMenu.name }}
        </nuxt-link>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageNavigation',
  props: {
    menuGroup: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      menuConfig: {
        products: [
          {
            name: 'Horizon - DAS',
            path: '/product/horizon-das'
          },
          {
            name: 'Fire laser - DTS',
            path: '/product/fire-laser-dts'
          },
          {
            name: 'T-Laser - DTS',
            path: '/product/t-laser-dts'
          },
          {
            name: 'Real-time Thermal Rating',
            path: '/product/real-time-thermal-rating'
          },
          {
            name: 'Maxview - software',
            path: '/product/maxview-software'
          },
          {
            name: 'FenceSentry',
            path: '/product/face-sentry'
          },
          {
            name: 'ROV',
            path: '/product/rov'
          },
          {
            name: 'UAV',
            path: '/product/uav'
          },
          {
            name: 'AUV',
            path: '/product/auv'
          },
          {
            name: 'RUV',
            path: '/product/ruv'
          }
        ],
        technology: [
          {
            name: 'Distributed Acoustic Sensing',
            path: '/technology/distributed-acoustic-sensing'
          },
          {
            name: 'Distributed Temperature Sensing',
            path: '/technology/distributed-temperature-sensing'
          },
          {
            name: 'Real Time Thermal Rating',
            path: '/technology/real-time-thermal-rating'
          }
        ],
        sectors: [
          {
            name: 'Power',
            path: '/sectors/power',
            children: [
              {
                name: 'Power Cable Monitoring',
                path: '/sectors/power-cable-monitoring'
              }
            ]
          },
          {
            name: 'Fire',
            path: '/sectors/fire',
            children: [
              {
                name: 'Linear Heat Detection',
                path: '/sectors/linear-heat-detection'
              }
            ]
          },
          {
            name: 'Security',
            path: '/sectors/security'
          },
          {
            name: 'Pipeline',
            path: '/sectors/pipeline'
          },
          {
            name: 'Defense',
            path: '/sectors/defense'
          }
        ],
        news: [
          {
            name: 'Follow us on medium',
            path: 'https://medium.com/@mofopeojosh'
          },
          {
            name: ''
          }
        ]
      }
    }
  },
  beforeMount(){
    this.loadProducts();
    this.loadCareers();
  },
  methods:{
  loadProducts(){
     this.products ? this.menuConfig.products = this.products : '';
   },
   loadCareers(){
     this.careers ? this.menuConfig.careers = this.careers : '';
   }
  },
  computed: {
    menuItems () {
      return this.menuConfig[this.menuGroup] || []
    }, 
    products() {
      return this.$store.getters['products/all'];
    }, 
    careers() {
      return this.$store.getters['careers/all'];
    }
  }
}
</script>

<style scoped>

</style>
