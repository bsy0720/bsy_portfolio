<template>
    <section class="full">
        <div class="work_wrap w1440">
            <div class="work_title">
                <h1>Art Work</h1>
            </div>
            <swiper
                :slidesPerView="3"
                :spaceBetween="30"
                :loop="true"
                :freeMode="true"
                :pagination="{
                clickable: true,
                }"
                :modules="modules"
                class="mySwiper">
                <swiper-slide>
                    <img src="/img/drama.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="/img/totoro.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="/img/flash_coffee.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="/img/Business card.jpg">
                </swiper-slide>
            </swiper>
        </div>
    </section>
    
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
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
padding-bottom: 150px;
}

.work_title>h1 {
font-size: 60px;
margin: 0;
color: #9400D3;
text-align: center;
font-weight: bold;
}

.swiper {
  width: 100%;
  padding-top: 60px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media only screen and (max-width: 1440px) {
  .w1440 {
    width: 100%;
    padding: 30px 20px 150px 20px;
    box-sizing: border-box;
  }


}

@media only screen and (max-width: 1100px) {
  .w1440 {
    width: 100%;
    padding: 0 15px 150px 15px;
    box-sizing: border-box;
  }

  .swiper {
    width: 100%;
    padding-bottom: 150px;
    box-sizing: border-box;
  }

  .work_title>h1 {
    font-size: 40px;
  }



}


@media only screen and (max-width: 768px) {

  .work_title>h1 {
    font-size: 32px;
  }

}


</style>
