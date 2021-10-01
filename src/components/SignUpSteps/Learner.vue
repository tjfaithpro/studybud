<template>
  <div class="learner">
    <form class="learner__form">
      <!-- First Layer-->
      <div class="form__group">
        <h3>Complete <span class="inner">Learners</span> Profile</h3>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <label for="first__name" class="form__label">First Name</label>
            <br />
            <input
              type="text"
              class="form__input"
              placeholder="Enter your first name"
            />
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <label for="first__name" class="form__label">Last Name</label>
            <br />
            <input
              type="text"
              class="form__input"
              placeholder="Enter your last name"
            />
          </div>
        </div>
      </div>

      <!-- Secocnd Layer -->
      <div class="form__group">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <label for="first__name" class="form__label"
              >When did you start learning?</label
            >
            <br />
            <input type="date" class="form__input" />
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <label for="first__name" class="form__label"
              >What are your interests?</label
            >
            <br />
            <input
              type="select"
              class="form__input"
              placeholder="Select one or more"
            />
          </div>
        </div>
      </div>

      <!-- Third Layer-->
      <div class="form__group">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-lg-12">
            <label for="first__name" class="form__label"
              >What are your learning goals?</label
            >
            <br />
            <textarea
              type="date"
              class="form__input"
              placeholder="Start here"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.learner {
  padding: 50px 70px;
}
form h3 {
    position: static;
    
    color: #000000;
    font-family: Inter;
    font-weight: 600;
font-size: 24px;
line-height: 32px;
    line-height: 32px;
  }

  form label {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    color: #26263d;
    margin: 8px 0px;
  }
  form input,
  form textarea {
    width: 100%;
    height: 56px;
    left: 0px;
    top: 40px;
    border: none;
    background: #ebebf0;
    padding: 0px 24px;
    border-radius: 4px;
  }
  form textarea {
    height: 160px;
  }
  form input:focus-visible, textarea:focus-visible {
    outline: none;
  }

@media (min-width: 320px) and (max-width: 812px) {
  .learner {
    padding: 20px;
  }
  form h3 {
    position: absolute;
    top: 34%;
    color: #ebebf0;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
  form label {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    color: #26263d;
    margin: 8px 0px;
  }
  form input,
  form textarea {
    width: 100%;
    height: 56px;
    left: 0px;
    top: 40px;
    border: none;
    background: #ebebf0;
    padding: 0px 24px;
    border-radius: 4px;
  }
  form textarea {
    height: 160px;
  }
  form input:focus-visible, textarea:focus-visible {
    outline: none;
  }
}
</style>
