<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Side bar -->
      <div class="col-md-2 bg-white ">
      <div class="text-center sidebar bg-white px-3">
        <div class="mb-4 d-none d-block d-md-block ">
          <img src="@/assets/images/icon/StudyBudFullLogo.png" />
        </div>
 
        <ul class="d-flex  flex-column list-unstyled" style="height:84vh;">
          <li>
            <router-link to="/admin" class="d-flex text-decoration-none">
              <div class="w-25">
                <img src="@/assets/images/icon/dashboard.png" class="icon" />
              </div>
              <div>Overview</div>
            </router-link>
          </li>

          <li>
            <router-link to="/student" class="d-flex text-decoration-none">
              <div class="w-25 text-left">
                <img src="@/assets/images/icon/student.png" class="icon" />
              </div>
              <div>Student</div>
            </router-link>
          </li>

          <li>
            <router-link to="/contact" class="d-flex text-decoration-none">
              <div class="w-25">
                <img src="@/assets/images/icon/contacts.png" class="icon" />
              </div>
              <div>Contact</div>
            </router-link>
          </li>

          <li>
            <router-link to="/courses" class="d-flex text-decoration-none">
              <div class="w-25">
                <img src="@/assets/images/icon/course.png" class="icon" />
              </div>
              <div>Courses</div>
            </router-link>
          </li>

          <li>
            <router-link to="/groups" class="d-flex text-decoration-none">
              <div class="w-25">
                <img src="@/assets/images/icon/groups.png" class="icon" />
              </div>
              <div>Groups</div>
            </router-link>
          </li>
           <li class="mt-auto">
            <router-link to="/settings" class="d-flex text-decoration-none">
              <div class="w-25">
                <img src="@/assets/images/icon/setting.png" class="icon" />
              </div>
              <div>Settings</div>
            </router-link>
          </li>
        </ul>
    
      </div>
      </div>

      <div class="col-md-10 p-4 float-right">
        <!-- header -->
        <div class="d-flex justify-content-between align-items-center">
            <div class="input-group search_bar w-50" >
                <input type="search" id="form1" class="search_form form-control" placeholder="Search" />
              <button type="button" class="btn search_btn">
                  <img src="@/assets/images/icon/search.png"/>
              </button>
          </div>
          <div class="user_profile d-flex align-items-center">
            <img src="@/assets/images/icon/Notification.png" />
            <div
              class="profile mx-3"
              :style="{ backgroundImage: `url('${userData.icon}')` }"
            ></div>
          </div>
        </div>
         <!-- main content -->
      <div class="main_content">
        <router-view />
      </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        icon: require("@/assets/images/user/user_icon.jpeg"),
      },
    };
  },
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  /* min-width: 10rem; */
  /* max-width: 10rem; */
  /* width: 10rem; */
  padding: 3% 0% 0% 2%;
  position: fixed;
  width:13rem;
  z-index: 1;
}
.sidebar .icon {
  margin-right: 20%;
}
.router-link-exact-active {
  background-color: #0d41e1;
  padding: 5%;
  border-radius: 10px;
  color: #fff;
}
.sidebar li {
  margin-bottom: 5%;
}
.sidebar a {
  padding: 5%;
  border-radius: 10px;
}
.sidebar a:hover {
  transition: all 1s;
  background-color: #d9d3f3;
  padding: 5%;
  border-radius: 10px;
  color: #fff;
}
.profile {
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 5.36533px 10.7307px rgba(28, 37, 44, 0.08);
}
.search_btn, .search_form{
    border: 0;
    background-color: #EBEBF0;
     outline: none;
box-shadow:none !important;
color:#89898b;
}
.search_form:focus{
    background-color: #EBEBF0;
}

.settings{
    position:relative; 
    bottom:0
}
</style>