<template>
  <div id="app">
   <app-header/>
    <router-view/>
   <app-footer/>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
body{
  overflow-x:hidden;
  width: 100vw;
}
.push-down{
  padding-top:20vh
}
</style>
