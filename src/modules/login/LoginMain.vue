<template>
  <div class="login-main">
    <login-input />
  </div>
</template>
<script>
import LoginInput from './LoginInput'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  components: { LoginInput },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
.login-main {
  width: 100%;
  height: 100%;
  background-image: url('/static/images/th.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: content-box;
  background-color: #373a43;
  box-sizing: border-box;
}
</style>
