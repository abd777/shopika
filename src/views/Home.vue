<template>
  <div>
    <b-container>
      <b-row class="justify-content-center align-content-center custom-row">
        <b-col cols="12" md="4">
          <b-card hide-footer hide-header>
            <h2>Login</h2>
            <div>
              <b-form-input :state="emailValidation" placeholder="Email" v-model="email"></b-form-input>
              <b-form-invalid-feedback :state="emailValidation">Email Is Not valid</b-form-invalid-feedback>
              <b-form-valid-feedback :state="emailValidation">Just Perfect !</b-form-valid-feedback>

              <br />

              <b-form-input type="password" :state="passwordValidation" placeholder="Password" v-model="password"></b-form-input>
              <br />
              <b-button variant="primary" pill @click="login()" :disabled="!emailValidation || !passwordValidation">Login</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      email: 'admin@admin.com',
      password: 'aaaaaa'
    };
  },
  computed: {
    emailValidation() {
      if (this.email == null) {
        return null;
      } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.email).toLowerCase());
      }
    },
    passwordValidation() {
      if (this.password != null) {
        return this.password.length >= 6 ? true : false;
      } else {
        return null;
      }
    }
  },
  methods:{
    login() {
      if(this.emailValidation && this.passwordValidation) {
       this.$store.dispatch('login',{email:this.email,password:this.password})
      }
    }
  }
};
</script>
<style>
.custom-row {
  height: 100vh !important;
}
</style>