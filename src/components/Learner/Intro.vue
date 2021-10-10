<template>
  <div>
    <div class="learner__intro">
      <h5>Intro</h5>
      <div class="intro__details">
        <div class="fullname">
          <div><i class="fas fa-user"></i></div>
          <p class="username">Emmanuel Stephen (@stephcrown)</p>
        </div>
        <div class="education">
          <div><i class="fas fa-graduation-cap"></i></div>
          <p class="school">Went to Shalom Kliffon Secondary School</p>
        </div>
        <div class="home">
          <div><i class="fas fa-house-user"></i></div>
          <p class="home">Lives in Mushin, Lagos, Nigeria</p>
        </div>
        <div class="address">
          <div><i class="fas fa-map-marker-alt"></i></div>
          <p>From Enugu, Nigeria</p>
        </div>
        <div class="instagram">
          <div><i class="fab fa-instagram"></i></div>
          <p class="insta">@stephcrown06</p>
        </div>
        <div class="twitter">
          <div><i class="fab fa-twitter"></i></div>
          <p>@stephcrown06</p>
        </div>
        <div class="github">
          <div><i class="fab fa-github"></i></div>
          <p>@steph-crown</p>
        </div>
        <div class="linkedin">
          <div><i class="fab fa-linkedin-in"></i></div>
          <p>@steph-crown</p>
        </div>
        <div class="whatsapp">
          <div><i class="fab fa-whatsapp"></i></div>
          <p>wa.me/+2349090194796</p>
        </div>
        <div class="website">
          <div>
            <img
              src="../../assets/images/Profile/website.png"
              alt="Website avatar"
            />
          </div>
          <p>stephcrown</p>
        </div>
        <div class="mail">
          <div><i class="far fa-envelope"></i></div>
          <p>emmanuelstephen024@gmail.com</p>
        </div>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="learner__intro__mobile">
      <div class="intro__header">
        <h5>Intro</h5>
        <div class="icons">
          <i
            class="fas fa-chevron-down"
            v-b-toggle.collapse-1
          ></i>
          <!-- <i class="fas fa-chevron-up"></i> -->
        </div>
      </div>
      <div class="intro__details " id="collapse-1">
        <div class="fullname">
          <div><i class="fas fa-user"></i></div>
          <p class="username">Emmanuel Stephen (@stephcrown)</p>
        </div>
        <div class="education">
          <div><i class="fas fa-graduation-cap"></i></div>
          <p class="school">Went to Shalom Kliffon Secondary School</p>
        </div>
        <div class="home">
          <div><i class="fas fa-house-user"></i></div>
          <p class="home">Lives in Mushin, Lagos, Nigeria</p>
        </div>
        <div class="address">
          <div><i class="fas fa-map-marker-alt"></i></div>
          <p>From Enugu, Nigeria</p>
        </div>
        <div class="instagram">
          <div><i class="fab fa-instagram"></i></div>
          <p class="insta">@stephcrown06</p>
        </div>
        <div class="twitter">
          <div><i class="fab fa-twitter"></i></div>
          <p>@stephcrown06</p>
        </div>
        <div class="github">
          <div><i class="fab fa-github"></i></div>
          <p>@steph-crown</p>
        </div>
        <div class="linkedin">
          <div><i class="fab fa-linkedin-in"></i></div>
          <p>@steph-crown</p>
        </div>
        <div class="whatsapp">
          <div><i class="fab fa-whatsapp"></i></div>
          <p>wa.me/+2349090194796</p>
        </div>
        <div class="website">
          <div>
            <img
              src="../../assets/images/Profile/website.png"
              alt="Website avatar"
            />
          </div>
          <p>stephcrown</p>
        </div>
        <div class="mail">
          <div><i class="far fa-envelope"></i></div>
          <p>emmanuelstephen024@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.learner__intro {
  width: 409px;
  height: 692px;
  background: #ffffff;
  box-shadow: -6px -6px 42px rgba(240, 240, 240, 0.9),
    6px 6px 42px rgba(240, 240, 240, 0.9);
  border-radius: 10px;
  border-top: 5px solid #0d41e1;
  padding: 0 20px;
  position: sticky;
}
h5 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin: 24px 0px;
}
.intro__details > div {
  display: flex;
  margin-bottom: 18px;
}
.intro__details > div > div {
  width: 8%;
}
.intro__details {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}
.intro__details p {
  color: #9495a5;
  cursor: pointer;
}
.intro__details > div > div {
  color: #0d41e1 !important;
}
.learner__intro__mobile {
  width: 409px;
  height: 692px;
  background: #ffffff;
  box-shadow: -6px -6px 42px rgba(240, 240, 240, 0.9),
    6px 6px 42px rgba(240, 240, 240, 0.9);
  border-radius: 10px;
  border-top: 5px solid #0d41e1;
  padding: 0 20px;
  position: sticky;
  border-bottom: 5px solid #0d41e1;
  display: none;
}

/* Media querries for mobile */
@media (min-width: 320px) and (max-width: 812px) {
  .learner__intro {
    display: none;
  }
  .learner__intro h5 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin: 24px 0px;
  }
  .intro__details > div {
    display: flex;
    margin-bottom: 18px;
  }
  .intro__details > div > div {
    width: 8%;
  }
  .intro__details {
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
  .intro__details p {
    color: #9495a5;
    cursor: pointer;
  }
  .intro__details > div > div {
    color: #0d41e1 !important;
  }
  .learner__intro__mobile {
    width: 100vw;
    height: 692px;
    background: #ffffff;
    box-shadow: -6px -6px 42px rgba(240, 240, 240, 0.9),
      6px 6px 42px rgba(240, 240, 240, 0.9);
    border-radius: 0px;
    border-top: 5px solid #0d41e1;
    padding: 0 20px;
    position: sticky;
    border-bottom: 5px solid #0d41e1;
    display: block;
    margin-top: 60px;
  }
  .intro__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
