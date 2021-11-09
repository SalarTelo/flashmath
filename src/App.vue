<template>
  <div id="app">

  <Landingpage></Landingpage>
  <Operatorpage></Operatorpage>
  <Game></Game>
  </div>
</template>

<script>

import Game from '@/components/Game.vue';
import Landingpage from "@/components/landingpage";
import Operatorpage from "@/components/operatorpage";


export default {
  name: 'App',

  components: {
    Game,
    Landingpage,
    Operatorpage
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
