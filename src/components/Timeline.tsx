import "./Timeline.scss";

const Timeline = (): JSX.Element => (
  <div className="section-container">
    <div>
      <div className="section-title">
        <h4>Mon parcours</h4>
      </div>
      <div className="section-row">
        <ul className="timeline">
          <li data-year="2017" data-text="Bac Scientifique"></li>
          <li data-year="2020" data-text="Licence d'Informatique"></li>
          <li data-year="2022" data-text="Master TNSID"></li>
          <li data-year="2022" data-text="Stagiaire chez Sopra Steria Group"></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Timeline;
