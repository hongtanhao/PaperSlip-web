<template>
  <div class="login-index">
    <a-row type="flex">
      <a-col :offset="4" :span="2">
        <span @click="$router.push('/login')" class="login-text">登录</span>
      </a-col>
      <!-- <a-col :span="2">
        <span @click="$router.push('/login')" class="login-icon iconfont icon-denglu1"></span>
      </a-col> -->
      <a-col :span="2">
        <a-dropdown :trigger="['click']" placement="bottomRight">
          <a class="ant-dropdown-link" href="#">
            <span class="iconfont icon-more self-color" />
          </a>
          <a-menu slot="overlay" class="menu-self">
            <a-menu-item key="0">
              <a href="https://hongtanhao.github.io/">
                <span class="links">
                  <img src="/static/images/blog.svg" width="20" />王小峰的博客
                </span>
              </a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">
                <span class="links">
                  <img src="/static/images/yunku.svg" width="20" />私有云盘
                </span>
              </a>
            </a-menu-item>
            <a-menu-item key="1">
              <a>
                <span class="links">
                  <img src="/static/images/zujian.svg" width="20" /> 组件库
                </span>
              </a>
            </a-menu-item>
             <a-menu-item key="1">
              <a href="https://github.com/hongtanhao/">
                <span class="links">
                  <img src="/static/images/github.svg" width="20" /> 源码
                </span>
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      collapsed: true,
      visible: true
    }
  },
  components: {},
  computed: {
    ...mapState({
      mode: state => state.user.user.mode
    })
  },
  mounted () {
  },
  methods: {
    handleChangeTab (item) {
      this['user/CHANGE_USER_MODE']({ value: String(item) })
    },
    ...mapMutations([
      'user/CHANGE_USER_MODE'
    ]),
    handleLogin () {
      this.visible = true
    },
    handlePersonalCloud () {
      this.visible = false
    },
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style scoped>
.login-index {
  position: fixed;
  top: 5%;
  right: 0;
  color: #bbbb;
  width: 30%;
  cursor: pointer;
}

.login-text {
  vertical-align: middle;
}

.login-icon {
  background-position: center;
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 100%;
  border: 1px solid #bbbb;
  font-size: 1.3rem;
  line-height: 30px;
}

.login-icon:hover,
.login-text:hover {
  color: seagreen;
}

.menu-self {
  width: 200px;
}

.self-color {
  color: #bbbb;
}

.links {
  font-size: 0.8rem;
}

.links > img {
  margin-right: 0.8rem;
}

.menu-self {
  /* padding: 1rem; */
  margin-top: 1rem;
  box-sizing: border-box;
}
</style>
