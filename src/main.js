import {
    createApp
} from 'vue'
import App from './App.vue'
import '/public/js/animation.js'

import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUuLD-I-aKC93eedTmXMBsK6yEuZOsz40",
    authDomain: "bsy-portfolio.firebaseapp.com",
    projectId: "bsy-portfolio",
    storageBucket: "bsy-portfolio.appspot.com",
    messagingSenderId: "541091892213",
    appId: "1:541091892213:web:0416c3ef5a3a7136ea6ebc"
};


// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App)

app.mount('#app')