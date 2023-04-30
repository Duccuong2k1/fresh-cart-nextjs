import { Button } from "@/components/shared/utilities/form/button"
import Link from "next/link"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { HiArrowNarrowRight } from "react-icons/hi"

export function CategoriesFilter() {
  return (
    <div className='w-full md:w-1/4'>
      <form className="mt-4 ">
        <div className="ml-3 font-semibold">Categories</div>
        <ul role="list" className="px-1 py-3 font-medium text-gray-900">
          {
            CATEGORY_LIST.map((category, index) => (
              <li className="" key={index}>

                <Link href={`/categories?tag=${category?.value}` ?? "/"} className="block px-2 py-3 border-t border-gray-200">
                  {category?.label}
                </Link>
              </li>
            ))
          }

        </ul>

        <div className="px-3 py-6 border-t border-gray-200">
          <h3 className="flow-root -mx-2 -my-3">
            <button type="button" className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
              <span className="font-medium text-gray-900">Stores</span>
              {/* <span className="flex items-center ml-6">
                <i><AiOutlinePlus /></i>
                <i><AiOutlineMinus /></i>
              </span> */}
            </button>
          </h3>
          <div className="pt-6" id="filter-section-mobile-0">
            <div className="space-y-6">
              {
                CATEGORY_STORES.map((store, index) => (

                  <div className="flex items-center" key={index}>
                    <input id="filter-mobile-color-0" name="color[]" value={store?.value} type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
                    <label htmlFor="filter-mobile-color-0" className="flex-1 min-w-0 ml-3 text-gray-500">{store?.label}</label>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
        <div
          className="px-6 pt-8 bg-no-repeat bg-cover rounded-md "
          style={{
            backgroundImage: 'url("/assets/imgs/ads-2.png")',
            height: "470px",
          }}
        >
          <div className="text-3xl font-semibold capitalize text-accent">
            Fresh fruits
          </div>
          <div className="my-2 text-gray-700">Get Upto 25% Off</div>
          <Button
            text="shop now"
            icon={<HiArrowNarrowRight />}
            href="/shop"
            iconPosition="end"
            className={
              "bg-green-500 text-white hover:bg-green-600 hover:shadow-md"
            }
          />
        </div>

      </form>
    </div>
  )
}


export const CATEGORY_STORES = [
  { value: "E-Grocery", label: "E-Grocery" },
  { value: "DealShare", label: "DealShare" },
  { value: "DMart", label: "DMart" },
  { value: "BigBasket", label: "BigBasket" },
  { value: "Online Grocery", label: "Online Grocery" },
]
export const CATEGORY_LIST = [
  { value: "Totes", label: "Totes" },
  { value: "Backpacks", label: "Backpacks" },
  { value: "Snack", label: "Snack" },
  { value: "fish", label: "Fish" },
  { value: "meat", label: "Meat" },
]