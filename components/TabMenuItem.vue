<template>
  <a
    href="#"
    class="tab-item"
    :class="{'active': value === name, 'tab-item-sm': sm}"
    @click.prevent="$emit('input', name)"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'TabMenuItem',
  props: {
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    sm: {
      type: Boolean,
      required: false

    }
  }
}
</script>

<style scoped>
  .tab-item {
    @apply inline-block mr-5 text-xl font-semibold;
  }

  .tab-item-sm {
    @apply text-lg;
  }

  .tab-item.active {
    @apply text-blue-500 border-b-2 border-blue-500;
  }
</style>
