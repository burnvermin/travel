<template>
    <div>
        <div class="device-mq(Phones)">
            <mq-layout mq="phone">
                <div class="container-01">
                    <div class="section-01">
                        <h1 id="h1">Explore</h1>
                        <i class="fa-solid fa-bell"></i>
                        <h5>3</h5>
                        <img v-bind:src="images.DisplayPicture" alt="Display-Picture" id="DisplayPicture">
                        <p>Top travel locations today</p>
                    </div>
                    <div class="section-02" >
                        <div  class="slideContainer">
                            <div v-for="world in images.world" :key="world.id" class="slide">
                                <img v-bind:src="world.img" alt="world" id="world" @click="getActiveWorld(world.id, world.name, world.desc)">
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="slideBottom">
                                <h1 class="planetName">{{ place }}</h1>
                                <p class="planetDesc">{{ desc }}</p>
                            </div>
                            <button> <i class="fa-solid fa-rocket"></i> 0.4 BTC</button>
                        </div>
                    </div>
                    <div class="section-03">
                        <div class="top">
                            <h2>Feeling Adventurous?</h2>
                            <p>Get inspiration from trending categories</p>
                        </div>
                        <div class="categories">
                            <div class="category01">
                            <img v-bind:src="images.categories.category01" alt="category01" id="category01">
                            <p id="catName">Nature</p>
                            </div>
                            <div class="category04">
                            <img v-bind:src="images.categories.category04" alt="category04" id="category04">
                            <p id="catName">Party</p>
                            </div>
                            <div class="category02">
                            <img v-bind:src="images.categories.category02" alt="category02" id="category02">
                            <p id="catName">Futuristic</p>
                            </div>
                            <div class="category05">
                            <img v-bind:src="images.categories.category05" alt="category05" id="category05">
                            <p id="catName">Architecture</p>
                            </div>
                            <div class="category03">
                            <img v-bind:src="images.categories.category03" alt="category03" id="category03">
                            <p id="catName">Nature</p>
                            </div>
                            <div class="category06">
                            <img v-bind:src="images.categories.category06" alt="category06" id="category06">
                            <p id="catName">Party</p>
                            </div>

                        </div>
                    </div>
                    <div class="menu">
                            <img v-bind:src="images.categories.greyOverlay" alt="greyOverlay" id="greyOverlay">
                        <i class="active fa-solid fa-compass "></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
                <div class="container-02">
                </div>
            </mq-layout>
        </div>

    </div>
</template>

<script>

import DisplayPicture from '../assets/images/home/Display-Picture.png'
import world01 from '../assets/images/home/world1.png'
import world02 from '../assets/images/home/world2.png'
import greyOverlay from '../assets/images/home/greyOverlay.png'
import category01 from '../assets/images/home/category01.png'
import category02 from '../assets/images/home/category02.png'
import category03 from '../assets/images/home/category03.png'
import category04 from '../assets/images/home/category04.png'
import category05 from '../assets/images/home/category05.png'
import category06 from '../assets/images/home/category06.png'

export default {
  props: {

  },
  data () {
    return {
      activeWorld: 1,
      images: {
        DisplayPicture: DisplayPicture,
        world: [
          {
            id: 1,
            img: world01,
            name: 'Sarturn',
            desc: 'JALINGO WEST'
          },
          {
            id: 2,
            img: world02,
            name: 'Jupyter',
            desc: 'KWARSIAN'

          },
          {
            id: 3,
            img: world01,
            name: 'Sarturn',
            desc: 'JALINGO WEST'
          },
          {
            id: 4,
            img: world02,
            name: 'Jupyter',
            desc: 'KWARSIAN'
          },
          {
            id: 5,
            img: world01,
            name: 'Sarturn',
            desc: 'JALINGO WEST'
          }
        ],
        categories: {
          category01: category01,
          category02: category02,
          category03: category03,
          category04: category04,
          category05: category05,
          category06: category06,
          greyOverlay: greyOverlay
        }
      },
      place: 'Saturn',
      desc: 'JALINGO WEST'

    }
  },
  created () {
    // this.slideshow()
  },
  computed: {
  },

  mounted: function () {
  },
  methods: {
    getActiveWorld (id, name, desc) {
      this.activeWorld = id
      this.place = name
      this.desc = desc
      console.log(this.activeWorld)
    },
    nextPage () {
      document.querySelector('.container-01').classList.add('nextPage')
    }
  }

}
</script>

