<template>
  <tab-custom-vue></tab-custom-vue>
</template>

<script>
import TabCustomVue from './components/Tab-custom.vue'

export default {
  name: 'App',
  components: {
    TabCustomVue
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
