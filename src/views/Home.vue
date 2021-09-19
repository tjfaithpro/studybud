<template>
  <div class="push-down">
    <div class="hero">
      <div class="backgrounds">
        <div class="purple-circle"></div>
        <div class="orange-circle"></div>
        <div class="blue-circle"></div>
      </div>
      <b-container>
        <b-row class="hero_text">
          <b-col align-self="end">
            <h1>Get Motivated.</h1>
            <h1>Transiton easily</h1>
            <p>
              Study Bud will help guide you while you learn, connect you with
              the right sudy partner for fun and accuntaility and suitable
              mentors to make your journey easey.
            </p>
            <b-button variant="danger" class="mt-4 w-25">Get Started</b-button>
          </b-col>
          <b-col>
            <div class="hero-img">
              <img src="@/assets/images/background/Image.png" alt="" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

<!-- HOW IT WORKS ---------------------------------------- -->
    <b-container>
      <b-row>
        <b-col class="my-5">
          <h1 class="text-center">How it works?</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="text-center">
            <div class="work_node work_node_1 mx-auto mb-5">
              <img src="@/assets/images/icon/search.png" />
            </div>
            <h4>Sugn Up</h4>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime
              architecto, quam alias qui, minima minus quas ipsum perspiciatis
              cum
            </small>
          </div>
        </b-col>
        <b-col >
          <img src="@/assets/images/icon/link1.png" alt="">
        </b-col>
        <b-col>
          <div class="text-center">
            <div class="work_node work_node_2 mx-auto mb-5">
              <img src="@/assets/images/icon/hand.png" />
            </div>
            <h4>Find a mentor/Pal</h4>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime
              architecto, quam alias qui, minima minus quas ipsum perspiciatis
              cum
            </small>
          </div>
        </b-col>
        <b-col>
          <img src="@/assets/images/icon/link2.png" alt="">
        </b-col>
        <b-col>
          <div class="text-center">
            <div class="work_node work_node_3 mx-auto mb-5">
              <img src="@/assets/images/icon/office.png" />
            </div>
            <h4>Start Studying</h4>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime
              architecto, quam alias qui, minima minus quas ipsum perspiciatis
              cum
            </small>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div>
      <h2>
        Explore study group
      </h2>
    </div>

    <!-- -------------------------------------------------------- -->

    <div>
      <h3>Why use StudyBud?</h3>
    </div>

    <div>
      <h3>Lorem ipsum dolor, consectetur adipiscing</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* CSS FOR HERO */
.hero {
  height: 100vh;
  width: 100vw;
}
.backgrounds {
  z-index: -2;
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
  font-weight: bolder;
  font-size: 4rem;
}

/* CSS FOR HOW IT WORKS */
.work_node {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93.46px;
  height: 90px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  text-align: center;
}
.work_node .img {
  font-size: 2.5rem;
  font-weight: 100;
}
.work_node_1 {
  background-color: #06c270;
  /* box-shadow: 0px 0% 2px 2px #4DDFFD; */
  box-shadow: 0px 0% 20px 2px black;
}
.work_node_2 {
  background-color: #0063F7;
}
.work_node_3 {
  background-color: #FF8800;
  box-shadow: 10px 0px 9px -23px #F2B8EC;
}
.linkLine{
  background-color: transparent;
   border-top: 4px dashed #dedefd;
}
.smallDot{
  border-radius: 100%;
  width:11px;
  height: 11px;
}
</style>
