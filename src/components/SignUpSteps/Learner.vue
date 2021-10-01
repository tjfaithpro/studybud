<template>
    <div class="learner">
        <form class="learner__form">
            <!-- First Layer-->
            <div class="form__group">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="first__name" class="form__label">First Name</label>
                        <input type="text" class="form__input" placeholder="Enter your first name" />
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="first__name" class="form__label">Last Name</label>
                        <input type="text" class="form__input" placeholder="Enter your last name" />
                    </div>
                </div>
            </div>

           <!-- Secocnd Layer -->
           <div class="form__group">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="first__name" class="form__label">When did you start learning?</label>
                        <input type="date" class="form__input" />
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <label for="first__name" class="form__label">What are your interests?</label>
                        <input type="select" class="form__input" placeholder="Select one or more" />
                    </div>
                </div>
           </div>

           <!-- Third Layer-->
           <div class="form__group">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-lg-12">
                        <label for="first__name" class="form__label">What are your learning goals?</label> <br>
                        <textarea type="date" class="form__input" placeholder="Start here"></textarea>
                    </div>
                </div>
           </div>

        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .learner {padding: 50px 70px}
</style>