// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const UberUns = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-5 p-4">
      <section id="uberuns">
        <h1 className="font-semibold text-2xl mb-2 ">Über uns</h1>
        <p className="py-2 text-lg font-light">
          Ende der sechziger Jahre wurde das heutige CVJM Freizeit- und
          Segelzentrum zusammen mit der Ruderakademie in Ratzeburg gebaut. Das
          Segelzentrum liegt auf der Dominsel direkt am schönen Ratzeburger See.
          Im Jahre 1982 hat der CVJM Nordbund e.V. das Segelzentrum übernommen
          und seit dem 01. August 2007 wird das Segelzentrum unter der Regie der
          gemeinnützigen GmbH CVJM Freizeit- und Segelzentrum Ratzeburg geführt.
          Das Haus ist Mitglied im CVJM Brückenschlag Nord-Ost, im Deutschen
          Seglerverband (DSV) und im Verband Deutscher Sportbootschulen (VDS).
        </p>
        <p className="py-2">
          Das CVJM Freizeit- und Segelzentrum in Ratzeburg ist eine Einrichtung
          für Kinder, Jugendliche, junge Erwachsene und Menschen mit
          Behinderungen, die Alternativen zu den üblichen kommerziellen
          gesellschaftlichen Freizeitbeschäftigungs-möglichkeiten aufzeigt,
          anbietet und umsetzt. Unser Konzept zielt ganz wesentlich auf die
          Förderung integrativer Jugendarbeit ab. So bieten wir als anerkannter
          Träger der freien Jugendhilfe mit unseren ehrenamtlichen Mitarbeitern
          (Segellehrern und Jugendgruppenleitern) eine Jugendarbeit an, die sich
          mit dem Element Wasser beschäftigt. In den integrativen Programmen für
          Menschen mit Behinderungen wollen wir den Segelsport nutzen, um
          Menschen mit und ohne Behinderungen die Gelegenheit zu geben, ohne
          Ausgrenzungen gleiche Erfahrungen zu machen. Die hierfür erforderliche
          Betreuung leisten ebenfalls ausgebildete ehrenamtliche Mitarbeiter.
          Ein ebenso gleichwertiges Ziel stellen unsere weiteren Angebote in den
          Bereichen politische, ökologische, musikalische und kulturelle
          Jugendbildung dar.
        </p>
        <p className="py-2">
          Unsere Programme beinhalten eine pädagogische, therapeutische, aber
          auch sportliche Komponente. Der Segelsport dient bei unseren
          Programmen dazu, Menschen in vorgegebenen Situationen, manchmal auch
          in Extremsituationen, auf Teamarbeit, Gemeinschaft, Rücksicht und
          Vorsorge zu trainieren. Zudem ist es das Ziel unserer Arbeit, Menschen
          unterschiedlicher Herkunft und Religion zusammenzubringen. Hierfür
          nutzen wir die vielfältigen Möglichkeiten der sportlichen Aktivität
          auf dem Wasser.
        </p>
        <p className="py-2">
          Das CVJM Freizeit- und Segelzentrum bietet sein Programm im Rahmen
          einer umfassenden Betreuung an und ist ausschließlich gemeinnützig
          tätig. Zudem arbeitet es sehr eng mit dem Förderverein „Segeln im
          CVJM“ e.V. zusammen und fördert über diesen in einem hohen Maße das
          Ehrenamt.
        </p>
        <div className="py-2">
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

export default UberUns;
