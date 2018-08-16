<template>
  <div>
    <!-- <ul class="g-submenu"> -->
      <!-- 一级无子集菜单 -->
      <div v-if="!menuData.children">
        <li class="el-menu-item" >
          <i class="el-icon-menu"></i>
          <span>{{ menuData.name }}</span>
        </li>
      </div>
      <!-- 一级无有子集菜单 -->
      <div v-else>
          <li class="el-submenu">
            <div class="el-submenu__title">
              <i class="el-icon-location"></i>
              <span>{{ menuData.name }}</span>
              <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
            </div>
            <!-- 子集 -->
           <nav-sub-menu v-for="sub in menuData.children" :menuData="sub" :key="sub.path"></nav-sub-menu>

          </li>
      </div>
    <!-- </ul> -->
  </div>

</template>

<script>
  export default {
    name: 'NavSubMenu',
    props: ['menuData'],
    created() {
      console.log(this.menuData);
    }
  }
</script>

<style lang="scss" scoped>

</style>

