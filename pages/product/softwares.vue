<template>
  <div>
    
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.$router.push({
      path: '/products',
      query:{
        type: 'softwares'
      }
      });
  }
}
</script>