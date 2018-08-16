<template>
  <div class="qq" :style="indent">
    <div class="tree-menu">
      <div class="label-wrapper" @click="toggleChildren">
        <div :class="labelClasses">
          {{ label }}
          <i v-if="nodes" class="fa" :class="iconClasses"></i>
        </div>
      </div>
      <tree-menu
        v-if="showChildren"
        v-for="node in nodes"
        :nodes="node.nodes"
        :label="node.label"
        :depth="depth + 1"
        :key="node.label"
      >
      </tree-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'treeMenu',
  props: [ 'nodes', 'label', 'depth' ],
  data() {
    return {
      showChildren: false
    }
  },
  computed: {
    iconClasses() {
      return {
        'fa-plus-square-o': !this.showChildren,
        'fa-minus-square-o': this.showChildren
      }
    },
    labelClasses() {
      return { 'has-children': this.nodes }
    },
    indent() {
      console.log(this.depth);
      return { transform: `translate(${200}px)` }
      // return { transform: `translate(${this.depth * 200}px)` }
    }
  },
  methods: {
    toggleChildren() {
       this.showChildren = !this.showChildren;
    }
  }
}
</script>

<style lang="scss" scoped>

.tree-menu {
  // display: inline-block;
  // position: absolute;
  // width: 100px;
  // top: 0;

  .label-wrapper {
    background-color: #ddd;
    width: 200px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    .has-children {
      cursor: pointer;
    }
  }
}
.fa-plus-square-o ,.fa-minus-square-o {
  position: relative;
  &:before{
    content: '';
    position: absolute;
    top: .4rem;
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
.fa-minus-square-o {
  &:before{
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}
</style>
