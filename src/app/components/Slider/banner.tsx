import { SwiperSlide } from "swiper/react";
import banner from "../../../../public/img/june.jpeg";
import banner2 from "../../../../public/img/dd3.jpeg";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slider from ".";
import { name } from "@/app/utils/consts";
import { useState } from "react";

const bannerSlider = (Component: any) => {
  const banners: any = [
    { src: banner, alt: name },
    { src: banner2, alt: name },
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
        speed={3999}
        navigation={true}
        onSlideChange={(swiper: any) => setActiveIndex(swiper.activeIndex)}
      >
        {banners.map((banner: any, index: number) => (
          <SwiperSlide
            key={index++}
            className={`d-flex justify-content-center align-items-center h-100 ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <Image
              key={index}
              src={banner.src}
              alt={banner.alt}
              // height={40}
              width={770}
              className="img-fluid"
              style={{ width: "auto", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Component>
    );
  };
  return WithComponent;
};
const BannerSlider = bannerSlider(Slider);
export default BannerSlider;
