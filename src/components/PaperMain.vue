<template>
  <div class='main'>
    <div class='left-nav' ref="left-nav">
      <paper-sidenav v-show="isShow" />
      <div class="toggle" @click="toggle">{{arraw}}</div>
    </div>
    <div class='rignt-main' ref="right-main">
        <router-view/>
    </div>
  </div>
</template>
<script>
import PaperSidenav from './PaperSidenav'
export default {
  name: 'paper-main',
  components: {
    PaperSidenav
  },
  data () {
    return {
      isSpreadedSideNav: true,
      arraw: '<<',
      isShow: true
    }
  },
  mounted () {
    this.$refs['right-main'].style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`
  },
  methods: {
    toggle () {
      if (this.isSpreadedSideNav) {
        this.arraw = '>>'
        this.$refs['left-nav'].style.left = '-12%'
        this.$refs['right-main'].style.width = '100%'
      } else {
        this.arraw = '<<'
        this.$refs['left-nav'].style.left = '0'
        this.$refs['right-main'].style.width = '88%'
      }
      this.isSpreadedSideNav = !this.isSpreadedSideNav
    }
  }
}
</script>
<style scoped>
.main {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.left-nav {
  width: 12%;
  position: absolute;
  top: 0;
  left: 0;
}
.rignt-main {
  width: 88%;
  position: absolute;
  right: 0;
  padding: 2rem;
  box-sizing: border-box;
}

.toggle {
    padding: .2rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(0, -50%);
    line-height: 3rem;
    background-color: rgb(51,51,51);
    cursor: pointer;
    opacity: .9;
    color: #bbbbbb;
    z-index: 1000;
}

.toggle:hover {
    opacity: 1;
}
</style>
