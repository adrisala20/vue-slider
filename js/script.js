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
            }
            
        },
        prevCard(){
            this.activeIndexSlide--;
        }

    }
}).mount('#app');