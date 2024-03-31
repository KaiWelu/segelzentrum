// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Ausstattung = () => {
  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Ausstattung des Hauses</h1>
        <p>
          Unser Haus verfügt über vier Schlaftrakte mit insgesamt 96 Betten
          verteilt auf 30 Zimmer. Eine zusätzliche Aufbettung ist möglich. Die
          sanitären Anlagen befinden sich jeweils auf den Fluren, Waschbecken
          auf den Zimmern. Aufgrund von Sanierungsmaßnahmen stehen aktuell nur
          71 Betten verteilt auf 15 Zimmer zur Verfügung.
        </p>
        <p>
          Es stehen Ihnen folgende Seminar- und Gruppenräume zur Verfügung: 1
          großer Tagungsraum für ca. 80 Personen, 2 mittelgroße Seminar/
          Gruppenräume für ca. 30–40 Personen, 2 kleinere Aufenthaltsräume für
          ca. 15-20 Personen, 1 hausinterne Hafenkneipe für ca. 35 Personen, 2
          Speisesäle für je 100 Personen und 30 Personen, 1 Teeküche.
        </p>
        <p>
          Die Mahlzeiten nehmen Sie mit Blick auf den Ratzeburger See ein.
          Unsere Küche stellt sich auf Ihre Wünsche ein und kann Ihnen, bei
          einer rechtzeitigen Anmeldung, außer der „normalen“ Verpflegung auch
          eine vegetarische oder auch Vollwertkost anbieten.
        </p>
        <p>
          In den Sommermonaten bietet sich die besondere Gelegenheit, bei einem
          der unbeschreiblichen Sonnenuntergänge in unserem Hafen zu grillen.
          Genießen Sie zudem die Ruhe am Abend in netter Runde in der
          Hafenkneipe, draußen am See oder auf dem Bootssteg.
        </p>
        <p>
          Unser Haus verfügt außerdem über eine Wohnung mit wunderschönem
          Seeblick. Die Wohnung hat vier Schlafräume mit max. 12 Betten, eine
          Küche, ein Bad mit Dusche und WC, ein Bad mit Dusche, Badewanne und WC
          sowie ein Gäste-WC. Bei einer Buchung besteht auch die Möglichkeit der
          Selbstversorgung. Ein großer heller Aufenthaltsraum mit Fernseher,
          eine große Seeterrasse mit eigenem Aufgang und ein direkter Zugang zum
          See sorgen für eine einmalige Lage und Atmosphäre.
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

export default Ausstattung;
