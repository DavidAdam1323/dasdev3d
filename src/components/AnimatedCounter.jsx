import CountUp from "react-countup";

const AnimatedCounter = () => {
  const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 3, suffix: "+", label: "Satisfied Clients" },
    { value: 5, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "%", label: "Client Retention Rate" },
  ];

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-7 xl:lg-px-20 lg:p-20 lg:pt-0 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:w-full w-[350px] justify-items-center">
        {counterItems.map((item) => (
          <div
            key={item.value}
            className="bg-zinc-900 rounded-lg lg:p-10 p-5 flex flex-col justify-center xl:items-start items-center w-full max-w-[350px]"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
