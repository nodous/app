<template>
    <scroller lock-x @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="box2">
        <div v-for="i in bottomCount" :key="i" class="loopBox">
           <span>夜深人静的时候，我突然想起来我的那个她 十分十分想念她....</span>
            <flexbox :gutter="0">
             <flexbox-item>
                 <div class="flex-demo">
                    <img src="../assets/timg.jpg" class="Pimg">
                 </div>
             </flexbox-item>
             <flexbox-item>
                 <div class="flex-demo">
                    <img src="../assets/timg1.jpg" class="Pimg">
                 </div>
             </flexbox-item>
             <flexbox-item>
                 <div class="flex-demo">
                    <img src="../assets/timg2.jpg" class="Pimg">
                 </div>
             </flexbox-item>
           </flexbox>
           <flexbox>
             <flexbox-item><div class="flex-demo column">
                 <span><i class="iconfont icon-eye"></i>2036</span>
                 <span><i class="iconfont icon-xiaoxi1"></i>336</span>
                 <span><i class="iconfont icon-dianzan"></i>200</span></div>
            </flexbox-item>
           </flexbox>
        </div>
        <load-more tip="loading"></load-more>
        <div class="scrtop"></div>
      </div>
    </scroller>
</template>
<script>
import {Scroller, LoadMore, Flexbox, FlexboxItem} from 'vux'
export default {
    components: {
        Scroller,
        LoadMore,
        Flexbox,
        FlexboxItem
    },
    data () {
        return {
           onFetching: false,
           bottomCount: 10
        }
    },
    methods: {
      onScrollBottom () {
        if (this.onFetching) {
            // do nothing
        } else {
            this.onFetching = true
            setTimeout(() => {
            this.bottomCount += 10
            this.$nextTick(() => {
                this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
            }, 2000)
        }
      }
    }
}
</script>
<style>
.scrtop {
   height:60px;    
}
.Pimg {
    width:100%;
    box-sizing: border-box;
    padding:0 5px;
    margin:10px 0;
    object-fit: fill;
    border-radius: 8px;
    display: inline-block;
    height: 70px;
}
.flex-demo {
  text-align: left;
  /* background-color: #20b907; */
  border-radius: 4px;
  background-clip: padding-box;
}
.loopBox {
    border-top:1px solid slategrey;
    padding: 10px 10px;
    box-sizing: border-box;
}
.column span {
    margin-left:4px;
}
</style>


