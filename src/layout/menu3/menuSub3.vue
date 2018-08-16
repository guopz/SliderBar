<template>
  <div class="u-list">
    <div v-for="(item, index) in list" :key="item.name">

      <div class="u-title" v-if="!(item.children && item.children.length)">
        <p :depth="depth +'-'+ index" :class="{ 'cur':total(depth +'-'+ index) }"  @click ="pageTab(depth +'-'+ index, item.id)">{{ item.name }}</p>
      </div>

      <div class="u-title" v-else>
        <p :depth="depth +'-'+ index" :class="{ 'cur':total(depth +'-'+ index) }"  @click ="pageTab(depth +'-'+ index, item.id)">{{ item.name }} <i class="u-down"></i></p>
        <menu-sub :list="item.children" :depth="depth +'-'+ index" @curIndex="getIndex"></menu-sub>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'menuSub',
  props: ['list', 'depth'],
  num: '',
  data(){
    return {
      menu: false,
      actid: '',
      indexList: '0-0',
      show: ''
    }
  },
  created() {
    // console.log(this);
  },
  computed: {},
  methods: {
    pageTab(index, id) {
      this.$emit('curIndex', index, id);
      this.$store.commit('increment', {index});
    },
    total(state) {
      console.log(this.$store.state.count);
      return this.$store.state.count.substring(0, state.length) == state;
    },
    getIndex(index, id) {
      this.$emit('curIndex', index, id);
    }
  }
}
</script>

<style lang="scss" scoped>
.left-menu>.u-list {
  left: 0;
  display: block;
}
.u-list {
  position: absolute;
  top: -1px;
  width: 200px;
  left: 200px;
  display: none;
  height: 500px;
  background-color: #ddd;
  border: 1px solid #333;
  box-sizing: border-box;
  .u-title {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;

    p {
      padding: 0 20px;
      &.cur {
        color: #409eff;
        .u-down {
           &:before{
              border-left: .05rem solid #409eff;
              border-bottom: .05rem solid #409eff;
           }
        }
      }
    }
    cursor: pointer;
    &:hover {
      & > p {
        color: #409eff;
        .u-down {
           &:before{
              border-left: .05rem solid #409eff;
              border-bottom: .05rem solid #409eff;
           }
        }
      }
      //
      &>.u-list {
        display: block;
      }
    }
  }
}
.u-down {
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
</style>

