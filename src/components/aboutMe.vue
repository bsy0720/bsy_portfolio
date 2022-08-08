<template>
  <section class="full" >
    <div class="w1440 ab_scroll" id="ab_scroll">
      <div class="about_txtBox" id="about_txtBox">
        <h1>About Me</h1>
        <div class="hidden">
          <p>"안녕하세요, 프론트엔드 개발자를 꿈꾸는 백선영입니다."</p>
        </div>
        
      </div>     
      <div class="about_contentBox">
        <div class="aboutImg"></div>
        <div class="aboutIntroduce">
          <div class="upTxt">
            <p>저는 무언가를 만들고 결과를 얻는것에 즐거움을 느끼는 성격입니다.</p>            
            <p>어느 날 지인분께서 개발자라는 직업에 대해 알려주셨고 개발과 개발자에 대해 검색해보며 자연스럽게 흥미가 생기며 개발자라는 직업을 선택하게 되었습니다.</p>
            <p>저는 현재에 안주하지않고 끊임없이 공부하고 역량을 길러 웹뿐만 아니라
              다양한 분야에서 창의적인 콘텐츠를 만들어내며 보여줄 수 있는 개발자로
              성장해나가고싶습니다.
            </p>
          </div>
          <div class="downTxt">
            <div class="about_box">
              <div class="left">
                <div class="icon">
                  <img src="/img/person-fill.svg">
                </div>
                <div class="txt">
                  <p>이름</p>
                  <span>백선영</span>
                </div>
              </div>
              <div class="right">
                <div class="icon">
                  <img src="/img/calendar-fill.svg">
                </div>
                <div class="txt">
                  <p>생년월일</p>
                  <span>1995.07.20</span>
                </div>
              </div>
            </div>
            <div class="about_box">
              <div class="left">
                <div class="icon">
                  <img src="/img/geo-alt-fill.svg">
                </div>
                <div class="txt">
                  <p>주소지</p>
                  <span>경기도 양평</span>
                </div>
              </div>
              <div class="right">
                <div class="icon">
                  <img src="/img/pencil-fill.svg">
                </div>
                <div class="txt">
                  <p>학력</p>
                  <span>
                    한양여자대학교 졸업
                    <br>
                    &#40;경영과&#41;
                  </span>
                </div>
              </div>
            </div>
            <div class="about_box">
              <div class="left">
                <div class="icon">
                  <img src="/img/telephone-fill.svg">
                </div>
                <div class="txt">
                  <p>연락처</p>
                  <span>010-5107-5312</span>
                </div>              
              </div>
              <div class="right">
                <div class="icon">
                  <img src="/img/driving-license.png">
                </div>
                <div class="txt">
                  <p>자격증</p>
                  <span>
                    · GTQ 1급
                    <br>
                    · 운전면허 2종보통
                  </span>
                </div>
              </div>
            </div>
            <div class="about_box1">
              <div class="left1">
                <div class="icon">
                  <img src="/img/coding.png">
                </div>
                <div class="txt">
                  <p>수료</p>
                  <span>
                    · 그린컴퓨터 아카데미 (종로)
                      <br> 시각디자인출판편집 포토샵, 일러스트 실무
                      <br>
                      (2021.12.02 ~ 2021.12.30)
                      <br><br>
                    · 그린컴퓨터 아카데미(노원)
                    <br>
                    디지털컨버전스	 스마트_뷰(Vue)활용 프론트엔드 웹개발자 양성과정
                    <br>
                    (2022.02.22 ~ 2022.08.16)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about_tech_wrap">
        <div class="tech_title">
          <h2>Tech Stack</h2>
        </div>      
        <div class="about_skills_wrap">          
          <h3>&lt;Skills&gt;</h3>
          <div class="up_skills">
            <div class="img1"></div>
            <div class="img2"></div>
            <div class="img3"></div>
            <div class="img4"></div>
          </div>
          <div class="down_skills">
            <div class="img5"></div>
            <div class="img6"></div>
            <div class="img7"></div>
          </div> 
        </div>  
        <div class="about_tools_wrap">
            <h3>&lt;Tools&gt;</h3>
            <div class="up_tools">
              <div class="img8"></div>
              <div class="img9"></div>
              <div class="img10"></div>
            </div>
            <div class="down_tools">
              <div class="img11"></div>
              <div class="img12"></div>
              <div class="img13"></div>
            </div>
        </div>         
      </div>
  </div>
  </section>
</template>

<script>

// import VueWriter from 'vue-writer';


