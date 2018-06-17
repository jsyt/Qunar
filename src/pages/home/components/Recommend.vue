<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  .item
    display: flex;
    height : 1.9rem;
    .item-img
      height: 1.7rem;
      width: 1.7rem;
      padding: .1rem;
    .item-info
      flex: 1;
      padding: .1rem;
      min-width : 0;
      .item-title
        line-height : .54rem;
        font-size : .32rem;
        ellipsis()
      .item-desc
        line-height : .4rem;
        color : #ccc;
        ellipsis()
      .item-btn
        line-height: .16rem;
        margin-top: .1rem;
        background-color : #ff9300;
        radius: .06rem;
        padding: .2rem;
        color : #fff;
</style>
