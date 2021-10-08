<template>
  <div class="learner">
    <!-- Profile Header -->
    <Header />

    <div class="profile__body">
      <!-- Intro -->
      <Intro />
      <!-- Tabs -->
      <Projects />
    </div>

    <!-- Tabs Component -->
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Learner/Header";
import Intro from '@/components/Learner/Intro'
import Projects from '@/components/Learner/Projects'
import Footer from '@/components/footer'

export default {
  components: {
    Header,
    Intro,
    Projects,
    Footer
  },
};
</script>

<style scoped>
.learner {
  margin-top: 72px;
}
.profile__body {
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
}
</style>
