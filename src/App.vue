<template>
  <div id="app">

    <!--Game></Game-->
    <landingpage></landingpage>
  </div>
</template>

<script>

/*import Game from '@/components/Game.vue';*/
import Landingpage from "@/components/landingpage";


export default {
  name: 'App',

  components: {
    Landingpage,
    /*Game*/

  }
}
</script>

<style>


body {
  margin: 0;
}

#app {
  font-family: "Comic Sans MS", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

}
</style>
