<template>
  <div class="login">
    <img/>
    <div class="fill-login-msg">
      <div class="gutter-vertical">请登录</div>
      <a-input class="gutter-vertical" placeholder="userName" v-model="userName" ref="userNameInput">
        <a-icon slot="prefix" type="user" />
      </a-input>
      <a-input class="gutter-vertical" type="password" placeholder="password" v-model="password" ref="passwordInput">
        <a-icon slot="prefix" type="key" />
      </a-input>
      <a-button type="primary" style="margin-top: 2rem" @click="handleClick">login</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      userName: '123',
      password: '000'
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/index')
    }
  }
}
</script>
<style scoped>
.login {
  position: relative;
  height: 100%;
  width: 100%;
}

.fill-login-msg {
  width: 240px;
  height: 300px;
  position: absolute;
  top: 200px;
  right: 300px;
  padding: 2rem;
  border-radius: 8px;
  background-color: seagreen;
  opacity: .8;
}

.gutter-vertical {
  margin-bottom: 1rem;
  opacity: 1;
}
</style>
