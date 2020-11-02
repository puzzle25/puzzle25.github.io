<template>
  <div>
    <v-row class="rowbg">
      <v-col cols="4">
        <v-btn icon to="/pengenalan" class="btn_navbar">
          <v-icon color="dark" size="40px">mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4" class="text-center">
        <h3>{{title_navbar}}</h3>
      </v-col>
      <v-col cols="4" class="text-end">
        <v-btn icon to="/kuis" class="btn_navbar">
          <v-icon color="dark" size="40px">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-7">
      <v-col cols="12" class="text-center">
        <center>
          <v-card class="cardbody" elevation="10">
            <v-dialog v-model="dialog_unsur" max-width="1000" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn" color="#f70025" dark v-bind="attrs" v-on="on">
                  {{dialog_title[0]}}
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline card_title">
                  <h6>{{dialog_title[0]}}</h6>
                </v-card-title>
                <v-card-text>
                  <center>
                    <video id="video_unsur" class="video_lebar" controls autoplay>
                      <source :src="list_video[0]" type="video/mp4" />
                    </video>
                  </center>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="card_title">
                  <v-spacer></v-spacer>
                  <v-btn color="red" rounded dark v-on:click="dialog_unsur_close">
                    <font class="btn_card">{{back}}</font>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog> <br><br>
            <v-dialog v-model="dialog_jaring" max-width="1000" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn" color="#f70025" dark v-bind="attrs" v-on="on">
                  {{dialog_title[1]}}
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline card_title">
                  <h6>{{dialog_title[1]}}</h6>
                </v-card-title>
                <v-card-text>
                  <center>
                    <video id="video_jaring" class="video_lebar" controls autoplay>
                      <source :src="list_video[1]" type="video/mp4" />
                    </video>
                  </center>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="card_title">
                  <v-spacer></v-spacer>
                  <v-btn color="red" rounded dark v-on:click="dialog_jaring_close">
                    <font class="btn_card">{{back}}</font>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog> <br><br>
            <v-dialog v-model="dialog_luas" max-width="1000" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn" color="#f70025" dark v-bind="attrs" v-on="on">
                  {{dialog_title[2]}}
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline card_title">
                  <h6>{{dialog_title[2]}}</h6>
                </v-card-title>
                <v-card-text>
                  <center>
                    <video id="video_luas" class="video_lebar" controls autoplay>
                      <source :src="list_video[2]" type="video/mp4" />
                    </video>
                  </center>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="card_title">
                  <v-spacer></v-spacer>
                  <v-btn color="red" rounded dark v-on:click="dialog_luas_close">
                    <font class="btn_card">{{back}}</font>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog> <br><br>
            <v-dialog v-model="dialog_volume" max-width="1000" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn" color="#f70025" dark v-bind="attrs" v-on="on">
                  {{dialog_title[3]}}
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline card_title">
                  <h6>{{dialog_title[3]}}</h6>
                </v-card-title>
                <v-card-text>
                  <center>
                    <video id="video_volume" class="video_lebar" controls autoplay>
                      <source :src="list_video[3]" type="video/mp4" />
                    </video>
                  </center>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="card_title">
                  <v-spacer></v-spacer>
                  <v-btn color="red" rounded dark v-on:click="dialog_volume_close">
                    <font class="btn_card">{{back}}</font>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </center>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list_video: [
          require("../assets/video/unsur_unsur.mp4"),
          require("../assets/video/jaring_jaring.mp4"),
          require("../assets/video/luas_permukaan.mp4"),
          require("../assets/video/volume_ruang.mp4"),
        ],
        dialog_title: [
          "Unsur-Unsur Kubus",
          "Jaring-Jaring Kubus",
          "Luas Permukaan Kubus",
          "Volume Ruang Kubus"
        ],
        dialog_id: [
          "video_unsur",
          "video_jaring",
          "video_luas",
          "video_volume"
        ],
        dialog_unsur: false,
        dialog_jaring:  false,
        dialog_luas: false,
        dialog_volume: false,
        back: "Kembali",
        title_navbar: "Teori Kubus"
      }
    },
    methods: {
      dialog_unsur_close() {
        this.dialog_unsur = false
        const vid = document.getElementById("video_unsur")
        vid.pause()
        vid.currentTime = 0
      },
      dialog_jaring_close() {
        this.dialog_jaring = false
        const vid = document.getElementById("video_jaring")
        vid.pause()
        vid.currentTime = 0
      },
      dialog_luas_close() {
        this.dialog_luas = false
        const vid = document.getElementById("video_luas")
        vid.pause()
        vid.currentTime = 0
      },
      dialog_volume_close() {
        this.dialog_volume = false
        const vid = document.getElementById("video_volume")
        vid.pause()
        vid.currentTime = 0
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
  .cardbody {
    background-color: transparent;
    max-width: 500px;
    max-height: 400px;
    padding: 85px;
    border: 5px solid #f70025;
    border-radius: 50px;
    margin-top: 55px;
  }
  .btn {
    width: 250px;
    background-color: transparent;
    border-radius: 1em;
    cursor: pointer;
  } 
  .btn:hover, .btn:focus {
    color: #000;
  }
  .dialog {
    width: 700px;
  }
  .card_title {
    background-color: #ffa500;
  }
  .btn_card {
    font-size: 12px;
    width: 80px;
  }
  .video_lebar {
    margin-top: 20px;
    width: 800px;
  }
  .btn_navbar:hover {
    color: #ffffff;
  }
</style>