<template>
  <div>
    <ul class="flex">
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
