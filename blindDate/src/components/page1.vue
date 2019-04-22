<template>
    <div class="container">
        <div class="header fs_28 flex_cc">
            知烟网(待设计)
        </div>
        <div class="adressArr fs_24 fc_fff">
            <div class="adressItem tc"
                 v-for="item in adress"
                 :key="item.id">
                {{item.name}}
            </div>
        </div>
        <!-- 会员推荐 -->
        <div class="member">

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'Page1',
    data () {
        return {
            adress: [{ name: '四川', id: 1 }, { name: '四川1', id: 2 }, { name: '四川2', id: 3 }, { name: '四川3', id: 4 }, { name: '四川4', id: 5 }, { name: '四川5', id: 6 }, { name: '四川7', id: 7 }, { name: '四川8', id: 8 }, { name: '四川9', id: 9 }, { name: '四川10', id: 10 }, { name: '四川11', id: 11 }, { name: '四川12', id: 12 }]
        }
    },
    created () {
    },
    computed: {
    },
    watch: {
    },
    methods: {


    },
    components: {

    }
}
</script>

<style scoped lang='scss'>
.container {
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
}
</style>
