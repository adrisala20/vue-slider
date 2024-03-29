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
            if(this.activeIndexSlide < this.slides.length){
                this.activeIndexSlide++;
            } else {
                this.activeIndexSlide = 0;
            }
        },
        prevCard(){
            if(this.activeIndexSlide > this.slides.length){
                this.activeIndexSlide--;
            }  else {
                this.activeIndexSlide = -1;
            }
        }

    }
}).mount('#app');