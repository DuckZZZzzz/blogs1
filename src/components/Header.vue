<template>
  <header>
    <template  v-if="!isLogin">
      <div class="notLogin">
        <div class="topnav">
          <div class="duck"><a href=""><i class="iconfont icon-duck"></i></a></div>
          <p>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
          </p>
        </div>
        <div class="text">
          <h1>Let's share!</h1>
          <h2>欢迎来DuckZ的树洞写博客</h2>
        </div>
      </div> 
    </template> 
    <template v-if="isLogin">
      <div class="isLogin">
        <div class="topnav">
          <div class="duck">
            <a href=""><i class="iconfont icon-duck"></i></a>
          </div>
          <div class="add"><router-link to="/add">+</router-link></div>
          <div class="user">
            <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
            <ul>
              <li><router-link to="/my">我的</router-link></li>
              <li><a href="#" @click="onLogout">注销</a></li>
            </ul>
          </div>         
        </div>
      </div>
    </template> 
  </header>
</template>

<script>
 
  import auth from '@/api/auth'
  window.auth = auth

  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {

      }
    },

    computed: {
      ...mapGetters([
        'isLogin',
        'user'
        ])
    },

    created() {
      this.checkLogin()
    },

    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
        ]),

      onLogout() {
        this.logout()
        this.$router.push({path: '/login'})
      }
    }

  }
</script>

<style scoped lang="less">
  .notLogin {
    height: 400px;
    background: linear-gradient(145deg,#e3fffd 0,#b7e9e6 100%);
    clip-path: ellipse(80% 60% at 50% 40%);

    .topnav{
      display: flex;
      align-items: center;
      padding: 0 80px;
      font-size: 30px;
      height: 100px;
      box-shadow: 0 1px 5px #465655;
      background: linear-gradient(145deg,#e3fffd 0,#b7e9e6 100%);
      .duck {
        flex: 1;
      }
      p {
        width: 600px;
        text-align: end;
        a {
          color: #007974;
          margin-left: 10px;
        }
      }
    }
    .text {
      text-align: center;
      color: #007974;
      margin-top: 50px;
        h1, h2 {
      font-weight: 400;
      font-size: 35px;
        }
     }
    
  }
  .isLogin {
    .topnav {
      display: flex;
      align-items: center;
      padding: 0 80px;
      height: 100px;
      box-shadow: 0 1px 5px #465655;
      background: linear-gradient(145deg,#e3fffd 0,#b7e9e6 100%);
      .duck {
        flex: 1;
        justify-content: flex-start;
        height: 98px;
        align-items: center;
      }
      .add {
        font-size: 50px;
      }
      .user {
        position: relative;
        .avatar {
          width: 50px;
          height: 50px;
          padding-left: 20px;
        }
        ul {
          display: none;
          position: absolute;
          list-style: none;
          background-color: #fff;
          margin: 0;
          padding: 0;
          top: 50px;
          right: 5px;
          text-align: center;
          font-size: 15px;
        li {
          padding: 3px 5px;
          border: 1px solid #eaeaea;
        }
        a {
            color: #007974;
            font-size: 15px;
          }
        }

        &:hover ul{
          display: block;
        }
      }

    }

  }


</style>




