import { useRef } from "react"
import UseScrollReveal from "../hooks/UseScrollReveal";

const TitleHeader = ({eyebrowText, titleText}) => {
  const sectionRef = useRef(null)
  UseScrollReveal(sectionRef, {
    selector: ".reveal",
    stagger: 0.4,
    duration: 1.5,
  })

  return (
    <div ref={sectionRef} className="w-full flex flex-col items-center text-center">
      <p className="w-fit px-6 py-2 bg-black-50 text-white-50 rounded-full text-sm font-medium tracking-wide mb-3 reveal">
        {eyebrowText}
      </p>
      <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight reveal">
        {titleText}
      </h1>
    </div>
  );
};

export default TitleHeader;
