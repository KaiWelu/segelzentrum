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
          <div>
            <img
              src="/public/assets/images/hero-carousel/cvjm_impression_2.jpg"
              alt="sailing"
            />

            <div className="w-full h-16 bg-primary-2 triangle-overlay absolute bottom-28"></div>
            <div className="w-full h-32 bg-primary-2 flex justify-center">
              <p className="text-white inline-block align-middle">
                Ratzeburg ist einfach schön!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
