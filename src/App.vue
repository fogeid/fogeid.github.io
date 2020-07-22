<template>
  <div id="app">
    <div>
      <profile />
      <midia />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
import Midia from "@/components/Midia.vue";

export default {
  name: "App",
  components: {
    Profile,
    Midia
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");

body {  
  height: 100%;
  padding: 40px 0;
  background-color: #0e0021;
}

#app {
  font-family: "Open Sans", sans-serif;
}

@media (min-width: 992px) {
  #app {
    padding-top: 60px;
  }
}
</style>
