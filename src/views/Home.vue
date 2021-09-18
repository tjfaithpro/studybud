<template>
  <div class="push-down">
      <div class="hero">
        <div class="backgrounds">
          <div class="purple-circle"></div>
          <div class="orange-circle"></div>
          <div class="blue-circle"></div>
        </div>
        <b-container>
          <b-row >
              <b-col align-self="end">
              <h1>Get Motivated.</h1>
              <h1>Traniton easily</h1>
              <p>Study Bud will help guide you while you learn, connect you with the right sudy partner for fun and accuntaility and suitable mentors to make your journey easey.</p>
            </b-col>
            <b-col>
              <div class="hero-img"><img src="@/assets/images/background/Image.png" alt=""></div>
            </b-col>
          
          </b-row>
        </b-container>
        
      </div>

      <div>
        <h2>How it works</h2>
      </div>

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
  name: 'Home',
 
}
</script>

<style scoped>
  .hero{
    height: 100vh;
    width: 100vw;
  }
  .backgrounds{
    z-index: -2;
  }
  .purple-circle{
    width:46.25rem;
    height: 46.25rem;
    background-color: #DA8083;
    border-radius: 100%;
    position: absolute;
    top: -28.25%;
    left: 55.875%;
    z-index: -2;

  }
  .hero-img{
    
  }
</style>
