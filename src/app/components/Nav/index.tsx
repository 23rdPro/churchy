"use client";
import { pages } from "@/app/utils/consts";
import { faCommentDots, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <div className="container-fluid bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          <a href="index-2.html" className="navbar-brand">
            <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
          </a>
          <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              {pages.map((page: any, index: number) => {
                const isActive = router.pathname === page.url;
                return (
                  <Link 
                    key={index++} 
                    href={page.url} 
                    title={`${page.name}`} 
                    className={`nav-item nav-link ${isActive ? "active text-secondary" : ""}`} 
                  />
                )
              })}
              <a href="index-2.html" className="nav-item nav-link active text-secondary">Home</a>
              <a href="about.html" className="nav-item nav-link">About</a>
              <a href="service.html" className="nav-item nav-link">Services</a>
              <a href="project.html" className="nav-item nav-link">Projects</a>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
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
              <a href="#"><FontAwesomeIcon icon={faSearch} className="text-white fa-2x" /> </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
};
export default Nav;