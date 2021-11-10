<template>
  <div class="container-fluid">
    <b-navbar
      toggleable="lg"
      class="shadow-sm px-5 justify-content-between navbar"
      variant="white"
      fixed="top"
    >
      <router-link to="/">

      <b-navbar-brand >
        <img src="@/assets/images/Profile/logo2.svg" />
      </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-between">
        <div class="w-100 ">
          <b-navbar-nav class="justify-content-center" variant="black">
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#">How it Works</b-nav-item>
            <b-nav-item href="#">Blog</b-nav-item>
            <b-nav-item href="#">Request a mentor</b-nav-item>
          </b-navbar-nav>
        </div>

        <!-- Right aligned nav items -->
        <div class="d-flex w-25 ">
          <router-link to="/sign-up" style="margin-right:6%">
            <b-button variant="outline-primary" style="width:6rem">Sign Up</b-button>
           
          </router-link>
          <router-link to="/login">
            <b-button variant="primary" style="width:6rem">Login</b-button>
          </router-link>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 320px) and (max-width: 812px) {
  .navbar {
  padding: 10px 10px !important;}
}
</style>
