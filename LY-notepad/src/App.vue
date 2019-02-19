<template>
  <div id="app"
       :class="[getTheme]">
    <nHeader @tools="changePages"></nHeader>
    <section :class="['container',table && 'hide' ]">
      <n-add></n-add>
      <n-sidebar :isShow="tools"></n-sidebar>
    </section>
  </div>
</template>

<script>
import nHeader from '@/components/nHeader'
import nAdd from '@/components/event_add.vue';
import nSidebar from './components/sidebar.vue';
export default {
  name: 'App',
  data () {
    return {
      table: false,
      tools: false
    }
  },
  components: {
    nHeader,
    nAdd,
    nSidebar
  },
  computed: {
    getTheme () {
      return this.$store.getters.getTheme
    }
  },
  methods: {
    changePages () {
      this.tools = !this.tools

    }
  }
}
</script>
<style lang="scss">
@import '../static/theme.scss';
html,
body,
ul,
li,
input,
p {
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
  font-family: 'Helvetica Neue', Helvetica, 'microsoft yahei', arial, STHeiTi,
    sans-serif;
}
input,
button {
  -webkit-tap-highlight-color: transparent;
}
input[type='text'] {
  -webkit-appearance: none;
}
button {
  padding: 7px 0;
  outline: none;
  text-align: center;
  border-radius: 4px;
  box-sizing: border-box;
  font: {
    size: inherit;
    family: inherit;
  }
  cursor: pointer;
}
html,
body {
  height: 100%;
}
::-webkit-scrollbar {
  width: 0;
}
body,
#app {
  width: 100%;
  overflow-x: hidden;
}
#app {
  height: 100%;
  padding-bottom: 60px;
  box-sizing: border-box;
}

ul {
  list-style: none;
}
.container {
  width: 100%;
  padding: 0 10px;
  max-width: 800px;
  margin: auto;
  box-sizing: border-box;
  &.hide {
    display: none;
  }
}
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.3s;
}
.dialog-enter,
.dialog-leave-to {
  opacity: 0;
}
</style>



