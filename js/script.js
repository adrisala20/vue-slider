import {slides} from './data.js';
const {createApp} = Vue;
createApp({
    data(){
        return {
            slides: slides,
            activeIndexSlide: 0,
        
        }
    },
    methods:{
        nextCard(){
            this.activeIndexSlide++;
        },
        prevCard(){
            this.activeIndexSlide--;
        }

    }
}).mount('#app');