import Banner from "./Banner";
import Projects from "./Projects";
import Timeline from "./Timeline";

import "./Content.scss";

const Content = (): JSX.Element => (
  <div className="content-scroll-wrapper">
    <div className="content-scroll-frame">
      <Banner />
      <Timeline />
      <Projects />
    </div>
  </div>
);

export default Content;
