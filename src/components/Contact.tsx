import React, { useState } from "react";
import "./Contact.scss";

const FORM_ENDPOINT = "";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <div className="section-container">
      <div>
        <div className="section-title">
          <h4>Me contacter</h4>
        </div>
        <div className="section-row">
          <div className="contact-box">
            <div className="section-col">
              <div className="contact-info">
                  <h5>J'ai hâte de vous lire !</h5>
              </div>
              <div className="contact-content">
                <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
                  <div>
                    <input type="text" placeholder="Nom" name="name" required />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" name="email" required />
                  </div>
                  <div>
                    <textarea placeholder="Votre message" name="message" required />
                  </div>
                  <div>
                    <button type="submit"> Envoyer </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
