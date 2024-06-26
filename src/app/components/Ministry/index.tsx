"use client";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import { Autoplay, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ministries } from "@/app/utils/consts";
import useMediaType from "@/app/utils/hooks/useMediaType";

const ministrySlider = (Component: any) => {
  const WithComponent = () => {
    const mediaType = useMediaType();
    return (
      <div className="container-fluid testimonial py-2 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="text-primary">Mercy World Outreach</h5>
            <h1>Ministries and Offices.</h1>
          </div>
          <Component
            slidesPerView={mediaType === 'desktop' ? 3 : 1}
            modules={[Autoplay, Pagination]}
            className="testimonial-carousel"
            autoplay={{ delay: 1000 }}
            speed={2999}
            pagination={{ clickable: true }}
          >
            {ministries.map((ministry, index) => (
              <SwiperSlide key={index}>
                <div
                  className="testimonial-carousel wow fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="testimonial-item border p-4">
                    <div className=" d-flex align-items-center">
                      <div className="">
                        <FontAwesomeIcon
                          icon={ministry.icon}
                          size="4x"
                          className="text-primary icon-hover"
                        />
                      </div>
                      <div className="ms-4">
                        <h4 className="text-secondary">{ministry.name}</h4>
                        <p className="m-0 pb-3">{ministry.time}</p>
                        <div className="d-flex pe-5">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <FontAwesomeIcon
                              key={index}
                              icon={faStar}
                              className="me-1 text-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="border-top mt-4 pt-3">
                      <p className="mb-0 ministry-description">
                        {ministry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Component>
        </div>
      </div>
    );
  };
  return WithComponent;
};
const Ministry = ministrySlider(Slider);
export default Ministry;
