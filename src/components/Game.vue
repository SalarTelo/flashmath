<template>
  <div class="background">
    <div class="question-box">
      <div class="question-counter">
        #{{currentQuestion.index+1}}
      </div>
      <div class="question-section">
        {{currentQuestion.question}}=?
      </div>
    </div>

    <div class="answer-boxes">
      <div class="upper-box">
        <div class="button  red-button" v-on:click="button1Click">
          5
        </div>
        <div class="button green-button" v-on:click="button2Click">
          9
        </div>

      </div>
    <div class="lower-box">

      <div class="button blue-button" v-on:click="button3Click">
            10
      </div>
      <div class="button yellow-button" v-on:click="button4Click">
            2
      </div>
    </div>


    </div>

  </div>

</template>


<script>
export default {

  name: "Game",
  data() {
    return {
      database: [
        {question: "2+2", answer: "4"},
        {question: "1+3", answer: "4"},
        {question: "2+5", answer: "7"},
        {question: "6+2", answer: "8"},
      ],
      currentQuestion: {
        index: 0,
        question: '2+2',
        answer: '4'
      }
    }
  },
  methods: {

    button1Click() {
      console.log("Button 1");
    },
    button2Click() {
      console.log("Button 2");
    },
    button3Click() {
      console.log("Button 3");
    },
    button4Click() {
      console.log("Button 4");
    }
  }
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

  box-shadow: 0 2px 40px 5px rgba(0, 0, 0, 0.25);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

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
  display: flex;
  flex-direction:column;

  justify-content: center;
  align-items: center;

  user-select: none;
}

.button{

  border-radius: 22px;
  background-color: #FA6666;

  display: flex;
  flex-direction:column;

  justify-content: center;
  align-items: center;

  height: 107px;
  width: 391px;

  margin-left: 47px;
  margin-right: 47px;

  transition: 0.2s, background-color 0.1s;

  font-family: "Comic Sans MS", sans-serif;
  font-size: 64px;
  font-weight: bold;
  color: white;

  cursor: pointer;

  box-shadow: 0 2px 40px 5px rgba(0, 0, 0, 0.25);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

}
.button:hover {
  height: 140px;
  width: 400px;
}
.button:active{
  background-color: #2c3e50;
  height: 145px;
  width: 405px;
}

.red-button{
  background-color: #FA6666;
}
.green-button{
  background-color: #69EE7E;
}
.blue-button{
  background-color: #6BB3E8;
}
.yellow-button{
  background-color: #F4E072;
}

.upper-box{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.lower-box{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

</style>