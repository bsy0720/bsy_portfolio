<template>
<div>
  <nav class="burgerMenu_wrap">
    <div class="burger_btn" @click="openNav">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div id="mySidenav" class="sidenav">
      <ul>
        <div class="closebtn" v-on:click="closeNav">&times;</div>
        <li v-on:click="gotointro">Main</li>
        <li v-on:click="gotoabout">About Me</li>
        <li class="mb_subMenu_wrap">
          Project
          <ul class="mb_subMenu">
            <li v-on:click="gotowebclone">Web Clone</li>
            <li v-on:click="gotodevelop">Front-end Develop</li>
          </ul>
        </li>
        <li v-on:click="gotocontact">Contact</li>
      </ul>
    </div>
  </nav>
<nav class="fixMenu">
   <div class="mainLogo">
    <img src="/img/bsy_logo2.png">
   </div>
   <div class="r_menu_wrap">
    <ul class="r_menu">
      <li class="pt bold" v-on:click="gotointro">Main</li>
      <li class="pt bold" v-on:click="gotoabout">About Me</li>
      <li class="subMenu_wrap bold">
        Project
        <ul class="subMenu">        
          <li class="pt down" v-on:click="gotodevelop">Front-end Develop</li>
           <li class="pt down" v-on:click="gotowebclone">Web Clone</li>
        </ul>
      </li>
      <li class="pt bold" v-on:click="gotocontact">Contact</li>
    </ul>
  </div>
</nav>

    <intro id="intro"></intro>
    <about id="about"></about>
    <develop id="develop"></develop>
    <webclone id="webclone"></webclone>   
    <contact id="contact"></contact> 
</div>
</template>

<script>
import intro from './components/intro.vue'
import about from './components/aboutMe.vue'
import develop from './components/frontEndDevelop.vue'
import webclone from './components/webClone.vue'
import contact from './components/contact.vue'



export default {
  name: 'App',
  data:function() {
    return {
      sideNav_btn: false,       
    }   
  },
  methods: {
    gotointro() {
      const intro = document.getElementById('intro')
      if(intro) {
        intro.scrollIntoView({behavior:'smooth'})
      }
    },
    gotoabout() {
      const about = document.getElementById('about')
      if(about) {
        about.scrollIntoView({behavior:'smooth'})
      }
    },
    gotowebclone() {
      const webclone = document.getElementById('webclone')
      if(webclone) {
        webclone.scrollIntoView({behavior:'smooth'})
      }
    },
    gotodevelop() {
      const develop = document.getElementById('develop')
      if(develop) {
        develop.scrollIntoView({behavior:'smooth'})
      }
    },
    gotocontact() {
      const contact = document.getElementById('contact')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    openNav: function() {
    document.getElementById("mySidenav").style.width = "250px";
},
/* Set the width of the side navigation to 0 */
    closeNav: function() {
    document.getElementById("mySidenav").style.width = "0";
},
    
},

  components: {
    intro,
    about,
    develop,
    webclone,
    contact,
  }
}
</script>

<style scoped>
.fixMenu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  box-sizing: border-box;
  position: fixed;
  z-index: 9;
  align-items: center;
}

.r_menu {
  text-align: right;
  list-style: none;
  margin: 0;
  padding: 0;
} 

.r_menu li {
  margin: 5px 0;
  font-size: 20px; 
}

.bold {
  font-weight: bold;
}

.mainLogo>img {
  width: 150px; 
  height: 150px;
}

.subMenu_wrap {
  cursor: pointer;
}

.subMenu {
  padding-left: 30px;
  list-style: none;
}

.pt {
  cursor: pointer;
}

.subMenu>.down {
  font-size: 15px; 
}

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: #ebe7f1; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 90px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

.sidenav .mb_subMenu {
  padding-left: 10px;
}
.sidenav li {
  text-decoration: none;
  font-size: 25px;
  color: #000;
  display: block;
  transition: 0.3s;
  cursor: pointer;
}

.sidenav li:hover {
  color: #9400D3;
}

.sidenav .closebtn {
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #000;
  cursor: pointer;
}

.burgerMenu_wrap {
  display: none;
}

.burger_btn {
  display: block;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9;
  cursor: pointer;
}

.burger_btn>span {
  display: block;
  width: 40px;
  height: 4px;
  margin: 10px 0;
  text-align: center;
  background-color: #111;
  border-radius: 8px;
}

.mb_subMenu_wrap li {
  font-size: 18px;
  cursor: pointer;
}









@media only screen and (max-width: 1000px) {
  .fixMenu {
    padding: 10px 10px;
  }

  .r_menu li {
    font-size: 18px;
  }

  .mainLogo>img {
    width: 120px;
    height: 120px;
  }

  .subMenu>.down {
    font-size: 14px;
  }

  .w1440 {
    padding: 0 15px;
  }

  .burgerMenu_wrap {
    display: block;
  }

  .fixMenu {
    width: auto;
  }

  .r_menu_wrap {
    display: none;
  }

  .sidenav {
    z-index: 999;
  }
}

</style>
