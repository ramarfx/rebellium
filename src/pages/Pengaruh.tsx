import { useRef } from "react";
import useScrollAnimation from "../func/scrollAnimation";

const Pengaruh = () => {
  const pesawatRef = useRef(null);

  useScrollAnimation(pesawatRef, (element, position) => {
    const positionTop = position.top - window.innerHeight;
    let parallaxSpeed = 2;

    if (window.innerWidth <= 768) {
      parallaxSpeed = 0.5; 
    }

    if (positionTop < 0) {
      const parallaxShift = Math.min(Math.abs(positionTop) / 3 * parallaxSpeed, window.innerWidth / 3);
      element.style.transform = `translateX(-${parallaxShift}px)`;
    }
  });
    return ( 
        <section id="pengaruh" className="relative overflow-x-hidden pt-36">
        <img
          src="/icon/pesawat.png"
          loading="eager"
          className="pesawat sm:scl absolute -top-1 right-0 w-auto scale-150 will-change-transform md:h-auto md:max-w-full md:scale-100"
          alt="pesawat"
          ref={pesawatRef}
        />
        <div className="container">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            className="text-center text-3xl font-semibold md:text-4xl"
          >
            Pengaruh dari <span className="text-yellow">Kenakalan Remaja</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            className="mx-auto mt-5 text-center text-sm text-secondary-200 md:max-w-2xl md:text-base"
          >
            Kenakalan remaja memiliki dampak yang luas, mempengaruhi baik individu
            maupun lingkungan sekitarnya dengan menciptakan ketidakstabilan
            emosional dan ketegangan sosial.
          </p>
  
          <div
            className="mt-8 flex flex-wrap justify-evenly gap-10 overflow-x-hidden pb-5"
          >
            {/* <!-- card 1 --> */}
            <div
              id="dampak"
              className="w-full rounded-lg border px-5 py-5 shadow-lg md:w-[400px]"
            >
              <h2 className="mb-5 text-center text-2xl font-semibold">
                Dampak Kenakalan Remaja
              </h2>
  
              <div id="accordion-1" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-11">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-200 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-11"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Perilaku Buruk (Tawuran)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-11"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div
                    className="border border-b-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Terjadinya kerusakan fisik
                      </li>
                      <li className="mb-2 text-gray-500">
                        Kegagalan bidang akademik
                      </li>
                      <li className="mb-2 text-gray-500">Tumbuh rasa kriminalitas</li>
                      <li className="mb-2 text-gray-500">
                        Mempunyai kepribadian Tempramen
                      </li>
                      <li className="mb-2 text-gray-500">
                        Menyebabkan kerugian sosial
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-12">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-12"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-2"
                  >
                    <span>Perilaku Buruk (Narkoba)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-12"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-2"
                >
                  <div
                    className="border border-b-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Terjadinya kerusakan fisik
                      </li>
                      <li className="mb-2 text-gray-500">Mendapat gangguan mental</li>
                      <li className="mb-2 text-gray-500">
                        Pelanggaran terhadap hukum
                      </li>
                      <li className="mb-2 text-gray-500">Rusaknya hubungan sosial</li>
                      <li className="mb-2 text-gray-500">
                        Beresiko overdosis hingga menyebabkan kematian
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-13">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-13"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-3"
                  >
                    <span>Perilaku Buruk (Merokok)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-13"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div
                    className="border border-t-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">Mengurangi Kreatifitas</li>
                      <li className="mb-2 text-gray-500">
                        Menyebabkan ketergantungan emosional
                      </li>
                      <li className="mb-2 text-gray-500">
                        Mengalami gangguan pernafasan
                      </li>
                      <li className="mb-2 text-gray-500">
                        Meningkatkan resiko kanker
                      </li>
                      <li className="mb-2 text-gray-500">Gangguan kesehatan gigi</li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-14">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-14"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-3"
                  >
                    <span>Perilaku Buruk (Seksual)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-14"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div
                    className="border border-t-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Terjadinya pernikahan dini
                      </li>
                      <li className="mb-2 text-gray-500">Tertularnya penyakit HIV</li>
                      <li className="mb-2 text-gray-500">Pengguguran / aborsi</li>
                      <li className="mb-2 text-gray-500">Menurunnya kinerja otak</li>
                      <li className="mb-2 text-gray-500">
                        Timbulnya konflik internal
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-15">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-15"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-3"
                  >
                    <span>Perilaku Buruk (Bullying)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-15"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div
                    className="border border-t-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Berdampak pada psikologis dan emosional
                      </li>
                      <li className="mb-2 text-gray-500">
                        Rusaknya kesehatan mental
                      </li>
                      <li className="mb-2 text-gray-500">
                        Penurunan pada prestasi akademik
                      </li>
                      <li className="mb-2 text-gray-500">
                        Cedera yang dimiliki korban
                      </li>
                      <li className="mb-2 text-gray-500">Mengalami isolasi sosial</li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-16">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-16"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-3"
                  >
                    <span>Perilaku Buruk (Miras)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-16"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div
                    className="border border-t-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb- ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Terjadinya kerusakan fisik
                      </li>
                      <li className="mb-2 text-gray-500">
                        Gangguan koordinasi pada tubuh
                      </li>
                      <li className="mb-2 text-gray-500">Penurunan daya tangkap</li>
                      <li className="mb-2 text-gray-500">Hilangnya fokus belajar</li>
                      <li className="mb-2 text-gray-500">
                        Jatuh kedalam rasa depresi
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div
              id="solusi"
              className="w-full rounded-lg border px-5 py-5 shadow-lg md:w-[400px]"
            >
              <h2 className="mb-5 text-center text-2xl font-semibold">
                Solusi Kenakalan Remaja
              </h2>
  
              <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Perilaku buruk (Tawuran)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div
                    className="border border-b-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Meningkatkan kesadaran diri
                      </li>
                      <li className="mb-2 text-gray-500">
                        Melakukan pendekatan restoratif
                      </li>
                      <li className="mb-2 text-gray-500">
                        Melibatkan keluarga dalam penyelesaian
                      </li>
                      <li className="mb-2 text-gray-500">
                        Menerapkan hukum yang sesuai
                      </li>
                      <li className="mb-2 text-gray-500">
                        Meningkatkan pengawasan di setiap daerah
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-2"
                  >
                    <span>Perilaku Buruk (Narkoba)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-2"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-2"
                >
                  <div
                    className="border border-b-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Mempelajari dampak dari penggunaan narkoba
                      </li>
                      <li className="mb-2 text-gray-500">
                        Membuat prinsip yang kuat pada diri sendiri supaya tidak
                        sedikitpun menyentuh narkoba
                      </li>
                      <li className="mb-2 text-gray-500">
                        Melakukan konsisten olahraga, agar semakin mengerti
                        pentingnya kesehatan
                      </li>
                      <li className="mb-2 text-gray-500">
                        Lebih meyakinkan diri lagi dengan larangan-larangan kitab
                        suci
                      </li>
                      <li className="mb-2 text-gray-500">
                        Berusaha konsisten dengan semua hal yang telah dilakukan
                        dan berusaha menjadi lebih baik lag
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-3"
                  >
                    <span>Perilaku Buruk (Merokok)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-3"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div
                    className="border border-b-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Berusaha menghindari teman yang sedang merokok
                      </li>
                      <li className="mb-2 text-gray-500">
                        Yakin dan jangan malu untuk mengatakan tidak merokok
                      </li>
                      <li className="mb-2 text-gray-500">
                        Menggantikan waktu merokok untuk berolahraga dan hal-hal
                        menyehatkan lainnya
                      </li>
                      <li className="mb-2 text-gray-500">
                        Mempelajari dampak menggunakan rokok pada masa remaja
                      </li>
                      <li className="mb-2 text-gray-500">
                        Menciptakan komunitas anti rokok , yang menyediakan gaya
                        hidup sehat dan memberikan hadiah bagi yang mengikutinya
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-4"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-4"
                  >
                    <span>Perilaku Buruk (Seksual)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-4"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-4"
                >
                  <div
                    className="border border-t-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Mempelajari apa saja dampak orang yang telah melakukan sex
                      </li>
                      <li className="mb-2 text-gray-500">
                        Menjauhi hubungan seperti pacaran
                      </li>
                      <li className="mb-2 text-gray-500">
                        Tidak memiliki rasa ingin tahu lebih terhadap seseorang
                      </li>
                      <li className="mb-2 text-gray-500">
                        Menghindari sekumpulan orang yang dapat menyebabkan
                        terjadinya hubungan diluar pernikahan
                      </li>
                      <li className="mb-2 text-gray-500">
                        Meyakinkan pada diri sendiri agar tidak melakukan hubungan
                        kepada seseorang diluar pernikahan
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-5"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-5"
                  >
                    Perilaku Buruk (Bullying)
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-5"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-5"
                >
                  <div
                    className="border border-t-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Tunjukanlah prestasi yang dapat menyatakan kalau kamu bisa
                      </li>
                      <li className="mb-2 text-gray-500">
                        Menjalinlah pertemanan dengan banyak orang
                      </li>
                      <li className="mb-2 text-gray-500">
                        Jangan pernah menunjukan rasa takutmu dan sedihmu terhadap
                        orang lain
                      </li>
                      <li className="mb-2 text-gray-500">
                        Saat melihat orang lain dibully, jangan takut untuk
                        melapor kepada orang lain
                      </li>
                      <li className="mb-2 text-gray-500">
                        Berbuat baik dan saling menghargai kepada orang
                        sekelilingmu agar terhindar dari persekutuan
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-6">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-gray-100 focus:bg-primary-300 focus:bg-opacity-10 focus:text-primary-200 focus:ring-4 focus:ring-primary-200 focus:ring-opacity-30 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 rtl:text-right"
                    data-accordion-target="#accordion-collapse-body-6"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-6"
                  >
                    <span>Perilaku Buruk (Miras)</span>
                    <svg
                      data-accordion-icon
                      className="h-3 w-3 shrink-0 rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-6"
                  className="hidden"
                  aria-labelledby="accordion-collapse-heading-6"
                >
                  <div
                    className="border border-t-0 border-gray-200 p-5 dark:border-gray-700"
                  >
                    <ul className="mb-2 ml-2 list-decimal text-gray-500">
                      <li className="mb-2 text-gray-500">
                        Jangan sekalipun menyentuh mengkonsumsi minuman keras
                        apapun
                      </li>
                      <li className="mb-2 text-gray-500">
                        Berusahalah untuk menjauh kan diri dari orang yang sedang
                        mengkonsumsi miras
                      </li>
                      <li className="mb-2 text-gray-500">
                        Yakinkanlah pada diri sendiri bahwa miras dapat merusak
                        tubuh
                      </li>
                      <li className="mb-2 text-gray-500">
                        Luangkan waktumu untuk berolahraga dan mempelajari pola
                        hidup sehat
                      </li>
                      <li className="mb-2 text-gray-500">
                        Yakin dan konsisten dalam menjalani hal-hal positif
                        tersebut
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Pengaruh;