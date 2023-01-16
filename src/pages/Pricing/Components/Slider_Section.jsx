import "../../../Assets/Styles/price_section.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from "../../../Assets/Image/trust_1.png"
import img2 from "../../../Assets/Image/trust_2.png"
import img3 from "../../../Assets/Image/trust_3.png"
import img4 from "../../../Assets/Image/trust_4.png"
import img5 from "../../../Assets/Image/trust_5.png"
import img6 from "../../../Assets/Image/trust_6.png"
import img7 from "../../../Assets/Image/trust_7.png"
import img8 from "../../../Assets/Image/trust_8.png"
import img9 from "../../../Assets/Image/trust_9.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const SliderSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <>
        <div className="Slider_Section">
            <h3>TRUSTED BY</h3>
             <Swiper
            spaceBetween={3}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img1} alt="avatar" />
                   <img src={img2} alt="avatar" />
                   <img src={img3} alt="avatar" />
                   <img src={img4} alt="avatar" />
                   <img src={img5} alt="avatar" />
                   <img src={img6} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img4} alt="avatar" />
                   <img src={img5} alt="avatar" />
                   <img src={img6} alt="avatar" />
                   <img src={img7} alt="avatar" />
                   <img src={img8} alt="avatar" />
                   <img src={img9} alt="avatar" />
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        <div className="Slider_mobile_Section">
            <h3>TRUSTED BY</h3>
             <Swiper
            spaceBetween={3}
            centeredSlides={true}
            autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img1} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img2} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img3} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img4} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img5} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img6} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img7} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img8} alt="avatar" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div data-aos="fade-up" className="Slider_Img_Container">
                   <img src={img9} alt="avatar" />
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        </>
    );
}
 
export default SliderSection;