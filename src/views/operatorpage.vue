<template>
  <div class="background page">
    <div class="background-visuals">

      <svg width="1052" height="361" class="bottom-right-figure" viewBox="0 0 1052 361" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1115.35 81.6056C910.5 477.44 288.5 298 0.500016 362C160.606 375.845 277.5 514.5 431.968 522.979C584.797 531.368 864.617 540.792 1071.99 547.776L1078.64 548C1170.54 292.117 1256.74 -191.607 1115.35 81.6056Z"
            fill="blue"/>
      </svg>

      <svg width="597" height="422" class="top-left-figure" viewBox="0 0 597 422" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M-163.124 353C-40.7237 112.2 394.21 -11 596.376 -42.5C493.876 -56.3333 285.976 -84.8 274.376 -88C262.776 -91.2 -6.45708 -106 -139.624 -113C-198.457 142.667 -285.524 593.8 -163.124 353Z"
            fill="blue"/>
      </svg>

      <div class="rings-container">

        <svg width="149" height="149" class="background-ring" style="left: 25%; top: 20%" viewBox="0 0 149 149"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="lightblue" stroke-opacity="0.7" stroke-width="22"/>
        </svg>

        <svg width="149" height="149" class="background-ring" style="left: 80%; top: 10%" viewBox="0 0 149 149"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="pink" stroke-opacity="0.7" stroke-width="22"/>
        </svg>

        <svg width="149" height="149" class="background-ring" style="left: 10%; top: 80%" viewBox="0 0 149 149"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="#4DAFCE" stroke-opacity="0.7" stroke-width="22"/>
        </svg>

        <svg width="149" height="149" class="background-ring" style="right: 10%; top: 60%" viewBox="0 0 149 149"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="#7C79ED" stroke-opacity="0.7" stroke-width="22"/>
        </svg>

        <svg width="149" height="149" class="background-ring" style="left: 45%; top: 2%" viewBox="0 0 149 149"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="blue" stroke-opacity="0.7" stroke-width="22"/>
        </svg>

        <svg width="169" height="169" class="background-ring" style="right: 30%; top: 80%" viewBox="0 0 149 149"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="lightgreen" stroke-opacity="0.7" stroke-width="22"/>
        </svg>
      </div>
    </div>

    <router-link to="/">

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
    </router-link>

    <div class="content">
      <div class="left-section">
        <div @click="SetQuestionCategory(0)">
          <div class="button-container">
            <div class="button left-button">
              +
            </div>
          </div>
        </div>
        <div class="progressbar left-progressbar">
          <div class="left-progress-fill" :style="GetFill(GetPlusPercentage * 100)"></div>
          <span class="text-fill">{{GetPlusPercentage * 100}}%</span>
        </div>
      </div>
      <div class="right-section">
        <div @click="SetQuestionCategory(1)">
          <div class="button-container">
            <div class="button right-button">
              -
            </div>
          </div>
        </div>
        <div class="progressbar right-progressbar">
          <div class="right-progress-fill" :style="GetFill(GetMinusPercentage * 100)"></div>
          <span class="text-fill">{{GetMinusPercentage * 100}}%</span>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "operatorpage",
  computed: {
    GetMinusPercentage() {
      let allMinusQuestion = this.$store.getters.allMinusQuestions;
      let answeredQuestions = this.$store.getters.allMinusAnsweredQuestions;

      return Math.round((answeredQuestions.length / allMinusQuestion.length) * 100) / 100;
    },
    GetPlusPercentage() {
      let allPlusQuestions = this.$store.getters.allPlusQuestions;
      let answeredQuestions = this.$store.getters.allPlusAnsweredQuestions;
      return Math.round((answeredQuestions.length / allPlusQuestions.length) * 100) / 100;
    },
  },
  methods: {
    SetQuestionCategory(category){
      this.$store.dispatch("setCurrentCategory", category)
      this.$router.push("/quiz");
    },
    GetFill(percentage){
      return {
        "width": (percentage) + "%",
      };
    }
  }
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

.right-section {
  margin-left: 20px;
}

.button-container {
  height: 320px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  position: relative;
  border-radius: 40px;
  height: 300px;
  width: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Comic Sans MS", sans-serif;
  font-size: 170px;
  font-weight: bold;
  color: #ffffff;
  transition: 0.1s;
  cursor: pointer;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
}

.button:hover {
  height: 100%;
  width: 100%;
}

.left-button {
  background-color: #ADD162;
}

.right-button {
  background-color: #D16262;
}

.progressbar {
  width: 100%;
  height: 20px;
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
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
  color: #686868;
  font-weight: bold;

}

.right-progressbar {
  background-color: #686868;
}

.right-progress-fill {

  height: 100%;
  background-color: #D16262;
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: row;

}

.background-ring {
  position: absolute;
  z-index: 0;
}

.top-left-figure {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.bottom-right-figure {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
}

.arrow-back {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 3;
  width: 113px;
  height: 59px;
  cursor: pointer;
}

.arrow-back:hover {
  width: 119px;
  height: 63px;
}

.arrow-back:active {
  width: 121px;
  height: 65px;
}


@media only screen and (max-width: 375px) {

  .button {
    border-radius: 30px;
    height: 200px;
    width: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 120px;
  }

  .text-fill {
    position: absolute;
    font-size: 30px;
  }

  .background-ring {
    display: none;
  }

  .button-container {
    flex-direction: column;
    padding-bottom: 20px;
    margin-top: 40px;
  }

  .left-section {
    margin-right: 0;
    margin-bottom: 60px;
  }

  .right-section {
    margin-left: 0;
  }
}

@media only screen and (min-width: 376px) and (max-width: 767px) {

  .text-fill {
    position: absolute;
    top: 50%;
    margin-top: 20px;
    left: 32%;
    font-size: 30px;
  }

  .background-ring {
    position: absolute;
  }

  .button {
    border-radius: 30px;
    height: 180px;
    width: 180px;
    font-size: 130px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .button {
    border-radius: 40px;
    height: 320px;
    width: 320px;
    flex-direction: column;
    font-size: 170px;
  }

  .text-fill {
    position: absolute;
    font-size: 75px;
  }

}


</style>
