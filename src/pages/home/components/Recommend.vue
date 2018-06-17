<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
        title: '上海玛雅海滩水公园',
        desc: '上海玛雅海滩水公园上海玛雅海滩水公园上海玛雅海滩水公园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
        title: '上海玛雅海滩水公园',
        desc: '上海玛雅海滩水公园上海玛雅海滩水公园上海玛雅海滩水公园'
      }]
    }
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
