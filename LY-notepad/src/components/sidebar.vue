<template>
  <div class="event-tools"
       :class="{'show-event-tools':isShow}">
    <ul class="tools-sidebar">
      <li>
        <button class="tools-btn">切换主题</button>
      </li>
      <li>
        <button class="tools-btn">下载数据</button>
      </li>
      <li>
        <button class="tools-btn">导入数据</button>
      </li>
      <li>
        <button class="tools-btn">编辑数据</button>
      </li>
      <li>
        <button class="tools-btn">清空数据</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    isShow: Boolean
  },
  computed: {

  },
  methods: {
    downloadData () {

    }

  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.event-tools {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  padding: 100px 20px 30px;
  box-sizing: border-box;
  transform: translateX(-250px);
  transition: transform 0.3s;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  z-index: 9;
  &.show-event-tools {
    transform: translateX(0);
  }
  .tools-sidebar {
    li {
      height: 60px;
      line-height: 60px;
      .tools-btn {
        color: #fff;
        background: #00b0f0;
        padding: 0;
        width: 100px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>
