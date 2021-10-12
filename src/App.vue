<template>
  <div id="app">
   
    <router-view/>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
body, html{
  overflow-x:hidden;
}
body{
  margin:0;
}
.push-down{
  padding-top:20vh
}
.inner {
  color: #0a5983;
}
@media (min-width: 320px) and (max-width: 812px) {
.inner {
  color: #0d41e1;
}
}
</style>
