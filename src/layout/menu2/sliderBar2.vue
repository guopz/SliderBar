<template>
  <div class="sliderBar">
    <tree-menu
    :nodes="tree.nodes"
    :depth="0"
    :label="tree.label"
    ></tree-menu>
  </div>
</template>

<script>
import tree from './data'
import treeMenu from './slideBarSub2'
export default {
  data() {
    return {
      tree
    }
  },
  created() {
    console.log(tree);
  },
  components: {
    treeMenu
  }
}
</script>

<style lang="scss" scoped>
body {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 1em;
}

.container {
  width: 300px;
  margin: 0 auto;
}

.sliderBar {
  position: relative;
  padding: 0 10px 0;
  width: 500px;
  margin: 0 auto;
}
</style>
