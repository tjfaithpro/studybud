<template>
  <div class="push-down">
   <!-- Hero component -->
  <div>
    <PageHero/>
  </div>
<!-- HOW IT WORKS ---------------------------------------- -->
  <div>
    <HowItWorks/>
</div>


    <div>
     <StudyGroup />
    </div>

    <!-- Why Use -->
    <div>
      <WhyUse />
    </div>

    <!-- Testimonials -->
    <div>
      <Testimonials />
    </div>
  </div>
 
</template>

<script>
import PageHero from '@/components/HomeComponents/Hero.vue'
import HowItWorks from '@/components/HomeComponents/HowItWorks.vue';
import StudyGroup from '@/components/HomeComponents/HowItWorks.vue';
import WhyUse from "@/components/HomeComponents/WhyUse";
import Testimonials from '@/components/HomeComponents/Testimonials.vue'

export default {
  name: "Home",
  components: {
    PageHero,
    HowItWorks,
    StudyGroup,
    WhyUse,
    Testimonials,
  },
};
</script> 

<style scoped>

</style>
