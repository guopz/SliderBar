<template>

  <div class="sider">
    <ul class="g-submenu" >
      <!-- 一级无子集菜单 -->
      <!-- <div v-if="!item.children">
        <li class="el-menu-item" >
          <i class="el-icon-menu"></i>
          <span>{{ item.name }}</span>
        </li>
      </div> -->
      <!-- 一级无有子集菜单 -->
      <div>
          <li class="el-submenu">
            <div class="el-submenu__title">
              <i class="el-icon-location"></i>
              <span>线索统计1</span>
              <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
            </div>

            <ul class="ul-zj">
              <div>
                <li class="el-menu-item">
                  <div>
                    <i></i>
                    <span>线索统计2</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                  </div>
                  <ul class="ul-zj">
                    <div>
                      <li class="el-menu-item">
                        <i></i>
                        <span>线索统计3</span>
                      </li>
                    </div>
                  </ul>
                </li>
              </div>
              <div>
                <li class="el-menu-item"><i></i><span>金融统计</span></li>
              </div>
            </ul>
          </li>
      </div>
      <!-- 一级无子集菜单 -->
      <div>
        <li class="el-menu-item" >
          <i class="el-icon-menu"></i>
          <span>车辆统计</span>
        </li>
      </div>
    </ul>
    <!-- <ul class="g-submenu">
      <nav-sub-menu v-for="item in menuData" :menuData="item" :key="item.path"></nav-sub-menu>
    </ul> -->

  </div>

</template>

<script>
  import data from './data'
  import NavSubMenu from './NavSubMenu'
  export default {
    data() {
      return {
        menu: {
          show: false
        },
        menuData: []
      }
    },
    created() {
      this.menuData = data;
      console.log(this.menuData);
    },
    methods: {
      onMouseEnter(e) {
        this.menu.show = true;
        console.log(this.menu.show);
      },
      onMouseLeave() {
        console.log('onMouseLeave');
        this.menu.show = false;
      }
    },
    components: {
      NavSubMenu
    }
  }
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  .el-submenu__icon-arrow {
    font-size: 14px;
  }
  .g-submenu {
    position: relative;
  }
  .ul-zj {
    position: absolute;
    top: 0;
    right: -200px;
    background-color: #ccc;
    // display: none;
  }
  .el-submenu .el-menu-item {
    height: 56px;
    line-height: 56px;
  }
  .show {
    &>.ul-zj {
      display: block;
    }
  }
}
</style>

