<template>
  <div>
    <b-navbar   type="dark" variant="primary" style="height:10vh">
      <b-navbar-brand href="#">Vue Shopika</b-navbar-brand>
 
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <b-button variant="danger" @click="signout()" pill>Sign Out</b-button>
        </b-nav-item>
        <b-nav-item class="d-block d-md-none">
          <b-button variant="dark" size="sm" pill @click="showCP()">Cart</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      this.$fb.auth().signOut();
    },
    showCP() {
      this.$emit('showCP')
    }
  }
};
</script>

<style>
</style>