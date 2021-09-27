<template>
  <div class="container-fluid">
    <b-navbar
      toggleable="lg"
      class="shadow-sm px-5 justify-content-between"
      variant="white"
      fixed="top"
    >
      <router-link to="/">

      <b-navbar-brand >
        <img src="@/assets/logo.png" />
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
        <div class="d-flex w-25">
          <router-link to="/sign-up">
            <b-button variant="outline-danger" class="w-100">Sign Up</b-button
            >&nbsp;&nbsp;&nbsp;
          </router-link>
          <router-link to="/login">
            <b-button variant="danger" class="w-100">Login</b-button>
          </router-link>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
