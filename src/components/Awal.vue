<template>
  <div class="layoutpadding">
    <v-card class="text-center cardbody" elevation="10">
      <v-row>
        <v-col cols="6" class="welcomebg">
          <img :src="logo" class="logo">
          <br>
          <h3>{{deskripsi[0]}}</h3>
          <h3>{{deskripsi[1]}}</h3>
        </v-col>
        <v-col cols="6" class="choicebg">
          <div v-for="(item,index) in button_text" :key="index">
            <router-link :to="button_route[index]" class="rute">
              <button class="btn">
                {{item}}
              </button>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logo: require('../assets/ncube_logo.png'),
        deskripsi: [
          "Website mengenai dasar-dasar kubus",
          "Berisi penjelasan dan latihan"
        ],
        button_text: [
          "PENGENALAN", 
          "TEORI", 
          "KUIS"
        ],
        button_route: [
          "/pengenalan",
          "/teori",
          "/kuis"
        ]
      }
    }
  }
</script>

<style scoped>
  .layoutpadding{
    padding: 130px 50px 50px 55px;
  }
  .logo{
    width: 250px;
  }
  .btn{
    width: 250px;
    height: 36px;
    margin-bottom: 15px;
    transition-duration: 0.4s;
    background-color: transparent;
    border: 2px solid #f70025;
    box-sizing: border-box;
    border-radius: 1em;
    cursor: pointer;
    font-size: 14px;
    color: #f70025;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  .btn:hover, .btn:focus {
    color: #ffffff;
    background-color: #f70025;
  }
  .cardbody{
    max-height: 400px;
    max-width: 800px;
    margin: auto;
  }
  .welcomebg{
    background-color: #f70025;
    padding: 80px 0;
  }
  .choicebg{
    background-color: wheat;
    padding: 110px 0;
  }
  @media screen and (max-width: 800px){
    h3 {
      font-size: 18px;
    }
    .btn {
      width: 240px;
    }
    .logo {
      width: 240px;
    }
    .welcomebg {
      padding: 70px 0;
    }
    .choicebg {
      padding: 100px 0;
    }
  }
  @media screen and (max-width: 750px){
    h3 {
      font-size: 16px;
    }
    .btn {
      height: 36px;
      font-size: 13px;
    }
    .logo {
      width: 235px;
    }
    .welcomebg {
      padding: 60px 0;
    }
    .choicebg {
      padding: 85px 0;
    }
  }
  @media screen and (max-width: 715px){
    h3 {
      font-size: 15px;
    }
    .btn {
      width: 225px;
    }
  }
  @media screen and (max-width: 655px){
    h3 {
      font-size: 14px;
    }
    .btn {
      width: 210px;
      height: 34px;
      font-size: 12px;
    }
    .logo {
      width: 230px;
    }
  }
  @media screen and (max-width: 620px){
    .btn {
      width: 200px;
    }
    .logo {
      width: 220px;
    }
  }
  @media screen and (max-width: 590px){
    h3 {
      font-size: 13px;
    }
    .logo {
      width: 205px;
    }
    .btn {
      width: 180px;
      height: 30px;
      font-size: 11px;
    }
  }
  @media screen and (max-width: 560px){
    .btn {
      width: 160px;
    }
  }
  @media screen and (max-width: 555px){
    .logo {
      width: 190px;
    }
  }
  @media screen and (max-width: 545px){
    h3 {
      font-size: 12px;
    }
    .btn {
      height: 28px;
      font-size: 10px;
    }
    .logo {
      width: 185px;
    }
  }
  @media screen and (max-width: 530px){
    .btn {
      width: 150px;
    }
  }
  @media screen and (max-width: 520px){
    .logo {
      width: 170px;
    }
    .welcomebg{
      padding: 50px 0;
    }
    .choicebg{
      padding: 65px 0;
    }
  }
  @media screen and (max-width: 500px){
    .logo {
      width: 160px;
    }
    .btn {
      width: 135px;
    }
    .welcomebg {
      padding: 40px 0;
    }
    .choicebg {
      padding: 50px 0;
    }
  }
  @media screen and (max-width: 495px){
    h3 {
      font-size: 11px;
    }
    .btn {
      height: 26px;
      font-size: 9px;
    }
    .welcomebg {
      padding: 40px 0;
    }
    .choicebg {
      padding: 45px 0;
    }
  }
  @media screen and (max-width: 480px){
    .logo {
      width: 150px;
    }
    .btn {
      width: 120px;
    }
  }
  @media screen and (max-width: 465px){
    h3 {
      font-size: 10px;
    }
    .btn {
      height: 24px;
      font-size: 8px;
    }
  }
  @media screen and (max-width: 450px){
    .logo {
      width: 140px;
    }
    .btn {
      width: 115px;
    }
  }
  @media screen and (max-width: 430px){
    h3 {
      font-size: 9px;
    }
    .btn {
      height: 22px;
      font-size: 7px;
      margin-bottom: 12px;
    }
  }
  @media screen and (max-width: 400px){
    .logo {
      width: 130px;
    }
    .btn {
      width: 100px;
      margin-bottom: 10px;
    }
    .welcomebg {
      padding: 30px 0;
    }
    .choicebg {
      padding: 35px 0;
    }
  }
  @media screen and (max-width: 390px){
    h3 {
      font-size: 8px;
    }
    .btn {
      height: 20px;
      font-size: 6px;
      margin-bottom: 7px;
    }
    .logo {
      width: 120px;
    }
    .welcomebg {
      padding: 20px 0;
    }
    .choicebg {
      padding: 25px 0;
    }
  }
  @media screen and (max-width: 360px){
    h3 {
      font-size: 7px;
    }
    .btn {
      width: 90px;
      height: 18px;
      font-size: 5px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 350px){
    .logo {
      width: 110px;
    }
    .btn {
      margin-bottom: 3px;
    }
  }
  @media screen and (max-width: 330px){
    h3 {
      font-size: 6px;
    }
    .logo {
      width: 90px;
    }
    .btn {
      width: 80px;
      height: 16px;
      font-size: 4px;
      margin-bottom: 0px;
    }
    .welcomebg {
      padding: 20px 0;
    }
    .choicebg {
      padding: 20px 0;
    }
  }
  @media screen and (max-width: 300px){
    h3 {
      font-size: 5px;
    }
    .logo {
      width: 80px;
    }
    .btn {
      width: 70px;
      height: 14px;
      font-size: 3px;
    }
    .welcomebg {
      padding: 10px 0;
    }
    .choicebg {
      padding: 5px 0;
    }
  }
  @media screen and (max-width: 280px){
    .logo {
      width: 70px;
    }
    .welcomebg {
      padding-top: 5px;
    }
    .choicebg {
      padding: 0px 0;
    }
  }
</style>