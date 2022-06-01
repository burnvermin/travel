<template>
  <div class="container">
    <mq-layout mq="phone">
      <div v-if="intro" class="signIn">
          <div class="logIn">
            <img v-bind:src="images.bgOne" alt="image" id="bgOne">
            <img v-bind:src="images.overlay" alt="image" id="overlay">
            <img v-bind:src="images.logo" alt="image" id="logo">
            <p id="moto">To space and back safely</p>
            <div class="signinBtn" @click="showIntro()">
              <i class="fa-brands fa-apple"></i>
              <p>Continue with  Apple ID</p>
            </div>
            <div class="signinBtnTwo" @click="showIntro()">
              <i class="fa-brands fa-twitter"></i>
              <p>Login using Twitter</p>
            </div>
            <p id="registerText" @click="showIntro()">DON'T HAVE AN ACCOUNT? <SPAN>REGISTER</SPAN></p>
          </div>
      </div>

      <div v-else class="intro">
        <div class="container-03">
            <img v-bind:src="images.Building" alt="Building" id="Building">
            <div class="texts">
              <h2>Book outworld hotels and find places</h2>
              <p>Plan on staying longer? Book hotels, Premium listing and other deals at outworld planets.</p>
            </div>
            <h4 id="skip" ><router-link :to="router" style="text-decoration: none; color: #7B40FF;">Complete</router-link></h4>
        </div>
        <div class="container-02">
            <img v-bind:src="images.vrWoman" alt="vrWoman" id="vrWoman">
            <div class="texts">
              <h2>Explore worlds in virtual reality</h2>
              <p>Visit many worlds and universes from your couch using your VR headset. Experience the real stuff</p>
            </div>
            <h4 id="skip" @click="skip02()">Skip</h4>
        </div>
        <div class="container-01">
            <img v-bind:src="images.planets" alt="planets" id="planets">
            <div class="texts">
              <h2>Travel to the outworld destination</h2>
              <p>Travel to outworld universes from our galaxy and beyond. See new places and feel the adventure</p>
            </div>
            <h4 id="skip" @click="skip01()">Skip</h4>
        </div>

        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>

        <div class="slider skip01">
          <div class="rect1"></div>
          <div class="rect2"></div>
        </div>
      </div>
    </mq-layout>

  </div>
</template>

<script>

import logo from '../assets/images/wp/logo.png'
import firstBG from '../assets/images/wp/firstBG.png'
import overlay from '../assets/images/wp/overlay.png'
import planets from '../assets/images/wp/planets.png'
import vrWoman from '../assets/images/wp/vrWoman.png'
import Building from '../assets/images/wp/Building.png'

