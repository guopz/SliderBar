<template>
  <div class="left-menu">
    <!-- <div class="u-list">
      <div class="u-title">root-0 <i class="u-down"></i>
        <div class="u-list" style="left: 210px;">
          <div class="u-title">root-0-0-0 <i class="u-down"></i></div>
          <div class="u-title">root-0-0-1 <i class="u-down"></i></div>
          <div class="u-title">root-0-0-2 <i class="u-down"></i>
            <div class="u-list" style="left: 210px;">
              <div class="u-title">root-0-0-0 <i class="u-down"></i></div>
              <div class="u-title">root-0-0-1 <i class="u-down"></i></div>
              <div class="u-title">root-0-0-2 <i class="u-down"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="u-title">root-1 <i class="u-down"></i></div>
      <div class="u-title">root-2 <i class="u-down"></i></div>
    </div> -->
    <menu-sub :list="data" :depth="0" @curIndex="getIndex"></menu-sub>
  </div>

</template>

<script>
import * as data from './data'
import menuSub from './menuSub3'
export default {
  data() {
    return {
      data: data.myData,
      curIndex: '',
      slider: 'admin/index.php?r=statistics/finance/worker-group-tree'
    }
  },
  created() {
    // todo
    // this.request();
  },
  methods: {
    getIndex(index, id) {
      this.$router.push({ path: `/user/${id}` });
    },
    request() {
      this.$request({
        url: this.slider
      }).then(res => {
        this.data = res.data;
      })
    }
  },
  components: {
    menuSub
  }
}
</script>

<style lang="scss" scoped>
body,html {
  height: 100%;
}
.left-menu {
  position: relative;
  width: 200px;
  margin: 20px;
  height: 500px;
  background-color: #ddd;
  float: left;
}

@mixin w {
  width: 200px;
  height: 50px;
  background-color: #ddd;
}
.p1 {
  position: relative;
  @include w;
  .p2 {
    position: absolute;
    left: 210px;
     @include w;
  }
}
</style>

