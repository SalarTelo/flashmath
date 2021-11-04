<template>
  <div class="background">

    <div class="button-container">
      <div class="left-section">
        <div class="button  left-button">+</div>
        <div class="progressbar left-progressbar">
          <div class="left-progress-fill"></div>
          <span class="text-fill">25%</span>
        </div>
      </div>
      <div class="right-section">
        <div class="button  right-button">-</div>
        <div class="progressbar right-progressbar">
          <div class="right-progress-fill"></div>
          <span class="text-fill">25%</span>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "operatorpage"
}
</script>

<style scoped>

.background {
  background-color: #BBBAFF;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.left-section {
  margin-right: 20px;
}
.right-section{
  margin-left: 20px;
}
.button {
  border-radius: 40px;
  height: 320px;
  width: 320px;

  display:flex;
  justify-content: center;
  align-items: center;

  font-family: "Comic Sans MS", sans-serif;
  font-size: 170px;
  font-weight: bold;
  color: #ffffff;

  cursor: pointer;
  box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.25);
}

.left-button {
  background-color: #ADD162;
}

.right-button {
  background-color: #D16262;
}

.progressbar{
  width: 100%;
  height: 20px;
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
  box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.25);
}
.left-progressbar {
  background-color: #686868;
}

.left-progress-fill {
  width: 25%;
  height: 100%;
  background-color: #ADD162;
  border-radius: 10px;
}

.text-fill {
  position: absolute;
  top: 50%;
  margin-top: 20px;
  left: 32%;
  user-select: none;
  font-family: "Comic Sans MS", sans-serif;
  font-size: 64px;
  color:  #686868;
  font-weight: bold;

}

.right-progressbar {
  background-color: #686868;
}

.right-progress-fill {
  width: 80%;
  height: 100%;
  background-color: #D16262;
  border-radius: 10px;
 }

.button-container {
  display: flex;
  flex-direction: row;

}
</style>