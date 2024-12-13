import PageHeader from "@/components/PageHeader";

import Image from "next/image";
import Link from "next/link";
const paymentItems = [
  {
    id: 1,
    name: "Ut diam consequat",
    size: "XL",
    color: "Brown",
    image: "/product-5.svg",
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    size: "XL",
    color: "Brown",
    image: "/payment-1.svg",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    size: "XL",
    color: "Brown",
    image: "/payment-2.svg",
  },
  {
    id: 4,
    name: "Elit massa diam",
    size: "XL",
    color: "Brown",
    image: "/payment-3.svg",
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    size: "XL",
    color: "Brown",
    image: "/payment-4.svg",
  },
];

export default function Payment() {
  return (
    <section>
        <PageHeader heading="Hekto Demo"/>
    <div className="min-h-screen bg-white flex justify-center py-10 px-4 overflow-x-hidden">
      <div className="max-w-full w-full lg:max-w-[1177px] grid grid-cols-1 md:grid-cols-3 gap-10">
       
        <div className="col-span-3">
          <h1 className="text-2xl font-bold mb-2 text-[#1D3178] font-sans">Hekto Demo</h1>
          <p className="text-sm text-gray-600 mb-6">
            Cart / Information / Shipping / Payment
          </p>
        </div>

        <div className="col-span-3 md:col-span-2 bg-[#F8F8FD] p-6 ">
        
          <div>
            <h2 className="text-lg font-bold mb-4 text-[#1D3178] font-josefin">Contact Information</h2>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full p-3 outline-none border-b-2 mb-3 border-[#BFC6E0] font-lato text-[#C1C8E1] bg-transparent"
            />
            <label className="flex items-center text-sm mt-4 font-lato text-[#C1C8E1]">
              <input type="checkbox" className="mr-2 " />
              Keep me up to date on news and exclusive offers
            </label>
          </div>

          
          <div className="mt-28">
            <h2 className="text-lg font-bold mb-4 text-[#1D3178] font-josefin">Shipping Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="w-full p-3 outline-none border-b-2 mb-2 border-[#BFC6E0] font-lato text-[#C1C8E1] bg-transparent"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 outline-none border-b-2 mb-2 border-[#BFC6E0] font-lato text-[#C1C8E1] bg-transparent"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 outline-none border-b-2 mb-2 mt-3 border-[#BFC6E0] font-lato text-[#C1C8E1] bg-transparent"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full p-3 outline-none border-b-2 mb-2 border-[#BFC6E0] font-lato text-[#C1C8E1] bg-transparent"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 outline-none border-b-2 mb-2 border-[#BFC6E0] font-lato text-[#C1C8E1] bg-transparent"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full p-3 outline-none border-b-2 mb-2 border-[#BFC6E0] font-lato text-[#C1C8E1] bg-transparent"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-3 outline-none border-b-2 mb-2 border-[#BFC6E0] font-lato text-[#C1C8E1] bg-transparent"
              />
            </div>
          </div>

          <button className="w-[182px] h-[44px] mb-6 font-josefin bg-[#FB2E86] hover:bg-pink-500 text-white py-3 rounded-[2px] mt-24">
            Continue Shipping
          </button>
        </div>

       











       {/* Left side this code is for left side  */}
        <div className="bg-white p-6">
          <ul className="divide-y divide-gray-200 border-b-2">
            {paymentItems.map((item, index) => (
              <li key={index} className="flex justify-between py-4 font-josefin">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={16}
                    height={16}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-[#15245E]">{item.name}</p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  </div>
                </div>
                <p className="text-[#15245E]">${item.id * 32}.00</p>
              </li>
            ))}
          </ul>

          <div className="bg-[#F4F4FC] p-6 mt-10">
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
                className="lg:text-sm text-xs font-lato text-[#8A91AB] whitespace-nowrap"
              >
                Shipping & taxes calculated at checkout.
              </label>
            </div>
           <Link href="/order" passHref>
           
           <button className="bg-[#19D16F] text-white w-full py-2 rounded mt-4">
              Proceed to Checkout
            </button>
           </Link>


           
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
