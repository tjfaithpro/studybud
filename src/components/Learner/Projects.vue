<template>
  <div>
    <div class="projects">
      <h3>Projects</h3>
      <!-- Project card -->
      <div class="project__card">
        <div v-for="(project, index) in projects" :key="index">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/Learner/ProjectCard";
// Images
import One from "../../assets/images/Profile/one.svg";
import Two from "../../assets/images/Profile/two.svg";
import Three from "../../assets/images/Profile/third.svg";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          image: One,
          title: "Scientific Calculator",
          details:
            "A scientific calculator that performs basic calculation functions and scientific functions like log, sin, cos functions like log, sin, cos A scientific calculator that performs basic calculation functions and scientific functions like log, sin, cos functions like log, sin, cos ",
        },
        {
          image: Two,
          title: "Payment Card Design",
          details:
            "A scientific calculator that performs basic calculation functions and scientific functions like log, sin, cos functions like log, sin, cos A scientific calculator that performs basic calculation functions and scientific functions like log, sin, cos functions like log, sin, cos ",
        },
        {
          image: Three,
          title: "Landing Page",
          details:
            "A scientific calculator that performs basic calculation functions and scientific functions like log, sin, cos functions like log, sin, cos A scientific calculator that performs basic calculation functions and scientific functions like log, sin, cos functions like log, sin, cos ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  width: 683px;
  height: 2016px;
  background: #ffffff;
  box-shadow: -6px -6px 42px rgba(240, 240, 240, 0.9),
    6px 6px 42px rgba(240, 240, 240, 0.9);
  border-radius: 10px;
  padding: 20px 50px;
  border-top: 5px solid #0d41e1;
  
}
.projects h3 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #474964;
}

@media (min-width: 320px) and (max-width: 812px) {
  .projects {
  width: 683px;
  height: 1655px;
  background: #ffffff;
  box-shadow: -6px -6px 42px rgba(240, 240, 240, 0.9),
    6px 6px 42px rgba(240, 240, 240, 0.9);
  border-radius: 10px;
  padding: 50px 20px;
  border-top: 0px solid #0d41e1;
  
}
.projects h3 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 10px;
  color: #474964;
  margin-top: 30px;
  padding-left: 10px;
}
}
</style>
