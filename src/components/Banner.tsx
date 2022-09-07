import "./Banner.scss";

const Banner = (): JSX.Element => (
  <div className="banner-wrapper">
    <div className="banner-content">
      <h1 className="banner-title">Hello, world !</h1>
      <h5 className="banner-subtitle">Je suis Software Engineer chez AXA France.</h5>
      <div className="banner-cta">
        <a href="https://www.linkedin.com/in/antoine-balieu">
          <span>Ajoutez-moi sur LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
);

export default Banner;
