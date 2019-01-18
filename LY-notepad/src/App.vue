<template>
  <div id="app"
       :class="[getTheme]">
    <nHeader></nHeader>
  </div>
</template>

<script>
import nHeader from '@/components/nHeader'
export default {
  name: 'App',
  components: {
    nHeader
  },
  computed: {
    getTheme () {
      return this.$store.getters.getTheme
    }
  },
}
</script>
<style lang="scss">
@import '../static/theme.scss';
</style>



