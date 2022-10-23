import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem "></i>CryptoSight
              </h6>
              <p>
                Conocimiento e información sobre el mundo de las criptomonedas,
                tecnologías asociadas.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>

              <p>
                <i className="fas fa-envelope "></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone "></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">© 2022 Copyright: CryptoSight</div>
    </footer>
  );
};

export default Footer;
