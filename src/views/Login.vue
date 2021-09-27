<template>
    <div class="login">
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
</style>