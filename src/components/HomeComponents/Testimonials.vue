<template>
  <div class="testimonials__section">
    <h3>Lorem ipsum dolor, consectetur adipiscing elit.</h3>
    <div class="testimonials">
      <!-- Testimonial card -->
      <div class="testimonial__card shadow bg-body rounded">
        <span class="rating">
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
        </span>
        <p class="testimony">
          We had an incredible experience working with Landify and were
          impressed they made such
        </p>
        <div class="testimonial__owner">
          <div class="test__image">
            <img src="../../assets/images/jedi.svg" alt="Jedidiah SVG" />
          </div>
          <div class="test__details">
            <h5>Jedidiah</h5>
            <p>Los Angeles, CA</p>
          </div>
        </div>
      </div>

      <!-- End of Card 1 -->

      <!-- Card Two -->
      <div class="testimonial__card shadow bg-body rounded">
        <span class="rating">
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
        </span>
        <p class="testimony">
          We had an incredible experience working with Landify and were
          impressed they made such
        </p>
        <div class="testimonial__owner">
          <div class="test__image">
            <img src="../../assets/images/steph.png" alt="Stephen SVG" />
          </div>
          <div class="test__details">
            <h5>Stephen</h5>
            <p>New York City, NY</p>
          </div>
        </div>
      </div>
      <!-- End of Card two -->

      <!-- Card three -->
      <div class="testimonial__card shadow bg-body rounded">
        <span class="rating">
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
          <img src="../../assets/images/star.svg" alt="Star avatar" />
        </span>
        <p class="testimony">
          We had an incredible experience working with Landify and were
          impressed they made such
        </p>
        <div class="testimonial__owner">
          <div class="test__image">
            <img src="../../assets/images/kosi.png" alt="Kosi Png" />
          </div>
          <div class="test__details">
            <h5>Kosichukwu</h5>
            <p>Buffalo, NJ</p>
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
.testimonials__section {
  padding: 4% 8% 6%;
}
.testimonials__section h3 {
  width: 769px;
  height: 116px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  margin: 8px 0;
}
/* Testimonials styles */
.testimonials {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.testimonial__card {
  width: 380px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 30px 30px;
}
.testimonial__card .testimony {
  margin: 26px 0;
  width: 303px;
  height: 96px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  font-feature-settings: "salt" on, "liga" off;
  color: #18191f;
}
.testimonial__owner {
  display: flex;
  align-items: flex-start;
}
.testimonial__owner h5 {
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
}
.testimonial__owner p {
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #666666;
  margin-top: -6px;
}
.testimonial__owner .test__details {
  margin-left: 20px;
}

/* Media Queries */
@media (min-width: 320px) and (max-width: 812px) {
  .testimonials__section {
    padding: 20px;
  }
  .testimonials__section h3 {
  width: 340px;
  font-size: 28px;
  line-height: 38px;
}
.testimonials {
  display: block;
}
.testimonial__card {
  width: 90vw;
  margin-bottom: 20px;
}
}
</style>
