import React from "react";
import "./Projects.scss";

class Project extends React.Component<{ title?: string; link?: string }> {
  render() {
    return (
      <div className="project-box">
        <div className="project-content">
          <h5>
            <span>{this.props.title}</span>
          </h5>
          <div className="project-desc">
            <p>{this.props.children}</p>
          </div>
          {this.props.link && (
            <div className="project-link">
              <a href={this.props.link} className="art-link art-color-link art-w-chevron">
                <span>Github</span>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const Projects = (): JSX.Element => (
  <div className="section-container">
    <div>
      <div className="section-title">
        <h4>Mes projets</h4>
      </div>
      <div className="section-row">
        <Project title="4 Games" link="https://github.com/LesCop1/projet-ad">
          Mise en situation d'un client souhaitant développer 4 jeux en un en employant la méthode AGILE/Scrum.
          <br />
          Projet développé en Java avec la plateforme LWJGL.
        </Project>
        <Project title="Surakarta" link="https://github.com/baento/surakarta">
          Projet de développement du Surakarta en utilisant JavaFX.
        </Project>
        <Project title="Lazy Student">
          Développement d'une application smartphone permettant d'automatiser les tâches quotidiennes des étudiants : alertes d'emploi du temps, plan du campus interactif, réveil matin automatique...
          <br/>
          Projet développé sur Android avec un backend REST supporté par Express.JS
        </Project>
        <Project title="Squish" link="https://github.com/LesCop1/bug-tracker-web">
          Création en équipe d'un bug-tracker (système kanban). Celui-ci se compose d'une partie API et d'une partie Web.
          <br />
          API développée avec Spring Boot et Front-End développé en Angular.
        </Project>
        <Project title="Blaze (API)" link="https://github.com/baento/blaze-api">
          Projet de fin de cursus visant à élaborer une API documentée sur la plateforme d'emplois du temps de l'UPHF (Visual Timetabling).
          À terme, cette API sera le point d'entrée de toutes les applications accédant aux EDT.
          API développée avec Spring Boot, l'outil d'administration est codé en C# .NET.
        </Project>
      </div>
    </div>
  </div>
);

export default Projects;
