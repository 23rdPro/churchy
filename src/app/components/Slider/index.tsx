import { Swiper } from "swiper/react";
export type SliderType = {
  className: string,
  slidesPerView: number,
  modules: any,
  autoplay: boolean,
  speed: any,
  spaceBetween: any,
  navigation: any,
  pagination: any,
  onActiveIndexChange: any,
  fadeEffect: any,
  effect: any,
  children: any,
};
const Slider = ({
  className,
  slidesPerView,
  modules,
  autoplay,
  speed,
  spaceBetween,
  navigation,
  pagination,
  onActiveIndexChange,
  fadeEffect,
  effect,
  children,
  role,
  onSlideChange,
}: any) => {
  return (
    <div className="container-fluid px-0">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        {/* <ol className="carouel-indictors">
          <li data-bs-target="carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide" />
          <li data-bs-target="carouselId" data-bs-slide-to="1" aria-label="Second slide" />
        </ol> */}
        <Swiper
          className={className}
          slidesPerView={slidesPerView}
          modules={modules}
          autoplay={autoplay}
          speed={speed}
          spaceBetween={spaceBetween}
          navigation={navigation}
          pagination={pagination}
          onActiveIndexChange={onActiveIndexChange}
          fadeEffect={fadeEffect}
          effect={effect}
          role={role}
          onSlideChange={onSlideChange}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;
