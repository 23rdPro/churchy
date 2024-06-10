import { SwiperSlide } from "swiper/react";
import logo from "../../../../public/img/logo.png";
import banner from "../../../../public/img/carousel-1.jpg";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slider from ".";
import { name } from "@/app/utils/consts";
import { useState } from "react";

const bannerSlider = (Component: any) => {
  const banners: any = [
    { src: banner, alt: name },
    { src: banner, alt: name },
    { src: logo, alt: name },
  ];
  const WithComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <Component
        className="carousel-inner"
        role="listbox"
        slidesPerView={1}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 1000 }}
        speed={1000}
        navigation={true}
        onSlideChange={(swiper: any) => setActiveIndex(swiper.activeIndex)}
      >
        {banners.map((banner: any, index: number) => (
          <SwiperSlide key={index++} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
            <Image
              key={index}
              src={banner.src}
              alt={banner.alt}
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="carousel-caption">
              <div className="container carousel-content">
                <h6 className="text-secondary h4 animated fadeInUp">
                  Best IT Solutions
                </h6>
                <h1 className="text-white display-1 mb-4 animated fadeInRight">
                  An Innovative IT Solutions Agency
                </h1>
                <p className="mb-4 text-white fs-5 animated fadeInDown">
                  Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                  interdum. Pellentesque aliquam dolor eget urna ultricies
                  tincidunt.
                </p>
                <a href="#" className="me-2">
                  <button
                    type="button"
                    className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft"
                  >
                    Read More
                  </button>
                </a>
                <a href="#" className="ms-2">
                  <button
                    type="button"
                    className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight"
                  >
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Component>
    );
  };
  return WithComponent;
};
const BannerSlider = bannerSlider(Slider);
export default BannerSlider;
