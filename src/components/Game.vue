<template>
  <div class="background">
    <div class="question-box">
      <div class="question-counter">
        #24
      </div>
      <div class="question-section">
        1+1=?
      </div>
    </div>

    <div class="answer-boxes">
      <div class="upper-box">

        <div class="button1">
          5
        </div>
        <div class="button1">
          9
        </div>

      </div>
      <div class="lower-box">

        <div class="button1">
              10
        </div>
        <div class="button1">
              2
        </div>
      </div>


    </div>

  </div>

</template>

<script>
export default {
  name: "Game"
}
</script>

<style scoped>

.background {
  align-items: center;
  background-color: #f1b9a1;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction:column;
}

.question-box {
  border-radius: 40px;
  background-color: white;
  display: flex;
  flex-direction:column;
  height: 465px;
  width: 870px;

  user-select: none;
}

.question-counter {
  font-family: "Comic Sans MS", sans-serif;
  font-size: 64px;
  font-weight: bold;
  color: #656565;
}

.question-section{
  font-family: "Comic Sans MS", sans-serif;
  font-size: 144px;
  font-weight: bold;
  color: #656565;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  height: 100%;
}

.answer-boxes{
  border-radius: 40px;
  display: flex;
  flex-direction:column;
  height: 465px;
  width: 870px;

  user-select: none;
}

.button1{
  border-radius: 40px;
  background-color: #FA6666;
  display: flex;
  flex-direction:column;
  height: 107px;
  width: 391px;
  margin-left: 46.5px;
  margin-right: 46.5px;

  font-family: "Comic Sans MS", sans-serif;
  font-size: 64px;
  font-weight: bold;
  color: #656565;

}
.upper-box{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.lower-box{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

}

</style>