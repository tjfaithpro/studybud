<template>
  <div class="login__form">
    <form action="">
      <h3>Log in to <span class="inner">StudyBud</span></h3>
      <div class="form__group">
        <label for="email" class="form__label">Email</label> <br />
        <input
          type="email"
          name="email"
          class="form__input"
          placeholder="Enter your Email"
        />
      </div>
      <div class="form__group">
        <label for="password" class="form__label">Password</label> <br />
        <input
          type="password"
          name="password"
          class="form__input"
          placeholder="Your secret key"
        />
      </div>
      <div class="forgot">
        <span class="text-right">Forgot Password?</span>
      </div>
      <div class="submit">
        <button>Login</button>
      </div>
    </form>
    <div class="line">
      <hr />
      <span>Or</span>
    </div>
    <!-- Alternative area -->
    <div class="alternative">
      <div class="social__mediaAuth">
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
      </div>
    </div>
    <!-- No account -->
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
export default {
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");

.login__form {
  width: 50%;
  padding: 50px 100px;
}
.login__form h3 {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 30px;
}

/* Form */
form label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 5px;
  color: #26263d;
}
form input {
  padding: 0px 24px;
  width: 100%;
  height: 56px;
  background: #ebebf0;
  border-radius: 10px;
  margin-bottom: 20px;
  border: none;
}
form input::placeholder {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
}
.forgot {
  text-align: right;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
}
.submit button {
  width: 100%;
  height: 56px;
  margin-top: 10px;
  background: #0d41e1;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 32px;
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

/* Social Media Auth Styles */
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

/* No Account */
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

@media (min-width: 320px) and (max-width: 812px) {
.login__form {
  width: 100vw;
  padding: 50px 20px 10px;
  border-radius: 20px;
}
.login__form h3 {
  
  margin-bottom: 10px;
  position: absolute;
  top: 34%;
  color: #EBEBF0;
}
.inner {
color: #1995d8 !important;
}

/* Social Media Auth */
.action__buttons {
  display: block;
  justify-content: space-between;
}
.google,
.linkedin {
  width: 100vw;
}
.google {
  margin-bottom: 20px;
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
  bottom: -25px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #0d41e1;
  width: 10%;
  background: #fff;
  text-align: center;
  right: 170px;
}


}
</style>
