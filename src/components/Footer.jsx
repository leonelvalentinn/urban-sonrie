import "../styles/footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer id="ubicacion">
        <div className="mapa">
          <div className="container-mapa">
            <div className="item-mapa">
              <h2>Ubicación</h2>
              <h3>
                Avenida Vía Adolfo López Mateos, Priv. Jacarandas 120, 54050
                Tlalnepantla, Méx.
              </h3>
              <a
                href="https://api.whatsapp.com/send?phone=525529484701"
                target="_blank"
                className="btn-rosa"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </div>
            <div className="item-mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.172501997777!2d-99.23213950000002!3d19.534206299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d27d7e3ffff%3A0xf153eed27e4d2236!2sUrban%20Sonr%C3%ADe!5e0!3m2!1ses-419!2smx!4v1713216050560!5m2!1ses-419!2smx"
                width="600"
                height="450"
                title="Mapa de Urban Sonríe"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <section className="footer-footer">
          <article>
            <div className="item-footer-footer">
              <p>© {year} Todos los derechos reservados Urban Sonríe.</p>
              <p>Desarrollado por Agencia de Marketing Dentarios © {year}</p>
            </div>
            <div className="item-footer-footer">
              <a
                href="tel:5529484701"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-phone"></i> 5535362504
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=525529484701"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-whatsapp"></i> 5529484701
              </a>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};

export default Footer;
