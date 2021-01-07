<template>
  <!-- 问题：所有的item都展示同一个图片和文字 -->
  <!-- 所以不要写死，而是要动态的插入：插槽slot -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = false
      // /home -> item1(/profile) = false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // .catch((err)=>err) 加上这个解决双击重复路由会报错的问题
      this.$router.replace(this.path).catch((err) => err); //
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1; /* 对多个flex，即前面的tabbar四个标签进行均等分 */
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>