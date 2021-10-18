<template>
  <div class="group">
    <router-link to="/profile/learning-group/html5">
      <div class="group__card">
        <div class="group__icon">
          <img :src="group.icon" alt="Props Image" />
        </div>
        <div class="card__details">
          <h5>{{ group.title }}</h5>
          <p>{{ group.details }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["group"],
};
</script>

<style scoped>
.group a {
  text-decoration: none;
}
.group__card {
  display: flex;
  /* align-items: center; */
  font-family: Lato;
  font-style: normal;
  cursor: pointer;
}
.group__card h5 {
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  color: #383b5b;
}
.group__card p {
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #9495a5;
}
.group__card img {
  width: 64px;
  height: 48px;
}
.card__details {
  margin-left: 10px;
  margin-bottom: 15px;
  margin-top: 5px;
}
</style>
