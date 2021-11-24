<template>
  <div id="app">
    <transition name="page-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>


export default {
  async created() {
   await this.$store.dispatch("loadQuestionDB");
   await this.$store.dispatch("loadUserDB");
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css';

body {
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: "Comic Sans MS", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.page{
  position: absolute;
  width: 100%;
}
.page-transition{
  transition: 0.6s;
}

</style>
