import { useState } from 'react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Thumbs]);
export function ProductViewSlider({ productSlider }: { productSlider: string[] }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);


    return (
        <div>
            <Swiper
                spaceBetween={10}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[Thumbs]}
                className="flex flex-row justify-center transition-all delay-100 rounded-md h-80 bg-gray-50"
            >
                {productSlider?.length && productSlider?.map((img, index) => (
                    <SwiperSlide className="w-full h-[75%] transition-all delay-100 flex justify-center items-center" key={index}>

                        <div className="text-center">
                            <img
                                src={img}
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
                {productSlider?.length && productSlider?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            className="object-cover rounded-lg cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
