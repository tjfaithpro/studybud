<template>
  <div>
    <div class="learner">
      <div class="profile__body">
        <router-view></router-view>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/footer";

export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
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
