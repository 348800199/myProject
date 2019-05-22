<!--  -->
<template>
  <div class="container">
    <div class="header">
      <div class="home fs_28"
           @click="goHome">首页</div>
      <div class="adressTest fs_34"
           v-if="adressObj">{{adressObj.name}}</div>
    </div>
    <div class="screen fs_26">
      <div :class="[memberStatus?'un-member':'active-member','member']"
           style="margin-right:.2rem"
           @click="changeStatus('girl')">女会员</div>
      <div :class="[!memberStatus?'un-member':'active-member','member']"
           @click="changeStatus('boy')">男会员</div>
    </div>
    <div class="member fs_24">
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
      <div class="paging">
        <div class="page"
             style="width:1rem">首页</div>
        <div class="page">上一页</div>
        <div class="page">下一页</div>
        <div class="page"
             style="width:1rem">尾页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      adressObj: null,
      memberStatus: false,
      member: [{ id: 1, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 2, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 3, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 4, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 5, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 1, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 2, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 3, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 4, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 5, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 1, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 2, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' },
      { id: 3, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 4, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
        , { id: 5, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556541812&di=295a29bc3bef50a1add610ba3dcca552&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20160919%2F14303287938_800x800.jpg' }
      ]
    };
  },
  created () {

    // this.adressObj = this.$route.params.id
  },
  methods: {
    changeStatus (memberStatus) {
      this.memberStatus = memberStatus == 'boy'
    },
    goHome () {
      //router.push({ name: 'user', params: { userId: 123 }})
      this.$router.push({ name: 'Page1' })
    },
    goDetail () {
      this.$router.push({ name: 'Page3' })
    },
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
.screen {
  margin: 0.3rem 0.2rem 0.2rem;
  .member {
    padding: 0 0.2rem;
    line-height: 0.46rem;
    display: inline-block;
    border-radius: 0.2rem;
  }
  .active-member {
    border: 1px solid #4c8fe8;
    background-color: #4c8fe8;
    color: #fff;
  }
  .un-member {
    border: 1px solid #4c8fe8;
    color: #4c8fe8;
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
.paging {
  text-align: center;
  margin-top: 0.3rem;
  padding-bottom: 0.3rem;
  .page {
    display: inline-block;
    background: #4c8fe8;
    margin: 0 0 0 5px;
    width: 1.4rem;
    text-align: center;
    padding: 2px 8px 2px 8px;
    border: 1px solid #eee;
    color: #fff;
  }
}
</style>