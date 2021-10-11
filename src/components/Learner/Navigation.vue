<template>
  <div>
    <div class="tabs">
      <router-link to="/profile">
        <p>Projects</p>
      </router-link>
      <p>Goals</p>
      <p>Mentors</p>
      <p>Learning Groups</p>
      <p>Learning Timeline</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs {
  display: flex;
}
.tabs a {
  text-decoration: none;
}
.tabs p {
  margin-left: 40px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #9495a5;
  /* padding: 20px 0px; */
}
@media (min-width: 320px) and (max-width: 812px) {
  .tabs {
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    z-index: 1;
    width: 100vw;
  }
  .tabs p {
    margin-left: 0px;
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #9495a5;
    margin-right: 20px;
    margin-top: 10px;
    /* padding: 20px 0px; */
  }
}
</style>
