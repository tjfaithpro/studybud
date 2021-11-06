<template>
  <div class="row mt-3">
     <div v-for="(course, index) in courseDetail" :key="index" class="col-md-4 mx-auto mx-md-3 course_card m-3 p-0">
         <div class="courser_image h-75"  :style="{ backgroundImage: `url('${course.image}')` }" >
            <b-button size="sm" class="editBtn" pill variant="primary">Edit</b-button>
         </div>
         <div class="py-2 px-3">
           {{course.subject}}
         </div>
     </div>
     <div class="col-md-4 d-flex flex-column  align-items-center justify-content-center course_card mx-auto mx-md-3 m-3 p-0">
         <div class="addCourse d-flex justify-content-center align-items-center h-50 w-50 "  >
            <span class="m-0 pb-4 display-1">+</span>
         </div>
        <h3 class="mt-2 font-weight-light">Add course</h3>
     </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      courseDetail:[
        {subject:'Artifical Inteligence Life', image:require('@/assets/images/admin/ai.jpg')},
        {subject:'Artifical Inteligence Life', image:require('@/assets/images/admin/Product-Design.jpg')},
        {subject:'Artifical Inteligence Life', image:require('@/assets/images/admin/programming.jpg')},
      ]
    }
  }
}
</script>

<style scoped>
.course_card{
position: static;
width: 302px;
height: 300px;
left: 684px;
top: 0px;
background: #FFFFFF;
box-shadow: -6px -6px 42px rgba(240, 240, 240, 0.9), 6px 6px 42px rgba(240, 240, 240, 0.9);
border-radius: 20px;
}
.courser_image{
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.editBtn{
  position: relative;
  top:11rem;
  left:15rem
}
.addCourse{
  /* border:6px dashed black; */
cursor:pointer;
  background: linear-gradient(to right, #000 33%, #fff 0%) top/40px 2px repeat-x, /* top */
linear-gradient(#000 33%, #fff 0%) right/2px 40px repeat-y, /* right */
linear-gradient(to right, #000 33%, #fff 0%) bottom/40px 2px repeat-x, /* bottom */
linear-gradient(#000 33%, #fff 0%) left/2px 40px repeat-y; /* left */
}

</style> 