import CountUp from "react-countup";
import { counterItems } from "../constants";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="lg:pb-10 md:pt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full justify-items-center">
        {counterItems.map(
          ({ value, suffix, icon: Icon, color, label }, index) => {
            const isEven = index % 2 === 0;

            const lightClipPath = isEven
              ? "polygon(0 0, 100% 0, 0 100%, 0 100%)"
              : "polygon(0 0, 100% 100%, 0 100%)";

            const darkClipPath = isEven
              ? "polygon(0 0, 100% 100%, 0 0)"
              : "polygon(0 0, 0 100%, 0 100%, 0 0)";

            return (
              <div
                key={value}
                className="relative overflow-hidden bg-[var(--black-100)] border 
                border-[var(--black-200)] rounded-lg p-10 flex flex-col justify-center 
                items-center w-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full flex justify-between px-0 items-center gap-2 md:gap-4">
                  {/* Icons here... */}
                  <div className="relative flex flex-col justify-center items-center z-20">
                    <div
                      className={`w-16 h-16 rounded-full grid place-items-center border-2 ${color}
                        bg-opacity-10 bg-gradient-to-br from-white/5 via-transparent to-white/5 
                        transition-transform duration-300 hover:scale-110`}
                    >
                      <Icon className={`text-2xl ${color}`} />
                    </div>
                    <div
                      className={`absolute inset-0 blur-lg opacity-30 ${color}`}
                    ></div>
                  </div>

                  {/* Darker/Light Background (diagonal) */}
                  <div
                    className="absolute inset-0 bg-[var(--black-50)] z-0"
                    style={{ clipPath: lightClipPath }}
                  />
                  <div
                    className="absolute inset-0 bg-[var(--black-100)] z-0"
                    style={{ clipPath: darkClipPath }}
                  />

                  {/* Content Layer - Counter & Label */}
                  <div className="relative z-10 flex flex-col justify-items-center text-right">
                    <div className="text-white text-4xl font-bold">
                      <CountUp suffix={suffix} end={value} />
                    </div>
                    <div className="text-[var(--blue-50)] text-base font-medium">
                      {label}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default AnimatedCounter;
