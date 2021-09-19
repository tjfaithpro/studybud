<template>
  <div class="footer">
    <!-- Division One -->
    <div class="divisions">
      <div class="division__one">
        <!-- Sub One -->
        <div class="sub__one">
          <div class="logo">
            <img src="../assets/images/logo.svg" alt="Logo avatar" />
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>

        <!-- Sub Two -->
        <div class="sub__two">
          <p class="subscribe">Subscribe to our newsletter</p>
          <div class="form">
            <input
              type="email"
              name="email address"
              placeholder="Email Address"
            />
            <figure class="form__image">
              <img
                src="../assets/images/right.svg"
                class="img-fluid"
                alt="Right arrow svg"
              />
            </figure>
          </div>
        </div>
      </div>

      <!-- Division Two -->
      <div class="division__two">
        <!-- Services -->
        <div class="services">
          <h5>Services</h5>
          <p>Mentorship</p>
          <p>StudyPath</p>
        </div>
        <!-- About -->
        <div class="about">
          <h5>About</h5>
          <p>Our Story</p>
          <p>Benefits</p>
        </div>
        <!-- Social links -->
        <div class="links">
          <h5>Follow Us</h5>
          <img src="../assets/images/facebook.svg" alt="Facebook svg" />
          <img src="../assets/images/twitter.svg" alt="Twitter svg" />
          <img src="../assets/images/insta.svg" alt="Instagram svg" />
        </div>
      </div>
    </div>

    <!-- End of Divisions -->
    <div class="copyright">
      <p>Copyright © 2021 StudyBud. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: #28293d;
}
.divisions {
  padding: 0 8%;
  border-bottom: 1px solid #fff;
}
.divisions,
.division__two,
.sub__one,
.sub__two {
  display: flex;
  justify-content: space-between;
  padding-right: 3%;
}
.division__one,
.division__two {
  width: 50%;
  padding-top: 6%;
}
.division__two {
  border-left: 1px solid #fff;
}
.sub__one .description {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.204545px;
  color: #ffffff;
  width: 360px;
}
/* Sub two */
.sub__two {
  margin: 30px 0;
}
.sub__two .form {
  width: 360px;
}
.sub__two .form input {
  background: #28293d;
  border: none;
  border-bottom: 1px solid #fff;
}
.sub__two .form input:focus-visible {
  border: none;
  outline: none;
}
.sub__two .form figure {
  background: #f06065;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  bottom: 49.5px;
  left: 253px;
  border-radius: 2px;
  cursor: pointer;
}
.sub__two p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: #ffffff;
}
.copyright {
  text-align: center;
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8e9ee;
}
/* Division two styles */
.division__two {
  padding-left: 60px;
  padding-right: 100px;
}
.division__two h5 {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.231818px;
  color: #f06065;
  margin-bottom: 30px;
}
.division__two p {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: -0.204545px;
  color: #ffffff;
}
.division__two .links img {
  margin-right: 20px;
}

/* Media Queries */
@media (min-width: 320px) and (max-width: 812px) {
  .divisions {
    padding: 20px;
    border-bottom: none;
  }
  .divisions,
  .division__two,
  .sub__one,
  .sub__two {
    display: block;
    padding-right: 0;
  }
  .division__one,
  .division__two {
    width: 100%;
    padding-top: 0
  }
  .sub__one .description {
  width: 100%;
  margin-top: 30px;
}
.sub__two {
  margin-top: 40px;
}
.sub__two .form {
  width: 100vw;
}
.division__two {
  padding-left: 0;
  padding-right: 0;
  border-left: none;
  padding-top: 0;
}
.division__two h5 {
  
  margin-bottom: 10px;
}
.about, .links {
  margin-top: 30px;
}
}
</style>
