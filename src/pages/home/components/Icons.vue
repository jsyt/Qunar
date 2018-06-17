<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" alt="">
          </div>
          <p class='icon-desc'>{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'icon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((icon, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(icon)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom : 50%
  .icons
    margin-top : .1rem
    .icon
      overflow hidden
      position: relative
      height: 0
      float: left
      width: 25%
      padding-bottom: 25%
      .icon-img
        display: flex
        justify-content: center
        position: absolute
        top : 0
        left : 0
        right: 0
        bottom : .44rem
        box-sizing: border-box;
        padding: .1rem;
        .icon-img-content
          // display: flex;
          margin: 0, auto;
          height: 100%;
      .icon-desc
        position: absolute;
        left : 0;
        right: 0;
        bottom : 0;
        height : .44rem;
        line-height : .44rem;
        color : $darkTextColor;
        text-align : center
        ellipsis()
</style>
