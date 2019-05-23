<template>
  <div id="app">
    <Loading v-if="getStatus" />

    <router-view/>
  </div>
</template>

<script>
import Loading from '@/assets/components/loading'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: { Loading },
  computed: {
    ...mapGetters([
      'getStatus'
    ])
  }
}
</script>

<style>
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
  word-break: break-all;
}
.container {
  font-size: 0.3rem;
}
</style>
