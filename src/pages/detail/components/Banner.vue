<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="上海迪士尼乐园">
    <div class="banner-info">
      <div class="banner-title">上海迪士尼乐园</div>
      <div class="banner-num">
        <span class="iconfont banner-icon">&#xe62e;</span>
        66
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl'
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      color: #fff
      line-height: .6rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
      .banner-num
        padding: 0 .32rem
        height: .32rem
        padding-top: .14rem
        line-height: .4rem
        border-radius: .2rem
        font-size: .24rem
        background: raba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
