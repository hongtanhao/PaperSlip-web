<template>
  <div class="login-input">
    <div class="login-dialog">
      <div class="title">
        <p class="rgister-btn">
          <a @click="handleRegister">没有账号？</a>
          <span @click="$router.push('/')" class="cancel">x</span>
        </p>
      </div>
      <div style="padding: 2rem; text-align:center">
        <a-form id="components-form-demo-normal-login" :form="form" class="login-form">
          <a-form-item>
            <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入您的用户名!' }] },
        ]"
              placeholder="用户名"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入您的密码！' }] },
        ]"
              type="password"
              placeholder="密码"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            出题模式：
            <a-switch  @change="onChange" />
          </a-form-item>
          <a-form-item>
            友情提示：您注册的时角色如果选的是出题者，则需要开启出题模式
          </a-form-item>
          <a-form-item style="margin-top: 2rem">
            <a class="login-form-forgot" href>忘记密码？</a>
            <a-button type="primary" @click="handleLogin" class="login-form-button">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapMutations } from 'vuex'
import UserRegister from '../register/index'
import Storage from '@/utils/storage.js'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      questionMode: false
    }
  },
  components: { UserRegister },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    ...mapMutations([
      'user/SET_USER'
    ]),
    handleLogin () {
      this.form.validateFields((err, values) => {
        if (!err) {
        }
        this.login(values)
      })
    },
    onChange (checked) {
      this.questionMode = checked
    },
    handleRegister () {
      this.$router.push({ path: '/register' })
    },
    login (values) {
      this.$axios.post('user/oneList', { name: values.userName }).then(response => {
        if (response && response.code === '000000') {
          if (response.data && response.data.length === 1) {
            let user = response.data[0]
            // 校验密码
            // eslint-disable-next-line
            if ($.md5(values.password) !== user.password) {
              this.$message.warning('用户密码不正确, 请重新输入！')
              return
            }
            // 校验模式
            if (this.questionMode) {
              if (user.role != '2') {
                this.$message.warning('你选择的登录模式不对, 请重新选择！')
                return
              }
            }
            // 缓存用户信息
            this['user/SET_USER']({ value: user })
            Storage.set('user', user)
            if (user.role === '1') {
              this.$router.push('/index/list')
            } else if (user.role === '2') {
              this.$router.push('/index/question')
            } else {
              this.$message.warning('登录系统的模式不支持！')
              this.$router.replace('/login')
            }
          } else {
            let that = this
            this.$confirm({
              title: '用户不存在，创建一个？',
              content: '点击【确定】， 将跳转到到用户注册页面',
              okText: '确定',
              cancelText: '取消',
              onOk () {
                that.$router.push('/register')
              },
              onCancel () { }
            })
          }
        } else {
          this.$message.error('用户身份验证失败，请联系管理员！')
        }
      })
    }
  }
}
</script>
<style scoped>
.login-input {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
}

.login-dialog {
  width: 520px;
  height: 450px;
  background-color: #ffffff;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
}

.gutter-vertical {
  margin-bottom: 1rem;
  opacity: 1;
  color: #bbb;
  background: transparent;
}

.title {
  border-bottom: 1px solid #ccccee;
}

.rgister-btn {
  text-align: left;
  padding-left: 2rem;
  padding-right: 2rem;
  line-height: 40px;
  margin: 0;
}
.cancel {
  position: absolute;
  right: 2rem;
  font-size: 20px;
  cursor: pointer;
}

.login-form {
  text-align: left;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
