import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';
import IonIcon from '@reacticons/ionicons';

Swiper.use([Navigation, Autoplay, EffectCoverflow]);

const Team: React.FC = () => {
  const teamSwiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (teamSwiperRef.current) {
      new Swiper(teamSwiperRef.current, {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        autoplay: {
          delay: 5000,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: -20,
          depth: 200,
          modifier: 2.5,
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        initialSlide: 2,
      });
    }
  }, []);

  return (
    <section id="team" className="pb-10 pt-20">
      <div className="container">
        <h1
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          className="text-center font-radioCasnada text-3xl font-semibold md:text-4xl"
        >
          Tim <span className="text-yellow">kami</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          className="text-center text-base text-secondary-200"
        >
          Bersama <span className="font-bold">Rebellum</span>, kenakalan remaja
          <span className="font-bold"> Terhapuskan!</span>
        </p>

        <div className="swiper team w-full sm:min-w-[670px] md:w-1/2" ref={teamSwiperRef}>
          <div className="swiper-wrapper my-8">
            {/* <!-- Slides --> */}
            <div className="swiper-slide">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="px-2 py-3">
                      <img
                        alt="team image"
                        src="/team/salman.jpg"
                        className="mx-auto h-[165px] w-auto self-start rounded-md object-cover"
                      />
                      <div className="my-4">
                        <h1 className="text-center text-base font-bold">
                          M. Salman Al Farisi
                        </h1>
                        <p className="text-center text-sm">Leader, data analyst</p>
                      </div>
                      <div className="grid w-full grid-cols-3 justify-items-center gap-3">
                        <a
                          href="https://www.instagram.com/avlfarizii/"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-instagram" className="text-white" />
                        </a>
                        <a
                          href="#"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-linkedin" className="text-white" />
                        </a>
                        <a
                          href="https://github.com/avlfarizii"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-github" className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back flex items-center justify-center">
                    <p>"Jangan lupa titik koma"</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- aldo --> */}
            <div className="swiper-slide">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="px-2 py-3">
                      <img
                        alt="team image"
                        src="/team/aldo.jpg"
                        className="mx-auto h-[165px] w-auto self-start rounded-md object-cover"
                      />
                      <div className="my-4">
                        <h1 className="text-center text-base font-bold">
                          Reynaldo Yusellino
                        </h1>
                        <p className="text-center text-sm">
                          Programmer, 3D designer
                        </p>
                      </div>
                      <div className="grid w-full grid-cols-3 justify-items-center gap-3">
                        <a
                          href="https://www.instagram.com/rynldysllino"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-instagram" className="text-white" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/reynaldo-yusellino-564724270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-linkedin" className="text-white" />
                        </a>
                        <a
                          href="https://github.com/reynaldo0"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-github" className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back flex items-center justify-center">
                    <p>"Jangan lupa titik koma"</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- rama --> */}
            <div className="swiper-slide">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="px-2 py-3">
                      <img
                        alt="team image"
                        src="/team/rama.jpg"
                        className="mx-auto h-[165px] w-auto self-start rounded-md object-cover"
                      />
                      <div className="my-4">
                        <h1 className="text-center text-base font-bold">
                          Ramadina A.
                        </h1>
                        <p className="text-center text-sm">Programmer</p>
                      </div>
                      <div className="grid w-full grid-cols-3 justify-items-center gap-3">
                        <a
                          href="https://www.instagram.com/ramtxh"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-instagram" className="text-white" />
                        </a>
                        <a
                          href="#"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-linkedin" className="text-white" />
                        </a>
                        <a
                          href="https://www.github.com/ramarfx"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-3xl"
                        >
                          <IonIcon name="logo-github" className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back flex items-center justify-center">
                    <p>"Jangan lupa titik koma"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <button
              className="button-prev flex h-[50px] w-[50px] items-center justify-center rounded-full border border-yellow bg-transparent text-yellow transition ease-in-out hover:bg-yellow hover:text-white"
            >
              <IonIcon name="chevron-back-outline"/>
            </button>
            <button
              className="button-next flex h-[50px] w-[50px] items-center justify-center rounded-full border border-yellow bg-transparent text-yellow transition ease-in-out hover:bg-yellow hover:text-white"
            >
              <IonIcon name="chevron-forward-outline"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
