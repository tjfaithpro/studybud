<template>
  <div class="why__use">
    <h3>Why use StudyBud?</h3>
    <div class="why__how">
      <!-- Image -->
      <div class="image__section">
        <img
          src="../../assets/images/finess.svg"
          class="img-fluid"
          alt="Man asking how svg"
        />
      </div>

      <!-- the how section proper -->
      <div class="how__proper">
        <!-- Card One -->
        <div class="how__card card__one">
          <div class="how__icon"></div>
          <div class="how__explain">
            <h5>ACCOUNTABILITY</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sapien fames mauris enim tellus duis ac. amet convallis
              sagittis, pretium.
            </p>
          </div>
        </div>

        <!-- Card Two -->
        <div class="how__card card__two">
          <div class="how__icon"></div>
          <div class="how__explain">
            <h5>MENTORING</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sapien fames mauris enim tellus duis ac. amet convallis
              sagittis, pretium.
            </p>
          </div>
        </div>

        <!-- cARD tHREE -->
        <div class="how__card card__three">
          <div class="how__icon"></div>
          <div class="how__explain">
            <h5>PARTNERSHIP</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sapien fames mauris enim tellus duis ac. amet convallis
              sagittis, pretium.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.why__use {
  padding: 4% 8% 2%;
}
.why__use h3 {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
}
/* Why how styles */
.why__how {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image__section {
  width: 470px;
  height: 525px;
  background: #ecceac;
}
.image__section img {
  height: 353px;
  margin-top: 70px;
}
.how__proper {
  width: 670px;
  padding-left: 30px;
}
.how__proper .how__card {
  width: 670px;
  /* height: 218px; */
  display: flex;
  padding: 40px 100px;
  justify-content: space-between;
  align-items: center;
}
.how__card h5 {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-feature-settings: "salt" on, "liga" off;

  color: #ffffff;
  margin: 8px 0;
}
.how__card p {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0px;
  width: 299px;
}
.how__card .how__icon {
  height: 80px;
  width: 80px;
  background: white;
  border-radius: 100px;
}
.card__one {
  background: #b50006;
  opacity: 0.7;
  color: #fff;
}
.card__two,
.card__three {
  background: rgba(236, 206, 172, 0.41);
}
.card__two p,
.card__three p {
  color: #18191f;
}
.card__two h5,
.card__three h5 {
  color: #000;
}

/* Media Queries Here */
@media (min-width: 320px) and (max-width: 812px) {
  .why__use {
    padding: 20px;
  }
  .why__use h3 {
    font-size: 24px;
  }
  .why__how {
    display: block;
  }
  .image__section {
    width: 90vw;
    height: 425px;
    background: #ecceac;
  }
  .image__section img {
    width: 100%;
    height: 323px;
    margin-top: 50px;
  }
  .how__proper {
    width: 90vw;
    padding-left: 0px;
    margin-top: 20px;
  }
  .how__proper .how__card {
    display: block;
    width: 100%;
    /* height: 218px; */
    padding: 40px 20px;
  }
  .how__card p {
    font-size: 16px;
    margin: 8px 0px;
    width: 299px;
  }
}
</style>
