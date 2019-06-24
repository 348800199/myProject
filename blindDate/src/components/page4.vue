<!--  -->
<template>
  <div class="container">
    <div class="header">
      <div class="home fs_28"
           @click="goHome">首页</div>
      <div class="adressTest fs_34">{{title}}</div>
    </div>
    <div class="feedback content fs_28"
         v-if="$route.query.content==='firstYuijianfankui' || $route.query.content=='firstTousu'">
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
         v-html="content"
         v-else>
    </div>

  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Page4',
  data () {
    return {
      content: '', //内容
      title: '',
      submitContent: '',
      titleName: { 'firstAboutme': '关于我们', firstTousu: '举报投诉', firstFuwuxieyi: '服务协议', 'firstBaohuxieyi': '个人信息保护政策', 'firstYuijianfankui': '意见反馈' }
    }
  },
  created () {
    this.title = this.titleName[this.$route.query.content]
    let content = this.$route.query.content
    if (content == 'firstAboutme' || content == 'firstFuwuxieyi' || content == 'firstBaohuxieyi') {
      this.getInfo()
    }

  },
  methods: {
    ...mapActions(
      { actionsStatus: 'setStatus' }
    ),
    getInfo () {

      this.$http({
        url: this.$http.adornUrl(this.$serviseCofig[this.$route.query.content]),
        method: 'get',
      }).then(data => {
        this.content = data.type.content
        this.actionsStatus(false)

      })


    },
    goHome () {
      //router.push({ name: 'user', params: { userId: 123 }})
      this.$router.push({ name: 'Page1' })
    },
    submit () {
      if (!this.submitContent) {
        alert('提交内容不能为空')
        return;
      }
      this.$http({
        url: this.$http.adornUrl(this.$serviseCofig[this.$route.query.content]),
        method: 'get',
        params: this.$http.adornParams({ text: this.submitContent })
      }).then(data => {
        this.actionsStatus(false)
        let success = confirm('操作成功,回到首页')
        if (success) {
          this.$router.push({ name: 'Page1' })
        }
      })

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
  background: #097bfb;
  border-color: #097bfb;
  color: #fff;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0.03rem 0 0.06rem;
  text-align: center;
}
</style>