<style scoped lang="scss">
@mixin scrollbars($size, $foreground-color, $background-color: mix($foreground-color, white,  50%)) {
  // For Google Chrome
  &::-webkit-scrollbar {
    width:  $size;
    height: $size;
  }

  &::-webkit-scrollbar-thumb {
    background: $foreground-color;
  }

  &::-webkit-scrollbar-track {
    background: $background-color;
  }

}
@keyframes slide-out {
    0% {
        opacity: 1;
        position: absolute;
    }
    100% {
        margin-top: 10%;
        position: absolute;
        opacity: 0;
    }
}
.nextPage {
    display: none;
}
.container-01{
    width: 90vw;
    margin: auto;
    .section-01 {
        margin-top: 5%;
        display: grid;
        grid-template-areas:
        'one two three '
        'four four four'
        ;
        grid-template-columns: 1.5fr .2fr .2fr;
        grid-template-rows:  1fr .5fr;
        h1 {
            grid-area: one;
            margin: 0;
        }
        i {
            grid-area: two;
            color: #D2D7DC;
            font-size: 30px;
            padding: 5px;
            margin-left: -20%;
            cursor: pointer;
        }
        h5 {
            grid-area: two;
            margin: 0;
            padding: 3px;
            width: 10px;
            font-size: 10px;
            color: white;
            background: #FF4067;
            text-align: center;
            position: absolute;
            border-radius: 20px;
            right: 18%;
        }
        img {
            grid-area: three;
        }
        p {
            grid-area: four;
            margin: 0;
        }
    }
    .section-02 {
        position: relative;
        .slideContainer  {
            @include scrollbars( .5em, slategray, rgb(255, 255, 255));
            overflow-x: scroll ;
            display: flex;
            flex-direction: row;
            img {
                padding: 5px;
            }
        }
        .bottom {
            position: relative;
            width: 100%;
            display: flex;
            padding: 2% 0;
            flex-direction: row;
            .slideBottom {
                h1 {
                    margin: 0;
                    font-weight: lighter;

                }
                p {
                    margin: 0;
                    color: #D2D7DC;
                    margin-top: 5%;

                }
            }
            button {
                font-size: 18px;
                position: absolute;
                right: 3%;
                z-index: 2;
                outline: none;
                border-radius: 10px;
                border: none;
                color: #fff;
                background-color: #7B40FF;
                padding: 20px 8px 20px;
                height: 3em;
                cursor: pointer;
            }
        }
    }
    .section-03 {
        margin-top: 10%;
        .top {
            h2 {
                font-weight: lighter;
                margin: 0;
            }
            p {
                margin-top: 10px;
            }
        }
        .categories {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            margin-bottom: 25%;
            #catName {
                margin: 0;
                position: absolute;
                color: #fff;
                top: 36%;
                left: 8%;
                font-weight: lighter;
            }
            .category01,.category02,.category03,.category04,.category05,.category06 {
                position: relative;
                padding: 8px 0px 4px;
                img {
                    width: 91%;
                    height: 49px;
                    cursor: pointer;
                }
            }
        }
    }
    .menu {
        position: fixed;
        width: 100vw;
        height: 10%;
        bottom: 0%;
        margin-left: -5vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        #greyOverlay {
            position: absolute;
            z-index: -1;
        }
        i {
            color: #BAC0C5;
            padding: 15px 55px;
            font-size: 25px;
            cursor: pointer;
        }
        .active{
            color: #7B40FF;
        }
    }
}

</style>
