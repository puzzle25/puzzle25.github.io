<template>
  <div>
    <v-row class="rowbg">
      <v-col cols="4">
        <v-btn icon class="btn_navbar" to="/">
          <v-icon color="dark" size="40px">mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4" class="text-center">
        <h3>Pengenalan Kubus</h3>
      </v-col>
      <v-col cols="4" class="text-end">
        <v-btn icon class="btn_navbar" to="/teori">
          <v-icon color="dark" size="40px">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <center>
          <v-card class="card_soal" elevation="0">
            <br>
            <h3 class="soal">Masukkan gambar ke kotak yang tersedia, apakah gambar merupakan "kubus" atau "balok"</h3>
            <br>
            <center>
              <img v-if="index >= 0" :src="gambar[0]" class="img_soal" id="0" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 0" :src="gambar[1]" class="img_soal" id="1" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 1" :src="gambar[2]" class="img_soal" id="2" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 2" :src="gambar[3]" class="img_soal" id="3" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 3" :src="gambar[4]" class="img_soal" id="4" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 4" :src="gambar[5]" class="img_soal" id="5" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 5" :src="gambar[6]" class="img_soal" id="6" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 6" :src="gambar[7]" class="img_soal" id="7" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 7" :src="gambar[8]" class="img_soal" id="8" draggable="true" @dragstart="dragstart" @dragover.stop>
              <img v-if="index > 8" :src="gambar[9]" class="img_soal" id="9" draggable="true" @dragstart="dragstart" @dragover.stop>
              <div v-if="index == 10">
                <br><br><br>
                <v-btn icon v-on:click="retry">
                  <v-icon size="200px" color="#606060">mdi-refresh</v-icon>
                </v-btn>
                <br><br>
                <h6 class="mt-8">RETRY</h6>
              </div>
            </center>
          </v-card>
        </center>
      </v-col>
      <v-col cols="3" class="text-center">
        <center>
          <v-card class="divdiv1" id="11" @dragover.prevent @drop="drop">
            <v-card-title class="headline card_title"><h5>Kubus</h5></v-card-title>
          </v-card>
        </center>
      </v-col>
      <v-col cols="3" class="text-center">
        <center>
          <v-card class="divdiv1" id="11" @dragover.prevent @drop="drop1">
            <v-card-title class="headline card_title"><h5>Balok</h5></v-card-title>
          </v-card>
        </center>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        gambar: [
          require('../assets/pengenalan/aquarium.png'),
          require('../assets/pengenalan/bed.png'),
          require('../assets/pengenalan/celengan.png'),
          require('../assets/pengenalan/dadu.png'),
          require('../assets/pengenalan/kue.jpg'),
          require('../assets/pengenalan/milo.jpg'),
          require('../assets/pengenalan/rubik.png'),
          require('../assets/pengenalan/striper.png'),
          require('../assets/pengenalan/semongko.jpg'),
          require('../assets/pengenalan/kotak_tisu.png')
        ],
        nama_gambar: [
          "AQUARIUM", "KASUR", "CELENGAN KARDUS", "DADU", "KUE COKLAT", 
          "MILO", "RUBIK", "PENGHAPUS PENSIL", "BUAH SEMANGKA", "KOTAK TISU"
        ],
        index: 0
      }
    },
    methods: {
      dragstart: e => {
        const target = e.target
        e.dataTransfer.setData("card_id", target.id)
        setTimeout(() => {
          target.style.display = "block"
        }, 0)
      },
      drop(e) {
        const card_id = e.dataTransfer.getData("card_id")
        const card = document.getElementById(card_id)
        if (card_id == 2 || card_id == 3 || card_id == 5 || card_id == 6 || card_id == 8) {
          card.style.display = "block"
          card.style.width = "70px"
          card.style.height = "70px"
          e.target.appendChild(card)
          this.index += 1
        } else {
          console.log("salah dong")
        }
      },
      drop1(e) {
        const card_id = e.dataTransfer.getData("card_id")
        const card = document.getElementById(card_id)
        if (card_id == 0 || card_id == 1 || card_id == 4 || card_id == 7 || card_id == 9) {
          card.style.display = "block"
          card.style.width = "100px"
          card.style.height = "70px"
          e.target.appendChild(card)
          this.index += 1
        } else {
          console.log("salah dong")
        }
      },
      retry() {
        location.reload()
      }
    }
  }
</script>

<style scoped>
  .rowbg {
    height: 60px;
    background-image: linear-gradient(to right, #ff0000, #ffa500, #ff0000);
    border: 2px solid #ffffff;
  }
  .btn_navbar:hover {
    color: #ffffff;
  }
  .card_title {
    background-color: #ffa500;
  }
  .img_soal {
    width: 300px;
    height: 250px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .divdiv {
    width: 600px;
    height: 580px;
    background-color: wheat;
  }
  .divdiv1 {
    width: 300px;
    height: 580px;
    background-color: wheat;
  }
  .card_soal {
    width: 400px;
    background-color: transparent;
    text-align: justify;
  }
  .soal {
    margin-top: 50px;
  }
</style>