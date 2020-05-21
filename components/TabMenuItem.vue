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
    @apply mr-5 text-xl font-bold;
  }

  .tab-item-sm {
    @apply text-lg;
  }

  .tab-item.active {
    @apply text-purple-500 border-b-2 border-purple-500;
  }
</style>
