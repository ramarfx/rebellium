import IonIcon from "@reacticons/ionicons";
import { useEffect, useRef } from "react";

const ToUp = () => {
  const toUpRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (toUpRef.current) {
      if (window.scrollY > 0) {
        toUpRef.current.classList.remove("hidden");
        console.log('udang');
        
        toUpRef.current.classList.add("flex");
      } else {
        toUpRef.current.classList.remove("opacity-0");
        toUpRef.current.classList.add("hidden");
        toUpRef.current.classList.remove("flex");
      }
    }
  }, []);
  return (
    <a
      ref={toUpRef}
      id="toUp"
      href="#home"
      className="group/up fixed bottom-8 right-5 z-30 hidden cursor-pointer items-center justify-center rounded-full bg-yellow p-3 text-xl text-white opacity-100 transition duration-300 md:p-5">
      <IonIcon
        name="arrow-up-outline"
        className="transition group-hover/up:-translate-y-1"></IonIcon>
    </a>
  );
};

export default ToUp;
