<template>
 <div class="tree-menu">
    <tree-menu
    :nodes="tree.nodes"
    :depth="0"
    :label="tree.label"
    ></tree-menu>
  </div>
 </template>

 <script>
  import data from './data'
  import treeMenu from './treeMenu'
  export default {
    data() {
      return {
        tree: {}
      }
    },
    created() {
      this.tree = data;
      console.log(data);
    },
    components: {
      treeMenu
    }
  }
 </script>
