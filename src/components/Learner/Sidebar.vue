<template>
  <div class="sidebar">
    <div class="settings__actions">
      <!-- Group setting -->

      <div class="group__settings">
        <h3>Groups</h3>
        <img src="../../assets/images/Profile/settings.svg" alt="" />
      </div>
      <!-- Group actions -->
      <div class="actions">
        <div class="search">
          <input type="search" name="search" placeholder="Search Group" />
          <span><i class="fas fa-search"></i></span>
        </div>
        <div class="create__group">
          <button>Create Group</button>
        </div>
        <div class="discover">
          <button>Discover</button>
        </div>
      </div>
    </div>

    <!-- Groups you created -->
    <div class="groups__created">
      <h3>Learning Groups you created</h3>
      <div v-for="(group, index) in groups" :key="index">
        <Groups :group="group" />
      </div>
    </div>

    <!-- Groups you belong to -->
    <div class="groups__belong">
      <h3>Learning Groups you created</h3>
      <div v-for="(group, index) in groupsBelong" :key="index">
        <Groups :group="group" />
      </div>
    </div>
  </div>
</template>

<script>
import HTML5 from "../../assets/images/Groups/html5.svg";
import css from "../../assets/images/Groups/css.jpg";
import php from "../../assets/images/Groups/php.jpg";

// Component
import Groups from "@/components/Learner/Groups.vue";

export default {
  components: {
    Groups,
  },
  data() {
    return {
      groups: [
        {
          icon: HTML5,
          title: "Html5 Fundamentals",
          details: "10 learners present",
        },
        {
          icon: css,
          title: "CSS 3 Core - Flex Box",
          details: "32 learners present",
        },
        {
          icon: php,
          title: "Php and Laravel",
          details: "20 learners present",
        },
      ],
      groupsBelong: [
        {
          icon: HTML5,
          title: "Html5 Fundamentals",
          details: "10 learners present",
        },
        {
          icon: css,
          title: "CSS 3 Core - Flex Box",
          details: "32 learners present",
        },
        {
          icon: php,
          title: "Php and Laravel",
          details: "20 learners present",
        },
        {
          icon: php,
          title: "Php and Laravel",
          details: "20 learners present",
        },
      ],
    };
  },
};
</script>

<style scoped>
.settings__actions,
.groups__created,
.groups__belong {
  border-bottom: 1px solid #ebebf0;
  padding: 20px 20px;
}
.sidebar {
  width: 360px;
  border-right: 1px solid #ebebf0;
}
.group__settings {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #474964;
  display: flex;
  justify-content: space-between;
}
.actions .search input {
  height: 48px;
  margin: 24px 0px;
  background: #ebebf0;
  border-radius: 10px;
  width: 100%;
  border: none;
  padding: 0px 24px;
}
.actions .search input::placeholder {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
}
.actions .search span {
  position: absolute;
  top: 23%;
  font-size: 24px;
  left: 21%;
  color: #999999;
}
.create__group button {
  background: #0d41e1;
  color: #ffffff;
}
.disover button {
  background: #ebebf0;
  color: #0d41e1;
}
.actions button {
  height: 48px;
  width: 100%;
  margin: 0px 0px 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 32px;
  border-radius: 10px;
  border: none;
}

/* Groups created */
.groups__created h3, .groups__belong h3 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin: 20px 0;
  color: #474964;
}
</style>
