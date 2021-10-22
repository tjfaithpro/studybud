<template>
    <div class="login">
   <app-header/>

        <!-- <AuthNav /> -->
        <div class="main__section">

        <SideComponent />
        <LoginForm />
        </div>
    </div>
</template>

<script>
import SideComponent from '@/components/Auth/SideComponent'
import LoginForm from '@/components/Auth/LoginForm'
// import AuthNav from '@/components/Auth/AuthNav'
    export default {
        components: {
            SideComponent,
            LoginForm,
            // AuthNav
        }
    }
</script>

<style scoped>
.login {
    margin-top: 78px;
}
.main__section {
    
    display: flex;
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