<template>
    <div class="event-add">
        <input type="text"
               class="n-input"
               v-model="content"
               placeholder="待办事项"
               @keyup.enter="submit"> {{count}}。。。。。。。
        <button class="add-btn"
                @click="submit">提交</button>
    </div>
</template>

<script>
// mapState  mapState 辅助函数帮助我们生成计算属性 多个管理状态
import { mapState } from 'vuex'
export default {
    data () {
        return {
            content: ''
        }
    },
    computed: {
        // 和原本得混合使用computed
        localComputed () { /* ... */ },
        ...mapState({
            // 普通函数 this=获取 store 实例
            // count (state) {
            //     console.log(this) store 实例
            //     return this.$store.state.event.count
            // }
            // 映射 this.count 为 store.state.count
            // 'count'
            //
            count: state => state.event.count
        })
    },
    methods: {
        submit () {
            let self = this,
                params = {
                    id: 0,
                    type: 1,
                    content: '',
                    time: ''
                };
            self.content = self.content.trim();
            if (self.content) {
                // 传参方式
                this.$store.getters.getCount('我是id')
                params.content = self.content;
                self.$store.dispatch('addevent', params);
                self.content = '';
                console.log(self.$toast)
                self.$toast('添加成功');
            }
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.event-add {
  position: relative;
  padding: 30px 90px 30px 0;
  font-size: 16px;
  .n-input {
    width: 100%;
    height: 40px;
    padding: 7px 10px;
    line-height: 38px;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-sizing: border-box;
    font-size: inherit;
    &:focus {
      outline: none;
    }
  }
  .add-btn {
    position: absolute;
    right: 0;
    top: 30px;
    width: 80px;
    height: 40px;
    line-height: 26px;
    color: #fff;
    /*transition: background .3s ease-in;*/
  }
}
</style>
