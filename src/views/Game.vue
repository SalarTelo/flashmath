<template>
  <div class="background page">

    <div class="rings-container">

      <svg width="149" height="149" class="background-ring"  style="left: 15%; top: 20%" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#7C79ED" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="left: 90%; top: 10%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#A68ECD" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="left: 10%; top: 80%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#4DAFCE" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="right: 10%; top: 60%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="purple" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="left: 30%; top: 2%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#F5DF67" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="left: 60%; top: 15%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="pink" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="169" height="169" class="background-ring" style="right: 70%; top: 60%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="lightgreen" stroke-opacity="0.7" stroke-width="22"/>
      </svg>

    </div>

    <div class="flip-card">
      <div class="flip-card-inner" v-bind:class="{'question-answered' : state !== 0}">
        <div class="flip-card-front" style="color: #656565; text-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);">
          <div class="question-counter">
            #{{ currentQuestion.index + 1 }}
          </div>
          <div class="question-section" style="margin-top: -9%;">
            {{ currentQuestion.question }}=?
          </div>
        </div>
        <div class="flip-card-back" style="text-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);"
             v-bind:class="{ 'question-answered' : state !== 0, 'answer-correct': state===1, 'answer-incorrect':  state===2}">
          <div class="question-section" style="color: white" v-if="state !== 0">
            Svar: {{ currentQuestion.answer }}
          </div>
        </div>
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
    updateQuestion() {

      //Get a random number between 0 and size of the question-database
      let questionIndex = Math.floor(Math.random() * this.database.length)

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
    onAnswer() {
      setTimeout(() => {
        this.state = 0;
        this.updateQuestion();
      }, 2000);
    },
    onCorrect() {
      this.state = 1;
      this.onAnswer();
    },
    onInCorrect() {
      this.state = 2;
      this.onAnswer();
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
    console.log("GAME");
    this.updateQuestion();
  }

}

</script>

<style scoped>

.question-answered {
  transform: rotateY(-180deg);
}


.background {
  background-color: #f1b9a1;
  display: flex;
  height: 100%;

  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
}

.flip-card {
  user-select: none;
  background-color: transparent;
  width: 870px;
  height: 465px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

}


.flip-card-front, .flip-card-back {
  position: absolute;
  border-radius: 22px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 0 2px 40px 5px rgba(0, 0, 0, 0.25);

}

.flip-card-front {
  background-color: #ffffff;
  color: black;
}

.flip-card-back {
  background-color: #ffffff;
  transform: rotateY(180deg);
}


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

.background-ring{
  position: absolute;
}

@media only screen and (max-width: 375px) {

  .question-box {
    border-radius: 40px;
    height: 180px;
    width: 350px;
  }

  .question-section {
    font-size: 65px;
  }

  .button {
    border-radius: 22px;
    height: 53px;
    width: 200px;
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .answer-boxes {
    flex-direction: column;
  }

  .upper-box {
    flex-direction: column;
    margin: 20px 0 10px;
  }

  .lower-box {
    flex-direction: column;
    margin: 0;
  }
}
@media only screen and (min-width: 376px) and (max-width: 767px) {

  .flip-card {
    border-radius: 40px;
    height: 200px;
    width: 370px;
  }
  .question-section {
    font-size: 65px;
  }
  .button {
    border-radius: 22px;
    height: 60px;
    width: 180px;
    font-size: 32px;
    margin: 10px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px){

  .flip-card {
    border-radius: 35px;
    height: 400px;
    width: 700px;
  }
  .question-section {
    font-size: 150px;
  }
  .button{
    border-radius: 20px;
    height: 90px;
    width: 290px;

    margin-left: 47px;
    margin-right: 47px;
  }

}

</style>