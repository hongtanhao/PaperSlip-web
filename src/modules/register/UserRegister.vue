<template>
    <div class="user-register">
        <a-row type="flex">
            <a-col :span="24">
                <h2 class="H2">
                    用户注册
                </h2>
            </a-col>
        </a-row>
        <a-row type="flex" style="margin-top: 35px">
          <a-col :span="6" style="text-align:right;padding-right: 1rem">
              <span style="color: red">*</span> 用户名:
          </a-col>
          <a-col :span="10" style="text-align:left">
              <a-input v-model="userName" @blur="handleUserName"></a-input>
          </a-col>
          <a-col :span="6" style="text-align:left" v-show="isShowUserNameTip">
              <p style="padding-left: 1rem"><span class="self-icon-name"></span><span class="tip-color-name">{{userNameTip}}</span></p>
          </a-col>
        </a-row>
        <a-row type="flex" style="margin-top: 15px">
          <a-col :span="6" style="text-align:right;right;padding-right: 1rem">
              <span style="color: red">*</span>密码:
          </a-col>
          <a-col :span="10" style="text-align:left;">
              <a-input v-model="password" type="password" @blur="handlePassword"> </a-input>
          </a-col>
           <a-col :span="6" style="text-align:left" v-show="isShowPasswordTip">
              <p style="padding-left: 1rem"><span class="self-icon-password"></span><span class="tip-color-password">{{passwordTip}}</span></p>
          </a-col>
        </a-row>
        <a-row type="flex" style="margin-top: 15px">
          <a-col :span="6" style="text-align:right;padding-right: 1rem">
              <span style="color: red;">*</span>确认密码:
          </a-col>
          <a-col :span="10" style="text-align:left">
              <a-input v-model="surePassword" type="password" @blur="handleSurePassword"> </a-input>
          </a-col>
          <a-col :span="6" style="text-align:left" v-show="isShowSurePasswordTip">
              <p style="padding-left: 1rem"><span class="self-icon-surePassword"></span><span class="tip-color-surePassword">{{surePasswordTip}}</span></p>
          </a-col>
        </a-row>
        <a-row type="flex" style="margin-top: 15px">
          <a-col :span="6" style="text-align:right;padding-right: 1rem">
              <span style="color: red;">*</span>用户角色:
          </a-col>
          <a-col :span="10" style="text-align:left">
              <a-radio-group :options="plainOptions" @change="handleUserRole" :defaultValue="value1" />
          </a-col>
        </a-row>
        <a-row type="flex" style="margin-top: 15px">
        <a-col :span="6" style="text-align:right;padding-right: 1rem">
            <span style="color: red;">*</span>注意:
        </a-col>
        <a-col :span="10" style="text-align:left">
           如果您注册时选择的用户角色是答题者，则只能以答题模式登入此系统，如果你想既有答题者的身份又想有出题者的身份则只能申请用户身份加权，但此功能目前不支持！
        </a-col>
        </a-row>
        <a-row type="flex" style="margin-top: 45px;margin-bottom: 45px">
         <a-col :offset="6" :span="6" style="text-align:left;padding-right: 1rem">
             <a-button type="primary" @click="handleRegister" :disabled="notEnableRe">注册</a-button>
         </a-col>
        </a-row>
    </div>
</template>
<script>
import Md5 from '@/utils/md5'
Md5()
export default {
  name: 'todo-assignment',
  data () {
    return {
      userName: '',
      password: '',
      surePassword: '',
      plainOptions: [
        { label: '答题者', value: '1' },
        { label: '出题者', value: '2' }
      ],
      value1: '1',
      role: '1',
      isShowUserNameTip: false,
      userNameTip: '',
      isShowPasswordTip: false,
      passwordTip: '',
      isShowSurePasswordTip: '',
      surePasswordTip: ''
    }
  },
  computed: {
    notEnableRe () {
      if (this.userName && this.password && this.surePassword) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
  },
  methods: {
    handleUserName (e) {
      if (!this.userName) {
        this.isShowUserNameTip = true
        // eslint-disable-next-line
        $('.tip-color-name').css({color: 'red'})
        // eslint-disable-next-line
        $('.self-icon-name').text('x').css({
          backgroundColor: 'red'
        })
        this.userNameTip = '用户名不能为空！'
        return
      }
      this.$axios.post('user/oneList', {name: e.target.value}).then(res => {
        if (res && res.code === '000000') {
          this.isShowUserNameTip = true
          if (res.data.length >= 1) {
            this.userNameTip = '该用户名已经存在！'
            // eslint-disable-next-line
            $('.tip-color-name').css({color: 'red'})
            // eslint-disable-next-line
            $('.self-icon-name').text('x').css({
              backgroundColor: 'red'
            })
          } else {
            this.userNameTip = '该用户名可用'
            // eslint-disable-next-line
            $('.tip-color-name').css({color: 'green'})
            // eslint-disable-next-line
            $('.self-icon-name').text('-').css({
              backgroundColor: 'green'
            })
          }
        }
      })
    },
    handlePassword (e) {
      this.isShowPasswordTip = true
      if (this.password.length <= 6) {
        this.passwordTip = '密码不能少于6位'
        // eslint-disable-next-line
        $('.tip-color-password').css({color: 'red'})
        // eslint-disable-next-line
        $('.self-icon-password').text('x').css({
          backgroundColor: 'red'
        })
      } else {
        this.passwordTip = '密码输入合格'
        // eslint-disable-next-line
        $('.tip-color-password').css({color: 'green'})
        // eslint-disable-next-line
        $('.self-icon-password').text('-').css({
          backgroundColor: 'green'
        })
      }
    },
    handleSurePassword (e) {
      this.isShowSurePasswordTip = true
      if (this.surePassword !== this.password) {
        this.surePasswordTip = '两次输入密码不一致'
        // eslint-disable-next-line
        $('.tip-color-surePassword').css({color: 'red'})
        // eslint-disable-next-line
        $('.self-icon-surePassword').text('x').css({
          backgroundColor: 'red'
        })
      } else {
        this.surePasswordTip = '密码通过'
        if (this.surePassword.length <= 6) {
          this.surePasswordTip = '密码不能少于6位'
          // eslint-disable-next-line
          $('.tip-color-surePassword').css({color: 'red'})
          // eslint-disable-next-line
          $('.self-icon-surePassword').text('x').css({
            backgroundColor: 'red'
          })
          return
        }
        // eslint-disable-next-line
        $('.tip-color-surePassword').css({color: 'green'})
        // eslint-disable-next-line
        $('.self-icon-surePassword').text('-').css({
          backgroundColor: 'green'
        })
      }
    },
    handleUserRole (e) {
      console.log(e)
      this.role = e.target.value
    },
    handleRegister () {
      let data = {
        id: this.userName.charCodeAt() + new Date().format('YYYYMMDDhhmmss') + 'A' + Math.ceil((Math.random() + 1) * 10000),
        name: this.userName,
        // eslint-disable-next-line
        password: $.md5(this.password),
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
    }
  }
}
</script>
<style scoped>

 .user-register {
  width: 800px;
  margin: 100px auto;
  border: 1px solid #BBBBBB;
  border-radius: 4px;
 }

 .H2 {
  background-color: seagreen;
  color: #BBBBBB;
  height: 30px;
  line-height: 30px;
 }
.self-icon-name, .self-icon-surePassword, .self-icon-password {
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
</style>
