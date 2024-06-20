"use client";
import { useEffect, useState } from "react";
import { useLoading } from "./utils/hooks/useLoading";
import Loading from "./components/Loading";
import BannerSlider from "./components/Slider/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../../public/img/icon.jpeg";
import Image from "next/image";
import { factBoxes, newStuff, socials, welcomeCharge } from "./utils/consts";
import { montserratAlternates } from "./utils/fonts";
import Facebook from "./components/Facebook";
import useSWR from "swr";
const fetcher = (route: string) => fetch(route).then((res: any) => res.json());
export default function Home() {
  const { loading, startLoading, stopLoading } = useLoading();
  const [appId, setAppId] = useState("");
  const { data, error } = useSWR("/api/facebookId", fetcher);
  useEffect(() => {
    startLoading();
    if (data) {
      setAppId(data.facebookId);
      stopLoading();
    } else if (error) {
      stopLoading();
      console.error(error);
    }
  }, [startLoading, stopLoading, data, error]);
  return loading ? (
    <Loading loading={loading} />
  ) : (
    <>
      <BannerSlider />
      <div className="container-fluid services py-5 mb-3">
        <div className="container">
          <div className="row g-5 services-inner">
            {factBoxes.map((fact: any, index: number) => (
              <div
                key={index++}
                className="col-lg-4 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <FontAwesomeIcon
                        icon={fact.icon}
                        size="7x"
                        className="mb-4 text-primary icon-hover"
                      />
                      <h4 className="mb-3">{fact.title}</h4>
                      <a
                        href="#"
                        className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid py-3 my-3">
        <div className="container pt-3">
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".3s"
            >
              <Image
                src={icon}
                width={100}
                height={100}
                className="img-fluid w-75 rounded"
                alt=""
                style={{ marginBottom: "5%" }}
              />
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".5s"
            >
              <h4 className="text-primary">Bishop Bankole Jefferson DD</h4>
              <h1 className="mb-4" style={{ fontWeight: "bolder" }}>
                Mercy World Outreach
              </h1>
              <p className={`${montserratAlternates.className}`}>
                {welcomeCharge}
              </p>
              <a
                href="#"
                className="btn btn-secondary rounded-pill px-5 py-3 text-white"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="text-primary">What&apos;s new at</h5>
            <h1 className="mb-3">Th Mercy Tabernacle</h1>
            <p className="mb-2">
              {newStuff}{" "}
              <a
                href={
                  socials.find((social) => social.name === "soundcloud")?.link
                }
              >
                Listen Now
              </a>
              .
            </p>
          </div>
          <div className="contact-detail position-relative p-5">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                <div className="p-5 h-100 rounded contact-map">
                  <Facebook appId={appId} />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                <div className="p-5 rounded contact-form">
                  <div className="blog-item position-relative bg-light rounded">
                    <Image
                      src="/img/blog-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                      width={400}
                      height={400}
                    />
                    <span
                      className="position-absolute px-4 py-3 bg-primary text-white rounded"
                      style={{ top: "-28px", right: "20px" }}
                    >
                      Web Design
                    </span>
                    <div
                      className="blog-btn d-flex justify-content-between position-relative px-3"
                      style={{ marginTop: "-75px" }}
                    >
                      <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                        <a href="#" className="btn text-white">
                          Read More
                        </a>
                      </div>
                      <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                        <div className="blog-icon-1">
                          <p className="text-white px-2">
                            Share<i className="fa fa-arrow-right ms-3"></i>
                          </p>
                        </div>
                        <div className="blog-icon-2">
                          <a href="#" className="btn me-1">
                            <i className="fab fa-facebook-f text-white"></i>
                          </a>
                          <a href="#" className="btn me-1">
                            <i className="fab fa-twitter text-white"></i>
                          </a>
                          <a href="#" className="btn me-1">
                            <i className="fab fa-instagram text-white"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-content text-center position-relative px-3"
                      style={{ marginTop: "-25px" }}
                    >
                      <Image
                        src="/img/admin.jpg"
                        className="img-fluid rounded-circle border border-4 border-white mb-3"
                        alt=""
                        width={90}
                        height={90}
                      />
                      <h5 className="">By Daniel Martin</h5>
                      <span className="text-secondary">24 March 2023</span>
                      <p className="py-2">
                        Lorem ipsum dolor sit amet elit. Sed efficitur quis
                        purus ut interdum. Aliquam dolor eget urna ultricies
                        tincidunt libero sit amet
                      </p>
                    </div>
                    <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                      <a href="#" className="text-white">
                        <small>
                          <i className="fas fa-share me-2 text-secondary"></i>
                          5324 Share
                        </small>
                      </a>
                      <a href="#" className="text-white">
                        <small>
                          <i className="fa fa-comments me-2 text-secondary"></i>
                          5 Comments
                        </small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
