<template>
  <ul class="text-dark page-navigation">
    <li v-for="(menu , key) in menuItems" :key="key">
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
          },
          {
            name: 'RUV',
            path: '/products/ruv'
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
  computed: {
    menuItems () {
      return this.menuConfig[this.menuGroup] || []
    }
  }
}
</script>

<style scoped>

</style>
