<template>
  <div class="level__navigation">
    <!-- Logo section -->
    <div class="logo">
      <router-link to="/">
        <img src="../../assets/images/Profile/logo2.svg" alt="Logo2 SVG" />
      </router-link>
    </div>
    <!-- Links -->
    <div class="inner__nav">
      <ul class="links">
        <li class="link__item">
            <router-link to="/profile">
                Projects
            </router-link>
        </li>
        <li class="link__item">
            <router-link to="/profile/goals">
                Goals
            </router-link>
        </li>
        <li class="link__item">
            <router-link to="/profile/mentors">
                Mentors
            </router-link>
        </li>
        <li class="link__item">
            <router-link to="/profile/learning-group">
                Learning Groups
            </router-link>
        </li>
        <li class="link__item">
            <router-link to="/profile/learning-timeline">
                Learning Timeline
            </router-link>
        </li>
      </ul>
    </div>
    <!-- Profile details -->
    <div class="profile__details">
      <div>
        <img src="@/assets/images/Profile/profile.svg" alt="Profile avatar" />
      </div>
      <div>
        <span>Emmanuel Stephen</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.level__navigation {
  display: flex;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  box-shadow: 0px 1px 0px #EBEBF0;
  border: 1px solid #EBEBF0;
}
.level__navigation .inner__nav ul {
  display: flex;
  align-items: center;
}
.level__navigation .inner__nav li {
  list-style-type: none;
  margin: 0 20px;
}
.level__navigation .inner__nav ul li a {
    font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #9495A5;
  cursor: pointer;
    text-decoration: none;
}
.level__navigation .profile__details {
  display: flex;
  align-items: center;
}
.profile__details img {
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.profile__details span {
font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 32px;
color: #474964;
}
</style>
