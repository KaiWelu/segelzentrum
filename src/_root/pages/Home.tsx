// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div className="p-1 mt-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/public/assets/images/hero-carousel/cvjm_impression_1.jpg"
            alt="sailing"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/assets/images/hero-carousel/cvjm_impression_2.jpg"
            alt="sailing"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
