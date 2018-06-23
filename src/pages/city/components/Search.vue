<template>
<div>
  <div class="search">
    <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
  </div>
  <div class="search-content" v-show="keyword" ref="search">
    <ul>
      <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
      <li class="search-item border-bottom" v-show="hasNoData" >没有找到匹配数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.tiemr = setTimeout(() => {
        if (!this.keyword) {
          this.list = []
          return
        }
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(e => {
            if (e['spell'].indexOf(this.keyword) > -1 || e['name'].indexOf(this.keyword) > -1) {
              result.push(e)
            }
          })
        }
        this.list = result
        this.timer = null
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl'
  .search
    height: .72rem;
    padding: 0 .1rem;
    background: $bgColor;
    .search-input
      box-sizing : border-box;
      width: 100%;
      height: .62rem;
      padding: 0 .1rem;
      line-height: .62rem;
      text-align: center;
      border-radius : .06rem;
      color: #666;
  .search-content
    position: absolute;
    overflow: hidden;
    background: #eee;
    z-index: 1;
    top: 1.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    .search-item
      line-height: .62rem;
      padding-left: .2rem;
      background: #fff;
      color: #666;
</style>
