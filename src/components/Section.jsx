const Section = ({ id, children }) => {
  return (
    <section id={id} className="relative flex flex-col items-center justify-center w-full min-h-screen p-5 md:p-10">
      {children}
    </section>
  );
};

export default Section;
