<template>
  <div class="sign-up">
    <div class="main__section">
      <SideComponent />
      <div class="form__area">
        <component :is="steps[currentStep].component" />
        <div class="action__button">
          <button class="next" @click="nextPage" v-show="showNext">
            Next
          </button>
          <button class="complete" v-show="showComplete">
            Complete Sign up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideComponent from "@/components/Auth/SideComponent";
import Details from "@/components/SignUpSteps/Details";
import Choice from "@/components/SignUpSteps/Choice";
import Learner from "@/components/SignUpSteps/Learner";
import Mentor from "@/components/SignUpSteps/Mentor";

export default {
  components: {
    SideComponent,
    Details,
    Choice,
    Learner,
    Mentor,
  },
  data() {
    return {
      steps: [
        { component: Details },
        { component: Choice },
        { component: Learner },
        { component: Mentor },
      ],
      currentStep: 2,
      showComplete: false,
      showNext: true,
    };
  },
  methods: {
    nextPage() {
      if (
        this.currentStep < this.steps.length - 1
      ) {
        
        this.currentStep += 1;
        this.showNext = true;
        this.showComplete = false;
      } else {
        this.currentStep = this.steps.length - 1;
        this.showComplete = true;
        this.showNext = false;
      }
    },
  },
};
</script>

<style scoped>
.main__section {
  display: flex;
  margin-top: 78px;
}
.form__area {
  width: 50%;
}
.action__button {
  padding: 0px 70px 30px;
}
.action__button button {
  width: 35%;
  height: 56px;
}
.action__button .prev {
  border: 1px solid #e12313;
  color: #e12313;
}
.action__button .next,
.complete {
  border: none;
  background: #0d41e1;
  color: #fff;
  border-radius: 10px;
}
@media (min-width: 320px) and (max-width: 812px) {
.main__section {
  display: block;
  margin-top: 78px;
}
.form__area {
  width: 100vw;
}
.action__button button {
  width: 100%;
  height: 56px;
}
.action__button {
  padding: 0px 20px 30px;
}
}
</style>
