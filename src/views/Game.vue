<template>
  <div class="background page">
  <leave-screen v-if="state === -1"></leave-screen>
    <div class="rings-container">

      <svg width="149" height="149" class="background-ring" style="left: 15%; top: 20%" viewBox="0 0 149 149"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#7C79ED" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="left: 90%; top: 10%" viewBox="0 0 149 149"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#A68ECD" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="left: 10%; top: 80%" viewBox="0 0 149 149"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#4DAFCE" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="right: 10%; top: 60%" viewBox="0 0 149 149"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="purple" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="left: 30%; top: 2%" viewBox="0 0 149 149" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#F5DF67" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="149" height="149" class="background-ring" style="left: 60%; top: 15%" viewBox="0 0 149 149"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="pink" stroke-opacity="0.7" stroke-width="22"/>
      </svg>
      <svg width="169" height="169" class="background-ring" style="right: 70%; top: 60%" viewBox="0 0 149 149"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="lightgreen" stroke-opacity="0.7" stroke-width="22"/>
      </svg>

    </div>

    <div class="user-container" v-on:click="onLeave()">
      <div class="arrow-back">
        <svg viewBox="0 0 113 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_40_38)">
            <path
                d="M42.6116 45.7753V36.548C42.6116 34.4945 44.1626 32.7787 46.2097 32.6165C53.0034 32.0784 67.6647 31.1986 74.673 32.9316C81.5921 34.6425 86.5139 43.7068 88.5791 48.2318C89.2765 49.76 90.7786 50.8061 92.4583 50.8061L104.248 50.8061C106.959 50.8061 108.817 48.191 107.709 45.7173C103.65 36.6538 93.2653 18.5252 74.673 17.0861C60.725 16.0065 52.3381 16.0802 47.6614 16.3533C45.0754 16.5043 42.6116 14.4084 42.6116 11.818L42.6116 4.60314C42.6116 1.32946 38.8937 -0.558003 36.2509 1.37401L5.78838 23.6437C3.49883 25.3175 3.63015 28.7763 6.04002 30.2717L36.5026 49.1741C39.1672 50.8276 42.6116 48.9112 42.6116 45.7753Z"
                fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_40_38" x="0.149002" y="0.595947" width="111.886" height="58.2102"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_38"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_38" result="shape"/>
            </filter>
          </defs>
        </svg>

      </div>

    </div>

    <div class="flip-card">
      <div class="flip-card-inner" v-bind:class="{'question-answered' : state !== 0}">
        <div class="flip-card-front" style="color: #656565; text-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);">
          <div class="question-counter">
            #{{ currentQuestion.id + 1 }}
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
        <div class="button  red-button" v-on:click="buttonClick(0)">
          {{ buttonData[0] }}
        </div>
        <div class="button green-button" v-on:click="buttonClick(1)">
          {{ buttonData[1] }}
        </div>

      </div>
      <div class="lower-box">

        <div class="button blue-button" v-on:click="buttonClick(2)">
          {{ buttonData[2] }}
        </div>
        <div class="button yellow-button" v-on:click="buttonClick(3)">
          {{ buttonData[3] }}
        </div>
      </div>


    </div>

  </div>

</template>


<script>
import LeaveScreen from "@/component/LeaveScreen";
export default {

  name: "Game",
  components: {LeaveScreen},
  computed: {

    getAllQuestions() {
      return JSON.parse(JSON.stringify(this.$store.getters.allQuestions))
    },

  },
  data() {
    return {
      database: [],
      currentQuestion: {
        id: -1,
        question: 'NaN',
        answer: '-1',
        category: -1
      },
      buttonData: [
        -1,
        -1,
        -1,
        -1
      ],
      state: 0,
    }
  },
  methods: {

    updateQuestion() {


      this.database = this.$store.getters.getRelevantQuestions;
      //Get a random number between 0 and size of the question-database
      let questionIndex = Math.floor(Math.random() * this.database.length)

      //Set the current questions values.
      this.currentQuestion.question = this.database[questionIndex].question;
      this.currentQuestion.answer = this.database[questionIndex].answer;
      this.currentQuestion.id = this.database[questionIndex].id;
      this.currentQuestion.category = this.$store.state.questionType;
      //Get a random button to display the real answer
      let randomButtonIndex = Math.floor(Math.random() * 4);
      this.currentQuestion.index = randomButtonIndex;

      let numberList = [-1, -1, -1, -1];
      for (let i = 0; i < 4; i++) {

        //If the current index = the random button that is supposed to display the REAL answer
        //Set it's values to the correct answer.
        if (i === randomButtonIndex) {
          this.buttonData[i] = this.currentQuestion.answer;
        }

            //If the button isn't the button that is supposed to display the REAL answer
        //Display a random number
        else {
          numberList[i] = parseInt(this.currentQuestion.answer);

          let range = (Math.random() * this.currentQuestion.answer) + 2
          let randomNumber = Math.floor(Math.random() * range) + 1;

          while (randomNumber === this.currentQuestion.answer || numberList.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * range) + 3;
          }
          numberList[i] = randomNumber;
          this.buttonData[i] = numberList[i];
        }
      }

    },
    onLeave(){
      this.state = -1;
      setTimeout(() => this.$router.push("/operator"), 1000);
    },
    onAnswer() {
      setTimeout(() => {
        this.state = 0;
        this.updateQuestion();
      }, 2000);
    },
    onCorrect() {
      this.state = 1;
      this.$store.dispatch("addQuestionToList", JSON.parse(JSON.stringify(this.currentQuestion)))
      this.onAnswer();
    },
    onIncorrect() {
      this.state = 2;
      this.onAnswer();
    },
    buttonClick(index) {
      if (this.state === 0) {
        if (this.currentQuestion.index === index)
          this.onCorrect();
        else
          this.onIncorrect();
      }
    },
  },
  async mounted() {
    this.database = []
    this.updateQuestion()
    setInterval(() => {

    }, 1000 * 10)
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
  z-index: 1;
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
  z-index: 1;
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

.background-ring {
  position: absolute;
}

.arrow-back {
  display: block;
  position: absolute;
  left: 10px;
  top: 10px;
  width: 113px;
  height: 59px;
  cursor: pointer;
}

.arrow-back:hover {
  visibility: visible;
  width: 119px;
  height: 63px;
}

.arrow-back:active {
  width: 121px;
  height: 65px;
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

@media only screen and (min-width: 768px) and (max-width: 1024px) {

  .flip-card {
    border-radius: 35px;
    height: 400px;
    width: 700px;
  }

  .question-section {
    font-size: 150px;
  }

  .button {
    border-radius: 20px;
    height: 90px;
    width: 290px;

    margin-left: 47px;
    margin-right: 47px;
  }

}

</style>
