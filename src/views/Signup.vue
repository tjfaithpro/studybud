<template>
  <div class="sign-up">
    <div class="main__section">
      <SideComponent />
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import SideComponent from "@/components/Auth/SideComponent";
import SignUpForm from "@/components/Auth/SignUpForm";
export default {
  components: {
    SideComponent,
    SignUpForm,
  },
};
</script>

<style scoped>
.main__section {
  display: flex;
  margin-top: 78px;
}
</style>
