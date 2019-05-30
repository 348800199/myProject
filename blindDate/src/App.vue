<template>
  <div id="app">
    <Loading v-if="getStatus" />
    <keep-alive>
      <router-view />
    </keep-alive>
    <keep-alive>

      <!-- 使用keep-alive会将页面缓存-->
      <router-view ref="edit"
                   v-if="keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!keepAlive"></router-view>

    <!-- <div @click="editUser(123)">调用子组件方法</div>
    <router-view ref="edit"></router-view> -->
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
    ]),
    keepAlive () {
      return this.$route.meta.keepAlive
    }
  },
  methods: {
    // editUser (id) {
    //   console.log(this.$refs)
    //   this.$refs.edit.editUser(id);
    // },
    // fatherMethod () {
    //   console.log('我被子组件点了')
    // }
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