export default {
  name: 'AboutMe-page',
       
  data() {
    return {
      
    }
  },
  mounted() {

  },
  
  // components: {VueWriter}

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full {
  width: 100%;
  height: 100%;
  background-color: #E6E6FA;
}

.w1440 {
  width: 1440px;
  margin: 0 auto;
}

.about_txtBox>h1 {
  margin: 0;
  color: #9400D3;
  font-size: 60px;
  text-align: center;
  padding-top: 100px;
}

.about_contentBox {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
}

.about_contentBox .aboutImg {
  width: 40%;
  background: url('/public/img/about_img3.jpeg') center center no-repeat;
  background-size: cover;
  margin-right: 50px;
  border: 3px solid #9400D3;
  border-radius: 16px;
}

.about_contentBox .aboutIntroduce {
  width: 60%;
}

.about_contentBox .aboutIntroduce>.upTxt>p {
  margin: 0;
  padding: 2px 0;
}

.aboutIntroduce .downTxt {
  margin-top: 30px;
}

.about_box {
  width: 100%;
  display: flex;
  padding: 10px 0;
}

.left {
  width: 50%;
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 10px;
}

.icon>img {
  width: 30px;
  height: 30px;
}

.aboutIntroduce .downTxt .txt>p {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.right {
  width: 50%;
  display: flex;
  align-items: center;
}

.left1 {
  display: flex;
  width: 100%;
  padding: 10px 0;
}

.about_tech_wrap  {
  width: 100%;
}

.tech_title>h2 {
  margin: 0;
  padding-bottom: 20px;
  font-size: 40px;
  color: #9400D3;
  font-weight: bold;
  text-align: center;
}

.about_skills_wrap>h3 {
  margin: 0;
  font-size: 30px;
  padding-bottom: 20px;
  text-align: center;
}

.up_skills {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.up_skills>div {
  width: 100px;
  height: 100px;
  border: 3px solid #8B008B;
  border-radius: 16px;
  background-color: #fff;
}

.img1 {
  background: url("/public/img/html.png") center center no-repeat;
  background-size: 60%;
}

.img2 {
  background: url('/public/img/css.png') center center no-repeat;
  background-size: 85%;
}

.img3 {
  background: url('/public/img/js.png') center center no-repeat;
  background-size: cover;
}

.img4 {
  background: url('/public/img/jquery.png') center center no-repeat;
  background-size: cover;
}

.down_skills {
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
}

.down_skills>div {
  width: 100px;
  height: 100px;
  border: 3px solid #8B008B;
  border-radius: 16px;
  background-color: #fff;
}

.img5 {
  background: url(/public/img/vue.png) center center no-repeat;
  background-size: cover;
}

.img6 {
  background: url(/public/img/mysql.png) center center no-repeat;
  background-size: 90%;
}

.img7 {
  background: url(/public/img/node.png) center center no-repeat;
  background-size: contain;
}

.about_tools_wrap {
  padding-bottom: 100px;
}

.about_tools_wrap>h3 {
  font-size: 30px;
  text-align: center;
  margin: 0;
  padding-bottom: 20px;
}

.up_tools {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.up_tools>div {
  width: 100px;
  height: 100px;
  border: 3px solid #8B008B;
  border-radius: 16px;
  background-color: #fff;
}

.img8 {
  background: url(/public/img/ps.png) center center no-repeat;
  background-size: 80%;
}

.img9 {
  background: url(/public/img/ai.png) center center no-repeat;
  background-size: 80%;
}

.img10 {
  background: url(/public/img/vscode_icon.png) center center no-repeat;
  background-size: 85%;
}

.down_tools {
  display: flex;
  justify-content: space-around;
}

.down_tools>div {
  width: 100px;
  height: 100px;
  border: 3px solid #8B008B;
  border-radius: 16px;
  background-color: #fff;
}

.img11 {
  background: url(/public/img/figma.png) center center no-repeat;
  background-size: cover;
}

.img12 {
  background: url(/public/img/github.jpg) center center no-repeat;
  background-size: 90%;
}

.img13 {
  background: url(/public/img/heroku.png) center center no-repeat;
  background-size: 90%;
}

.typewriter {
  display: flex;
  justify-content: center;
}

.typewriter>p {
  color: #000;
  font-size: 30px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .10em solid #000; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: .15em; /* Adjust as needed */
   animation: 
  typing 4s steps(30, end),
  blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 63% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  63% { border-color: black }
}

.hidden {
  opacity: 0;
}



@media only screen and (max-width: 1440px) {
  .w1440 {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }


}


@media only screen and (max-width: 1100px) {
  .w1440 {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .about_contentBox .aboutImg {
    font-size: 18px;
  }

  .about_txtBox p {
    font-size: 20px;
  }

  .up_skills>div {
    width: 90px;
    height: 90px;
  }

  .down_skills>div {
    width: 90px;
    height: 90px;
  }

  .up_tools>div {
    width: 90px;
    height: 90px;
  }

   .down_tools>div {
    width: 90px;
    height: 90px;
   }

   .about_txtBox>h1 {
    font-size: 50px;
   }
}

@media only screen and (max-width: 768px)  {
  .about_txtBox>h1 {
    font-size: 32px;
  }
  
  .about_contentBox {
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
  }

  .about_contentBox .aboutImg {
    width: 100%;
    margin: 0;
    padding-top: 100%;
    box-sizing: border-box;
  }

  .about_contentBox .aboutIntroduce {
    width: 100%;
  }

  .about_contentBox .aboutIntroduce .upTxt {
    margin-top: 30px;
    text-align: center;
  }

  .aboutIntroduce .downTxt .txt>p {
    font-size: 18px;
  }

  .tech_title>h2 {
    font-size: 28px;
    padding-bottom: 10px;
  }

  .about_skills_wrap>h3 {
    font-size: 20px;
  }

  .left {
    width: 40%;
  }

  .right {
    width: 40%;
  }

  .left1 {
      justify-content: center;
    }

  .up_skills>div {
      width: 80px;
      height: 80px;
    }

  .down_skills>div {
      width: 80px;
      height: 80px;
    }

    .about_tools_wrap>h3 {
      font-size: 20px;
    }

  .up_tools>div {
      width: 80px;
      height: 80px;
    }

  .down_tools>div {
      width: 80px;
      height: 80px;
    }

    .about_box {
      justify-content: center;
    }

    .typewriter {
      width: 100%;
    }

    .typewriter>p {
      font-size: 18px;
    }



}




</style>
