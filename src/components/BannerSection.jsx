const BannerSection = () => {
  return (
    <>
      <div className="header flex light-bg">
        <div>
          <button>Front-End Developer</button>
          <h1 className="white">Turning ideas into</h1>
          <h1 className="white">real life products is my calling.</h1>
          <p className="gray">
            my current skills mostly in terms of programming and technology
          </p>
          <a className="green" href="mailto:contact@blaiti.com">
            Let's chat!
          </a>
        </div>
        <img src="bipin.jpg" alt="bipin" className="banner-image" />
      </div>
    </>
  );
};

export default BannerSection;
