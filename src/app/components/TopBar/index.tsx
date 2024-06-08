import { address, email, socials } from "@/app/utils/consts";
import ChurchyCountdown from "../Countdown";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default function TopBar() {
  return (
    <div className="container-fluid bg-dark py-2 d-flex d-md-flex overflow-hidden">
      <div className="container">
        <div className="d-flex justify-content-between topbar">
          <div className="top-info d-none d-lg-block">
            <small className="me-3 text-white-50">
              <a href="/">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="me-2 text-secondary"
                />
              </a>
              {address}
            </small>
            <small className="me-3 text-white-50">
              <Link href={`mailto:${email}`}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 text-secondary"
                />
              </Link>
              {email}
            </small>
          </div>
          <div id="note" className="text-secondary d-flex d-xl-flex">
            <ChurchyCountdown />
          </div>
          <div className="top-link">
            {socials.map((social: any, index: number) => (
              <Link
                key={index++}
                href={social.link}
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <FontAwesomeIcon icon={social.icon} className="text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
