<template>
  <div class="header">
    <div class="cover__page"></div>
    <div class="header__sections">
      <div class="group__details">
        <img src="../../assets/images/Groups/group.svg" alt="Group avatar" />
        <h5>Created by <span class="creator">Steph Crown</span></h5>
        <p>10 learners present</p>
      </div>

      <div class="header__body">
        <div class="group__main">
          <h3>Html5 Fundamentals</h3>
          <p>
            <span class="title">Frontend Programming</span> |
            <span class="created">Joined 24th October, 2021</span>
          </p>
        </div>
        <div class="tabs">
          <span>Study Room</span>
          <span>Announcement</span>
          <span>Members</span>
          <span>Media</span>
          <span>About</span>
          <span>To-do</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cover__page {
  width: 100%;
  height: 79px;
  background: #494eba;
}
.header__sections {
  padding: 0px 40px;
  box-shadow: 0px 9px 17px rgba(240, 240, 240, 0.9);
}
.group__details img {
  position: absolute;
  left: 27%;
  top: 13%;
  border-radius: 100px;
  width: 120px;
  height: 120px;
}
.group__details h5 {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #9495a5;
  margin-left: 130px;
}
.group__details .creator {
  color: #494eba;
}
.group__details p {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20%;
  color: #9495a5;
  margin-left: 130px;
}
.header__body {
  margin-top: 50px;
}
.group__main h3 {
  color: #383b5b;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.group__main p {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 50%;
  color: #9495a5;
}
.group__main .title {
  margin-right: 10px;
}
.group__main .created {
  margin-left: 10px;
}
.tabs {
  text-align: right;
}
.tabs span {
  font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 16px;

color: #9495A5;
margin-right: 20px;
}
</style>
