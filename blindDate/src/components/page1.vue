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
             @click="goDetail(item)"
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
    <div class="footer tc fs_24">
      <div class="word"
           @click="goAblout('关于我们')">关于我们</div>丨
      <div class="word"
           @click="goAblout('意见反馈')">意见反馈</div>丨
      <div class="word"
           @click="goAblout('知姻网服务协议')">知姻网服务协议</div>丨
      <div class="word"
           @click="goAblout('个人信息保护政策')">个人信息保护政策</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// let example = require('');
import example from '@/assets/js'
export default {
  name: 'Page1',
  data () {
    return {
      adress: [{ name: '成都', id: 1 }, { name: '绵阳', id: 2 }, { name: '德阳', id: 3 }, { name: '广元', id: 4 }, { name: '宜宾', id: 5 }, { name: '广安', id: 6 }, { name: '巴中', id: 7 }, { name: '南充', id: 8 }, { name: '遂宁', id: 9 }, { name: '乐山', id: 10 }, { name: '眉山', id: 11 }, { name: '达州', id: 12 }],
      member: [{ id: 1, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 2, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 3, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 4, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 5, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 6, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 7, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 8, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 9, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
      ]
    }

  },
  created () {
    this.getDate()
    console.log(example.add)
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getDate () {

      this.$http({
        url: this.$http.adornUrl('/index.php/api/first/index'),
        method: 'get',
      }).then(data => {

      })
    },
    goJume (id) {
      //router.push({ name: 'user', params: { userId: 123 }})
      this.$router.push({ name: 'Page2', params: { id } })
    },
    goDetail (detail) {
      this.$router.push({ name: 'Page3', params: { detail } })
    },
    goAblout (content) {
      this.$router.push({ name: 'Page4', params: { content } })
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
