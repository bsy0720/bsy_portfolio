<template>
  <div class="bg" id="bg">
    <video autoplay muted loop>
      <source src="dot1.mp4" type="video/mp4">
    </video>
    <div class="main_txt">
      <h1>Portfolio</h1>
      <p>Front-end Developer Baek Sunyoung</p>
      <p class="mb_txt">
        Front-end Developer
        <br>
        Baek Sunyoung
      </p>
    </div>     
  </div>
</template>

<script>
export default {
  name: 'intro-page',
}
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.main_txt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.main_txt>h1 {
  font-size: 60px; /*64px*/
  color: #9400D3;
  margin: 0;
  font-weight: 800;
}

.main_txt>p {
  font-size: 30px; /*30px*/
  margin: 0;
}

.main_txt .mb_txt {
  display: none;
  text-align: center;
  font-size: 20px;
}

@media only screen and (max-width: 1100px) {
  .main_txt>h1 {
    font-size: 55px;
  }

   .main_txt>p {
    font-size: 25px;
   }


}


@media only screen and (max-width: 768px) {
  .main_txt>h1 {
    font-size: 45px;
  }

  .main_txt>p {
    display: none;
  }

 .main_txt .mb_txt {
    display: block;
  }




}






</style>
