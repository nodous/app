<template>
   <div>
      <router-view></router-view>
    <tabbar>
      <tabbar-item selected link="homepage"> 
        <img slot="icon" src="../assets/demo/homepage.png">
        <img slot="icon-active" src="../assets/demo/homepage_fill.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/demo/eye.png">
        <span slot="label">探知</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">
          <img class="add" src="../assets/demo/add.png">
        </span>
      </tabbar-item>
      <tabbar-item link="/component/demo">
         <img slot="icon" src="../assets/demo/mail.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="mine">
        <img slot="icon" src="../assets/demo/people.png">
        <img slot="icon-active" src="../assets/demo/people_fill.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
   </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell, Swiper} from 'vux'

export default {
    data () {
       return {
       }
    },
    components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Swiper
  }
}
</script>
<style lang="less">
.iconDiv {
    width: 27px;
    height: 27px;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding:12px 0 0;
    font-size: 0;
    color: #999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.add {
  width:64%;
}
</style>
