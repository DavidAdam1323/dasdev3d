import CountUp from "react-countup";
import { counterItems } from "../constants";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-6 xl:lg-px-20 sm:px-20 lg:pb-10 md:pt-3 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:w-full w-full justify-items-center">
        {counterItems.map((item) => (
          <div
            key={item.value}
            className="bg-black-100 border border-black-200 rounded-lg lg:p-10 p-5 
            flex flex-col justify-center xl:items-start items-center w-full max-w-[390px]"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-blue-50 text-lg text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
