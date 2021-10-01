<template>
  <div id="app">
   <app-header/>
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
@media (min-width: 320px) and (max-width: 812px) {
.inner {
  color: #1698df;
}
}
</style>
