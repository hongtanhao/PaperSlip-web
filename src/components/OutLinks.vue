<template>
  <div class="out-links">
    <div class="links">
      <div class="logo-img">
        <img src="/static/images/wind1.svg" ref="logo-img" width="30" />
      </div>
      <ul>
        <a-popover title="博客园区" placement="rightTop">
          <template slot="content">
            <p><a>创建博客</a></p>
            <p><a>我的博客</a></p>
            <p><a>大佬博客</a></p>
          </template>
          <li>
            <img src="/static/images/blog.svg" width="20" />
          </li>
        </a-popover>
        <a-popover title="个人云" placement="rightTop">
          <template slot="content">
            <p><a>开通云库</a></p>
            <p><a>登入云库</a></p>
          </template>
          <li>
            <img src="/static/images/yunku.svg" width="20" />
          </li>
        </a-popover>
        <a-popover title="组件库" placement="rightTop">
          <template slot="content">
            <p><a>前端库</a></p>
            <p><a>同学库</a></p>
            <p><a>个人库</a></p>
          </template>
          <li>
            <img src="/static/images/zujian.svg" width="20" />
          </li>
        </a-popover>
        <a-popover title="感兴趣" placement="rightTop">
          <template slot="content">
            <p><a></a></p>
            <p><a>经常逛</a></p>
            <p><a>必须逛</a></p>
          </template>
          <li>
            <img src="/static/images/like.svg" width="20" />
          </li>
        </a-popover>
        <a-popover title placement="rightTop">
          <template slot="content">
            <p><a>邀请朋友</a></p>
            <p><a>一起分享</a></p>
          </template>
          <li>
            <img src="/static/images/share.svg" width="20" />
          </li>
        </a-popover>
      </ul>
      <div class="setting">
        <a-popover title placement="rightBottom" trigger="click" v-model="visible">
          <template slot="content">
            <p><a>一键换肤</a></p>
            <a @click="hide" slot="content">关闭</a>
          </template>
          <div>
            <img src="/static/images/setting.svg" width="20" />
          </div>
        </a-popover>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todo-assignment',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    hide () {
      this.visible = false
    }
  }
}
</script>
<style scoped>
.links {
  width: 60px;
  height: calc(100%);
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  cursor: pointer;
}

.links ul li {
  line-height: 40px;
  text-align: center;
}

.logo-img {
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-radius: 100%;
}

.logo-img > img {
  border-radius: 100%;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180);
  }
  100% {
    transform: rotate(360);
  }
}
.logo-img > img:hover {
  background-color: #bbbbbb;
}
.setting {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>
