import './style.css'
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  perPage: 4,
  gap: "1rem",

  autoScroll: {
    speed: 32,
    pauseOnHover: false,
    pauseOnFocus: false,
  },
  
  breakpoints: {
      1200: { 
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      }
    },
  pagination: false,
});
splide.mount( { AutoScroll } );



