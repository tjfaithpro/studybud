<template>
  <div>
      <Header />
    <div class="profile__body">
      <!-- Intro -->
      <Intro />
      <!-- Tabs -->
      <Projects />
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Learner/Intro";
import Projects from "@/components/Learner/Projects";
import Header from '@/components/Learner/Header'
export default {
  components: {
    Intro,
    Projects,
    Header
  },
};
</script>

<style scoped>
.profile__body {
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
}
@media (min-width: 320px) and (max-width: 812px) {
  .learner {
    margin-top: 72px;
  }
  .profile__body {
    display: block;
    justify-content: space-between;
    padding: 50px 0px;
  }
}
</style>
