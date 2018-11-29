<template>
  <div class="main">
     <div class="MineHeader">
         <div class="right" @click="pattern">
            <span class="tiemFont" v-if="Pattern">夜间</span>
            <span class="tiemFont" v-else>白天</span>
            <img  v-if="Pattern" src="../assets/demo/night.png" class="timeImg">
            <img  v-else src="../assets/demo/sun.png" class="timeImg">
         </div>
     </div>
     <panel :list="list" id="panel" :type="type" @on-img-error="onImgError"></panel>
     <flexbox :gutter="0" class="flexbox">
      <flexbox-item>
          <div class="flex-demo">
              <p>10</p>
              <span>关注</span>
          </div>
      </flexbox-item>
      <flexbox-item>
          <div class="flex-demo">
              <p>0</p>
              <span>粉丝</span>
          </div>
      </flexbox-item>
      <flexbox-item>
          <div class="flex-demo">
              <p>10</p>
              <span>积分</span>
          </div>
      </flexbox-item>
    </flexbox>
    <flexbox :gutter="0">
      <flexbox-item>
          <div class="flex-demo">
               <img class="icon" src="../assets/demo/list.png">
               <p calss="label">我的文章</p>
          </div>
      </flexbox-item>
      <flexbox-item>
          <div class="flex-demo">
               <img class="icon" src="../assets/demo/book.png">
               <p calss="label">我的书架</p>
          </div>
      </flexbox-item>
      <flexbox-item>
          <div class="flex-demo">
               <img class="icon" src="../assets/demo/save.png">
               <p calss="label">我的收藏</p>
          </div>
      </flexbox-item>
      <flexbox-item>
          <div class="flex-demo">
               <img class="icon" src="../assets/demo/VIP.png">
               <p calss="label">VIP</p>
          </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import {Panel, Flexbox, FlexboxItem} from 'vux'
export default {
    components: {
        Panel, Flexbox, FlexboxItem
    },
    data () {
        return {
            Pattern: true,
            type: '1',
            list: [{
                src: 'http://www.yixuanhudong.com/agg/eat.jpg',
                title: '王冠',
                desc: '查看或更改個人資料',
                url: '/component/cell'
            }]
        }
    },
    methods: {
        pattern () {
            this.Pattern = !this.Pattern
        },
        onImgError (item, $event) {
            console.log(item, $event)
        }
    }
}
</script>
<style lang='less'>
.MineHeader {
   overflow: hidden;
}
.right {
    float: right;

}
.tiemFont{
   font-size: 13px;
   text-align: center;
   float: right;
   padding:10px 10px 10px 0;
   width:40px;
}
.timeImg {
   float: right;
   padding:10px 0;
   width:20px;
}
.weui-media-box__thumb {
    border-radius:50%;
    background: transparent;
}
#panel {
    margin-top:0;

}
.flex-demo {
    text-align: center;
    p {
      color:#7f7f7f;
      font-size: 16px;
    }
    span {
        color:#5b5f57;
        font-size:15px;
    }
}
.icon{
    width:30px;
    margin-top:10px;
} 
.flexbox {
    padding:10px 20px;
    box-sizing: border-box;
}
.main{
    width:100%;
    height:100%;
    background:#ffffff
}
</style>


