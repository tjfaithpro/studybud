<template>
  <div class="learning__group">
    <HeaderGroup />

    <div class="learning__body">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderGroup from "@/components/Learner/HeaderGroup.vue";
import Sidebar from "@/components/Learner/Sidebar.vue";

export default {
  components: {
    HeaderGroup,
    Sidebar
  },
};
</script>

<style scoped>
  .learning__group {
    margin-top: 0px;
  }
  .learning__body {
    display: flex;
  }
  .learning__body .body {
    width: 1440px;
  }
</style>
