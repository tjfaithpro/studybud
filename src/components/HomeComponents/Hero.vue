<template>
   <div class="hero">
      <div class="backgrounds">
        <div class="purple-circle"></div>
        <div class="orange-circle"></div>
        <div class="blue-circle"></div>
      </div>
      <b-container>
        <b-row class="hero_text">
          <b-col md="6" sm="12" align-self="end" data-aos="zoom-in">
            <h1>Get Motivated.</h1>
            <h1>Transiton easily</h1>
            <p>
              Study Bud will help guide you while you learn, connect you with
              the right sudy partner for fun and accuntaility and suitable
              mentors to make your journey easey.
            </p>
            <router-link to="/login">

            <b-button variant="danger" class="mt-4 px-4">Get Started</b-button>
            </router-link>
          </b-col>
          <b-col md="6" sm="12" >
            <div >
              <img class="img-fluid" data-aos="zoom-out"  src="@/assets/images/background/Image.png" alt="" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>

.hero {
  width: 100vw;
  margin-bottom: 30vh;
}
.backgrounds {
  z-index: -2;
  /* position: relative; */
 /* top: -28.25%; */
}
.purple-circle {
  width: 46.25rem;
  height: 46.25rem;
  background-color: #da8083;
  border-radius: 100%;
  position: absolute;
  top: -28.25%;
  left: 55.875%;
  z-index: -2;
  overflow:hidden
}
.orange-circle {
  width: 4.5rem;
  height: 4.5rem;
  background-color: #ff8800;
  border-radius: 100%;
  position: absolute;
  top: 38.25%;
  left: 49.5%;
  z-index: -2;
}
.blue-circle {
  width: 4.5rem;
  height: 4.5rem;
  background-color: #0063f7;
  border-radius: 100%;
  position: absolute;
  top: 90%;
  right: 27%;
  z-index: -2;
}
.hero_text h1 {
}

</style>