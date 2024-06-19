"use client";
import { useEffect, useState } from "react";
import { useLoading } from "./utils/hooks/useLoading";
import Loading from "./components/Loading";
import BannerSlider from "./components/Slider/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../../public/img/icon.jpeg";
import Image from "next/image";
import { factBoxes, welcomeCharge } from "./utils/consts";
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
              <p className={montserratAlternates.className}>{welcomeCharge}</p>
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
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you are done.{" "}
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
          </div>
          <div className="contact-detail position-relative p-5">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                <div className="p-5 h-100 rounded contact-map">
                  <Facebook appId={"appId"} />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                <div className="p-5 rounded contact-form">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control border-0 py-3"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Project"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-100 form-control border-0 py-3"
                      rows={6}
                      cols={10}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="text-start">
                    <button
                      className="btn bg-primary text-white py-3 px-5"
                      type="button"
                    >
                      Send Message
                    </button>
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
