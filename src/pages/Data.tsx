export const Data = () => {
  return (
    <section id="data" className="pb-[600px] md:pb-[1000px]">
      <div className="relative overflow-hidden pt-48">
        <img
          src="/city.png"
          alt="city"
          loading="eager"
          className="city relative -left-60 bottom-20 -z-10 -mt-5 scale-150 will-change-transform md:w-full md:scale-[1.7]"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="300"
        id="data-children"
        className="z-20 -mt-20 h-96 w-full rounded-t-3xl bg-white pt-10 md:-mt-28 md:rounded-t-[126px]"
      >
        <div id="data-inner" className="container">
          <h1
            className="mb-10 text-center font-poppins text-3xl font-bold md:text-4xl"
          >
            Kumpulan Data <span className="text-yellow">Kenakalan Remaja </span>
          </h1>
          <p
            className="mx-auto max-w-3xl text-center text-sm text-secondary-200 md:text-base"
          >
            Dengan data kenakalan remaja kita dapat mencerminkan perilaku
            negatif seseorang, seperti remaja yang menggunakan narkoba, tawuran,
            merokok, dan kenakalan remaja lainnya. Dengan demikian kita dapat
            membantu memahami seriusnya masalah ini dan kita dapat mengembangkan
            strategi pencegahan yang lebih efektif di kedepannya.
          </p>

          <div
            id="button-container"
            className="mt-10 grid grid-cols-2 grid-rows-3 flex-wrap items-center justify-center gap-5 md:flex"
          >
            {/* <!-- card 1 --> */}
            <button
              data-aos-delay="100"
              id="tawuran"
              className="flex w-full max-w-xs cursor-pointer gap-2 rounded-xl bg-[#6874B9] p-3 transition hover:-translate-y-1 hover:bg-yellow hover:opacity-90 md:w-fit"
            >
              <div
                className="flex h-[48px] w-[80px] items-center justify-center rounded-lg bg-white text-black md:h-[96px] md:w-[96px]"
              >
                <img
                  src="/icon/celurit.png"
                  className="h-auto w-full"
                  alt=""
                />
              </div>

              <div className="text-start text-white">
                <h5 className="text-xs font-bold md:text-xl">Tawuran</h5>
                <p className="text-xs md:text-lg">Berada di angka 16%</p>
              </div>
            </button>
            {/* <!-- card 2 --> */}
            <button
              id="narkoba"
              className="flex w-full max-w-xs cursor-pointer gap-2 rounded-xl bg-[#6874B9] p-3 transition hover:-translate-y-1 hover:bg-yellow hover:opacity-90 md:w-fit"
            >
              <div
                className="flex h-[48px] w-[80px] items-center justify-center rounded-lg bg-white text-black md:h-[96px] md:w-[96px]"
              >
                <img
                  src="/icon/narkoba.png"
                  className="h-auto w-full"
                  alt=""
                />
              </div>

              <div className="text-left text-white">
                <h5 className="text-xs font-bold md:text-xl">Narkoba</h5>
                <p className="text-xs md:text-lg">Berada di angka 16%</p>
              </div>
            </button>
            {/* <!-- card 3 --> */}
            <button
              id="merokok"
              className="flex w-full max-w-xs cursor-pointer gap-2 rounded-xl bg-[#6874B9] p-3 transition hover:-translate-y-1 hover:bg-yellow hover:opacity-90 md:w-fit"
            >
              <div
                className="flex h-[48px] w-[80px] items-center justify-center rounded-lg bg-white text-black md:h-[96px] md:w-[96px]"
              >
                <img
                  src="/icon/rokok.png"
                  className="h-auto w-full"
                  alt=""
                />
              </div>

              <div className="text-left text-white">
                <h5 className="text-xs font-bold md:text-xl">Merokok</h5>
                <p className="text-xs md:text-lg">Berada di angka 18.8%</p>
              </div>
            </button>
            {/* <!-- card 4 --> */}
            <button
              id="seksual"
              className="flex w-full max-w-xs cursor-pointer gap-2 rounded-xl bg-[#6874B9] p-3 transition hover:-translate-y-1 hover:bg-yellow hover:opacity-90 md:w-fit"
            >
              <div
                className="flex h-[48px] w-[80px] items-center justify-center rounded-lg bg-white text-black md:h-[96px] md:w-[96px]"
              >
                <img
                  src="/icon/seksual.png"
                  className="h-auto w-full"
                  alt=""
                />
              </div>

              <div className="text-left text-white">
                <h5 className="text-xs font-bold md:text-xl">Seksual</h5>
                <p className="text-xs md:text-lg">Mencapai hingga 21,4%</p>
              </div>
            </button>
            {/* <!-- card 5 --> */}
            <button
              id="perundungan"
              className="flex w-full max-w-xs cursor-pointer gap-2 rounded-xl bg-[#6874B9] p-3 transition hover:-translate-y-1 hover:bg-yellow hover:opacity-90 md:w-fit"
            >
              <div
                className="flex h-[48px] w-[80px] items-center justify-center rounded-lg bg-white text-black md:h-[96px] md:w-[96px]"
              >
                <img
                  src="/icon/bully.png"
                  className="h-auto w-full"
                  alt=""
                />
              </div>

              <div className="text-left text-white">
                <h5 className="text-xs font-bold md:text-xl">Perundungan</h5>
                <p className="text-xs md:text-lg">Berada di angka 13.5%</p>
              </div>
            </button>
            {/* <!-- card 6 --> */}
            <button
              id="minumanKeras"
              className="flex w-full max-w-xs cursor-pointer gap-2 rounded-xl bg-[#6874B9] p-3 transition hover:-translate-y-1 hover:bg-yellow hover:opacity-90 md:w-fit"
            >
              <div
                className="flex h-[48px] w-[80px] items-center justify-center rounded-lg bg-white text-black md:h-[96px] md:w-[96px]"
              >
                <img
                  src="/icon/miras.png"
                  className="h-auto w-full"
                  alt=""
                />
              </div>

              <div className="text-left text-white">
                <h5 className="text-xs font-bold md:text-xl">Mabuk</h5>
                <p className="text-xs md:text-lg">Berada di angka 1.4%</p>
              </div>
            </button>
          </div>

          <h1
            data-aos="fade-right"
            data-aos-offset="200"
            className="my-10 font-poppins text-2xl font-bold md:ml-20"
          >
            Persentase Data dalam <span className="text-yellow">Bentuk Grafik</span>
          </h1>

          <div className="w-full">
            <canvas
              id="mychart"
              className="my-5 mb-[600px] h-max border md:container md:mx-20 md:py-5"
            ></canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Data