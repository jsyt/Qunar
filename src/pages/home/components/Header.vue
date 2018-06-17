<template>
    <div class="header">
        <div class="header-left">
          <div class="iconfont icon-back">&#xe624;</div>
        </div>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
        </div>
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86 rem
    background: $bgColor
    color: #fff
    color: #fff
    .header-left
      width: .64rem
      float: left
      .icon-back
        text-align : center
        font-size : .4 rem
    .header-input
      flex: 1
      height: .64 rem
      line-height: .64rem
      margin-top : .12 rem
      magin-left : .2 rem
      padding-left : .2rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align : center
      .arrow-icon
        font-size : .24 rem
        margin-left : -.04 rem
</style>
