<template>
  <div class="side-nav" ref="side-nav">
    <ul style="padding-top:2rem">
      <li v-for="(item, index) in sideNavs"
        :key="item+index"
        class="main-meau-li"
        @click.self="handleClick(item)">
        <span :class="{[item.icon]: true, activated: item.isActivated}"></span>&nbsp;&nbsp;
        {{item.text}}&nbsp;&nbsp;
        <span :class="item.isShowChild ? 'iconfont icon-jianhao' : 'iconfont icon-jiahao'"></span>
        <ul class="child-ul" v-show="item.isShowChild">
          <li v-for="(itemChild, indexCh) in item.children" :key="itemChild+indexCh"
              :class="{LichildActivated: itemChild.isActivated}"
              @click="handleChildClick(itemChild)">
              <router-link :class="{'self-router-link': true, childActivated: itemChild.isActivated}" :to="{path: itemChild.path}">
                {{itemChild.text}}
              </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sideNavs: [
        {
          icon: 'iconfont icon-baobiao',
          isActivated: false,
          text: '作业报表',
          isShowChild: false,
          children: [
            {
              icon: '',
              text: '周报',
              isActivated: false
            },
            {
              icon: '',
              text: '月报',
              isActivated: false
            },
            {
              icon: '',
              text: '年报',
              isActivated: false
            }
          ]
        },
        {
          icon: 'iconfont icon-zuoye',
          isActivated: true,
          text: '我的作业',
          isShowChild: true,
          children: [
            {
              icon: '',
              text: '已完成',
              path: '/index/didAssignment',
              isActivated: false
            },
            {
              icon: '',
              text: '做作业',
              path: '/index/todoAssignment',
              isActivated: false
            },
            {
              icon: '',
              text: '需请教',
              path: '/index/',
              isActivated: false
            }
          ]
        },
        {
          icon: 'iconfont icon-icon',
          isActivated: false,
          text: '统计分析',
          isShowChild: false,
          children: [
            {
              icon: '',
              text: '绩效'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.$refs['side-nav'].style.height = (window.innerHeight - 60) + 'px'
  },
  methods: {
    handleClick (item) {
      this.sideNavs.map(item => { item.isActivated = false })
      item.isShowChild = !item.isShowChild
      item.isActivated = true
      console.log(this.sideNavs)
    },
    handleChildClick (item) {
      this.sideNavs.map(item => {
        item.children.forEach(item2 => { item2.isActivated = false })
      })
      item.isActivated = true
    }
  }
}
</script>
<style scoped>

.side-nav {
  height: 100%;
  background-color: rgb(51,51,51);
  color: #bbbbbb;
  text-align: left;
  padding-left: 2rem;
}

.side-nav ul {
    list-style-type: none;
}

.side-nav ul li {
    line-height: 1.5rem;
    cursor: pointer;
}

.child-ul {
    padding: .5rem 0 .5rem 3rem;
}
.child-ul > li {
    line-height: 1.5rem;
}

.LichildActivated {
    border-right: 8px solid seagreen;
    border-radius: 100%;
}

.self-router-link {
    text-decoration: none;
    color: #bbbbbb;
}

.self-router-link:hover, .self-router-link:active, .childActivated {
    text-decoration: none;
    color: seagreen;
}

.activated {
   color: seagreen;
}

</style>
