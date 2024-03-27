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
    <div className="p-1 mt-2 mx-auto max-w-screen-xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="heroSwiper"
      >
        <SwiperSlide>
          <img
            src="/public/assets/images/hero-carousel/cvjm_impression_1.jpg"
            alt="sailing"
          />
          <div className="w-full h-16 bg-primary-2 triangle-overlay absolute bottom-28"></div>
          <div className="w-full h-32 bg-primary-2 flex justify-center">
            <p className="text-white md:text-2xl lg:text-3xl font-light mt-8 px-4">
              Ratzeburg ist einfach schön! Komm einfach zum Segeln her du
              Lappen!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/assets/images/hero-carousel/cvjm_impression_2.jpg"
            alt="sailing"
          />
          <div className="w-full h-16 bg-primary-2 triangle-overlay absolute bottom-28"></div>
          <div className="w-full h-32 bg-primary-2 flex justify-center">
            <p className="text-white md:text-2xl lg:text-3xl  font-extralight mt-8 px-4">
              Ratzeburg ist schön! Komm einfach zum Segeln her du Lappen!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/assets/images/hero-carousel/cvjm_impression_2.jpg"
            alt="sailing"
          />
          <div className="w-full h-16 bg-primary-2 triangle-overlay absolute bottom-28"></div>
          <div className="w-full h-32 bg-primary-2 flex justify-center">
            <p className="text-white md:text-2xl lg:text-3xl font-light mt-8 px-4">
              Ratzeburg ist einfach schön! Wie lange kann ich hier text
              reinpacken?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/assets/images/hero-carousel/cvjm_impression_2.jpg"
            alt="sailing"
          />
          <div className="w-full h-16 bg-primary-2 triangle-overlay absolute bottom-28"></div>
          <div className="w-full h-32 bg-primary-2 flex justify-center">
            <p className="text-white md:text-2xl lg:text-3xl font-light mt-8 px-4">
              Ratzeburg ist einfach schön! Wie lange kann ich hier text
              reinpacken?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
