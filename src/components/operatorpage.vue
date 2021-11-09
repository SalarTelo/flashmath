<template>
  <div class="background">

    <div class="background-visuals">

      <svg width="1052" height="361" class="bottom-right-figure" viewBox="0 0 1052 361" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1115.35 81.6056C910.5 477.44 288.5 298 0.500016 362C160.606 375.845 277.5 514.5 431.968 522.979C584.797 531.368 864.617 540.792 1071.99 547.776L1078.64 548C1170.54 292.117 1256.74 -191.607 1115.35 81.6056Z" fill="blue"/>
      </svg>

      <svg width="597" height="422" class="top-left-figure" viewBox="0 0 597 422" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-163.124 353C-40.7237 112.2 394.21 -11 596.376 -42.5C493.876 -56.3333 285.976 -84.8 274.376 -88C262.776 -91.2 -6.45708 -106 -139.624 -113C-198.457 142.667 -285.524 593.8 -163.124 353Z" fill="blue"/>
      </svg>

      <div class="rings-container">

      <svg width="149" height="149" class="background-ring"  style="left: 25%; top: 20%" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="lightblue" stroke-opacity="0.7" stroke-width="22"/>
      </svg>

      <svg width="149" height="149" class="background-ring" style="left: 80%; top: 10%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="pink" stroke-opacity="0.7" stroke-width="22"/>
      </svg>

      <svg width="149" height="149" class="background-ring" style="left: 10%; top: 80%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#4DAFCE" stroke-opacity="0.7" stroke-width="22"/>
      </svg>

      <svg width="149" height="149" class="background-ring" style="right: 10%; top: 60%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="#7C79ED" stroke-opacity="0.7" stroke-width="22"/>
      </svg>

      <svg width="149" height="149" class="background-ring" style="left: 45%; top: 2%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="blue" stroke-opacity="0.7" stroke-width="22"/>
      </svg>

      <svg width="169" height="169" class="background-ring" style="right: 30%; top: 80%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74.5" cy="74.5" r="63.5" stroke="lightgreen" stroke-opacity="0.7" stroke-width="22"/>
      </svg>

    </div>
      </div>

    <div class="user-heart-container">
    <svg  viewBox="0 0 91 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_40:10)">
        <path d="M46.7297 4.81173C-24.6648 -17.9456 6.23697 45.9916 46.7294 72C85.0909 47.0753 113.862 -16.862 46.7297 4.81173Z" fill="#CE4D4D"/>
      </g>
      <defs>
        <filter id="filter0_d_40:10" x="0" y="0" width="91" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40:10"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40:10" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>


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
  position: relative;
}

.left-section {
  margin-right: 20px;
}
.right-section{
  margin-left: 20px;
}

.user-heart-container {
  position: absolute;

  right: -15%;
  top: -6%;
  width:91px;
  height:80px;
  cursor: pointer;
  transition: 0.1s;
  user-select: none;
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

.button:hover {
  height: 345px;
  width: 345px;
}

.left-button {
  background-color: #62B6D1;
}

.right-button {
  background-color: #F5DF67;
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
  background-color: #62B6D1;
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
  background-color: #F5DF67;
  border-radius: 10px;
 }

.top-left-figure {
  position: absolute;
  top: 0;
  left: 0;
}
.bottom-right-figure {
  position: absolute;
  bottom: 0;
  right: 0;
}

.button-container {
  display: flex;
  flex-direction: row;

}

.background-ring{
  position: absolute;
}

</style>