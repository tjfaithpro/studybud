<template>
    <b-container class="mt-md-0 mt-sm-5">
      <b-row>
        <b-col class="my-5">
          <h1 class="text-center">How it works?</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12">
          <div class="text-center">
            <div class="work_node work_node_1 mx-auto mb-5" data-aos="fade-right">
              <img src="@/assets/images/icon/search.png" />
            </div>
            <h4>Sign Up</h4>
            <small data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime
              architecto, quam alias qui, minima minus quas ipsum perspiciatis
              cum
            </small>
          </div>
        </b-col>
        <b-col class="text-center line1 mt-4" md="1" sm="12">
          <img src="@/assets/images/icon/link1.png" alt="">
        </b-col>
        <b-col md="4" sm="12">
          <div class="text-center">
            <div class="work_node work_node_2 mx-auto mb-5" data-aos="fade-up">
              <img src="@/assets/images/icon/hand.png" />
            </div>
            <h4>Find a mentor/Pal</h4>
            <small data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime
              architecto, quam alias qui, minima minus quas ipsum perspiciatis
              cum
            </small>
          </div>
        </b-col>
        <b-col class="text-center line2 mt-4" md="1" sm="12">
          <img src="@/assets/images/icon/link2.png" alt="">
        </b-col>
        <b-col md="4" sm="12">
          <div class="text-center">
            <div class="work_node work_node_3 mx-auto mb-5" data-aos="fade-left">
              <img src="@/assets/images/icon/office.png" />
            </div>
            <h4>Start Studying</h4>
            <small data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime
              architecto, quam alias qui, minima minus quas ipsum perspiciatis
              cum
            </small>
          </div>
        </b-col>
      </b-row>
      <br>
    </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.work_node {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93.46px;
  height: 90px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  text-align: center;
}
.work_node .img {
  font-size: 2.5rem;
  font-weight: 100;
}
.work_node_1 {
  background-color: #06c270;
  box-shadow: 0px 100px 80px rgba(6, 194, 112, 0.07), 0px 64.8148px 46.8519px rgba(6, 194, 112, 0.0531), 0px 38.5185px 25.4815px rgba(6, 194, 112, 0.0425), 0px 20px 13px rgba(6, 194, 112, 0.035), 0px 8.14815px 6.51852px rgba(6, 194, 112, 0.0275), 0px 1.85185px 3.14815px rgba(6, 194, 112, 0.0169);
}
.work_node_2 {
  background-color: #0063F7;
  box-shadow: 0px 100px 80px rgba(77, 223, 253, 0.07), 0px 64.8148px 46.8519px rgba(218, 218, 218, 0.0531), 0px 38.5185px 25.4815px rgba(77, 223, 253, 0.0425185), 0px 20px 13px rgba(77, 223, 253, 0.035), 0px 8.14815px 6.51852px rgba(77, 223, 253, 0.0274815), 0px 1.85185px 3.14815px rgba(77, 223, 253, 0.0168519);
}
.work_node_3 {
  background-color: #FF8800;
  box-shadow: 0px 100px 80px rgba(242, 184, 236, 0.07), 0px 64.8148px 46.8519px rgba(242, 184, 236, 0.0531481), 0px 38.5185px 25.4815px rgba(242, 184, 236, 0.0425185), 0px 20px 13px rgba(242, 184, 236, 0.035), 0px 8.14815px 6.51852px rgba(242, 184, 236, 0.0274815), 0px 1.85185px 3.14815px rgba(242, 184, 236, 0.0168519);
}
.linkLine{
  background-color: transparent;
   border-top: 4px dashed #dedefd;
}
.smallDot{
  border-radius: 100%;
  width:11px;
  height: 11px;
}
.line1{
  position: absolute;
  left: 28%;
  
}

.line2{
  right: 35.5%;
  position: absolute;
}

@media (max-width: 768px ) {

.line1, .line2{
 transform: rotate(90deg);
  position: relative
}
}
</style>