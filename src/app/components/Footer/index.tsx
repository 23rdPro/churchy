import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCopyright,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  address,
  email,
  helpfulLinks,
  mobile,
  pages,
  socials,
} from "@/app/utils/consts";
import Link from "next/link";
export default function Footer() {
  return (
    <div
      className="container-fluid footer bg-dark wow fadeIn"
      data-wow-delay=".3s"
    >
      <div className="container pt-5 pb-4">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <a href="index-2.html">
              <h1 className="text-white fw-bold d-block">
                Mercy<span className="text-secondary">World</span>{" "}
              </h1>
            </a>
            <p className="mt-4 text-light">
              Experience warmth through fellowship at our Sunday 8am and
              Wednesday 6pm worship services.
            </p>
            <div className="d-flex hightech-link">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-primary"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="#" className="h3 text-secondary">
              Navigation
            </a>
            <div className="mt-4 d-flex flex-column short-link">
              {pages.map((page, index) => (
                <Link key={index} href={page.url} className="mb-2 text-white">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-secondary me-2"
                  />
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="#" className="h3 text-secondary">
              Helpful Links
            </a>
            <div className="mt-4 d-flex flex-column help-link">
              {helpfulLinks.map((link, index) => (
                <Link key={index} href={link.link} className="mb-2 text-white">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-secondary me-2"
                  />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="#" className="h3 text-secondary">
              Reach Out
            </a>
            <div className="text-white mt-4 d-flex flex-column contact-link">
              <a
                href="#"
                className="pb-3 text-light border-bottom border-primary"
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-secondary me-2"
                />{" "}
                {address}
              </a>
              <a
                href="#"
                className="py-3 text-light border-bottom border-primary"
              >
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-secondary me-2"
                />{" "}
                {mobile}
              </a>
              <a
                href="#"
                className="py-3 text-light border-bottom border-primary"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-secondary me-2"
                />{" "}
                {email}
              </a>
            </div>
          </div>
        </div>
        <hr className="text-light mt-5 mb-4" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <span className="text-light">
              <a
                href="https://www.mercyworldonline.com/"
                className="text-secondary"
              >
                <FontAwesomeIcon
                  icon={faCopyright}
                  className="text-secondary me-2"
                />
                Mercy Tabernacle
              </a>
              , All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
