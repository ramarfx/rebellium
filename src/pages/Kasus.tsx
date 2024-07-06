import 'swiper/css';
import Swiper from "swiper/bundle";
import { SwiperOptions } from 'swiper/types';
// import 'swiper/css/bundle';

const swiperOptions: SwiperOptions = {
  slidesPerView: 1,
  centeredSlides: true
}

const carousel: Swiper = new Swiper('.carousel', swiperOptions);

const buttons = document.querySelectorAll('.swiper-btn');
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const slideIndex = parseInt(button.dataset.slide);
    carousel.slideTo(slideIndex - 1);
  });
});


const Kasus = () => {
  return (
    <section id="kasus">
      <div className="relative bg-primary-100 pt-20 md:pt-32">
        <div className="overflow-x-hidden">
          <div
            className="absolute -top-10 left-1/2 grid w-full -translate-x-1/2 scale-95 grid-cols-6 rounded-2xl bg-primary-300 sm:w-[80%] md:-top-16 md:w-2/3 md:max-w-screen-md md:scale-100"
          >
            <button
              data-slide={1}
              className="swiper-btn flex flex-col items-center rounded-l-2xl border-r-2 border-primary-200 px-2 py-1 transition-all hover:scale-110 hover:border-none hover:bg-yellow md:px-7 md:py-5"
            >
              <img
                src="/icon/celurit-putih.png"
                alt=""
                className="h-auto w-[75px] md:w-[100px]"
              />
              <p
                className="font-poppins text-xs font-medium text-white md:text-base"
              >
                Tawuran
              </p>
            </button>
            <button
              data-slide="2"
              className="swiper-btn flex flex-col items-center border-r-2 border-primary-200 px-2 py-1 transition-all hover:scale-110 hover:rounded-2xl hover:border-none hover:bg-yellow md:px-7 md:py-5"
            >
              <img
                src="/icon/narkoba.svg"
                alt=""
                className="h-auto w-[75px] md:w-[100px]"
              />
              <p
                className="font-poppins text-xs font-medium text-white md:text-base"
              >
                Narkoba
              </p>
            </button>
            <button
              data-slide="3"
              className="swiper-btn flex flex-col items-center border-r-2 border-primary-200 px-2 py-1 transition-all hover:scale-110 hover:rounded-2xl hover:border-none hover:bg-yellow md:px-7 md:py-5"
            >
              <img
                src="/icon/rokok.svg"
                alt=""
                className="h-auto w-[75px] md:w-[100px]"
              />
              <p
                className="font-poppins text-xs font-medium text-white md:text-base"
              >
                Merokok
              </p>
            </button>
            <button
              data-slide="4"
              className="swiper-btn flex flex-col items-center border-r-2 border-primary-200 px-2 py-1 transition-all hover:scale-110 hover:rounded-2xl hover:border-none hover:bg-yellow md:px-7 md:py-5"
            >
              <img
                src="/icon/seksual.svg"
                alt=""
                className="h-auto w-[75px] md:w-[100px]"
              />
              <p
                className="font-poppins text-xs font-medium text-white md:text-base"
              >
                Seksual
              </p>
            </button>
            <button
              data-slide="5"
              className="swiper-btn flex flex-col items-center border-r-2 border-primary-200 px-2 py-1 transition-all hover:scale-110 hover:rounded-2xl hover:border-none hover:bg-yellow md:px-7 md:py-5"
            >
              <img
                src="/icon/bully.svg"
                alt=""
                className="h-auto w-[75px] md:w-[100px]"
              />
              <p
                className="font-poppins text-xs font-medium text-white md:text-base"
              >
                Bullying
              </p>
            </button>
            <button
              data-slide="6"
              className="swiper-btn flex flex-col items-center rounded-r-2xl border-primary-200 px-2 py-1 transition-all hover:scale-110 hover:border-none hover:bg-yellow md:px-7 md:py-5"
            >
              <img
                src="/icon/miras.svg"
                alt=""
                className="h-auto w-[75px] md:w-[100px]"
              />
              <p
                className="font-poppins text-xs font-medium text-white md:text-base"
              >
                Mabuk
              </p>
            </button>
          </div>

          <div
            className="carousel mx-auto h-min w-[95%] overflow-x-hidden rounded-3xl bg-white"
          >
            <div className="swiper-wrapper">
              {/* Slides  */}

              {/* card 1 */}
              <div
                className="swiper-slide flex w-full items-center justify-center bg-white"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    id="card-1"
                    className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10"
                  >
                    <div className="w-full md:w-1/2">
                      <h1
                        className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl"
                      >
                        Membedah Tawuran Remaja
                      </h1>
                      <p
                        className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base"
                      >
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
              <div
                className="swiper-slide flex h-full w-full items-center justify-center bg-white"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    id="card-1"
                    className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10"
                  >
                    <div className="w-full md:w-1/2">
                      <h1
                        className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl"
                      >
                        Bersama Lawan Narkoba
                      </h1>
                      <p
                        className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base"
                      >
                        Masalah kenakalan remaja dalam bentuk penyalahgunaan
                        narkoba menjadi perhatian serius. Menurut laporan BNN,
                        jumlah korban penyalahgunaan narkoba di Indonesia hingga
                        tahun 2019 mencapai angka 3,6 juta orang pengguna,
                        dengan peningkatan sebesar 24 sampai 28 persen pada
                        kalangan remaja. Pencegahan dapat dilakukan melalui
                        edukasi tentang bahaya narkoba, peningkatan kualitas
                        hidup remaja, dan rehabilitasi bagi remaja yang telah
                        terlibat penyalahgunaan narkoba.
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
              <div
                className="swiper-slide flex h-full w-full items-center justify-center bg-white"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    id="card-1"
                    className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10"
                  >
                    <div className="w-full md:w-1/2">
                      <h1
                        className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl"
                      >
                        Bebas dari Rokok
                      </h1>
                      <p
                        className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base"
                      >
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
                        berhenti merokok
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
              <div
                className="swiper-slide flex w-full items-center justify-center bg-white"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    id="card-1"
                    className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10"
                  >
                    <div className="w-full md:w-1/2">
                      <h1
                        className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl"
                      >
                        Menghadapi Tantangan Seksual
                      </h1>
                      <p
                        className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base"
                      >
                        Perilaku seksual berisiko di kalangan remaja Indonesia
                        menjadi isu serius. Menurut data UNICEF, 17-56% anak
                        Indonesia yang mengalami eksploitasi seksual dan
                        perlakuan tidak diinginkan di dunia maya tidak
                        melaporkan kejadian tersebut. Data PKBI Jawa Tengah
                        tahun 2010 juga menunjukkan banyak remaja yang
                        berhubungan seksual pranikah, hamil pranikah, mengalami
                        infeksi menular seksual, dan melakukan aborsi. Upaya
                        pencegahan meliputi edukasi seksualitas sehat, pemahaman
                        hak asasi, perlindungan hukum, dan akses ke layanan
                        kesehatan reproduksi yang aman dan terjangkau.
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
              <div
                className="swiper-slide flex w-full items-center justify-center bg-white"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    id="card-1"
                    className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10"
                  >
                    <div className="w-full md:w-1/2">
                      <h1
                        className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl"
                      >
                        Tolak Perundungan
                      </h1>
                      <p
                        className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base"
                      >
                        Perundungan atau bullying di kalangan remaja menjadi isu
                        serius. Menurut FSGI, ada 16 kasus perundungan di
                        sekolah pada periode Januari hingga Agustus 2023,
                        terutama di SD dan SMP. Pencegahan melibatkan pengawasan
                        sekolah, kampanye anti perundungan, sosialisasi,
                        aktivitas ekstrakurikuler, dan pembekalan pengetahuan
                        untuk menghadapi perundungan.
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
              <div
                className="swiper-slide flex w-full items-center justify-center bg-white"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    id="card-1"
                    className="flex flex-col flex-wrap items-center gap-5 rounded-xl bg-white px-5 py-8 sm:gap-0 md:flex-row md:justify-between md:px-10"
                  >
                    <div className="w-full md:w-1/2">
                      <h1
                        className="mb-5 font-radioCasnada text-2xl font-semibold sm:text-3xl md:text-4xl"
                      >
                        Remaja Sehat, Tanpa Miras
                      </h1>
                      <p
                        className="w-fit max-w-screen-sm text-sm text-secondary-200 md:text-base"
                      >
                        Kenakalan remaja berupa konsumsi minuman keras menjadi
                        perhatian masyarakat. Menurut data Riskesdas Kementerian
                        Kesehatan tahun 2007, 4,9% remaja di Indonesia
                        mengonsumsi minuman keras. Meski konsumsi alkohol di
                        Indonesia menurun sejak 2017-2021, pola konsumsi minuman
                        keras di kalangan remaja terus mengalami peningkatan dan
                        kerap menjadi pemicu perilaku kekerasan dan
                        kriminalitas. Upaya pencegahan melibatkan edukasi
                        tentang bahaya konsumsi alkohol, promosi gaya hidup
                        sehat, dan peraturan ketat terkait penjualan
                        alkohol kepada remaja.
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
             {/* If we need pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <img
        alt="wave"
        src="./assets/wave-triangle.png"
        className="m-auto -mt-1 flex h-auto w-full"
         style={{ ['WebkitUserDrag' as any]: 'none' }}
      />
    </section>
  )
}

export default Kasus