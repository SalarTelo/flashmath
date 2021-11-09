<template>
  <div id="app">

    <Game></Game>
    <!--operatorpage></operatorpage-->
  </div>
</template>

<script>

import Game from '@/components/Game.vue';
/*import operatorpage from "@/components/operatorpage";*/


export default {
  name: 'App',

  components: {
    /*operatorpage*/
    Game

  }
}
</script>

<style>


body {
  margin: 0;
}

#app {
  font-family: "Open Sans", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

}
</style>