export default {
  props: {

  },

  data () {
    return {
      intro: true,
      images: {
        logo: logo,
        overlay: overlay,
        bgOne: firstBG,
        planets: planets,
        vrWoman: vrWoman,
        Building: Building
      },
      router: '/home'

    }
  },

  computed: {

  },

  mounted: function () {

  },

  methods: {
    showIntro () {
      this.intro = false
    },
    skip01 () {
      document.querySelector('.container-01').style.display = 'none'
      document.querySelector('.slider').classList.remove('skip01')
      document.querySelector('.slider').classList.add('skip02')
    },
    skip02 () {
      document.querySelector('.container-02').style.display = 'none'
      document.querySelector('.slider').classList.remove('skip02')
    }

  }

}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  .signIn {
    .logIn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      #bgOne {
        width: 100%;
        height: 65vh;
      }
      #overlay {
        position: absolute;
        width: 100%;
        height: 65vh;
        top: 0;
        opacity: 1;
        fill: 1;
        z-index: 1;
      }
      #logo {
        position: absolute;
        top: 25%;
        z-index: 1;
      }
      #moto {
        position: absolute;
        top: 30%;
        z-index: 2;
        color: white;
      }
      .signinBtn {
        position: relative;
        padding: 2px 40px;
        cursor: pointer;
        background-color: #D2D7DC;
        display: flex;
        border-radius: 5px;
        margin-top: -8%;
        z-index: 1;
        i {
          font-size: 30px;
          padding: 8px 10px;
        }
      }
      .signinBtnTwo {
        position: relative;
        padding: 2px 50px;
        cursor: pointer;
        background-color: #1DA1F2;
        color: white;
        display: flex;
        border-radius: 5px;
        margin-top: 5%;
        z-index: 1;
        i {
          font-size: 30px;
          color: white;
          padding: 8px 10px;
        }
      }
      #registerText {
        margin-top: 10%;
        color: #BAC0C5;
        cursor: pointer;
        font-size: 12px;
        span {
          color: black;
        }
      }
    }
  }
  .intro {
    display: flex;
    flex-direction: column;
    h4 {
      cursor: pointer;
    }
    .container-01 {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      #planets,#vrWoman,#Building {
        width: 100%;
        height: 60vh;
      }
      .texts {
        width: 80%;
        margin: auto;
        margin-top: 5%;
        text-align: center;
        padding: 5px;
        background-color: #fff;
        p {
          font-size: 18px;
        }
      }
      h4 {
        margin-top: 15%;
        padding: 0px 20px;
        background-color: #fff;
      }
    }
    .container-02 {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      #planets,#vrWoman,#Building {
        width: 100%;
        height: 60vh;
      }
      .texts {
        width: 80%;
        margin: auto;
        margin-top: 5%;
        text-align: center;
        padding: 5px;
        background-color: #fff;
        p {
          font-size: 18px;
        }
      }
      h4 {
        margin-top: 15%;
        padding: 0px 20px;
        background-color: #fff;
      }
    }
    .container-03 {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      #planets,#vrWoman,#Building {
        width: 100%;
        height: 60vh;
      }
      .texts {
        width: 80%;
        margin: auto;
        margin-top: 5%;
        text-align: center;
        padding: 5px;
        background-color: #fff;
        p {
          font-size: 18px;
        }
      }
      h4 {
        margin-top: 15%;
        padding: 0px 20px;
        background-color: #fff;
      }
    }
    .circle1 {
        position: absolute;
        height: 7px;
        width: 7px;
        background-color: #D2D7DC;
        top: 90%;
        left: 44%;
        border-radius: 15px;
        z-index: -1;
    }
    .circle2 {
        position: absolute;
        height: 7px;
        width: 7px;
        background-color: #D2D7DC;
        top: 90%;
        left: 47%;
        border-radius: 15px;
        z-index: -1;
    }
    .circle3 {
        position: absolute;
        height: 7px;
        width: 7px;
        background-color: #D2D7DC;
        top: 90%;
        left: 50%;
        border-radius: 15px;
        z-index: -1;
    }
    .circle4 {
        position: absolute;
        height: 7px;
        width: 7px;
        background-color: #D2D7DC;
        top: 90%;
        left: 53%;
        border-radius: 15px;
        z-index: -1;
    }
    .slider {
      .rect1 {
        position: absolute;
        height: 7px;
        width: 15px;
        background-color: #7B40FF;
        top: 90%;
        left: 50%;
        border-radius: 15px;
      }
      .rect2 {
        position: absolute;
        height: 7px;
        width: 15px;
        background-color: #D2D7DC;
        top: 90%;
        left: 51.5%;
        border-radius: 15px;
        z-index: -1;
      }
    }
    .slider.skip01 {
      .rect1 {
        position: absolute;
        height: 7px;
        width: 15px;
        background-color: #7B40FF;
        top: 90%;
        left: 44%;
        border-radius: 15px;
      }
      .rect2 {
        position: absolute;
        height: 7px;
        width: 15px;
        background-color: #D2D7DC;
        top: 90%;
        left: 45.5%;
        border-radius: 15px;
        z-index: -1;
      }
    }
    .slider.skip02 {
      .rect1 {
        position: absolute;
        height: 7px;
        width: 15px;
        background-color: #7B40FF;
        top: 90%;
        left: 47%;
        border-radius: 15px;
      }
      .rect2 {
        position: absolute;
        height: 7px;
        width: 15px;
        background-color: #D2D7DC;
        top: 90%;
        left: 48.5%;
        border-radius: 15px;
        z-index: -1;
      }
    }
  }
}
</style>
