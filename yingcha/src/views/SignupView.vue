<template>
  <div class="text-center mt-5 login-border mx-auto">
    <img src="@/image/login-logo-2.png" alt="yingcha logo img" class="mt-5">
    <h3 class="fw-bold mt-4 mb-5">회원가입</h3>

    <account-error-list v-if="authError"></account-error-list>

    <form @submit.prevent="signup(credentials)">
      <div class="mb-4">
        <label for="username" class="fs-5 fw-bold mb-2">아이디</label>
        <div>
          <input v-model="credentials.username" 
            type="text" id="username" placeholder="👤"
            class="b-radius border-main-color s-signupform"
            required/>
        </div>
      </div>

      <div class="mb-4">
        <label for="password1" class="fs-5 fw-bold mb-2">비밀번호</label>
        <div>
          <input v-model="credentials.password1" 
            type="password" id="password1" 
            placeholder="🔑"
            class="b-radius border-main-color s-signupform"
            required />
        </div>
      </div>

      <div>
        <label for="password2" class="fs-5 fw-bold mb-2">비밀번호 확인</label>
        <div>
          <input v-model="credentials.password2" 
            type="password" id="password2" 
            placeholder="🔑🔑"  class="b-radius border-main-color s-signupform"
            required />
        </div>
      </div>

      <button class="my-5 text-white px-5 py-1 b-radius fw-bold fs-5">회원가입</button>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
    },
  }
</script>

<style>
  .s-signupform {
    width: 220px;
    height: 40px;
  }
</style>
