import Image from "next/image";
import Slider from ".";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "@/app/utils/consts";

const pastorate = (Component: any) => {
  const WithComponent = () => {
    const pastorate = [1, 2, 3, 4, 5];
    return (
      <Component
        className="team-carousel wow fadeIn"
        data-wow-delay=".5s"
        slidesPerView={3}
				spaceBetween={50}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 1000 }}
        speed={2999}
        navigation={true}
      >
        {pastorate.map((offcm, index) => (
          <SwiperSlide key={index} className="rounded team-item">
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle">
                  <Image
                    src="/img/icon.jpeg"
                    className="img-fluid w-100 rounded-circle"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div className="team-name text-center py-3">
                  <h4 className="">Full Name</h4>
                  <p className="m-0">Designation</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  {socials.map((social, index) => (
										<Link
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href={social.link}
										key={index}
                  >
                    <FontAwesomeIcon className="fab" icon={social.icon} />
                  </Link>
									))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Component>
    );
  };
  return WithComponent;
};
const Pastorate = pastorate(Slider);
export default Pastorate;
