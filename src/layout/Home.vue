<template>
  <div class="wrapper clearfix">
    <side-bar></side-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  // import SideBar from './menu/SideBarNew'
  import SideBar from './menu2/sliderBar2'
  // import SideBar from './menu3/menu3'
  export default {
    data() {
      return {}
    },
    created() {
      // todo
    },
    components: {
      SideBar
    }
  }
</script>

<style lang="scss" scoped>
.wrapper {
  font-size: 16px;
  .sider {
    float: left;
    width: 200px;
    background-color: #eee;
  }
.content {
    overflow: hidden;
  }
}
</style>


