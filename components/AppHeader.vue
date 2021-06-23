<template>
  <header class="bg-dark p-6">
    <div class="flex items-center justify-between ">
      <div class="h-10">
        <nuxt-link to="/">
          <img src="/images/logo-white.png" class="h-10" alt="Logo">
        </nuxt-link>
      </div>
      <ul class="hidden md:flex text-white items-center">
        <client-only>
          <DesktopNavbar :list="menuConfig"></DesktopNavbar>
        </client-only>
        <li class="menu-item">
          <nuxt-link to="/get-a-quote" class="app-btn app-btn-theme app-btn-md">
            Get A Quote
          </nuxt-link>
        </li>
      </ul>
      <button class="md:hidden" @click="toggleMobileMenu">
        <img src="/images/menu.svg">
      </button>
    </div>
    <client-only>
      <ul v-show="showMobileMenu" class="mt-5">
        <li v-for="(menu, key) in menuConfig" :key="key">
          <template v-if="menu.path === '#'">
            <div class="flex justify-between py-4 border-b border-blue-800" @click="showChildItem(key)">
              <a href="#">
                {{ menu.name }}
              </a>
              <button v-if="menu.children" @click="showChildItem(key)">
                +
              </button>
            </div>
          </template>
          <div v-else class="flex justify-between py-4 border-b border-blue-800">
            <nuxt-link :to="menu.path">
              {{ menu.name }}
            </nuxt-link>
          </div>
          <div v-if="menu.children && activeChildMenu === key" class="py-3 border-b border-blue-800">
            <li v-for="(menuChild, index) in menu.children" :key="index" class="py-1">
              <nuxt-link :to="menuChild.path">
                {{ menuChild.name }}
              </nuxt-link>
            </li>
          </div>
        </li>
        <li class="pt-8 pb-4">
          <nuxt-link to="/get-a-quote" class="app-btn app-btn-theme app-btn-md">
            Get A Quote
          </nuxt-link>
        </li>
      </ul>
    </client-only>
  </header>
</template>

<script>
import DesktopNavbar from '~/components/AppNavbar.vue';
export default {
  name: 'AppHeader',
  components: {
    DesktopNavbar
  },
  data () {
    return {
      menuConfig: [],
      showMobileMenu: false,
      activeChildMenu: null
    }
  },
  beforeMount(){
    this.loadMenu();
  },
  methods: {
    loadMenu() {
      this.menuConfig[0] = { name: 'Home', path: '/' },
      this.menuConfig[1] = { name: 'About', path: '/about' },
      this.menuConfig[2] = { name: 'Sectors', path: '#', children: [
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
          ]
        },
      this.menuConfig[3] = {
          name: 'Technology',
          path: '#',
          children: [
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
          ]
        }
      this.menuConfig[4] = this.loadProducts();
      this.menuConfig[5] = { name: 'Resources', path: '/resources' }
      this.menuConfig[6] = { name: 'News', path: '/news' }
      this.menuConfig[7] = { name: 'Contact', path: '/contact' }
      this.menuConfig[8] = { name: 'Careers', path: '/careers' }
    },
    loadProducts(){
      if(this.softwares && this.hardwares) {
        let p = {
          name: 'Products',
          path: '#',
          children: [
            {
              name: 'Hardware',
              path: '/product/hardwares',
              children: this.hardwares
            },
            {
              name: 'Software',
              path: '/product/softwares',
              children: this.softwares
            }
          ]
        }
        return p;
      }
    },
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    },
    showChildItem (index) {
      const prevActiveChildMenu = this.activeChildMenu
      this.activeChildMenu = index
      if (prevActiveChildMenu === index) {
        this.activeChildMenu = null
      }
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/all'];
    }, 
    softwares() {
      return this.$store.getters['products/softwares'];
    }, 
    hardwares() {
      return this.$store.getters['products/hardwares'];
    }
  }
}
</script>

<style scoped>
  .menu-item {
    @apply mx-3;
  }

  .menu-item-dropdown-wrapper {
    @apply relative;
    margin: -10px;
    padding: 10px;
  }
  .menu-item-grandchild-dropdown-wrapper {
    @apply relative;
    padding: 10px;
    margin-left: 180px;
  }

  .menu-item-dropdown {
    background-color: #001c40;
    min-width: 150px;
    @apply absolute hidden rounded-md items-center my-4 shadow-md pt-6 top-0 z-10;
  }

  .menu-item-dropdown .menu-dropdown-item {
    margin-top: 1px;
    margin-bottom: 1px;
    @apply px-4 py-2 text-sm block;
    white-space: nowrap;
  }

  .menu-item-dropdown .menu-dropdown-item:hover,
  .menu-item-dropdown .menu-dropdown-item:focus {
    background-color: #f8f7fa;
    color: #001c40;
  }

  .menu-item:hover .menu-item-dropdown,
  .menu-item:focus .menu-item-dropdown,
  .menu-item-dropdown-wrapper:hover .menu-item-dropdown,
  .menu-item-dropdown-wrapper:focus .menu-item-dropdown {
    @apply block;
  }
  
  .menu-dropdown-item:hover > .menu-item-grandchild-dropdown-wrapper,
  .menu-dropdown-item:focus > .menu-item-grandchild-dropdown-wrapper {
    @apply block;
  }

  .menu-item-grandchild-dropdown-wrapper .menu-item-grandchild-dropdown {
    top: 0;
    left: 100%;
    margin-top: -1px;
  }

  .menu-item-grandchild-dropdown-wrapper .menu-item-dropdown {
    padding-top: 0px;
  }
</style>
