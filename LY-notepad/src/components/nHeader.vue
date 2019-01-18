<template>
  <header>
    <h1>记事本
      <a class="t-btn"
         @click="showTools">
        sd
        <span></span>
      </a>
    </h1>
  </header>
</template>

<script>
// import newTools from 'newTools'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },

  methods: {
    showTools () {

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped  lang="scss">
@import '../assets/scss/base';
</style>
