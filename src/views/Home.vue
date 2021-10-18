<template>
  <div class="push-down">
   <app-header/>

    <!-- Hero component -->
    <PageHero />

    <!-- HOW IT WORKS ---------------------------------------- -->
    <HowItWorks />

    <StudyGroup />

    <!-- Why Use -->

    <WhyUse />

    <!-- Testimonials -->
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import PageHero from "@/components/HomeComponents/Hero.vue";
import HowItWorks from "@/components/HomeComponents/HowItWorks.vue";
import StudyGroup from "@/components/HomeComponents/StudyGroup.vue";
import WhyUse from "@/components/HomeComponents/WhyUse";
import Testimonials from "@/components/HomeComponents/Testimonials.vue";
import Footer from "@/components/footer";

export default {
  name: "Home",
  components: {
    PageHero,
    HowItWorks,
    StudyGroup,
    WhyUse,
    Testimonials,
    Footer,
  },
};
</script>

<style scoped></style>
