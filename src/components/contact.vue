<template>
  <section class="bg">
    <video autoplay muted loop>
      <source src="dot1.mp4" type="video/mp4">
    </video>
    <div class="w1440">
      <div class="contact_txtBox1">
          <h1>Contact</h1>
      </div>
      <div class="contact_txtBox2">
          <p>끊임없이 배우며 발전해나가는 개발자,</p>
          <p>사람들과 소통하며 다양한 의견을 수용할 줄 아는 개발자가 되겠습니다.</p>
          <p>감사합니다!</p>
      </div>
      <div class="contact_icon">
        <ul>
          <li>
            <a href="/img/bsy_resume.hwp" download>
              <img src="/img/resume.png">
            </a>                       
          </li>
          <li>
              <a v-bind:href="git">
                <img src="/img/git_icon.png">
              </a>
          </li>
          <li>
              <a v-bind:href="mail">
                <img src="/img/letter.png">
              </a>
          </li>
          <li>
              <a v-bind:href="kakao">
                <img src="/img/kakaotalk.png">
              </a>
          </li>
          <li>
            <a v-bind:href="velog">
              <img src="/img/velog.png">
            </a>          
          </li>
        </ul>
      </div>
    </div>  
  </section>
</template>

<script>

export default {
  name: 'contact-page',
  data() {
    return {
      git: "https://github.com/bsy0720/portfolio.git",
      mail: "mailto:df3978@naver.com",
      kakao: "https://open.kakao.com/o/sN97S7se",
      velog: "https://velog.io/@bsy0720",
      source1: './public/resume.pdf',
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w1440 {
  width: 1440px;
  margin: auto;
}

.bg {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.contact_txtBox1 {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.contact_txtBox1>h1 {
  font-size: 60px; /*60px*/
  color: #9400D3;
  margin: 0;
}

.contact_txtBox2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.contact_txtBox2>p {
  margin: 5px 0;
  font-size: 20px; /*18px*/
}

.contact_icon {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.contact_icon>ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}

.contact_icon>ul>li {
  margin: 0 30px;
}

.contact_icon img {
  width: 50px;
  height: 50px;
}


@media only screen and (max-width: 1100px) {
  .contact_txtBox1>h1 {
    font-size: 40px;
  }

  .contact_txtBox2>p {
    font-size: 18px;
  }

  .contact_icon img {
    width: 40px;
    height: 40px;
  }

 



}




@media only screen and (max-width: 768px) {
  .contact_icon img {
    width: 30px;
    height: 30px;
  }

  .contact_txtBox2>p {
    font-size: 16px;
  }

}

</style>
