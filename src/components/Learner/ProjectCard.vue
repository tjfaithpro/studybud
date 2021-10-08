<template>
  <div>
    <div class="card">
      <div class="project__image" v-if="project.image">
        <img :src="project.image" alt="" />
      </div>
      <div class="project__details">
        <h5>{{ project.title }}</h5>
        <p>{{ project.details }}</p>
        <div class="project__actions">
          <div class="view">
            <button>View</button>
          </div>
          <div class="like">
            <i class="far fa-thumbs-up"></i>
            <p>9</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>
.card {
  margin: 40px 0;
  width: 573px;
  height: 588px;
  background: #ffffff;
  box-shadow: -6px -6px 42px rgba(240, 240, 240, 0.9),
    6px 6px 42px rgba(240, 240, 240, 0.9);
  border-radius: 10px;
  border: none;
}
.project__details {
  padding: 20px;
}
.project__details h5 {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #474964;
  margin: 8px 0px;
}
.project__details p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */

  margin: 8px 0;
  color: #656565;
}
.project__actions {
  display: flex;
  align-items: center;
}
.project__actions button {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #0d41e1;
  border: 1px solid #0d41e1;
  border-radius: 50px;
  padding: 6px 17px;
}
.project__actions .like {
  color: #0d41e1;
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.project__actions .like p {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #0d41e1;
}
</style>
