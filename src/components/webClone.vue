<template>
  <section class="full">
    <div class="webClone_wrap w1440">
      <div class="project_title">
          <h1>Project</h1>
          <p>&lt;Web Clone&gt;</p>         
      </div>
      <div class="webclone_box_wrap">

        <div class="webclone_box">
           <div class="webclone_box_title">
            <h3>폴렉스존</h3>
            <p>2022.04</p>
          </div>
          <div class="webclone_box_content">
            <div  class="swiper_wrap">
              <swiper :pagination="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                  <img src="/img/pz_main.gif">
                </swiper-slide>
                <swiper-slide>
                  <img src="/img/pz_intro.gif">
                </swiper-slide>
              </swiper>
            </div>
            <div class="webclone_content">
              <p>컨택센터 운영 업무대행 서비스 제공하고 있는 <span class="bold">폴렉스존</span>을 
                 웹클론 하였습니다.
              </p>
              <div class="webclone_info">
                 <ul>
                  <li>
                    <p>✔ 기술스택</p>                   
                    <span v-for="stack in stack1" :key="stack">{{stack}}</span>
                  </li>
                  <li>
                    <p>✔ URL</p>                   
                    <p><a v-bind:href="url[2]" class="url"><span class="url_bold">메인</span>: {{url[2]}}</a></p>
                    <p><a v-bind:href="url[3]" class="url"><span class="url_bold">소개</span>: {{url[3]}}</a></p>
                  </li>
                  <li>
                    <p>✔ GitHub</p>                   
                    <span><a v-bind:href="gitLink2" class="git">{{gitLink2}}</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="webclone_box">
          <div class="webclone_box_title">
            <h3>대전문화재단</h3>
            <p>2022.04</p>
          </div>
          <div class="webclone_box_content">
            <div class="swiper_wrap">
              <swiper :pagination="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <img src="/img/daejeon_main.gif">
              </swiper-slide>
              <swiper-slide>
               <img src="/img/daejeon_sub.gif">
              </swiper-slide>
            </swiper>
            </div>
            <div class="webclone_content">
              <p>대전광역시에 위치한 <sapn class="bold">대전문화재단</sapn>을 웹클론 하였습니다</p>
              <div class="webclone_info">
                <ul>
                  <li>
                    <p>✔ 기술스택</p>                   
                    <span v-for="stack in stack1" :key="stack">{{stack}}</span>
                  </li>
                  <li>
                    <p>✔ URL</p>                    
                    <p><a v-bind:href="url[0]" class="url"><span class="url_bold">메인</span>: {{url[0]}}</a></p>
                    <p><a v-bind:href="url[1]" class="url"><span class="url_bold">소개</span>: {{url[1]}}</a></p>
                  </li>
                  <li>
                    <p>✔ GitHub</p>                   
                    <span><a v-bind:href="gitLink1" class="git">{{gitLink1}}</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         
         <div class="webclone_box">
          <div class="webclone_box_title">
            <h3>싱그러운집</h3>
            <p>2022.04</p>
          </div>
          <div class="webclone_box_content">
            <div class="swiper_wrap">
              <swiper :pagination="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <img src="/img/fresh_main.gif">
              </swiper-slide>
              <swiper-slide>
                <img src="/img/fresh_sub.gif">
              </swiper-slide>
            </swiper>
            </div>
            <div class="webclone_content">
              <p>식물에 관한 모든것을 알 수 있는 <sapn class="bold">싱그러운집</sapn>을 웹클론 하였습니다</p>
              <div class="webclone_info">
                <ul>
                  <li>
                    <p>✔ 기술스택</p>                                       
                    <span v-for="stack in stack1" :key="stack">{{stack}}</span>
                  </li>
                  <li>
                    <p>✔ URL</p>                   
                    <p><a v-bind:href="url[4]" class="url"><span class="url_bold">메인</span>: {{url[4]}}</a></p>
                    <p><a v-bind:href="url[5]" class="url"><span class="url_bold">소개</span>: {{url[5]}}</a></p>
                  </li>
                  <li>
                    <p>✔ GitHub</p>                 
                    <span><a v-bind:href="gitLink3" class="git">{{gitLink3}}</a></span>
                  </li>
                </ul>
              </div>
            </div>
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
  name: 'webclone-page',
  data: function () {
    return{
          moreCnt: 0,
          stack1: ['HTML', 'CSS', 'Java Script', 'Jquery'],
          url: [
            "http://bsy0720.dothome.co.kr/Project_Daejeon/daejeon.html",
            "http://bsy0720.dothome.co.kr/Project_Daejeon/sub/daejeon_introduce.html",
            "http://bsy0720.dothome.co.kr/Project_pollexzone/pollexzone_main.html",
            "http://bsy0720.dothome.co.kr/Project_pollexzone/pollexzone_introduce.html",
            "http://bsy0720.dothome.co.kr/project_shouse/together0406.html",
            "http://bsy0720.dothome.co.kr/project_shouse/index0414.html"
            ],
          gitLink1: "https://github.com/bsy0720/Project_Daejeon.git",
          gitLink2: "https://github.com/bsy0720/Project_pollexzone.git",
          gitLink3: "https://github.com/bsy0720/project_shouse.git"
    }
  
  },
  methods: {
    more() {
      
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
};

</script>

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

.project_title {
  width: 100%;
  text-align: center;
  padding-top: 150px;
}

.project_title>h1 {
  font-size: 60px;
  margin: 0;
  color: #9400D3;
}

.project_title>p {
  font-size: 30px;
  margin: 0;
  padding-top: 20px;
  font-weight: bold;
  padding-bottom: 60px;
}

.webclone_box_wrap {
  width: 100%;
  padding-bottom: 150px;
}

.webclone_box {
  width:  57.29166vw;
  background-color: #fff;
  margin: auto;
  border-radius: 16px;
  padding: 60px;
  margin-bottom: 30px;
  box-sizing: border-box;
}

.webclone_box_title>h3 {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  font-family:'Black Han Sans', sans-serif;
}

.webclone_box_title>p {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 60px;
  color: #6c757d;
  font-family:'Black Han Sans', sans-serif;
}

.webclone_box_content {
  width: 100%;
  display: flex;
  position: relative;
}

.webclone_info>ul {
  padding: 0;
  margin: 30px 0 0 0;
}

.webclone_info li {
  list-style: none;
  font-weight: 900;
  margin: 20px 0;
  line-height: 1.5;
}

.webclone_info li>div {
  font-size: 15px;
  margin: 5px 0 5px 15px;
}

.webclone_info p {
  margin-bottom: 5px;
}

.webclone_info span {
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

.webclone_content {
  width: 50%;
}

.webclone_content>p {
  margin: 0;
  line-height: 1.5;
}

.bold {
  font-weight: bold;
}

.url>.url_bold {
  font-weight: bold;
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

  .webclone_box {
    padding: 40px;
  }

  .project_title>h1 {
    font-size: 40px;
  }

  .project_title>p {
    font-size: 25px;
  }

  .webclone_box {
    padding: 30px;
    width: 90.909vw;
  }


}

@media only screen and (max-width: 768px) {

  .project_title>h1 {
    font-size: 32px;
  }

  .project_title>p {
    font-size: 20px;
    padding-bottom: 40px;
  }

  .webclone_box_content {
    flex-direction: column;
  }

  .webclone_content {
    width: 100%;
  }

  .webclone_box_title>h3 {
    font-size: 25px;
  }

  .webclone_box_title>p {
    font-size: 16px;
    padding-bottom: 30px;
  }

  .webclone_content>p {
    display: none;
  }

  .webclone_info li {
    font-size: 15px;
  }








}


</style>
