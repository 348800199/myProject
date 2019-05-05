<!--  -->
<template>
  <div class="container">
    <div class="header">
      <div class="home fs_28"
           @click="goHome">首页</div>
      <div class="adressTest fs_34">{{content}}</div>
    </div>
    <div class="feedback content fs_28"
         v-if="content==='意见反馈' || '举报投诉' ">
      <textarea name=""
                v-model="submitContent"
                id=""
                placeholder="请输入内容（最多500字）"
                cols="30"
                maxlength="500"
                class="textarea"
                rows="10"></textarea>
      <div class="submit"
           @click="submit">提交</div>
    </div>
    <div class="content fs_28"
         v-else>
      红娘小余为四川知名婚介平台，因业务扩展，走进广东！ 红娘小余，专注同城相亲，已有会员20000多人，牵手成功率80%以上！ 红娘小余走进广东，致力于为广东单身人群提供便捷的婚恋服务，不管您是温柔贤惠但交际圈窄的未婚女性，踏实能干却错失姻缘的未婚男性，还是受过伤依然勇敢追求幸福的离异人士，我们都将把属于您的幸福送到您的身边，让您拥有爱情与和谐美满的家庭。 正规工商注册，真实可靠
    </div>

  </div>
</template>

<script>
export default {
  name: 'Page4',
  data () {
    return {
      submitContent: ''
    }
  },
  created () {
    this.content = this.$route.params.content
  },
  methods: {
    goHome () {
      //router.push({ name: 'user', params: { userId: 123 }})
      this.$router.push({ name: 'Page1' })
    },
    submit () {
      if (!this.submitContent) {
        alert('反馈内容不能为空')
        return;
      }
      let success = confirm('反馈成功,回到首页')
      if (success) {
        this.$router.push({ name: 'Page1' })
      }
    }
  }
}

</script>
<style lang='scss' scoped>
.header {
  padding: 0.3rem 0;
  border-bottom: 0.02rem solid #eee;
  position: relative;
  padding-left: 0.1rem;
  .home {
    border-radius: 0.12rem;
    margin: 0 0.1rem;
    background: #ebeced;
    color: #777;
    padding: 0.06rem 0.18rem;
    display: inline-block;
  }
  .adressTest {
    text-align: center;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.content {
  padding: 0.3rem;
  line-height: 1.6;
}
.textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 0.2rem;
}
.submit {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #4c8fe8;
  border-color: #4c8fe8;
  color: #fff;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0.03rem 0 0.06rem;
  text-align: center;
}
</style>