<template>
  <div>
    <v-row class="rowbg">
      <v-col cols="4">
        <v-btn icon class="btn_navbar" to="/teori">
          <v-icon color="dark" size="40px">mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4" class="text-center">
        <h3>Kuis Kubus</h3>
      </v-col>
      <!-- <v-col cols="4" class="text-end">
        <v-btn icon class="btn_navbar">
          <v-icon color="dark" size="40px">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col> -->
    </v-row>
    <br><br>
    <!-- Soal 1 -->
    <v-row>
      <v-col cols="12" class="text-center">
        <center>
          <div v-if="bukaan1 == false" class="lingkaran" v-on:click="buka_1"><h2>Soal 1</h2></div>
          <div v-else-if="bukaan1 == true" class="lingkaran1"><h2>Soal 1</h2></div>
        </center>
      </v-col>
    </v-row>
    <div v-if="soal1 != 0" class="bg">
      <v-row v-if="soal1 == 2" class="text-center mt-7">
        <v-col cols="12">
          <v-card class="posisi warna_div">
            <h1><font color="#ffffff">Jawaban Benar</font></h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="soal1 == 1 || soal1 == 2">
        <v-col cols="7" class="text-center mt-7">
          <h3>Berikut ini adalah tampilan sebuah model bangunan yang dilihat dari sisi depan, atas, dan samping kanan</h3>
          <br><br>
          <img src="../assets/kuis/kuis_1.png" width="500">
          <br><br>
          <h3>Berapa banyak kubus penyusunnya?</h3>
        </v-col>
        <v-col cols="5" class="mt-7">
          <center>
            <v-btn v-on:click="angka1" :disabled="disable1" class="btn_angka">1</v-btn> 
            <v-btn v-on:click="angka2" :disabled="disable1" class="kiri btn_angka">2</v-btn> 
            <v-btn v-on:click="angka3" :disabled="disable1" class="kiri btn_angka">3</v-btn> <br><br>
            <v-btn v-on:click="angka4" :disabled="disable1" class="btn_angka">4</v-btn> 
            <v-btn v-on:click="angka5" :disabled="disable1" class="kiri btn_angka">5</v-btn> 
            <v-btn v-on:click="angka6" :disabled="disable1" class="kiri btn_angka">6</v-btn> <br><br>
            <v-btn v-on:click="angka7" :disabled="disable1" class="btn_angka">7</v-btn> 
            <v-btn v-on:click="angka8" :disabled="disable1" class="kiri btn_angka">8</v-btn> 
            <v-btn v-on:click="angka9" :disabled="disable1" class="kiri btn_angka">9</v-btn> <br><br>
            <v-btn v-on:click="reset" :disabled="disable1" class="btn_angka">C</v-btn>
            <v-btn v-on:click="angka0" :disabled="disable1" class="kiri btn_angka">0</v-btn>
            <v-btn v-on:click="submit_jawaban_1" :disabled="disable1" class="kiri btn_angka">OK</v-btn> <br><br><br>
            <v-btn v-if="jawaban1 != ''" class="btn_answe"><h1>{{jawaban1}}</h1></v-btn>
          </center>
        </v-col>
      </v-row> 
    </div>
    <!-- Soal 2 -->
    <v-row>
      <v-col cols="12" class="text-center mt-7">
        <center>
          <div v-if="bukaan2 == false" class="lingkaran" v-on:click="buka_2"><h2>Soal 2</h2></div>
          <div v-else-if="bukaan2 == true" class="lingkaran1"><h2>Soal 2</h2></div>
        </center>
      </v-col>
    </v-row>
    <div v-if="soal2 != 0" class="bg">
      <v-row v-if="soal2 == 2" class="text-center mt-7">
        <v-col cols="12">
          <v-card class="posisi warna_div">
            <h1><font color="#ffffff">Jawaban Benar</font></h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="soal2 == 1 || soal2 == 2">
        <v-col cols="7" class="text-center mt-7">
          <img v-if="index_soal2 == 1" src="../assets/kuis/kuis_2_1.png" width="300">
          <img v-if="index_soal2 == 2" src="../assets/kuis/kuis_2_2.png" width="300">
          <img v-if="index_soal2 == 3" src="../assets/kuis/kuis_2_3.png" width="300">
          <br><br><br>
          <h3>Berapa banyak jumlah kubus pada gambar di atas?</h3>
        </v-col>
        <v-col cols="5" class="mt-7">
          <center>
            <v-btn v-on:click="angka1" :disabled="disable2" class="btn_angka">1</v-btn> 
            <v-btn v-on:click="angka2" :disabled="disable2" class="kiri btn_angka">2</v-btn> 
            <v-btn v-on:click="angka3" :disabled="disable2" class="kiri btn_angka">3</v-btn> <br><br>
            <v-btn v-on:click="angka4" :disabled="disable2" class="btn_angka">4</v-btn> 
            <v-btn v-on:click="angka5" :disabled="disable2" class="kiri btn_angka">5</v-btn> 
            <v-btn v-on:click="angka6" :disabled="disable2" class="kiri btn_angka">6</v-btn> <br><br>
            <v-btn v-on:click="angka7" :disabled="disable2" class="btn_angka">7</v-btn> 
            <v-btn v-on:click="angka8" :disabled="disable2" class="kiri btn_angka">8</v-btn> 
            <v-btn v-on:click="angka9" :disabled="disable2" class="kiri btn_angka">9</v-btn> <br><br>
            <v-btn v-on:click="reset" :disabled="disable2" class="btn_angka">C</v-btn>
            <v-btn v-on:click="angka0" :disabled="disable2" class="kiri btn_angka">0</v-btn>
            <v-btn v-on:click="submit_jawaban_2" :disabled="disable2" class="kiri btn_angka">OK</v-btn> <br><br><br>
            <v-btn v-if="jawaban2 != ''" class="btn_answe"><h1>{{jawaban2}}</h1></v-btn>
          </center>
        </v-col>
      </v-row> 
    </div>
    <!-- Soal 3 -->
    <v-row>
      <v-col cols="12" class="text-center mt-7">
        <center>
          <div v-if="bukaan3 == false" class="lingkaran" v-on:click="buka_3"><h2>Soal 3</h2></div>
          <div v-else-if="bukaan3 == true" class="lingkaran1"><h2>Soal 3</h2></div>
        </center>
      </v-col>
    </v-row>
    <div v-if="soal3 != 0" class="bg">
      <v-row v-if="soal3 == 2" class="text-center mt-7">
        <v-col cols="12">
          <v-card class="posisi warna_div">
            <h1><font color="#ffffff">Jawaban Benar</font></h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="soal3 == 1 || soal3 == 2">
        <v-col cols="7" class="text-center mt-7">
          <img v-if="index_soal3 == 1" src="../assets/kuis/kuis_3_1.png" width="300">
          <img v-if="index_soal3 == 2" src="../assets/kuis/kuis_3_2.png" width="300">
          <img v-if="index_soal3 == 3" src="../assets/kuis/kuis_3_3.png" width="300">
          <br><br><br>
          <h3>Berapa banyak jumlah kubus pada gambar di atas?</h3>
        </v-col>
        <v-col cols="5" class="mt-7">
          <center>
            <v-btn v-on:click="angka1" :disabled="disable3" class="btn_angka">1</v-btn> 
            <v-btn v-on:click="angka2" :disabled="disable3" class="kiri btn_angka">2</v-btn> 
            <v-btn v-on:click="angka3" :disabled="disable3" class="kiri btn_angka">3</v-btn> <br><br>
            <v-btn v-on:click="angka4" :disabled="disable3" class="btn_angka">4</v-btn> 
            <v-btn v-on:click="angka5" :disabled="disable3" class="kiri btn_angka">5</v-btn> 
            <v-btn v-on:click="angka6" :disabled="disable3" class="kiri btn_angka">6</v-btn> <br><br>
            <v-btn v-on:click="angka7" :disabled="disable3" class="btn_angka">7</v-btn> 
            <v-btn v-on:click="angka8" :disabled="disable3" class="kiri btn_angka">8</v-btn> 
            <v-btn v-on:click="angka9" :disabled="disable3" class="kiri btn_angka">9</v-btn> <br><br>
            <v-btn v-on:click="reset" :disabled="disable3" class="btn_angka">C</v-btn>
            <v-btn v-on:click="angka0" :disabled="disable3" class="kiri btn_angka">0</v-btn>
            <v-btn v-on:click="submit_jawaban_3" :disabled="disable3" class="kiri btn_angka">OK</v-btn> <br><br><br>
            <v-btn v-if="jawaban3 != ''" class="btn_answe"><h1>{{jawaban3}}</h1></v-btn>
          </center>
        </v-col>
      </v-row>
    </div>
    <!-- Soal 6 -->
    <v-row>
      <v-col cols="12" class="text-center mt-7">
        <center>
          <div v-if="bukaan6 == false" class="lingkaran" v-on:click="buka_6"><h2>Soal 6</h2></div>
          <div v-else-if="bukaan6 == true" class="lingkaran1"><h2>Soal 6</h2></div>
        </center>
      </v-col>
    </v-row>
    <div v-if="soal6 != 0" class="bg">
      <v-row v-if="soal6 == 2" class="text-center mt-7">
        <v-col cols="12">
          <v-card class="posisi warna_div">
            <h1><font color="#ffffff">Jawaban Benar</font></h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="soal6 == 1 || soal6 == 2">
        <v-col cols="7" class="text-center mt-7">
          <img src="../assets/kuis/kuis_6.png" width="200">
          <br><br>
          <h4>Ani ingin memberi hadiah kepada temannya sebagai hadiah ulang tahun. Ani menggunakan kotak kardus sebagai tempat hadiahnya. Untuk mempercantik hadiahnya, ani ingin membungkus kardus tersebut dengan kertas kado. Berapa ukuran minimal kertas kado yang dibutuhkan ani untuk membungkus kardus? </h4>
        </v-col>
        <v-col cols="5" class="mt-7">
          <center>
            <v-btn v-on:click="angka1" :disabled="disable6" class="btn_angka">1</v-btn> 
            <v-btn v-on:click="angka2" :disabled="disable6" class="kiri btn_angka">2</v-btn> 
            <v-btn v-on:click="angka3" :disabled="disable6" class="kiri btn_angka">3</v-btn> <br><br>
            <v-btn v-on:click="angka4" :disabled="disable6" class="btn_angka">4</v-btn> 
            <v-btn v-on:click="angka5" :disabled="disable6" class="kiri btn_angka">5</v-btn> 
            <v-btn v-on:click="angka6" :disabled="disable6" class="kiri btn_angka">6</v-btn> <br><br>
            <v-btn v-on:click="angka7" :disabled="disable6" class="btn_angka">7</v-btn> 
            <v-btn v-on:click="angka8" :disabled="disable6" class="kiri btn_angka">8</v-btn> 
            <v-btn v-on:click="angka9" :disabled="disable6" class="kiri btn_angka">9</v-btn> <br><br>
            <v-btn v-on:click="reset" :disabled="disable6" class="btn_angka">C</v-btn>
            <v-btn v-on:click="angka0" :disabled="disable6" class="kiri btn_angka">0</v-btn>
            <v-btn v-on:click="submit_jawaban_6" :disabled="disable6" class="kiri btn_angka">OK</v-btn> <br><br><br>
            <v-btn v-if="jawaban6 != ''" class="btn_answe"><h1>{{jawaban6}}</h1></v-btn>
          </center>
        </v-col>
      </v-row>
    </div>
    <!-- Soal 7 -->
    <v-row>
      <v-col cols="12" class="text-center mt-7">
        <center>
          <div v-if="bukaan7 == false" class="lingkaran" v-on:click="buka_7"><h2>Soal 7</h2></div>
          <div v-else-if="bukaan7 == true" class="lingkaran1"><h2>Soal 7</h2></div>
        </center>
      </v-col>
    </v-row>
    <div v-if="soal7 != 0" class="bg">
      <v-row v-if="soal7 == 2" class="text-center mt-7">
        <v-col cols="12">
          <v-card class="posisi warna_div">
            <h1><font color="#ffffff">Jawaban Benar</font></h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="soal7 == 1 || soal7 == 2">
        <v-col cols="7" class="text-center mt-7">
          <img src="../assets/kuis/kuis_7.png" width="200">
          <br><br>
          <h4>Jika pak amir mendapatkan pesanan untuk mengirimkan 2 kardus berisi rubik diatas. Dan kardus yang digunakan untuk mengemas rubik berukuran (30x18x12) cm. berapa banyakkah rubik yang harus diisi hingga kardus penuh? </h4>
        </v-col>
        <v-col cols="5" class="mt-7">
          <center>
            <v-btn v-on:click="angka1" :disabled="disable7" class="btn_angka">1</v-btn> 
            <v-btn v-on:click="angka2" :disabled="disable7" class="kiri btn_angka">2</v-btn> 
            <v-btn v-on:click="angka3" :disabled="disable7" class="kiri btn_angka">3</v-btn> <br><br>
            <v-btn v-on:click="angka4" :disabled="disable7" class="btn_angka">4</v-btn> 
            <v-btn v-on:click="angka5" :disabled="disable7" class="kiri btn_angka">5</v-btn> 
            <v-btn v-on:click="angka6" :disabled="disable7" class="kiri btn_angka">6</v-btn> <br><br>
            <v-btn v-on:click="angka7" :disabled="disable7" class="btn_angka">7</v-btn> 
            <v-btn v-on:click="angka8" :disabled="disable7" class="kiri btn_angka">8</v-btn> 
            <v-btn v-on:click="angka9" :disabled="disable7" class="kiri btn_angka">9</v-btn> <br><br>
            <v-btn v-on:click="reset" :disabled="disable7" class="btn_angka">C</v-btn>
            <v-btn v-on:click="angka0" :disabled="disable7" class="kiri btn_angka">0</v-btn>
            <v-btn v-on:click="submit_jawaban_7" :disabled="disable7" class="kiri btn_angka">OK</v-btn> <br><br><br>
            <v-btn v-if="jawaban7 != ''" class="btn_answe"><h1>{{jawaban7}}</h1></v-btn>
          </center>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bukaan1: false,
        bukaan2: true,
        bukaan3: true,
        bukaan6: true,
        bukaan7: true,
        soal1: 0,
        soal2: 0,
        soal3: 0,
        soal6: 0,
        soal7: 0,
        index_soal2: 1,
        index_soal3: 1,
        jawaban1: "",
        jawaban2: "",
        jawaban3: "1",
        jawaban4: "",
        jawaban5: "",
        jawaban6: "",
        jawaban7: "",
        index_jawaban: 0,
        disable1: false,
        disable2: false,
        disable3: false,
        disable6: false,
        disable7: false,
      }
    },
    methods: {
      buka_1() {
        this.soal1 = 1
        this.index_jawaban = 1
      },
      buka_2() {
        this.soal2 = 1
        this.index_jawaban = 2
      },
      buka_3() {
        this.soal3 = 1
        this.index_jawaban = 3
      },
      buka_6() {
        this.soal6 = 1
        this.index_jawaban = 6
      },
      buka_7() {
        this.soal7 = 1
        this.index_jawaban = 7
      },
      angka1() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "1"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "1"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "1"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "1"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "1"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "1"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "1"
          }
        }
      },
      angka2() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "2"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "2"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "2"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "2"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "2"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "2"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "2"
          }
        }
      },
      angka3() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "3"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "3"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "3"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "3"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "3"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "3"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "3"
          }
        }
      },
      angka4() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "4"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "4"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "4"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "4"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "4"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "4"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "4"
          }
        }
      },
      angka5() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "5"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "5"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "5"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "5"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "5"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "5"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "5"
          }
        }
      },
      angka6() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "6"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "6"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "6"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "6"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "6"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "6"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "6"
          }
        }
      },
      angka7() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "7"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "7"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "7"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "7"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "7"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "7"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "7"
          }
        }
      },
      angka8() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "8"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "8"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "8"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "8"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "8"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "8"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "8"
          }
        }
      },
      angka9() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "9"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "9"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "9"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "9"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "9"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "9"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "9"
          }
        }
      },
      angka0() {
        if (this.index_jawaban == 1) {
          if (this.jawaban1.length < 3) {
            this.jawaban1 += "0"
          }
        }
        if (this.index_jawaban == 2) {
          if (this.jawaban2.length < 3) {
            this.jawaban2 += "0"
          }
        }
        if (this.index_jawaban == 3) {
          if (this.jawaban3.length < 3) {
            this.jawaban3 += "0"
          }
        }
        if (this.index_jawaban == 4) {
          if (this.jawaban4.length < 3) {
            this.jawaban4 += "0"
          }
        }
        if (this.index_jawaban == 5) {
          if (this.jawaban5.length < 3) {
            this.jawaban5 += "0"
          }
        }
        if (this.index_jawaban == 6) {
          if (this.jawaban6.length < 3) {
            this.jawaban6 += "0"
          }
        }
        if (this.index_jawaban == 7) {
          if (this.jawaban7.length < 3) {
            this.jawaban7 += "0"
          }
        }
      },
      reset() {
        if (this.index_jawaban == 1) {
          this.jawaban1 = ""
        }
        if (this.index_jawaban == 2) {
          this.jawaban2 = ""
        }
        if (this.index_jawaban == 3) {
          this.jawaban3 = ""
        }
        if (this.index_jawaban == 4) {
          this.jawaban4 = ""
        }
        if (this.index_jawaban == 5) {
          this.jawaban5 = ""
        }
        if (this.index_jawaban == 6) {
          this.jawaban6 = ""
        }
        if (this.index_jawaban == 7) {
          this.jawaban7 = ""
        }
      },
      submit_jawaban_1() {
        if (this.jawaban1 == "" || this.jawaban1 != 20) {
          console.log("salah")
        } else if (this.jawaban1 == 20) {
          console.log("benar")
          this.disable1 = true
          this.soal1 = 2
          this.bukaan2 = false
          this.bukaan1 = true
        }
      },
      submit_jawaban_2() {
        if (this.index_soal2 == 1) {
          if (this.jawaban2 == "" || this.jawaban2 != 4) {
            console.log("salah")
          } else if (this.jawaban2 == 4) {
            console.log("benar")
            this.index_soal2 = 2
            this.jawaban2 = ""
          }
        } else if (this.index_soal2 == 2) {
          if (this.jawaban2 == "" || this.jawaban2 != 8) {
            console.log("salah")
          } else if (this.jawaban2 == 8) {
            console.log("benar")
            this.index_soal2 = 3
            this.jawaban2 = ""
          }
        } else if (this.index_soal2 == 3) {
          if (this.jawaban2 == "" || this.jawaban2 != 9) {
            console.log("salah")
          } else if (this.jawaban2 == 9) {
            console.log("benar")
            this.disable2 = true
            this.soal2 = 2
            this.bukaan3 = false
            this.bukaan2 = true
          }
        }
      },
      submit_jawaban_3() {
        if (this.index_soal3 == 1) {
          if (this.jawaban3 == "" || this.jawaban3 != 11) {
            console.log("salah")
          } else if (this.jawaban3 == 11) {
            console.log("benar")
            this.index_soal3 = 2
            this.jawaban3 = ""
          }
        } else if (this.index_soal3 == 2) {
          if (this.jawaban3 == "" || this.jawaban3 != 11) {
            console.log("salah")
          } else if (this.jawaban3 == 11) {
            console.log("benar")
            this.index_soal3 = 3
            this.jawaban3 = ""
          }
        } else if (this.index_soal3 == 3) {
          if (this.jawaban3 == "" || this.jawaban3 != 13) {
            console.log("salah")
          } else if (this.jawaban3 == 13) {
            console.log("benar")
            this.disable3 = true
            this.soal3 = 2
            this.bukaan6 = false
            this.bukaan3 = true
          }
        }
      },
      submit_jawaban_6() {
        if (this.jawaban6 == "" || this.jawaban6 != 900) {
          console.log("salah")
        } else if (this.jawaban6 == 900) {
          console.log("benar")
          this.disable6 = true
          this.soal6 = 2
          this.bukaan7 = false
          this.bukaan6 = true
        }
      },
      submit_jawaban_7() {
        if (this.jawaban7 == "" || this.jawaban7 != 30) {
          console.log("salah")
        } else if (this.jawaban7 == 30) {
          console.log("benar")
          this.disable7 = true
          this.soal7 = 2
          this.bukaan7 = true
        }
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
  .textinput {
    width: 200px;
  }
  .kiri {
    margin-left: 20px;
  }
  .posisi {
    position: absolute;
  }
  .warna_div {
    background-color: black;
    opacity: 75%;
    height: 402px;
    width: 1270px;
  }
  .bg {
    background-color: wheat;
    margin-left: 40px;
    margin-right: 40px;
    height: 405px;
  }
  .btn_angka {
    background-image: linear-gradient(to top, #ffa500, #f70025, #ffa500);
    color: #ffffff;
  }
  .btn_angka:hover {
    color: #000000;
    cursor: pointer;
  }
  .btn_answe {
    width: 100px;
    background-image: linear-gradient(to top, #ffa500, #f70025, #ffa500);
    color: #ffffff;
  }
  .btn_answe:hover {
    cursor: default;
  }
  .lingkaran {
    width: 90px;
    height: 90px;
    padding-top: 25px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #f70025;
    /* background-image: linear-gradient(to top, #ffff00, #ff0000, #ffff00); */
  }
  .lingkaran1 {
    width: 90px;
    height: 90px;
    padding-top: 25px;
    border-radius: 50%;
    color: #000000;
    background-color: #f70025;
    /* background-image: linear-gradient(to top, #ffff00, #ff0000, #ffff00); */
  }
  .lingkaran:hover {
    cursor: pointer;
    color: #ebebeb;
    background-color: #ff4141;
  }
  .lingkaran1:hover {
    cursor: default;
  }
</style>