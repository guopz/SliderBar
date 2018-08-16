<template>
  <ul class="tree-menu">
    <li v-for="(item, index) in data" :key="index">
      <span @click="toggle(item, index)">
        <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text', loading ? loadingIconList[index] : '']"></i>
        {{ item[name] || item.menuName }}
      </span>
      <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'treeMenu',
  props: {
    data: Array,
    name: String,
    loading: Boolean
  },
  data () {
    return {
      folderIconList: [],
      loadingIconList: [],
      scope: {}
    }
  },
  created () {
    this.data.forEach((item, index) => {
      if (item.children && item.children.length) {
        this.folderIconList[index] = 'folder';
      }
    });
  },
  methods: {
    doTask (index) {
      this.$set(this.scope, index, !this.scope[index]);
      this.folderIconList[index] = this.scope[index] ? 'folder-open' : 'folder';
    },
    toggle (item, index) {
      this.loadingIconList = [];

      if (item.children && item.children.length) {
        this.doTask(index);
      } else {
        this.loadingIconList[index] = 'loading';

        this.$emit('getSubMenu', item, (subMenuList) => {
          if (subMenuList && subMenuList.length) {
            this.doTask(index);
          }
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-menu {
  float: left;
  position: relative;
  left: 50px;
  width: 200px;
  background-color: #ddd;
  overflow: hidden;
  &:first-child{
    left: 0;
  }
}
.tree-menu li {
  line-height: 2;
}
.tree-menu li span {
  cursor: default;
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #fff;
}
.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: -2px;
}
.icon.folder {
  position: relative;
  transition: all .3s;
  &:before{
    content: '';
    position: absolute;
    top: .5rem;
    left: .5rem;
    width: .325rem;
    height: .325rem;
    border-left: .05rem solid #000;
    border-bottom: .05rem solid #000;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    z-index: 10;
  }
}
.icon.folder-open {
  position: relative;
  transition: all .3s;
  &:before{
    content: '';
    position: absolute;
    top: .5rem;
    left: .5rem;
    width: .325rem;
    height: .325rem;
    border-left: .05rem solid #000;
    border-bottom: .05rem solid #000;
    -webkit-transform: rotate(-45deg);
    transform: rotate(45deg);
    z-index: 10;
  }
}
.icon.file-text {
  background-image: url(/src/assets/file-text.png);
}
.icon.loading {
  background-image: url(/src/assets/loading.gif);
  background-size: 15px;
}
</style>

