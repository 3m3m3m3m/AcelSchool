import { footerCopy } from "../copy/footer";
import { navbarCopy } from "../copy/navbar";

export default function FooterMobile() {
  return (
    <footer className="container px-4" id="footer-mobile">
      <div
        id="footer-mob"
        className="col-12 white-border-mob br-half bb-half Box-padding"
      >
        <div className="AccelText text-left mt-5">
          <ul>
            <li className="text-thin text-medium">
              <strong>{footerCopy.quickLinks.title}</strong>
            </li>
            {footerCopy.quickLinks.links.map((link, index) => (
              <li key={index} className="text-thin text-small">
                <a
                  href={link.url}
                  target={link.target}
                  className="nav-link text-small text-thin my-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-5">
            <li className="text-thin text-medium">
              <strong>{footerCopy.resources.title}</strong>
            </li>
            {footerCopy.resources.links.map((link, index) => (
              <li key={index} className="text-thin text-small">
                <a
                  href={link.url}
                  target={link.target}
                  className="nav-link text-small text-thin my-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-5">
            <li className="text-thin text-medium">
              <strong>{footerCopy.legal.title}</strong>
            </li>
            {footerCopy.legal.links.map((link, index) => (
              <li className="text-thin text-small">
                <a
                  href={link.url}
                  target={link.target}
                  className="nav-link text-small text-thin my-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-goodtimes text-medium-mob mt-4">
            {navbarCopy.title}
          </p>
          {/* <!-- Social Links --> */}
          <div id="SocialLinks" className="col-12 mt-5 mb-5 ">
            <ul>
              {footerCopy.socialLinks.map((link, index) => (
                <li key={index} className="p-social-mobile">
                  <a href={link.url} target={link.target}>
                    <img src={link.image} alt={link.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-xsmall col-12">
            <span>{footerCopy.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
