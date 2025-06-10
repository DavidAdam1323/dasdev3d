const TitleHeader = ({eyebrowText, titleText}) => {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <p className="w-fit px-6 py-2 bg-black-50 text-white-50 rounded-full text-sm font-medium uppercase tracking-wide mb-3">
        {eyebrowText}
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
        {titleText}
      </h1>
    </div>
  );
};

export default TitleHeader;
