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
            <div class="work_node work_node_1 mx-auto mb-5">
              <img src="@/assets/images/icon/search.png" />
            </div>
            <h4>Sugn Up</h4>
            <small>
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
            <div class="work_node work_node_2 mx-auto mb-5">
              <img src="@/assets/images/icon/hand.png" />
            </div>
            <h4>Find a mentor/Pal</h4>
            <small>
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
            <div class="work_node work_node_3 mx-auto mb-5">
              <img src="@/assets/images/icon/office.png" />
            </div>
            <h4>Start Studying</h4>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime
              architecto, quam alias qui, minima minus quas ipsum perspiciatis
              cum
            </small>
          </div>
        </b-col>
      </b-row>
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
  /* box-shadow: 0px 0% 2px 2px #4DDFFD; */
  box-shadow: 0px 0% 20px 2px black;
}
.work_node_2 {
  background-color: #0063F7;
}
.work_node_3 {
  background-color: #FF8800;
  box-shadow: 10px 0px 9px -23px #F2B8EC;
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

@media (max-width: 768px ) {

.line1{
 transform: rotate(90deg)
}
}

.line2{
  right: 35.5%;
  position: absolute;
}
</style>