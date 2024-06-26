import { SwiperSlide } from "swiper/react";
import banner from "../../../../public/img/june.jpeg";
import banner2 from "../../../../public/img/dd3.jpeg";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import Slider from ".";
import { name } from "@/app/utils/consts";
import { useState } from "react";
import useMediaType from "@/app/utils/hooks/useMediaType";

const bannerSlider = (Component: any) => {
  const banners: any = [
    { src: banner, alt: name },
    { src: banner2, alt: name },
  ];
  const WithComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const mediaType = useMediaType();
    const getHeight = () => {
      if (mediaType === 'desktop') {
        return '77vh'
      } else if (mediaType === 'mobile') {
        return '43vh'
      } else { return '51vh'}
    }
    return (
      <div className="container-fluid px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <Component
            className="carousel-inner"
            role="listbox"
            slidesPerView={1}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 1000 }}
            speed={2999}
            navigation={true}
            onSlideChange={(swiper: any) => setActiveIndex(swiper.activeIndex)}
          >
            {banners.map((banner: any, index: number) => (
              <SwiperSlide
                key={index}
                className={`${index === activeIndex ? "active" : ""}`}
              >
                <Image
                  key={index}
                  src={banner.src}
                  alt={banner.alt}
                  className="img-fluid"
                  style={{ objectFit: "fill", height: getHeight(), width: "100%" }}
                  priority
                />
              </SwiperSlide>
            ))}
          </Component>
        </div>
      </div>
    );
  };
  return WithComponent;
};
const BannerSlider = bannerSlider(Slider);
export default BannerSlider;
