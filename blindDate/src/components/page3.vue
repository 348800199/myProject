<!--  -->
<template>
  <div class="container">
    <div class="header">
      <div class="adressTest fs_34">编号：007</div>
    </div>
    <div class="swieep">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="item in imgArr"
               :key="item.id">
            <img :src="item.img"
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
      <div class="content">编号2071 22岁，97年，女，未婚，身高155，初中文化，老家广西河池人，从小居住在县城里，现在在深圳工作，做美容行业，月收入6000，无房无车。择偶要求：22-30岁,身高170以上，初中以上，建议未婚，在深圳发展，一定要</div>
    </div>
    <!-- 择偶条件 -->
    <div class="personal">
      <div class="title">择偶条件</div>
      <div class="content">择偶要求:25-30岁，身高175以上，本科学历以上，29-37岁，未婚，身高168以上，学历高中以上，欣赏阳光，上进，孝顺，对家.</div>
    </div>
    <!-- 投诉 -->
    <div class="complaint flex_cc fs_22"
         @click="goAblout('举报投诉')">
      投诉
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'Page3',
  data () {
    return {
      detail: null,
      imgArr: [{ id: 1, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 2, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 3, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 4, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 5, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
      ]
    }
  },
  created () {
    this.detail = this.$route.params.detail
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      }
    })
  },
  methods: {
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