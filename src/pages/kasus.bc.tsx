import { useEffect, useRef } from 'react';
import 'swiper/css';
import Swiper from "swiper/bundle";
import { SwiperOptions } from 'swiper/types';
// import 'swiper/css/bundle';

const Kasus = () => {
  const carouselRef = useRef(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (carouselRef.current) {
      const swiperOptions: SwiperOptions = {
        slidesPerView: 1,
        centeredSlides: true
      }

      const carousel = new Swiper(carouselRef.current, swiperOptions);

      buttonRefs.current.forEach((button) => {
        button.addEventListener('click', function () {
          const slideIndex = parseInt(button.dataset.slide);
          carousel.slideTo(slideIndex - 1);
        });
      });

      return () => {
        // Cleanup event listeners
        // eslint-disable-next-line react-hooks/exhaustive-deps
        buttonRefs.current.forEach((button) => {
          button.removeEventListener('click', function () {
            const slideIndex = parseInt(button.dataset.slide);
            carousel.slideTo(slideIndex - 1);
          });
        });
      }
    }
  }, []);

  return (
    <section id="kasus">
      <div className="relative bg-primary-100 pt-20 md:pt-32">
        <div className="overflow-x-hidden">
          <div
            className="absolute -top-10 left-1/2 grid w-full -translate-x-1/2 scale-95 grid-cols-6 rounded-2xl bg-primary-300 sm:w-[80%] md:-top-16 md:w-2/3 md:max-w-screen-md md:scale-100"
          >
            {['Tawuran', 'Narkoba', 'Merokok', 'Seksual', 'Bullying', 'Mabuk'].map((label, index) => (
              <button
                key={index}
                data-slide={index + 1}
                className={`swiper-btn flex flex-col items-center border-primary-200 px-2 py-1 transition-all hover:scale-110 hover:rounded-2xl hover:border-none hover:bg-yellow md:px-7 md:py-5 ${index === 0 ? 'rounded-l-2xl border-r-2' : index === 5 ? 'rounded-r-2xl' : 'border-r-2'}`}
                ref={el => buttonRefs.current[index] = el}
              >
                <img
                  src={`/icon/${label.toLowerCase()}.svg` || `/icon/${label.toLowerCase()}.png`}
                  alt=""
                  className="h-auto w-[75px] md:w-[100px]"
                />
                <p className="font-poppins text-xs font-medium text-white md:text-base">
                  {label}
                </p>
              </button>
            ))}
          </div>

          <div
            className="carousel mx-auto h-min w-[95%] overflow-x-hidden rounded-3xl bg-white"
            ref={carouselRef}
          >
            <div className="swiper-wrapper">
              {/* Slides */}
              <div className="swiper-slide flex w-full items-center justify-center bg-white">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10">
                    <div className="w-full md:w-1/2">
                      <h1 className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl">
                        Membedah Tawuran Remaja
                      </h1>
                      <p className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base">
                        Masyarakat merasa resah dengan fenomena tawuran remaja.
                        Menurut KPAI, tawuran remaja marak terjadi sejak Januari
                        hingga Juni 2022, khususnya setelah Pembelajaran Tatap
                        Muka (PTM) dilanjutkan. Data BPS menunjukkan bahwa
                        tawuran remaja terjadi di 0,22% desa/kelurahan di
                        Indonesia pada 2021. Untuk mencegahnya, penting untuk
                        meningkatkan pendidikan karakter dan kualitas hidup
                        remaja, serta peran aktif orang tua, sekolah, dan
                        pemerintah dalam memberikan pemahaman tentang dampak
                        negatif tawuran.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        loading="lazy"
                        src="/carousel/tawuran.png"
                        className="mx-auto h-full max-h-full w-auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="swiper-slide flex h-full w-full items-center justify-center bg-white">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10">
                    <div className="w-full md:w-1/2">
                      <h1 className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl">
                        Bersama Lawan Narkoba
                      </h1>
                      <p className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base">
                        Masalah kenakalan remaja dalam bentuk penyalahgunaan
                        narkoba menjadi perhatian serius. Menurut laporan BNN,
                        jumlah korban penyalahgunaan narkoba di Indonesia hingga
                        tahun 2019 mencapai angka 3,6 juta orang pengguna,
                        dengan peningkatan sebesar 24 sampai 28 persen pada
                        kalangan remaja. Pencegahan dapat dilakukan melalui
                        edukasi tentang bahaya narkoba, peningkatan kualitas
                        hidup remaja, dan rehabilitasi bagi remaja yang telah
                        terlibat penyalahgunaan narkoba.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        loading="lazy"
                        src="/carousel/narkoba.png"
                        className="mx-auto h-full w-auto max-w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="swiper-slide flex h-full w-full items-center justify-center bg-white">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10">
                    <div className="w-full md:w-1/2">
                      <h1 className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl">
                        Bebas dari Rokok
                      </h1>
                      <p className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base">
                        Kenakalan remaja berupa merokok menjadi perhatian
                        masyarakat. Menurut data Riset Kesehatan Dasar, 52,1%
                        perokok di Indonesia mulai merokok pada usia 15-19
                        tahun. Bahkan, tingkat kecanduan rokok pada remaja di
                        Indonesia masih tinggi dan mengalami kenaikan. Upaya
                        pencegahan merokok pada remaja melibatkan edukasi
                        tentang bahaya merokok, promosi gaya hidup sehat, dan
                        peraturan ketat terkait penjualan rokok kepada remaja.
                        Kampanye global “Commit to Quit” juga menjadi salah satu
                        upaya yang dilakukan untuk mendorong remaja
                        berhenti merokok
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        loading="lazy"
                        src="/carousel/rokok.png"
                        className="mx-auto h-full w-auto max-w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className="swiper-slide flex w-full items-center justify-center bg-white">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10">
                    <div className="w-full md:w-1/2">
                      <h1 className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl">
                        Menghadapi Tantangan Seksual
                      </h1>
                      <p className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base">
                        Tantangan seksual yang dihadapi remaja termasuk
                        pergaulan bebas dan perilaku seksual berisiko. Menurut
                        data BKKBN, 57% remaja di Indonesia telah melakukan
                        hubungan seksual sebelum menikah. Untuk mengatasi
                        permasalahan ini, penting untuk meningkatkan pendidikan
                        seksualitas yang komprehensif, termasuk tentang
                        kesehatan reproduksi, batasan, dan consent. Keterlibatan
                        orang tua, sekolah, dan komunitas juga menjadi kunci
                        dalam memberikan pemahaman yang benar kepada remaja
                        mengenai pentingnya menjaga perilaku seksual yang
                        sehat dan aman.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        loading="lazy"
                        src="/carousel/seksual.png"
                        className="mx-auto h-full w-auto max-w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* card 5 */}
              <div className="swiper-slide flex h-full w-full items-center justify-center bg-white">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10">
                    <div className="w-full md:w-1/2">
                      <h1 className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl">
                        Menghentikan Bullying
                      </h1>
                      <p className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base">
                        Bullying menjadi masalah serius dalam kehidupan remaja.
                        Berdasarkan data KPAI, terdapat 2.473 kasus bullying di
                        Indonesia pada tahun 2020. Bullying dapat memberikan
                        dampak negatif jangka panjang bagi korban, termasuk
                        masalah kesehatan mental dan rendahnya kepercayaan diri.
                        Pencegahan bullying memerlukan pendekatan holistik
                        melibatkan edukasi tentang empati, regulasi emosi,
                        peningkatan kualitas hubungan antar remaja, serta
                        tindakan tegas terhadap pelaku bullying. Kampanye
                        “Anti-Bullying” di berbagai sekolah juga menjadi
                        bagian dari upaya mencegah dan menghentikan bullying.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        loading="lazy"
                        src="/carousel/bullying.png"
                        className="mx-auto h-full w-auto max-w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* card 6 */}
              <div className="swiper-slide flex h-full w-full items-center justify-center bg-white">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10">
                    <div className="w-full md:w-1/2">
                      <h1 className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl">
                        Lawan Mabuk Sejak Dini
                      </h1>
                      <p className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base">
                        Kenakalan remaja berupa penyalahgunaan alkohol menjadi
                        perhatian serius. Menurut data WHO, 4,3% remaja di
                        Indonesia mengkonsumsi alkohol secara berlebihan.
                        Penyalahgunaan alkohol dapat berdampak negatif pada
                        kesehatan fisik dan mental remaja, serta meningkatkan
                        risiko perilaku berbahaya. Pencegahan penyalahgunaan
                        alkohol pada remaja melibatkan edukasi tentang bahaya
                        alkohol, promosi gaya hidup sehat, serta pengawasan dan
                        dukungan dari keluarga dan komunitas.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        loading="lazy"
                        src="/carousel/miras.png"
                        className="mx-auto h-full w-auto max-w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kasus;
