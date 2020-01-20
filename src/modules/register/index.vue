<template>
  <div class="register">
    <user-register />
  </div>
</template>
<script>
import UserRegister from './UserRegister'
export default {
  name: 'register',
  components: { UserRegister }
}
</script>
<style scoped>
.register {
  height: 100%;
  width: 100%;
  background-color: #373a43;
}
</style>
