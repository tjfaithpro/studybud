<template>
  <div>
      <div >
          <div class="course_list"> 
                  <router-link to="/admin/courses/"> All Courses</router-link>
                  <router-link to="/admin/courses/ArtificalIntelligence"> Artifical Intelligence</router-link>
                  <router-link to="/admin/courses/Programming"> Programming</router-link>
                  <router-link to="/admin/courses/Robotics">Robotics</router-link>
                  <router-link to="/admin/courses/ProductDesign">Product Design</router-link>
                  <router-link to="/admin/courses/GraphicsDesign">Graphics Design</router-link>
              
          </div>
      </div>
      <div class="row">
          <b-col>
              <router-view/>
          </b-col>
      </div>
  </div>
</template>

<script>
export default { 

}
</script>

<style scoped>

.course_list a{
  display: inline-block;
  padding: 16px;
  text-decoration: none;
  color:#000

}

.course_list{
  overflow: auto;
  white-space: nowrap;
}
.router-link-exact-active{
  color:#0C63E7 !important;
  border-bottom: 2px solid #0C63E7;
}


/* custom scrollbar */
/* width */
::-webkit-scrollbar {
  width: 16px;
  height: 3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #898989; 
  border-radius: 10px;
  scrollbar-width: thin;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #514949; 
transition:all 4s;

}
  
</style>