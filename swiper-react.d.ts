import { RefAttributes } from "react";
import { SwiperRef } from "swiper/react";

interface SwiperProps {
    onSwiper: IntrinsicAttributes & RefAttributes<SwiperRef> & SwiperProps
}