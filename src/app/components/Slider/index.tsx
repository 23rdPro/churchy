import { Swiper } from "swiper/react";
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
  initialSlide,
  ref
}: any) => {
  return (
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
      initialSlide={initialSlide}
      ref={ref}
      loop
    >
      {children}
    </Swiper>
  );
};
export default Slider;
