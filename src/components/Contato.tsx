export default function Contato() {
  return (
    <section id="contato">
      <div className="wrap">
        <div className="contact reveal">
          <div
            className="glow b"
            style={{ bottom: "-40%", right: "-10%", top: "auto", opacity: 0.16 }}
          ></div>
          <div className="contact-in">
            <div>
              <span className="sec-tag">Contato</span>
              <h2>Vamos construir resultado juntos?</h2>
              <p className="sec-lead">
                Disponível para projetos freelance e oportunidades em gestão de
                tráfego e automação. Fale pelo canal que preferir.
              </p>
              <div className="contact-grid">
                <a href="mailto:davidpinho.st@gmail.com" className="ccard">
                  <div className="k">E-mail</div>
                  <div className="v">davidpinho.st@gmail.com</div>
                </a>
                <a
                  href="https://wa.me/5519997501584?text=Ol%C3%A1%2C%20David!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%2Fprojeto%20de%20tr%C3%A1fego."
                  target="_blank"
                  rel="noopener"
                  className="ccard"
                >
                  <div className="k">WhatsApp</div>
                  <div className="v">(19) 99750-1584</div>
                </a>
                <a
                  href="https://instagram.com/odavidpinho"
                  target="_blank"
                  rel="noopener"
                  className="ccard"
                >
                  <div className="k">Instagram</div>
                  <div className="v">@odavidpinho</div>
                </a>
                <a
                  href="https://linkedin.com/in/odavidpinho"
                  target="_blank"
                  rel="noopener"
                  className="ccard"
                >
                  <div className="k">LinkedIn</div>
                  <div className="v">/odavidpinho</div>
                </a>
              </div>
            </div>
            <div className="qr">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=6&data=https%3A%2F%2Fwa.me%2F5519997501584%3Ftext%3DOl%25C3%25A1%252C%2520David!%2520Vi%2520seu%2520portf%25C3%25B3lio."
                alt="QR Code WhatsApp David Pinho"
              />
              <p>
                Aponte a câmera
                <br />
                para falar no WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
