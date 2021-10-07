<template>
  <div>
    <!-- Cover photo -->
    <div class="cover__photo"></div>

    <!-- Profile details -->
    <div class="profile__section ">
      <!-- Profile image -->
      <div class="profile__image">
        <img
          src="../../assets/images/Profile/pp.svg"
          alt="Learner profile pics"
        />
      </div>
      <!-- Profile details -->
      <div class="profile__details">
        <h5 class="title">
          Emmanuel Stephen <span class="profile__category">| Learner</span>
        </h5>
        <p class="username">@stephcrown</p>
        <p class="profile__about">
          I am a smart learner t amet, consectetur adipiscing elit. Porttitor
          platea eget adipiscing non tincidunt consequat condimentum. Interdum
          aenean I am a smart learner t amet, consectetur adipiscing elit.
          Porttitor platea eget adipiscing non tincidunt consequat condimentum.
          Interdum aenean ... <span class="about__more">See More</span>
        </p>
        <!-- Profile interests -->
        <div class="profile__interests">
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          <button>JavaScript</button>
          <button>Programming</button>
          <button>Software Architecture</button>
        </div>
        <!-- Profile dates -->
        <div class="profile__dates">
          <div class="join__learning">
            <span class="date__joined">Joined 24th October 2021</span> |
            <span class="date__learning"
              >Started Learning 24th February 2021</span
            >
          </div>
          <div class="links">
              <span><i class="fas fa-link"></i> steph-portfolio.vercel.app</span>
          </div>
        </div>

        <!-- Profile actions and tabs -->
        <div class="profile__actions">
            <button><i class="far fa-paper-plane"></i> Message</button>
            <div class="tabs">
                <p>Projects</p>
                <p>Goals</p>
                <p>Mentors</p>
                <p>Learning Groups</p>
                <p>Learning Timeline</p>
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
.cover__photo {
  width: 100vw;
  height: 200px;
  background: #7a021d;
}
/* Profile image styles */
.profile__image img {
    border: 3px solid #FFFFFF;
box-sizing: border-box;
border-radius: 100px;
position: absolute;
top: 23%;
left: 2%;
width: 200px;
height: 200px;
}
/* Profile details */
.profile__details {
    padding: 110px 2.3%;
    box-shadow: 0px 9px 17px rgba(240, 240, 240, 0.9);
    height: 422px;
}
.profile__details .title {
    font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;
color: #28293D;
}
.profile__details .profile__category {
    font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
}
.username {
    font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 12px;
color: #0D41E1;
}
.profile__about {
    font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #656565;
width: 1053px;
height: 41px;
}
.about__more {
    color: #0D41E1;
    cursor: pointer;
}
.profile__interests button {
    background: rgba(13, 65, 225, 0.1);
border: 1px solid #0D41E1;
box-sizing: border-box;
border-radius: 32px;
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
color: #0D41E1;
margin-right: 5px;
padding: 6px 12px;
}
.profile__dates {
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.join__learning {
    font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #9495A5;
}
.join__learning span {
    margin: 0 8px;
}
.links span {
    font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #9495A5;
margin: 0px 74px;
}

/* Profile actions */
.profile__actions {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    align-items: flex-end;
}
.profile__actions button {
    width: 216px;
height: 48px;
background: #0D41E1;
border-radius: 10px;
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
color: #fff;
border: none;
}
.profile__actions .tabs {
  display: flex;
}
.profile__actions .tabs p {
  margin-left: 40px;
  cursor: pointer;
  font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: #9495A5;
  /* padding: 20px 0px; */
}
</style>
