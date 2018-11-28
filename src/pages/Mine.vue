<template>
  <div>
     <div class="MineHeader">
         <div class="right" @click="pattern">
            <span class="tiemFont" v-if="Pattern">夜间</span>
            <span class="tiemFont" v-else>白天</span>
            <img  v-if="Pattern" src="../assets/demo/night.png" class="timeImg">
            <img  v-else src="../assets/demo/sun.png" class="timeImg">
         </div>
     </div>
     <panel :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>
<script>
import {Panel} from 'vux'
export default {
    components: {
        Panel
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
<style>
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
</style>


