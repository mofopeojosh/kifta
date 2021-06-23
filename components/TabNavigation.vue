<template>
  <div>
    <ul :class="centerMenu ? 'text-center' : ''">
      <slot :tab="tabConfig" name="nav" />
    </ul>
    <div class="mt-10">
      <slot :tab="tabConfig" :name="tabConfig.activeTab" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabNavigation',
  props: {
    defaultTab: {
      type: String,
      required: true
    },
    centerMenu: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      tabConfig: {
        activeTab: this.defaultTab
      }
    }
  }
}
</script>

<style scoped>

</style>
