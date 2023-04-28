import { LabelTitle } from '@/components/shared/common/label-title'
import { useScreen } from '@/lib/hooks/useScreen';
import Link from 'next/link';
import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
type Props = {}

export function HomePageCategories({ }: Props) {
  return (
    <div className='py-5 my-6 main-container'>
      <LabelTitle text="Feature categories" />
      <CategorySlider />
    </div>
  )
}


function CategorySlider() {
  const isLg = useScreen("lg");
  const isSm = useScreen("sm");
  return (
    <div className='my-5'>
      <Swiper
        slidesPerView={isLg ? 6 : isSm ? 3 : 2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]} >
        {
          CATEGORY_SWIPER.map((category, index) => (

            <SwiperSlide className='rounded-sm' key={index}>
              <CategoryItemSlide
                category={category}
              />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  )
}

function CategoryItemSlide({ category, ...props }: {
  category: {
    img: string,
    title: string,
    href?: string,
  }
}) {
  return (
    <Link href={category?.href ?? "/"}>

      <div className='flex flex-col items-center justify-center p-4 transition-all delay-100 border border-gray-200 rounded-md hover:border-green-500 hover:shadow-md'>
        <img src={category?.img} alt={category.title} className="object-cover" />
        <div className='mt-4 overflow-hidden font-medium capitalize hover:text-green-700 text-ellipsis-2'>{category.title}</div>
      </div>
    </Link>
  )
}

const CATEGORY_SWIPER: {
  img: string,
  title: string,
  href?: string,
}[] = [
    {
      img: "/assets/imgs/categories/category-1.jpg",
      title: "atta & rice",
      href: "/categories?tab=chicken",
    },
    {
      img: "/assets/imgs/categories/category-2.jpg",
      title: "chicken, meet & fish",
      href: "/categories",

    },
    {
      img: "/assets/imgs/categories/category-3.jpg",
      title: "cleaning",
      href: "/categories",

    },
    {
      img: "/assets/imgs/categories/category-4.jpg",
      title: "instant food",
      href: "/categories",

    },
    {
      img: "/assets/imgs/categories/category-5.jpg",
      title: "dairy bread & eggs",
      href: "/categories",

    },
    {
      img: "/assets/imgs/categories/category-6.jpg",
      title: "tea, coffee & drinks",
      href: "/categories",

    },
    {
      img: "/assets/imgs/categories/category-7.jpg",
      title: "snack &munchies",
      href: "/categories",

    },
  ]