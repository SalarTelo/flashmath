<template>
  <div class="container page" >

    <div class="background-visuals">

      <svg width="1052" height="361" class="bottom-right-figure" viewBox="0 0 1052 361" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1115.35 81.6056C910.5 477.44 288.5 298 0.500016 362C160.606 375.845 277.5 514.5 431.968 522.979C584.797 531.368 864.617 540.792 1071.99 547.776L1078.64 548C1170.54 292.117 1256.74 -191.607 1115.35 81.6056Z" fill="#A68ECD"/>
      </svg>

      <svg width="597" height="422" class="top-left-figure" viewBox="0 0 597 422" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-163.124 353C-40.7237 112.2 394.21 -11 596.376 -42.5C493.876 -56.3333 285.976 -84.8 274.376 -88C262.776 -91.2 -6.45708 -106 -139.624 -113C-198.457 142.667 -285.524 593.8 -163.124 353Z" fill="#BAD162"/>
      </svg>

      <div class="rings-container">
        <svg width="149" height="149" class="background-ring" style="left: 25%; top: 20%" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="#7C79ED" stroke-opacity="0.3" stroke-width="22"/>
        </svg>

        <svg width="149" height="149" class="background-ring" style="left: 80%; top: 10%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="#D16262" stroke-opacity="0.3" stroke-width="22"/>
        </svg>

        <svg width="149" height="149" class="background-ring" style="left: 10%; top: 80%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="#6BB3E8" stroke-opacity="0.3" stroke-width="22"/>
        </svg>

        <svg width="149" height="149" class="background-ring" style="right: 10%; top: 60%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="#7C79ED" stroke-opacity="0.3" stroke-width="22"/>
        </svg>

        <svg width="149" height="149" class="background-ring" style="left: 45%; top: 2%"  viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="74.5" cy="74.5" r="63.5" stroke="#F5DF67" stroke-opacity="0.3" stroke-width="22"/>
        </svg>

      </div>
    </div>

    <div class="content-container">

      <div :key="user.id" v-for="user in getUsers" class="user-container">
        <router-link  class="user-container" @click.native="setCurrentUser(user)" to="/operator">
          <img v-bind:src="getUserIcon(user.id)[0]" class="button"  :alt=getUserIcon(user.id)[1]>
        </router-link >
        <div class="user-heart-container" v-on:click="deleteUser(user.id)">
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
          <div class="heart-text">x</div>
        </div>
        <div class="button-text">{{user.Name}}</div>
      </div >



    </div>

    <div class="account-settings">
      <div>
        <div style="position: absolute; left: -18%; bottom: 13%; color: white; z-index: 99; ">+</div>
        <svg  style="height: 90px; width: 80px; position: absolute; left: -25%; bottom: -20%" viewBox="0 0 91 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        Add an account
    </div>
  </div>
</template>

<script>
export default {
  name: "landingpage",
  computed: {
    getUsers() {
      return JSON.parse(JSON.stringify(this.$store.getters.allUsers))
    },

  },
  data(){
    //THIS IS STUPID
    return{
      donkey: require('@/assets/img/edited/donkeh.png'),
      penguin: require('@/assets/img/edited/penguin.png'),
      dino: require('@/assets/img/edited/dino.png')
    }
  },
  methods: {
    setCurrentUser(user){
      this.$store.dispatch("setCurrentUser", user);
      console.log(this.$store.state.currentUser);
    },
    getUserIcon(index){
      index = index -1;
      if(index < 0 || index >= 3){
        index = Math.floor(Math.random()*3)
      }
      if(index === 0)
        return [this.donkey, "donkey"];
      if(index === 1)
        return [this.penguin, "penguin"];
      if(index === 2)
        return [this.dino, "dino"];

      return null;
    },
    deleteUser(id){
      this.$store.dispatch("removeUser", id);
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  background-color: #FFBAE6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-container{
  display: flex;
  justify-content: space-evenly;
  align-items: center;

}

.button{
  width: 256px;
  height: 256px;
  background: gray;
  border-radius: 40px;

  transition-duration: 0.1s;

  cursor: pointer;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
}
.button:hover{

  width: 280px;
  height: 280px;
}
.button:active{
  width: 290px;
  height: 290px;
}
.button-text{
  font-size: 48px;
  font-weight: bold;
  color: #686868;
  user-select: none;
  text-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
}

.user-heart-container {
  position: absolute;
  right: 0;
  top: 0;
  width:91px;
  height:80px;
  cursor: pointer;
  transition: 0.1s;
  user-select: none;
}

.user-heart-container:hover{
  width:100px;
  height:90px;
}

.user-heart-container:active{
  width:110px;
  height:100px;
}

.user-heart-container:hover .heart-text{
  top: -1%;
}

.heart-text{
  transition: 0.1s;
  font-size: 45px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: -10%;
  right: 35%;
}

.user-container {
  position: relative;
  text-decoration: none;
  padding: 20px;
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

.account-settings {
  font-size: 48px;
  font-weight: bold;
  color: #686868;
  user-select: none;


  position: absolute;
  bottom: 10%;

  transition: font-size 0.1s;

  cursor: pointer;
  text-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
}

.account-settings:hover{
  font-size: 50px;
}
.account-settings:active{
  transition: font-size 0.02s;
  font-size: 55px;
}

.background-ring {
  position: absolute;
}
</style>
