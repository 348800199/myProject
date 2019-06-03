<template>
  <div class="container">
    <div class="header fs_28 flex_cc">
      <img src="~%/images/logo.jpg"
           class="logo"
           alt="">
    </div>
    <div class="adressArr fs_28 fc_fff">
      <div class="adressItem tc"
           @click="goJume(item)"
           v-for="item in adress"
           :key="item.id">
        {{item.fenleiname}}
      </div>
    </div>
    <!-- 会员推荐 -->
    <div class="member fs_24">
      <div class="member-title fs_w tc fs_28">
        --- 会员推荐 ---
      </div>
      <div class="memberArr">
        <div class="memberItem"
             @click="goDetail(item)"
             v-for="item in member"
             :key="item.id">
          <img :src="item.firstimg"
               alt=""
               class="memberImg">
        </div>
      </div>
    </div>
    <!-- 广告宣传图 -->
    <div class="Advertising">
      <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1555949284349&amp;di=d9f4825e4840badf7672fc439e778bd1&amp;imgtype=0&amp;src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F16%2F70%2F04%2F29658PICvqP_1024.jpg"
           alt=""
           class="AdvertisingImg">
    </div>
    <!-- 底部 -->
    <div class="footer tc fs_24">
      <div class="word"
           @click="goAblout('firstAboutme')">关于我们</div>丨
      <div class="word"
           @click="goAblout('firstYuijianfankui')">意见反馈</div>丨
      <div class="word"
           @click="goAblout('firstFuwuxieyi')">知姻网服务协议</div>丨
      <div class="word"
           @click="goAblout('firstBaohuxieyi')">个人信息保护政策</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import example from '@/assets/js'
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Page1',
  data () {
    return {
      adress: [],
      member: []
    }

  },
  created () {
    Promise.all([this.getAdress(), this.getRecommend()]).then(_ => {
      this.actionsStatus(false)
    })
  },
  computed: {
  },
  watch: {
  },
  methods: {
    //store的action 原名使用数组 方法
    ...mapMutations([
      'setStatus'
    ]),
    //store的action 别名使用对象 方法
    ...mapActions(
      { actionsStatus: 'setStatus' }
    ),
    // 获取地区
    getAdress () {
      return new Promise((resolve, reject) => {
        this.$http({
          url: this.$http.adornUrl(this.$serviseCofig.firstIndex),
          method: 'get',
        }).then(data => {
          this.adress = data.type
          resolve()
        })
      })
    },
    getRecommend () {
      return new Promise((resolve, reject) => {
        this.$http({
          url: this.$http.adornUrl(this.$serviseCofig.firstHuiyuantuijian),
          method: 'get',
        }).then(data => {
          this.member = data.type
          resolve()
        })
      })
    },
    goJume (item) {
      //router.push({ name: 'user', params: { userId: 123 }})
      this.$router.push({ name: 'Page2', query: item })
    },
    goDetail (detail) {
      this.$router.push({ name: 'Page3', query: { id: detail.id } })
    },
    goAblout (content) {
      this.$router.push({ name: 'Page4', query: { content } })
    },
    // clickParent () {
    //   console.log(this.$parent)
    //   this.$parent.fatherMethod() // 调用父组件方法
    // },
    // editUser () {
    //   console.log('我被父组件点了') // 被父组件调用
    // }

  },
  components: {

  }
}
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  padding-bottom: 0.3rem;
  .header {
    width: 100%;
    border-bottom: 0.02rem solid #efefef;
    .logo {
      width: 100%;
      height: 50px;
      display: block;
    }
  }
  .adressArr {
    background: #fe0000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;
    padding: 0.1rem;
    .adressItem {
      width: 16.6%;
      padding: 0.1rem 0;
    }
  }
  .member {
    .member-title {
      padding-top: 0.3rem;
      padding-bottom: 0.2rem;
    }
    .memberArr {
      margin-left: 0.2%;
      display: flex;
      justify-content: start;
      flex-flow: wrap;
      .memberItem {
        width: 32.1%;
        margin: 0.5%;
        .memberImg {
          width: 100%;
          height: 3.2rem;
          display: block;
        }
      }
    }
  }
  .Advertising {
    margin: 0.2rem 0;
    padding-bottom: 0.2rem;
    .AdvertisingImg {
      width: 100%;
      height: auto;
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    color: #666;
    position: absolute;
    bottom: 0.2rem;
    left: 0;
    width: 100%;
  }
}
</style>
