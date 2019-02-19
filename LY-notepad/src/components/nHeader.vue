<template>
  <header>
    <h1>记事本
      <div @click="showTools">
        <a class="t-btn">
          <div class="showis"></div>
        </a>
      </div>

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
      this.$emit('tools')
    }

  }
}
</script>

<style scoped  lang="scss">
@import '../assets/scss/base';
header {
  position: relative;
  width: 100%;
  height: 70px;
  z-index: 100;
  h1 {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    line-height: 70px;
    text-align: center;
    color: #fff;
    a.t-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      .showis {
        &,
        &::before,
        &::after {
          position: absolute;
          left: 0;
          width: 30px;
          height: 4px;
          background: #fff;
          content: '';
        }
      }
      .showis {
        top: 50%;
        transform: translateY(-50%);
        &::before {
          transform: translateY(-7px);
          transition: all 0.3s;
        }
        &::after {
          transform: translateY(7px);
          transition: all 0.3s;
        }
      }
    }
  }
}
</style>
