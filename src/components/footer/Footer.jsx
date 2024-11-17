import './Footer.css'

export function Footer () {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            &copy; 2024 Tuch Innovations iPhones Store. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="footer-center">
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <a href="/privacy-policy">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
};

