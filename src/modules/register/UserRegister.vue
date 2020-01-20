<template>
  <div>
    <div class="user-register">
      <div class="title">
        <p class="rgister-btn">
          <a @click="$router.push('/')">登录</a>
          <span @click="$router.push('/')" class="cancel">x</span>
        </p>
      </div>
      <div style="padding: 2rem; text-align:center">
        <a-form id="components-form-demo-normal-login" :form="form" class="login-form">
          <a-form-item v-bind="formItemLayout" label="用户名">
            <a-input
              v-decorator="[
          'userName',
          { rules: [{ validator: checkName } ] },
        ]"
              placeholder="用户名/邮箱/手机号"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="密码">
            <a-input
              v-decorator="[
          'password',
          { rules: [{ validator: checkPassword }] },
        ]"
              type="password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="确认密码">
            <a-input
              v-decorator="[
          'surePassword',
          { rules: [{ validator: checkSurePassword }] },
        ]"
              type="password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="角色">
            <a-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange" />
          </a-form-item>
          <a-form-item style="margin-top: 2rem; text-align:center">
            <a-button
              type="primary"
              class="login-form-button"
              :disabled="netEnableReg"
              @click="handleRegister"
            >注册</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Md5 from '@/utils/md5'
Md5()
export default {
  name: 'todo-assignment',
  data () {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      password: '',
      surePasssword: '',
      plainOptions: [
        '答题者', '出题者'
      ],
      checkedList: ['答题者'],
      indeterminate: true,
      checkAll: false,
      isClickedRegBtn: false
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  computed: {
    netEnableReg () {
      if (this.isClickedRegBtn) {
        return true
      } else {
        if (this.password && this.surePasssword && this.password === this.surePasssword && this.checkedList.length > 0) {
          return false
        } else {
          return true
        }
      }

    },
    role () {
      if (this.checkedList.join() === '答题者') {
        return '1'
      } else if (this.checkedList.join() === '出题者') {
        return '2'
      } else if (this.checkedList.join() === '出题者出题者') {
        return '3'
      } else {
        return '4'
      }
    }
  },
  watch: {
  },
  methods: {
    async checkName (rule, value, callback) {
      if (value.length > 0) {
        let ret = await this.isExitUser(value)
        if (ret) {
          callback('该用户名已存在')
          return
        }
        callback()
        return
      }
      callback('请输入用户名/邮箱/手机号!')
    },
    checkPassword (rule, value, callback) {
      if (value.length > 0) {
        this.password = value
        callback()
        return
      }
      callback('请输入您的密码')
    },
    checkSurePassword (rule, value, callback) {
      if (value.length > 0) {
        this.surePasssword = value
        if (this.password === value) {
          callback()
          return
        } else {
          callback('两次输入的密码不一样')
          return
        }
      }
      callback('请再次输入您的密码')
    },
    onChange (checkedList) {
    },
    async isExitUser (value) {
      let res = await this.$axios.post('user/oneList', { name: value })
      if (res && res.code === '000000') {
        if (res.data.length >= 1) {
          return true
        } else {
          return false
        }
      }
    },
    handleRegister () {
      this.isClickedRegBtn = true
      this.form.validateFields((err, values) => {
        if (!err) {
        }
        let data = {
          id: values.userName.charCodeAt() + new Date().format('YYYYMMDDhhmmss') + 'A' + Math.ceil((Math.random() + 1) * 10000),
          name: values.userName,
          // eslint-disable-next-line
          password: $.md5(values.password),
          role: this.role,
          createTime: new Date().format('YYYY-MM-DD hh:mm:ss'),
          grade: '1',
          currentStatus: '1'
        }
        this.$axios.post('user/save', data)
          .then(res => {
            if (res.code === '000000') {
              if (res.data === 1) {
                this.$router.push('/login')
              }
            }
          })
      })
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
        }
      })
    }
  }
}
</script>
<style scoped>
.user-register {
  width: 520px;
  height: 400px;
  background-color: #ffffff;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
}

.H2 {
  background-color: seagreen;
  color: #bbbbbb;
  height: 30px;
  line-height: 30px;
}
.self-icon-name,
.self-icon-surePassword,
.self-icon-password {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  color: antiquewhite;
  text-align: center;
  margin-right: 10px;
  line-height: 16px;
  font-size: 16px;
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
  width: 82%;
}
</style>
