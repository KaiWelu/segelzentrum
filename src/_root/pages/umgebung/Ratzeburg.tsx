// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Ratzeburg = () => {
  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Ratzeburg</h1>
        <p>
          Ratzeburg und seine Umgebung sind nicht nur geprägt von einer
          außergewöhnlichen Landschaft und Natur, sondern auch von den Zeichen
          der deutsch-deutschen Geschichte, war der Ratzeburger See zu Zeiten
          der DDR doch eine natürliche Grenze. Nördlich Kalkütte verlief am
          Ostufer des Ratzeburger Sees die Grenze zwischen der BRD und der DDR
          und war mit Grenz- und Wachposten versehen. Noch heute zeugen
          verschiedene Gebäude, Grenzpfeiler und Mahnmäler wie beispielsweise
          das Grenzhus (grenzhus.de) von dieser Zeit und erinnern nicht nur an
          die Geschichte, sondern sind es auch wert, besichtigt und erkundet zu
          werden.
        </p>
        <p>
          Das Freizeitzentrum ist umgeben von vielen historischen Stätten und
          Museen. Viele Attraktionen liegen in unmittelbarer Nähe des Hauses. So
          erreichen Sie den Ratzeburger Dom, das Kreismuseum und das A.-Paul
          Weber Museum in ca. 100 Meter Entfernung. Den Marktplatz in Ratzeburg,
          das Ernst-Barlach Museum, das Schwimmbad, das Kino und unser
          Hallenschwimmbad erreichen Sie in 300–400 Meter Entfernung. Zudem
          befindet sich eine Sporthalle direkt am Haus.
        </p>
        <p>
          Ebenfalls sind Ausflüge in die nähere Umgebung schnell und
          unkompliziert mit der Bahn oder Bussen zu organisieren. Wenn Sie einen
          Ausflug nach Lübeck, Schwerin, Wismar, Travemünde, oder nach Hamburg
          planen, sind wir Ihnen bei der Organisation gerne behilflich.
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

export default Ratzeburg;
