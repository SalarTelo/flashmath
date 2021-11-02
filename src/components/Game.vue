<template>
  <div class="background">
    <div class="question-box" v-bind:class="{ 'answer-correct': state===1, 'answer-incorrect':  state===2}">
      <div class="question-counter">
        #{{ currentQuestion.index + 1 }}
      </div>
      <div class="question-section">
        {{ currentQuestion.question }}=?
      </div>
    </div>

    <div class="answer-boxes">
      <div class="upper-box">
        <div class="button  red-button" v-on:click="button1Click">
          {{ buttonData[0] }}
        </div>
        <div class="button green-button" v-on:click="button2Click">
          {{ buttonData[1] }}
        </div>

      </div>
      <div class="lower-box">

        <div class="button blue-button" v-on:click="button3Click">
          {{ buttonData[2] }}
        </div>
        <div class="button yellow-button" v-on:click="button4Click">
          {{ buttonData[3] }}
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
        {question: "6+2", answer: "8"}
      ],
      currentQuestion: {
        index: 0,
        question: '2+2',
        answer: '4'
      },
      buttonData: [
        0,
        0,
        0,
        0
      ],
      state: 0,
    }
  },
  methods: {

    getState() {
      if (this.state === 0)
        return "";

      else if (this.state === 1)
        return "answer-correct";

      else if (this.state === 2)
        return "answer-incorrect";
    },
    updateQuestion() {

      //Get a random number between 0 and size of the question-database
      let questionIndex = Math.floor(Math.random() * this.database.length)
      console.log("RANDOM QUESTION INDEX: " + questionIndex);

      //Set the current questions values.
      this.currentQuestion.question = this.database[questionIndex].question;
      this.currentQuestion.answer = this.database[questionIndex].answer;

      //Get a random button to display the real answer
      let randomButtonIndex = Math.floor(Math.random() * 4);
      this.currentQuestion.index = randomButtonIndex;

      for (let i = 0; i < 4; i++) {

        //If the current index = the random button that is supposed to display the REAL answer
        //Set it's values to the correct answer.
        if (i === randomButtonIndex) {
          this.buttonData[i] = this.currentQuestion.answer;
        }

        //If the button isn't the button that is supposed to display the REAL answer
        //Display a random number
        else {
          //TODO: fix this shit.
          this.buttonData[i] = Math.floor(Math.random() * 10);
        }
      }

    },

    onCorrect() {
      this.state = 1;
    },
    onInCorrect() {
      this.state = 2;
    },
    button1Click() {
      if (this.currentQuestion.index === 0)
        this.onCorrect();
      else
        this.onInCorrect();
    },
    button2Click() {
      if (this.currentQuestion.index === 1)
        this.onCorrect();
      else
        this.onInCorrect();
    },
    button3Click() {
      if (this.currentQuestion.index === 2)
        this.onCorrect();
      else
        this.onInCorrect();
    },
    button4Click() {
      if (this.currentQuestion.index === 3)
        this.onCorrect();
      else
        this.onInCorrect();
    }

  },
  mounted() {
    this.updateQuestion();
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
  flex-direction: column;
}
.question-box {
  border-radius: 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 465px;
  width: 870px;

  box-shadow: 0 2px 40px 5px rgba(0, 0, 0, 0.25);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  user-select: none;
}


/* TEMPORARY */
.answer-correct {
  background-color: #69EE7E;
}
.answer-incorrect {
  background-color: #FA6666;
}

.question-counter {
  font-family: "Comic Sans MS", sans-serif;
  font-size: 64px;
  font-weight: bold;
  color: #656565;
}
.question-section {
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

.answer-boxes {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  user-select: none;
}

.button {

  border-radius: 22px;
  background-color: #FA6666;

  display: flex;
  flex-direction: column;

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
  height: 120px;
  width: 400px;
}

.button:active {
  background-color: #2c3e50;
  height: 145px;
  width: 405px;
}

.red-button {
  background-color: #FA6666;
}

.green-button {
  background-color: #69EE7E;
}

.blue-button {
  background-color: #6BB3E8;
}

.yellow-button {
  background-color: #F4E072;
}

.upper-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.lower-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

</style>