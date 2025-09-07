import "../Footer/Footer.css"; // ensure this file exists
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">
        {/* Row 1: Social icons (full-width row) */}
        <div className="footer__social" aria-label="Social media">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Row 2-5: Each footer section as a block (flex item) */}
        <ul className="footer__list" aria-label="Footer links">
          <li className="footer__listItem">
            <a href="#">Company</a>
            <ul className="footer__sublist" aria-label="Company links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
            </ul>
          </li>

          <li className="footer__listItem">
            <a href="#" className="footer__sectionTitle">
              Help Center
            </a>
            <ul className="footer__sublist" aria-label="Help Center links">
              <li>
                <a href="#">Getting started</a>
              </li>
              <li>
                <a href="#">Account & Billing</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </li>

          <li className="footer__listItem">
            <a href="#" className="footer__sectionTitle">
              Legal
            </a>
            <ul className="footer__sublist" aria-label="Legal links">
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
          </li>

          <li className="footer__listItem">
            <a href="#" className="footer__sectionTitle">
              Language
            </a>
            <select aria-label="Choose language" className="footer__select">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="footer__copy" aria-label="Copyright">
        © 1997-2024 Netflix, Inc.
      </div>
    </footer>
  );
}
