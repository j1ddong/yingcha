<template>
  <div class="text-center my-5 login-border mx-auto">
    <img src="@/image/login-logo-2.png" alt="yingcha logo img" class="mb-5">

    <account-error-list v-if="authError"></account-error-list>


    <form @submit.prevent="login(credentials)" class="mb-5">
      <div class="d-flex justify-content-center">
        <div>
          <div class="mb-3">
            <label for="username" class="me-4 fs-4">👤</label>
            <input v-model="credentials.username" type="text" 
              id="username" class="b-radius border-main-color"
              placeholder="아이디"
              required />
          </div>

          <div>
            <label for="password" class="me-4 fs-4">🔑</label>
            <input v-model="credentials.password" type="password" 
            id="password" class="b-radius border-main-color"
            placeholder="비밀번호"
            required />
          </div>
        </div>

        <button class="ms-3 px-3 py-3 b-radius fs-5 fw-bold text-white text-top">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'LoginView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password: '',
        }
      }
    },
  computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['login'])
    },
  }
</script>

<style>
  .login-border {
    border: 3px solid rgb(128,128,128,0.3);
    border-radius: 5%;
    width: 60%;
  }
</style>
