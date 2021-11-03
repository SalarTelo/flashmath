<template>
  <div class="background">

      <div class="left-button">
        +
      </div>
      <div class="right-button">
        -
      </div>

  </div>

</template>

<script>
export default {
  name: "operatorpage"
}
</script>

<style scoped>

.background{
  background-color: #BBBAFF;
  height: 100%;
  align-items: center;

  display:flex;
  justify-content: center;
  flex-direction: row;
}

.left-button{
  border-radius: 40px;
  background-color: #ADD162;
  display: flex;
  flex-direction: row;

  justify-content: center;

  margin: 91px;
  padding-bottom: 200px;

  font-family: "Comic Sans MS", sans-serif;
  font-size: 200px;
  font-weight: bold;

  height: 465px;
  width: 870px;


  box-shadow: 0 2px 40px 5px rgba(0, 0, 0, 0.25);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  user-select: none;
}

.right-button{
  border-radius: 40px;
  background-color: #D16262;
  margin: 91px;
  padding-bottom: 200px;

  font-family: "Comic Sans MS", sans-serif;
  font-size: 200px;
  font-weight: bold;

  justify-content: center;

  height: 465px;
  width: 870px;

  box-shadow: 0 2px 40px 5px rgba(0, 0, 0, 0.25);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  user-select: none;
}
</style>