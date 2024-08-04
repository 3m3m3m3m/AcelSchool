import Link from "next/link";
import { footerCopy } from "../copy/footer";
import { navbarCopy } from "../copy/navbar";

export default function Footer() {
  return (
    <div className="content mx-lg-5">
      <footer className="container px-0" id="footer">
        <div className="row white-border bt-half p-5 mb-5 mx-0">
          <div className="row ">
            <div className="col-lg-4 d-flex flex-column text-center">
              <Link href="#" className="mb text-decoration-none">
                <h3 className="font-goodtimes text-xlarge text-light">
                  {navbarCopy.title}
                </h3>
              </Link>

              <div className="my-2">
                <ul className="navbar-nav footer-social list-group-horizontal justify-content-between">
                  {footerCopy.socialLinks.map((link, index) => (
                    <li className="p-social">
                      <Link href={link.url} target={link.target}>
                        <img src={link.image} alt={link.name} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="my-4 text-thin">
                <span>{footerCopy.copyright}</span>
              </div>
            </div>
            <div className="col-lg-6 ms-auto row mt-lg-0 mt-3 justify-content-end">
              <div className="col-lg-4 col-6">
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <h3 className="text-medium" style={{ color: "#57B3E6" }}>
                      {footerCopy.quickLinks.title}
                    </h3>
                  </li>
                  {footerCopy.quickLinks.links.map((item) => (
                    <li>
                      <Link
                        href={item.url}
                        target={item.target}
                        className="nav-link text-small text-thin my-2"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-4 col-6">
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <h3 className="text-medium" style={{ color: "#57B3E6" }}>
                      {footerCopy.resources.title}
                    </h3>
                  </li>
                  {footerCopy.resources.links.map((item) => (
                    <li>
                      <Link
                        href={item.url}
                        target={item.target}
                        className="nav-link text-small text-thin my-2"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-4 col-6">
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <h3 className="text-medium" style={{ color: "#57B3E6" }}>
                      {footerCopy.legal.title}
                    </h3>
                  </li>
                  {footerCopy.legal.links.map((item) => (
                    <li>
                      <Link
                        href={item.url}
                        target={item.target}
                        className="nav-link text-small text-thin my-2"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
