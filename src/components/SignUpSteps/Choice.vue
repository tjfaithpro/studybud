<template>
  <div class="choice__path">
    <h3>Choose a path</h3>
    <div class="paths">
      <div
        class="learner"
        :class="[learnerActive ? 'active' : 'non-active']"
        @click="toggleLearnerActive"
      >
        <span>Sign up as</span>
        <h5>Learner</h5>
      </div>
      <div
        class="mentor"
        :class="[mentorActive ? 'active' : 'non-active']"
        @click="toggleMentorActive"
      >
        <span>Sign up as</span>
        <h5>Mentor</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      learnerActive: false,
      mentorActive: false,
      userChoice: ""
    };
  },
  methods: {
    toggleLearnerActive() {
      this.mentorActive = false;
      this.learnerActive = true;
      this.userChoice = "learner"
    },
    toggleMentorActive() {
      this.learnerActive = false;
      this.mentorActive = true;
      this.userChoice = 'mentor'
    },
  },
};
</script>

<style scoped>
.choice__path {
  padding: 50px 70px;
}
.choice__path h3 {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 30px;
}
.paths {
  display: flex;
}
.learner {
  width: 300px;
  height: 97px;

  display: block;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  cursor: pointer;
}
.mentor {
  width: 300px;
  height: 97px;
  margin-left: 20px;

  padding: 20px 0;
  cursor: pointer;
}
.learner span,
.mentor span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
}
.learner span {
  color: #07c8f9;
}
.mentor span {
  color: #a1a2ae;
}
.learner h5,
.mentor h5 {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.learner h5 {
  color: #fff;
}
.mentor h5 {
  color: #0d41e1;
}
.active {
  background: #0d41e1;
  border: 1px solid #0a85ed;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}
.non-active {
  background: #ffffff;
  /* Primary/Lighter */

  border: 1px solid #0a85ed;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}
.non-active h5 {
  color: #0d41e1;
}
.non-active span {
  color: #a1a2ae;
}
.active h5 {
  color: #fff;
}
.active span {
  color: #07c8f9;
}
</style>
