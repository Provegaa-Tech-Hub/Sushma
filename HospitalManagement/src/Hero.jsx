const Hero = () => {
  const heroData = {
    title: "Giving Children",
    highlight: "The Care They Deserve",
    subtitle: "The bold mission of America’s MEDITEX Companies is to bring an end to the burdens of disease, in all its forms.",
    buttonText: "Departments",
    buttonText1:"Get In Touch",
  };
  

  return (
    <section className="hero">
      <h1>
        {heroData.title}{" "}  
      </h1>
      <span>{heroData.highlight}</span>{" "}
      <p>
         {heroData.subtitle}
      </p>
       

      <button className="read-btn">
        {heroData.buttonText}
      </button>
      <button className="read-btn1">
        {heroData.buttonText1}
      </button>
    </section>
  );
};

export default Hero;