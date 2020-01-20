<template>
  <div class="main">
    <div class="left-nav" ref="left-nav">
      <paper-sidenav />
      <div
        :class="['toggle', collapsed ? 'collapsed' : 'not-collapsed']"
        ref="toggle"
        @click="toggle"
      >
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        &nbsp;&nbsp;{{arraw}}
      </div>
    </div>
    <div class="right-main" ref="right-main">
      <router-view />
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
      arraw: '折叠边栏',
      collapsed: false
    }
  },
  mounted () {
    this.$refs['right-main'].style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`
    this.$refs['right-main'].style.height = (window.innerHeight - 60) + 'px'
  },
  methods: {
    toggle () {
      if (this.isSpreadedSideNav) {
        this.arraw = ''
        this.$refs['left-nav'].style.left = '-12%'
        this.$refs['right-main'].style.width = '100%'
        this.$refs['right-main'].style.paddingLeft = '6rem'
        // this.$refs['toggle'].style.left = '60px'
        // this.$refs['toggle'].style.textAlign = 'right'
        // this.$refs['toggle'].style.paddingRight = '20px'
        // this.$refs['toggle'].style.backgroundColor = 'black'
        // this.$refs['toggle'].style.zIndex = 1000
        this.collapsed = true
      } else {
        this.arraw = '折叠边栏'
        this.$refs['left-nav'].style.left = '0'
        this.$refs['right-main'].style.width = '88%'
        this.$refs['right-main'].style.paddingLeft = '2rem'
        // this.$refs['toggle'].style.right = '0'
        // this.$refs['toggle'].style.left = '0'
        // this.$refs['toggle'].style.textAlign = 'center'
        // this.$refs['toggle'].style.paddingRight = '0'
        // this.$refs['toggle'].style.backgroundColor = 'rgb(51,51,51)'
        // this.$refs['toggle'].style.zIndex = 10
        this.collapsed = false
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
.right-main {
  width: 88%;
  position: absolute;
  right: 0;
  padding: 2rem;
  box-sizing: border-box;
}

.toggle {
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 3rem;
  background-color: rgb(51, 51, 51);
  cursor: pointer;
  opacity: 1;
  color: seagreen;
  z-index: 10;
  border-top: 1px solid seagreen;
}

.toggle:hover {
  opacity: 1;
}

.collapsed {
  left: 60px;
  text-align: right;
  padding-right: 15px;
  background-color: black;
  z-index: 1000;
}

.not-collapsed {
  right: 0;
  left: 0;
  text-align: center;
  padding-left: 50px;
  background-color: rgb(51,51,51);
  z-index: 10;
}
</style>
