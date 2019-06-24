<!--  -->
<template>
  <div class="container">
    <div class="header">
      <div class="home fs_28"
           @click="goHome">首页</div>
      <div class="adressTest fs_34"
           v-if="adressObj.fenleiname">{{adressObj.fenleiname}}</div>
    </div>

    <div class="screen fs_26">
      <div :class="[adressObj.sex==='1'?'un-member':'active-member','member']"
           style="margin-right:.2rem"
           @click="changeStatus('0')">女会员</div>
      <div :class="[adressObj.sex==='0'?'un-member':'active-member','member']"
           @click="changeStatus('1')">男会员</div>
    </div>
    <div class="member fs_24"
         v-if="member.length">
      <div class="memberArr">
        <div class="memberItem"
             @click="goDetail(item.id)"
             v-for="item in member"
             :key="item.id">
          <img :src="item.firstimg"
               alt=""
               class="memberImg">
        </div>
      </div>
      <div class="paging">
        <div class="page"
             style="width:1rem"
             @click="goPage('1')">首页</div>
        <div class="page"
             @click="goPage(~~adressObj.page-1)">上一页</div>
        <div class="page"
             @click="goPage(~~adressObj.page+1)">下一页</div>
        <div class="page"
             style="width:1rem"
             @click="goPage(Math.ceil(adressObj.total/adressObj.pageSize))">尾页</div>
      </div>
    </div>
    <div class="no-data"
         v-else>
      暂无数据
    </div>

  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Page2',
  data () {
    return {
      adressObj: {
        page: 1,
        pageSize: 9,
        sex: '0',
        id: '',
        fenleiname: '',
        total: ''
      },
      member: []
    };
  },
  created () {
    this.adressObj = { ...this.adressObj, ...this.$route.query }
    this.getData()
  },
  methods: {
    ...mapActions(
      { actionsStatus: 'setStatus' }
    ),
    // 获取数据
    getData () {
      this.$http({
        url: this.$http.adornUrl(this.$serviseCofig.firstFenleixiangqing),
        method: 'get',
        params: this.$http.adornParams(this.adressObj)
      }).then(data => {
        this.actionsStatus(false)
        if (data.type === 0) {
          this.member = []
          return
        }
        this.member = data.shuju
        this.adressObj.total = data.num

      })
    },
    changeStatus (memberStatus) {
      this.adressObj.sex = memberStatus
      this.getData()

    },
    // 翻页
    goPage (page) {
      console.log(page)
      if (page < 1) {
        alert('您已经在首页~')
      }
      else if (page > Math.ceil(this.adressObj.total / this.adressObj.pageSize)) {
        alert('您已经在尾页~')
      }
      else {
        this.adressObj.page = page
        this.getData()
      }

    },
    goHome () {
      //router.push({ name: 'user', params: { userId: 123 }})
      this.$router.push({ name: 'Page1' })
    },
    goDetail (id) {
      this.$router.push({ name: 'Page3', query: { id } })
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
    border: 1px solid #097bfb;
    background-color: #097bfb;
    color: #fff;
  }
  .un-member {
    border: 1px solid #097bfb;
    color: #097bfb;
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
    background: #097bfb;
    margin: 0 0 0 5px;
    width: 1.4rem;
    text-align: center;
    padding: 2px 8px 2px 8px;
    border: 1px solid #eee;
    color: #fff;
  }
}
.no-data {
  text-align: center;
  font-size: 0.3rem;
  margin: 40px auto 0;
  color: #666;
}
</style>