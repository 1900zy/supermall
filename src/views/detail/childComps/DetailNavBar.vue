<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backHomeClick">
        <img src="~assets/img/common/back.svg" alt="" class="backHome" >
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="index" class="title-item" :class="{active: index === currentIndex}"
        @click="titleItemClick(index)">{{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0 /* 记录当前选中状态 */
    }
  },
  methods: {
    titleItemClick(index) {
      this.currentIndex = index
    },
    backHomeClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 14px;
  }
  .title-item {
    flex: 1 /* 均等分 */
  }
  .backHome {
    padding: 10px;
  }
  .active {
    color: var(--color-high-text)
  }
</style>