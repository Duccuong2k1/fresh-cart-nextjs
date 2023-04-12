import { useState } from 'react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Thumbs]);
export function ProductViewSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <div>
            <Swiper
                spaceBetween={10}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[Thumbs]}
                className="transition-all delay-100 rounded-md"
            >
                {[1, 2, 3, 4, 5].map((img, index) => (
                    <SwiperSlide className="w-full h-[75%] transition-all delay-100" key={index}>

                        <div className="">
                            <img
                                src="/assets/imgs/product-single-img-1.jpg"
                                className="object-contain rounded-md"
                            />
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mt-5 rounded-md listSwiper"

            >
                {[1, 2, 3, 4, 5].map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src="/assets/imgs/product-single-img-1.jpg"
                            className="object-cover rounded-lg cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
