<template>
  <div class="login">
      <input v-model="input" placeholder="请输入用户名">
      <input placeholder="请输入密码" v-model="input" show-password>
      <button onclick="onLogin">登录</button>
  </div>
</template>

<script>
import Auth from '../api/auth'

export default {

  data () {
    return {
      input: ''
    }
  },
  methods: {
    onLogin() {
      return Auth.login({username, password})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  input {
    width: 400px;
    line-height: 45px;
    border: 1px solid #ccc8c8;
    padding: 0 10px;
    border-radius: 4px;
    outline: none;
    margin-top: 20px;
  }
  button {
    margin: 30px 8px;
    background: #02bcb0;
    color: #fff;
    border-radius: 4px;
    padding: 8px 24px;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }
}

</style>
