<template>
    <div class="login-container">
       <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

           <div class="title-container">
               <h3 class="title">WELCOME</h3>
           </div>
           
           <el-form-item prop="username">
               <el-input 
                 ref="username"
                 v-model="loginForm.username"
                 placeholder="请输入用户名"
                 name="username"
                 type="text"
                 tabindex="1"
                 auto-complete="on"
               ></el-input>
           </el-form-item>

           <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
               <el-form-item prop="password">
                  <el-input
                   :key="passwordType"
                   ref="password"
                   v-model="loginForm.password"
                   :type="passwordType"
                   placeholder="请输入密码"
                   name="password"
                   tabIndex="2"
                   auto-complete="on"
                   @keyup.native="checkCapslock"
                   @blur="capsTooltip = false"
                   @keyup.enter.native="handleLogin"
                  ></el-input>

               </el-form-item>
           </el-tooltip>

           <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>

       </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        const validateUsername = (rule, value, callback) => {
            if (!validUsername(value)) {
                callback(new Error('Please enter the correct user name'))
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error('The password can not be less than 6 digits'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: 'admin',
                password: '111111'
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            passwordType: 'password',
            capsTooltip: false,
            loading: false,
            showDialog: false,
            redirect: undefined,
            otherQuery: {}
        }
    }
}
</script>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>

