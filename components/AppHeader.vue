<template>
  <header class="flex items-center justify-between bg-dark p-6">
    <div class="h-10">
      <nuxt-link to="/">
        <img src="/images/logo-white.png" class="h-10" alt="Logo">
      </nuxt-link>
    </div>
    <ul class="flex text-white items-center">
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
        <nuxt-link to="/get-a-quote" class="app-btn-theme">
          Get a Quote
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
              name: 'Horizon - DAS',
              path: '/products/horizon-das'
            },
            {
              name: 'Fire laser - DTS',
              path: '/products/fire-laser-dts'
            },
            {
              name: 'T-Laser - DTS',
              path: '/products/t-laser-dts'
            },
            {
              name: 'Real-time Thermal Rating',
              path: '/products/real-time-thermal-rating'
            },
            {
              name: 'Maxview - software',
              path: '/products/maxview-software'
            },
            {
              name: 'FenceSentry',
              path: '/products/face-sentry'
            },
            {
              name: 'ROV',
              path: '/products/rov'
            },
            {
              name: 'UAV',
              path: '/products/uav'
            },
            {
              name: 'AUV',
              path: '/products/auv'
            }
          ]
        },
        {
          name: 'Resources',
          path: '/resources'
        },
        {
          name: 'News',
          path: '#'
        },
        {
          name: 'Contact',
          path: '/contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .menu-item {
    @apply mx-3;
  }

  .menu-item-dropdown-wrapper{
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
