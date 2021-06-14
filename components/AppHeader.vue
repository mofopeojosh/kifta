<template>
  <header class="bg-dark p-6">
    <div class="flex items-center justify-between ">
      <div class="h-10">
        <nuxt-link to="/">
          <img src="/images/logo-white.png" class="h-10" alt="Logo">
        </nuxt-link>
      </div>
      <ul class="hidden md:flex text-white items-center">
        <li v-for="(menu, key) in menuConfig" :key="key" class="menu-item">
          <nuxt-link :to="menu.path">
            {{ menu.name }}
          </nuxt-link>
          <div v-if="menu.children" class="menu-item-dropdown-wrapper">
            <div class="menu-item-dropdown">
              <nuxt-link
                v-for="(menuChild, index) in menu.children"
                :key="index"
                :to="menuChild.path"
                class="menu-dropdown-item"
              >
                {{ menuChild.name }}
              </nuxt-link>
            </div>
          </div>
        </li>
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
    <ul v-show="showMobileMenu" class="mt-5">
      <li v-for="(menu, key) in menuConfig" :key="key">
        <div class="flex justify-between py-4 border-b border-blue-800">
          <nuxt-link :to="menu.path">
            {{ menu.name }}
          </nuxt-link>
          <button v-if="menu.children" @click="showChildItem(key)">
            +
          </button>
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
  </header>
</template>

<script>

export default {
  name: 'AppHeader',
  data () {
    return {
      menuConfig: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Sectors',
          path: '#',
          children: [
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
        {
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
        },
        {
          name: 'Products',
          path: '#',
          children: [
            {
              name: 'Hardwares',
              path: '/product/hardwares',
              children: [
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
              ]
            },
            {
              name: 'Softwares',
              path: '/product/softwares',
              children: [
                {
                  name: 'Linear Heat Detection',
                  path: '/sectors/linear-heat-detection'
                }
              ]
            }
          ]
        },
        {
          name: 'Resources',
          path: '/resources'
        },
        {
          name: 'News',
          path: '/news'
        },
        {
          name: 'Contact',
          path: '/contact'
        }
      ],
      showMobileMenu: false,
      activeChildMenu: null
    }
  },
  methods: {
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

</style>
