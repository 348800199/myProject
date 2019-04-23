<template>
  <div class="container">
    <div class="header fs_28 flex_cc">
      知姻网(待设计)
    </div>
    <div class="adressArr fs_28 fc_fff">
      <div class="adressItem tc"
           @click="goJume"
           v-for="item in adress"
           :key="item.id">
        {{item.name}}
      </div>
    </div>
    <!-- 会员推荐 -->
    <div class="member fs_24">
      <div class="member-title fs_w tc fs_28">
        --- 会员推荐 ---
      </div>
      <div class="memberArr">
        <div class="memberItem"
             @click="goDetail"
             v-for="item in member"
             :key="item.id">
          <img :src="item.img"
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
    <div class="footer tc fs_22">
      <div class="word"
           @click="goAblout">关于我们</div>丨
      <div class="word">意见反馈</div>丨
      <div class="word">知姻网服务协议</div>丨
      <div class="word">个人信息保护政策</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Page1',
  data () {
    return {
      adress: [{ name: '四川', id: 1 }, { name: '四川1', id: 2 }, { name: '四川2', id: 3 }, { name: '四川3', id: 4 }, { name: '四川4', id: 5 }, { name: '四川5', id: 6 }, { name: '四川7', id: 7 }, { name: '四川8', id: 8 }, { name: '四川9', id: 9 }, { name: '四川10', id: 10 }, { name: '四川11', id: 11 }, { name: '四川12', id: 12 }],
      member: [{ id: 1, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 2, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 3, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 4, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 5, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
      ]
    }

  },
  created () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    goJume () {
      //router.push({ name: 'user', params: { userId: 123 }})
      this.$router.push({ name: 'Page2' })
    },
    goDetail () {
      this.$router.push({ name: 'Page3' })
    },
    goAblout () {
      this.$router.push({ name: 'Page4' })
    },

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
    height: 1rem;
    border: 0.02rem solid #efefef;
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
      margin-left: 1%;
      display: flex;
      justify-content: start;
      flex-flow: wrap;
      .memberItem {
        width: 31%;
        margin: 1%;
        .memberImg {
          width: 100%;
          height: 2.3rem;
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
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
