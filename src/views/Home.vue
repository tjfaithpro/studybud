<template>
  <div>
    

    <!-- -------------------------------------------------------- -->
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
import WhyUse from "../components/HomeComponents/WhyUse";
import Testimonials from '../components/HomeComponents/Testimonials.vue'
export default {
  name: "Home",
  components: {
    WhyUse,
    Testimonials
  },
};
</script>
