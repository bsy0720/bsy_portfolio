<template>
  <section class="full">
    <div class="develop_wrap w1440">
      <div class="develop_title">
        <h1>Project</h1>
        <p>&lt;Front-end Develop&gt;</p>
      </div>
      <div class="develop_box_wrap">
        <div class="develop_box">
          <div class="develop_box_title">
            <h3>서문시장 야시장</h3>
            <p>2022.05 &#40;1人 개인프로젝트&#41;</p>
          </div>
          <div class="develop_box_content">
            <div class="swiper_wrap">
              <swiper :pagination="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <img src="/img/seomun_main.gif">
              </swiper-slide>
              <swiper-slide>
                <img src="/img/seomun_intro.gif">
              </swiper-slide>
               <swiper-slide>
                <img src="/img/seomun_notice.gif">
              </swiper-slide>
            </swiper>
            </div>
            <div class="develop_content">
              <p>
                <span class="bold">서문시장 야시장</span>을 리뉴얼 하는 프로젝트였습니다.
                  Java Script를 이용하여 애니메이션을 구현하였으며
                  Node.js를 이용하여 서버간 이동이 가능하고 카카오톡
                  로그인 API를 사용하여 실제로 로그인이 가능합니다. 
                  또한 My SQL을 사용해 실제로 게시판에 글을 게시될 수 있도록 하였습니다
              </p>
              <div class="develop_info">
                <ul>
                  <li>
                    <p>✔ 기술스택</p>                   
                    <span v-for="stack in stack1" :key="stack">{{stack}}</span>
                  </li>
                  <li>
                    <p>✔ URL</p>                   
                    <span><a v-bind:href="url1" class="url">{{url1}}</a></span>
                  </li>
                  <li>
                    <p>✔ GitHub</p>                   
                    <span><a v-bind:href="gitLink1" class="git">{{gitLink1}}</a></span>
                  </li>
                </ul>
              </div>
             <div class="develop_mockup_wrap">
                <button @click="handle_toggle2" type="button">Mock Up</button>
             </div>
            </div>
          </div>
        </div>
       
  
        <div class="develop_box develop_box2">
           <div class="develop_box_title">
            <h3>알래스카 한인관광</h3>
            <p>2022.05 ~ 2022.06 &#40;2人 팀프로젝트&#41;</p>
          </div>
          <div class="develop_box_content">
            <div  class="swiper_wrap">
              <swiper :pagination="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                  <img src="/img/alaska_main.gif">
                </swiper-slide>
                <swiper-slide>
                  <img src="/img/alaska_yt.gif">
                </swiper-slide>
                <swiper-slide>
                  <img src="/img/alaska_notice.gif">
                </swiper-slide>
              </swiper>
            </div>
            <div class="develop_content">
              <p>
                <span class="bold">알래스카 한인관광</span>이라는 사이트를 리뉴얼 하는 프로젝트
                      였습니다. Java Script와 Jquery를 이용하여 애니메이션
                      과 알래스카 환율이 알아볼 수 있는 환율계산기를 제작하였으며 Openweather API를 사용하여 실시간으로 알래스카
                      에 날씨를 보여줄 수 있도록 만들었습니다. 또한 게시판 형태
                      에 메뉴들은 My SQL을 사용하여 실제로 글을 써질 수 있도록
                      제작하였습니다.
              </p>
              <div class="develop_info">
                <ul>
                  <li>
                    <p>✔ 기술스택</p>                    
                    <span v-for="stack in stack2" :key="stack">{{stack}}</span>
                  </li>
                  <li>
                    <p>✔ URL</p>                    
                    <span><a v-bind:href="url2" class="url">{{url2}}</a></span>
                  </li>
                  <li>
                    <p>✔ GitHub</p>                    
                    <span><a v-bind:href="gitLink2" class="git">{{gitLink2}}</a></span>
                  </li>
                </ul>
              </div>
              <div class="develop_mockup_wrap">
                <button @click="handle_toggle" type="button">Mock Up</button>
              </div>                        
            </div>           
          </div>
        </div>
        <div v-show="is_show" class="black_bg scroll">
          <h3>알래스카 한인관광 Mock Up</h3>
          <div class="modal_img">
            <img src="/img/alaska.png">
          </div>        
          <div class="fe_btn">
            <button @click="handle_toggle" type="button">닫기</button>
          </div>                               
        </div>
         <div v-show="is_show2" class="black_bg scroll">
          <h3>서문시장 야시장 Mock Up</h3>
          <div class="modal_img">
            <img src="/img/seomun_mockup.png">
          </div>        
          <div class="fe_btn">
            <button @click="handle_toggle2" type="button">닫기</button>
          </div>                               
        </div>  
      </div>
    </div>    
  </section>
