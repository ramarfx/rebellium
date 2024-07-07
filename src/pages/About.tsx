import { useRef } from "react";
import useScrollAnimation from "../func/scrollAnimation";

const About = () => {
  const lineRef = useRef(null);

  useScrollAnimation(lineRef, (element, position) => {
    const positionTop = position.top - window.innerHeight;

    if (positionTop < 0) {
      element.style.width = `${Math.abs(positionTop)}px`;
    }
  });

  return (
    <section
      id="about"
      className="bg-cover bg-center bg-repeat pb-36 pt-16"
      style={{ backgroundImage: "url('/bg/background.png')" }}>
      <div className="container">
        <div className="flex flex-col-reverse flex-wrap items-center justify-between gap-10 md:flex-row md:gap-0">
          <div className="relative flex w-full items-center justify-center md:w-1/2">
            <canvas
              id="logoCanvas"
              className="mx-auto h-[400px] w-[300px] md:w-[500px]"></canvas>

            <div
              id="loading2"
              className="absolute flex h-56 w-56 items-center justify-center rounded-lg">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-h-12 h-12 animate-spin fill-yellow text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1
              id="rebelliumText"
              className="relative mb-8 font-radioCasnada text-4xl font-semibold md:text-5xl">
              Apa itu <span className="text-yellow">Rebellum?</span>
              <div ref={lineRef} className="line bg-primary-100"></div>
            </h1>
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              id="rebelliumDesc"
              className="text-sm text-secondary-200 md:max-w-2xl md:text-base">
              Rebellum adalah website yang kami ciptakan untuk membantu
              menyelesaikan permasalahan yang lagi marak dan sulit untuk
              terselesaikan, yaitu Kenakalan Remaja. Kami menjelaskan,
              memberikan data serta membimbing para penjelajah website Rebellum
              untuk mengatasi permasalahannya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
