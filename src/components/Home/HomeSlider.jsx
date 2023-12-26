
import Slider from "react-slick";

import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';



const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <div>
            <Slider {...settings}>
          <div>

              <img className="slider-img" src={slider1} alt="" />
             
            
          </div>
          <div>
          <img className="slider-img" src={slider2} alt="" />
             
          </div>
          <div>
          <img className="slider-img" src={slider3} alt="" />
             
          </div>
          
        </Slider>
        </div>
    );
};

export default HomeSlider;