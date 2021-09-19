<template>
<div  class="study my-5 p-5" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
  <div class="container">
    <b-row>
      <b-col col md="9" sm="12">
        <h2>Explore Study Groups</h2>
        <small>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          natus sint est maiores eum tenetur beatae voluptatum earum corrupti
          eos sed placeat, saepe temporibus ab atque deleniti obcaecati soluta
          a.
        </small>
      </b-col>
      <b-col col md="3" sm="12" class="h-25 p-0 d-flex justify-content-end">
        <b-button size="lg" class="viewCourses" variant="danger">
          View All Courses
        </b-button>
      </b-col>
    </b-row>
    <b-row class="mt-3 mb-2">
      <b-navbar toggleable="sm" >
        <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>

        <b-collapse id="nav-collapse2" is-nav style="font-weight:bolder"  >
            <b-navbar-nav >
              <b-nav-item href="#" class="active" >Aftificial Intelligence</b-nav-item>
              <b-nav-item href="#">Programming</b-nav-item>
              <b-nav-item href="#">Robotics</b-nav-item>
              <b-nav-item href="#">Product Design</b-nav-item>
            </b-navbar-nav>
    
        </b-collapse>
      </b-navbar>
    </b-row>
    <b-row class="flex-wrap justify-content-between mx-auto px-0">
          <b-col md="4" sm="12" class="s_group shadow shadow-xl p-0" >
              <div>
            <div class="group_img">
                <!-- <img src="@/assets/images/studyGroup/img1.jpg" alt=""> -->
            </div>
            <div class="p-4">
                <p>
                    Why you'll never look like a supermodel, and it's a good thing
                </p>
                <p style="color:#E32B31" class=" d-block; align-item-center">
                    <b>Read more <i class="mt-1 fa fa-angle-right"></i></b>
                </p>
            </div>
            </div>
        </b-col>
        <b-col md="4" sm="12" class="s_group shadow shadow-xl p-0">
              <div>
            <div class="group_img">
                <!-- <img src="@/assets/images/studyGroup/img1.jpg" alt=""> -->
            </div>
            <div class="p-4">
                <p>
                    Why you'll never look like a supermodel, and it's a good thing
                </p>
                <p style="color:#E32B31" class=" d-block; align-item-center">
                    <b>Read more <i class="mt-1 fa fa-angle-right"></i></b>
                </p>
            </div>
            </div>
        </b-col>

        <b-col md="4" sm="12" class="s_group shadow shadow-xl p-0">
              <div>
            <div class="group_img">
                <!-- <img src="@/assets/images/studyGroup/img1.jpg" alt=""> -->
            </div>
            <div class="p-4">
                <p>
                    Why you'll never look like a supermodel, and it's a good thing
                </p>
                <p style="color:#E32B31" class=" d-block; align-item-center">
                    <b>Read more <i class="mt-1 fa fa-angle-right"></i></b>
                </p>
            </div>
            </div>
        </b-col>
        
    </b-row>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.study {
  background-color: #eefff8;
}
.active{
    color:#E32B31 !important;
    border-bottom: 2px solid #E32B31;
}
.viewCourses{
    box-shadow: 0px 100px 80px rgba(248, 90, 71, 0.07), 0px 64.8148px 46.8519px rgba(248, 90, 71, 0.0531481), 0px 38.5185px 25.4815px rgba(248, 90, 71, 0.0425185), 0px 20px 13px rgba(248, 90, 71, 0.035), 0px 8.14815px 6.51852px rgba(248, 90, 71, 0.0274815), 0px 1.85185px 3.14815px rgba(248, 90, 71, 0.0168519);
}
.s_group{
    border-radius:20px;
    background-color:#fff;
    margin-bottom: 3%;
    /* min-width:30px; */
    /* max-width:30%; */
    width:21rem

}
.group_img{
    width:100%;
    height: 200px;
    background-image: url('~@/assets/images/studyGroup/img1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>
