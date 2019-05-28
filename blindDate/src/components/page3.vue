<!--  -->
<template>
  <div class="container">
    <div class="header">
      <div class="adressTest fs_34">编号：{{detail.numbering}}</div>
    </div>
    <div class="swieep">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(item,index) in detail.imglist"
               :key="index">
            <img :src="item"
                 alt=""
                 style="height:100%;width:100%">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 个人资料 -->
    <div class="personal">
      <div class="title">个人资料</div>
      <div class="content">{{detail.gerenziliao}}</div>
    </div>
    <!-- 择偶条件 -->
    <div class="personal">
      <div class="title">择偶条件</div>
      <div class="content">{{detail.zeou}}</div>
    </div>
    <!-- 投诉 -->
    <div class="complaint flex_cc fs_22"
         @click="goAblout('举报投诉')">
      投诉
    </div>
  </div>
</template>

<script>
import serviseCofig from '@/constants/serviseCofig'
import Swiper from 'swiper';
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Page3',
  data () {
    return {
      detail: {}
    }
  },
  created () {
    this.getDetail()
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      }
    })
  },
  methods: {
    ...mapActions(
      { actionsStatus: 'setStatus' }
    ),
    getDetail () {
      this.$http({
        url: this.$http.adornUrl(serviseCofig.firstHuiyuanxiangqing),
        method: 'get',
        params: this.$http.adornParams({ id: this.$route.query.id })
      }).then(data => {
        this.detail = data.type
        this.actionsStatus(false)
      })
    },
    goAblout (content) {
      this.$router.push({ name: 'Page4', params: { content } })
    },
  }
}

</script>
<style lang='scss' scoped>
.container {
  padding-bottom: 0.5rem;
  .header {
    height: 1.12rem;
    border-bottom: 0.02rem solid #eee;
    position: relative;
    background: #fe0000;
    color: #fff;
    .adressTest {
      text-align: center;
      display: inline-block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .swieep {
    width: 100%;
    height: 10rem;
    .swiper-container {
      height: 100%;
    }
  }
  .personal {
    padding: 0 0.3rem;
    background-color: #fff;
    margin-top: 0.2rem;
    .title {
      padding: 0.3rem 0;
      color: #333;
      display: -webkit-box;
      -webkit-box-pack: justify;
      -webkit-box-align: center;
      font-weight: bold;
    }
    .content {
      font-size: 0.28rem;
      color: #999;
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      background: rgba(239, 246, 255, 0.7);
      padding: 0.2rem;
      border-radius: 0.2rem;
    }
  }
  .complaint {
    position: fixed;
    right: 0.3rem;
    bottom: 1rem;
    width: 0.8rem;
    height: 0.8rem;
    color: #fff;
    border-radius: 50%;
    background: #4c8fe8;
    box-shadow: 0 0.05rem 0.5rem rgba(0, 105, 255, 0.59);
  }
}
</style>