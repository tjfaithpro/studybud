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

    <!-- Alternative area -->
    <div class="alternative">
      <SocialMediaAuth />
    </div>
  </div>
</template>

<script>
import SocialMediaAuth from "./SocialMediaAuth.vue";
export default {
  components: {
    SocialMediaAuth,
  },
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
</style>
