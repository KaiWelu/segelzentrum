// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Tagungen = () => {
  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Tagen und Erholen</h1>
        <p>
          Neben den Wassersportaktivitäten bietet sich unser Haus - vor allem
          auch in den Wintermonaten - besonders für Tagungs- und Seminargruppen,
          Chorfreizeiten und Jugendfreizeiten an.
        </p>
        <p>
          In unserem Haus besteht ein umfassendes Raumangebot. So haben unsere
          Gäste die Möglichkeit, verschieden große Seminarräume (25–100 qm),
          Aufenthaltsräume und eine hausinterne Hafenkneipe, die direkt am See
          liegt, zu nutzen.
        </p>
        <p>
          Zudem stellen wir Ihnen gerne eine umfassende mediale Ausstattung
          (Beamer, TV, DVD, Video, Audiogeräte, Leinwände, Pinnwände und
          Flipcharts) zur Verfügung, ebenso wie ein Klavier und ein Keyboard.
        </p>
        <p>
          Im Haus haben Sie außerdem die Möglichkeit, Tischtennisplatten und
          einen Kicker für Ihre Freizeitgestaltung zu verwenden. Eine Sporthalle
          (nach Voranmeldung) sowie andere Einrichtungen (Hallenbad, Kino,
          Museen) können in der unmittelbaren Nähe besucht und genutzt werden.
        </p>
        <div className="py-4">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="normalSwiper shadow-md shadow-slate-300"
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
            <SwiperSlide>
              <img
                src="/public/assets/images/hero-carousel/cvjm_impression_2.jpg"
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
      </section>
    </div>
  );
};

export default Tagungen;
