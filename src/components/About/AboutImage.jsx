import AboutMePic from "../../assets/AboutMePic.jpeg";

const AboutImage = () => {
  return (
    <div className="w-auto h-full">
      <img
        src={AboutMePic}
        alt="Portrait of David Silva"
        className="w-full h-full object-cover rounded-sm"
      />
    </div>
  );
};

export default AboutImage;
