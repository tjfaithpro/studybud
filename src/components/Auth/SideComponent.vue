<template>
  <div class="side__component">
    <div class="images">
      <img
        src="../../assets/images/SideComponents/frame1.svg"
        alt="Frame 1 SVG"
        class="frame1"
      />
      <img
        src="../../assets/images/SideComponents/frame2.svg"
        alt="Frame 2 SVG"
        class="frame2"
      />
      <img
        src="../../assets/images/SideComponents/frame3.svg"
        alt="Frame 3 SVG"
        class="frame3"
      />
      <img
        src="../../assets/images/SideComponents/frame4.svg"
        alt="Frame 4 SVG"
        class="frame4"
      />
      <img
        src="../../assets/images/SideComponents/frame5.svg"
        alt="Frame 5 SVG"
        class="frame5"
      />
      <img
        src="../../assets/images/SideComponents/frame6.svg"
        alt="Frame 6 SVG"
        class="frame6"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.side__component {
  min-height: 100vh;
  background: #272840;
  width: 50%;
  padding: 100px;
  background-image: url("../../assets/images/SideComponents/group.svg"),
    url("../../assets/images/SideComponents/group1.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.images img {
  position: absolute;
}
.images .frame1 {
  left: 19.53%;
  right: 41.25%;
  top: 54.96%;
  bottom: 37.95%;
}
.images .frame2 {
  left: 23.33%;
  right: 37.22%;
  top: 19.74%;
  bottom: 72.55%;
  /* height: 140px; */
}
.images .frame5 {
  left: 3.33%;
  right: 75.56%;
  top: 34.79%;
  bottom: 67.66%;
}
.images .frame4 {
  left: 39.75%;
  right: 12.36%;
  top: 44.07%;
  bottom: 58%;
}
.images .frame3 {
  left: 8.33%;
  right: 70%;
  top: 80.16%;
  bottom: 20.53%;
}
.images .frame6 {
  left: 34.75%;
  right: 21.81%;
  top: 74.74%;
  bottom: 14.56%;
}

@media (min-width: 320px) and (max-width: 812px) {
  .side__component {
  min-height: 20vh;
  
  width: 100%;
  
}
.images .frame5 {

  left: 3.33%;
  right: 35.56%;
  top: 17.79%;
  bottom: 67.66%;
  width:64px;
  height:64px
}
.images .frame4 {
  
  display: none;                                              
}
.images .frame3 {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  
  display: none;
}
.images .frame6 {
  
  display: none;
}
.images .frame1 {
  
  display: none;
}
.images .frame2 {
  left: 73.33%;
  right: 37.22%;
  top: 12.74%;
  bottom: 72.55%;
  /* height: 140px; */
  width: 80px;
  height: 80px
  
}
}
</style>