</template>

<script>



import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../assets/css/swiper.css";

// import required modules
import { Pagination } from "swiper";





export default {
  name: 'Develop-page',
   data: function () {
    return{
          stack1: ['HTML', 'CSS', 'Java Script', 'Jquery', 'Node js','My SQL', 'Kakao API'],
          stack2: ['HTML', 'CSS', 'Java Script', 'Jquery', 'Node js','My SQL', 'OpenWeather API', 'Bootstrap'],
          url1: "https://seomun-bsy.herokuapp.com/",
          url2: "https://team-alaska.herokuapp.com/",
          gitLink1: "https://github.com/bsy0720/Project_seomun.git",
          gitLink2: "https://team-alaska.herokuapp.com/",
          is_show:false,
          is_show2:false
    }
  },
  methods: {
    handle_toggle: function() {
      this.is_show = !this.is_show;
    },
    handle_toggle2: function() {
      this.is_show2 = !this.is_show2;
    }
  },
  
 components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full {
width: 100%;
background-color: #E6E6FA;
}

.w1440 {
  width: 1440px;
  margin: 0 auto;
  position: relative;
}

.develop_title {
  width: 100%;
  text-align: center;
  padding-top: 100px;
}

.develop_title>h1 {
  font-size: 60px;
  margin: 0;
  color: #9400D3;
}

.develop_title>p {
  font-size: 30px;
  margin: 0;
  padding-top: 20px;
  font-weight: bold;
  padding-bottom: 60px;
}

.develop_box_wrap {
  width: 100%;
  padding-bottom: 100px;
}

.develop_box {
  width:  57.29166vw;
  background-color: #fff;
  margin: auto;
  border-radius: 16px;
  padding: 60px;
  box-sizing: border-box;
}

.develop_box_title>h3 {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  font-family: 'Black Han Sans', sans-serif;
  
}

.develop_box_title>p {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 60px;
  color: #6c757d;
  font-family:'Black Han Sans', sans-serif;
}

.develop_box_content {
  width: 100%;
  display: flex;
  position: relative;
}

.develop_info>ul {
  padding: 0;
  margin: 30px 0 0 0;
}

.develop_info li {
  list-style: none;
  font-weight: 900;
  margin: 20px 0;
  line-height: 1.5;
}

.develop_info li>div {
  font-size: 15px;
  margin: 5px 0 5px 15px;
}

.develop_info p {
  margin-bottom: 5px;
}

.develop_info span {
  font-weight: 400;
  margin: 0 5px;
}

.git {
  color: #000;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
  word-break: break-all;
}

.url {
  word-break: break-all;
  color: #000;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
}

.develop_content {
  width: 50%;
}

.develop_content>p {
  margin: 0;
  line-height: 1.5;
}

.bold {
  font-weight: bold;
}

.develop_box2 {
  margin-top: 30px;
}

.develop_mockup_wrap {
  text-align: center;
  margin-top: 40px;
  position: relative;
}

.develop_mockup_wrap>button {
  width: 100%;
  background-color: transparent;
  border: 2px solid #000;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.black_bg {
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f9f6f6;
  z-index: 999;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: 6px;
}

.scroll::-webkit-scrollbar-thumb {
  height: 17%;
  background-color: #eee;
  border-radius: 10px;
}

.scroll::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.9);
}

.black_bg>.modal_img {
  text-align: center;
}

.black_bg>.modal_img>img {
  width: 60%;
}

.black_bg>h3 {
  text-align: center;
  font-size: 30px;
}

.black_bg>.fe_btn {
  width: 100%;
  text-align: center;
  padding-bottom: 30px;
}

.black_bg>.fe_btn>button {
  border: 1px solid #000;
  padding: 10px 20px;
  background-color: transparent;
  border-radius: 8px;
  margin-top: 30px;
  font-weight: bold;
  cursor: pointer;
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

  .develop_box {
    padding: 30px;
    width: 90.909vw;
  }

  .develop_title>h1 {
    font-size: 40px;
  }

.develop_title>p {
    font-size: 25px;
  }


}

@media only screen and (max-width: 768px) {

  .develop_title>h1 {
    font-size: 32px;
  }

  .develop_title>p {
    font-size: 20px;
    padding-bottom: 40px;
  }

 .develop_box_content {
  flex-direction: column;
 }

 .develop_content {
  width: 100%;
 }

 .develop_box_title>h3 {
  font-size: 25px;
 }

 .develop_box_title>p {
  font-size: 16px;
  padding-bottom: 30px;
 }

 .develop_content>p {
  display: none;
 }

 .develop_info li {
  font-size: 15px;
 }


}






</style>
