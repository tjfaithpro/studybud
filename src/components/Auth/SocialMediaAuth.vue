<template>
  <div class="social__mediaAuth">
    <div class="line">
      <hr />
      <span>Or</span>
    </div>
    <div class="action__buttons">
      <div class="google">
        <button class="google__button">
          <img
            src="../../assets/images/SideComponents/google.svg"
            alt="Google avatr"
          />
        </button>
        <button class="google__sign">Sign in with Google</button>
      </div>
      <div class="linkedin">
        <button class="linkedin__button">
          <img
            src="../../assets/images/SideComponents/linkedin.svg"
            alt="Linkedin SVG"
          />
        </button>
        <button class="linkedin__sign">Sign in with Linkedin</button>
      </div>
    </div>

    <div class="no__account">
      <p>
        Don’t have an account?<router-link to="sign-up">
          <span class="inner"> Sign up</span></router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");

.action__buttons {
  display: flex;
  justify-content: space-between;
}
.google,
.linkedin {
  width: 50%;
}
.google__button,
.linkedin__button {
  width: 54px;
  height: 56px;
  border-radius: 12px 0px 0px 12px;
  border: none;
  box-shadow: 0px 10px 10px rgba(225, 35, 19, 0.1);
}
.google__button {
  background: #e12313;
}
.linkedin__button {
  background: #05669c;
}
.google__sign,
.linkedin__sign {
  width: 75%;
  height: 56px;
  box-shadow: 0px 10px 10px rgba(225, 35, 19, 0.1);
  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 32px;
  color: #fff;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
.google__sign {
  background: #f03323;
}
.linkedin__sign {
  background: #0072b1;
}
.line hr {
  margin: 30px 0px;
  z-index: -1;
}
.line span {
  position: absolute;
  bottom: 149px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #0d41e1;
  width: 10%;
  background: #fff;
  text-align: center;
  right: 280px;
}

.no__account {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  padding-top: 30px;
  text-align: center;
}
.no__account a {
  color: #000;
  text-decoration: none !important;
}
</style>
