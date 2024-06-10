"use client";
import { pages } from "@/app/utils/consts";
import { faChurch, faCommentDots, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../public/img/logo.png"

const Nav = () => {
  const path = usePathname();
  console.log(path)
  return (
    <div className="container-fluid bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          <a href="index-2.html" className="navbar-brand">
            <Image src={logo} alt="Bishop Bankole Jefferson" width={59} height={59} />
          </a>
          <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              {pages.map((page: any, index: number) => {
                const isActive = path === page.url;
                return (
                  <Link 
                    key={index++} 
                    href={page.url} 
                    title={`${page.name}`} 
                    className={`nav-item nav-link ${isActive ? "active text-secondary" : ""}`}
                  >
                      {page.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="d-none d-xl-flex flex-shirink-0">
            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
              <a href="#" className="position-relative animated tada infinite">
                <FontAwesomeIcon icon={faPhone} className="text-white fa-2x"/>
                <div className="position-absolute" style={{ top: "-7px", left: "20px" }}>
                  <span><FontAwesomeIcon icon={faCommentDots} className="text-secondary" /></span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column pe-4 border-end">
              <span className="text-white-50">Have any questions?</span>
              <span className="text-secondary">Call: + 0123 456 7890</span>
            </div>
            <div className="d-flex align-items-center justify-content-center ms-4 ">
              <a href="#"><FontAwesomeIcon icon={faChurch} className="text-white fa-2x" /> </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
};
export default Nav;