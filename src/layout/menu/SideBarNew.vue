<template>

  <my-tree :data="theData" :name="menuName" :loading="loading" @getSubMenu="getSubMenu"></my-tree>

</template>

<script>
import myTree from './NavSubNew'
import * as data from './data'
export default {
  components: {
    myTree
  },
  data () {
    return {
      theData: data.myData1,
      menuName: 'menuName', // 显示菜单名称的属性
      loading: false,
      subMenuData1: data.subMenuData1,
      subMenuData2: data.subMenuData2
    }
  },
  methods: {
    getSubMenu (menuItem, callback) {
      this.loading = true;
      let subMenuData1 = this.subMenuData1,
          subMenuData2 = this.subMenuData2;
      if (menuItem.id === subMenuData1.parentId) {
        this.loading = false;
        menuItem.children = subMenuData1.children;
        callback(menuItem.children);
      }

      setTimeout(() => {
        if (menuItem.id === subMenuData2.parentId) {
          this.loading = false;
          menuItem.children = subMenuData2.children;
          callback(menuItem.children);
        }
      }, 2000);
    }
  },
  created() {
    console.log('NavSubNew');
  }
}
</script>

<style>

</style>
