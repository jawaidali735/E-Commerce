import PageHeader from "@/components/PageHeader";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const cartItems = [
  {
    id: 1,
    name: "Ut diam consequat",
    size: "XL",
    color: "Brown",
    image: "/product-1.svg",
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    size: "XL",
    color: "Brown",
    image: "/product-2.svg",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    size: "XL",
    color: "Brown",
    image: "/product-3.svg",
  },
  {
    id: 4,
    name: "Elit massa diam",
    size: "XL",
    color: "Brown",
    image: "/product-4.svg",
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    size: "XL",
    color: "Brown",
    image: "/product-5.svg",
  },
];

export default function Cart() {
  return (
    <section>


        <PageHeader heading="Shopping Cart"/>
    <div className="max-w-[1170px] mx-auto px-4 py-6 overflow-hidden">
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 font-josefin">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-[#1D3178] text-xl text-left">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2 text-center">Price</th>
                <th className="px-4 py-2 text-center">Quantity</th>
                <th className="px-4 py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={16}
                      height={16}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold text-sm sm:text-xs">{item.name}</p>
                      
                        <p className="text-xs text-gray-500">Color: {item.color}</p>
                        <p className="text-xs text-gray-500 ">Size: {item.size}</p>
                     
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right lg:text-center  text-[#1D3178] text-base sm:text-sm">
                    $32.00
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="number"
                      className="w-16 bg-[#f0eff2] text-center text-sm sm:text-xs"
                      defaultValue={1}
                    />
                  </td>
                  <td className="px-4 py-2 text-center text-[#1D3178] text-base sm:text-sm">
                    $219.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="bg-[#FB2E86] font-josefin w-[134px] h-[39px] text-white px-4 py-2 rounded-[2px]">
              Update Cart
            </button>
            <button className="bg-[#FB2E86] font-josefin w-[134px] h-[39px] text-white px-4 py-2 rounded-[2px]">
              Clear Cart
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="text-lg lg:text-xl font-josefin text-[#1D3178] font-bold mb-4 text-center pb-2">
            Cart Totals
          </h2>
          <div className="bg-[#F4F4FC] p-6">
            <div className="flex justify-between py-2 text-[#1D3178] text-lg lg:text-xl font-josefin border-b-2 border-solid border-[#E8E6F1] mb-2">
              <span className="font-semibold">Subtotal:</span>
              <span>‎£219.00</span>
            </div>
            <div className="flex text-[#1D3178] text-lg lg:text-xl font-josefin justify-between py-2 border-b-2 border-solid border-[#E8E6F1] mb-2">
              <span className="font-semibold">Total:</span>
              <span>‎£325.00</span>
            </div>
            <div className="flex items-center mb-6 mt-10">
              <input
                type="checkbox"
                id="saveInfo"
                className="mr-2 focus:ring-[#19D16F] rounded-[2px]"
              />
              <label
                htmlFor="saveInfo"
                className="lg:text-sm text-xs font-lato text-[#8A91AB]"
              >
                Shipping & taxes calculated at checkout.
              </label>
            </div>
            <Link href="/payment">
            <button className="bg-[#19D16F] text-white w-full py-2 rounded mt-4">
              Proceed to Checkout
            </button>
        </Link>
          </div>
          <h2 className="text-lg lg:text-xl font-josefin text-[#1D3178] font-bold mb-3 text-center pb-2 mt-10">
            Calculate Shipping
          </h2>
          <div className="bg-[#F4F4FC] p-6 mt-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full bg-transparent border-b-[1px] border-[#C7CEE4] p-2 focus:outline-none font-josefin text-md text-[#C5CBE3]"
              />
              <input
                type="text"
                placeholder="Mirpur Dhaka - 1200"
                className="w-full bg-transparent border-b-[1px] border-[#C7CEE4] p-2 focus:outline-none font-josefin text-md text-[#C5CBE3]"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full bg-transparent border-b-[1px] border-[#C7CEE4] p-2 focus:outline-none font-josefin text-md text-[#C5CBE3]"
              />
            </div>
            <button className="bg-[#FB2E86] w-[179px] h-[41px] text-white py-2 rounded-[2px] mt-10 mb-3 font-josefin">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
