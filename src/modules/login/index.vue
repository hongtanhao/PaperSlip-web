<template>
  <div class="login">
    <login-bg/>
    <!-- <login-msg/> -->
    <login-index/>
    <paper-footer/>
  </div>
</template>
<script>
import LoginBg from './LoginBg'
import PaperFooter from '@/components/PaperFooter'
import LoginIndex from './LoginIndex.vue'
export default {
  components: {LoginBg, LoginIndex, PaperFooter},
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
  overflow: hidden;
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
