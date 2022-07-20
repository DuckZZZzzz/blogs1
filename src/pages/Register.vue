<template>
  <div class="register">
      <input v-model="username" placeholder="请输入用户名">
      <input type="password" placeholder="请输入密码" v-model="password" show-password @keyup.enter="onRegister">
      <button @click="onRegister">注册</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    onRegister() {
      this.register({username: this.username, password: this.password})
        .then(()=>{
          this.$router.push({path: this.$route.query.redirect || '/blogs'})
          console.log(this.$router, this.$route)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.register {
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
