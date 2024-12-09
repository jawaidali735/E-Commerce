"use client";

import React, { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { FaSearchPlus } from "react-icons/fa";
import Image from "next/image";
import { FaList, FaTh } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";





type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  image: string;
};
// since hum typescript use kar rhe hain tu obj ko type banke dede tu better hai
//yeha hum usestate ka us ekar rhi tu mumkin hai erro ae obj tu type define kar dey


const productData: Product[]  = [
  {
    id: 1,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (1)..png",
  },
  {
    id: 2,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (2)..png",
  },
  {
    id: 3,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (3)..png",
  },
  {
    id: 4,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (4)..png",
  },
  {
    id: 5,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (5)..png",
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (6)..png",
  },
  {
    id: 7,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (7).png",
  },
  {
    id: 8,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (8)..png",
  },
  {
    id: 9,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (9)..png",
  },
  {
    id: 10,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (10)..png",
  },
  {
    id: 11,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (11)..png",
  },
  {
    id: 12,
    name: "Vestibulum magna laoreet",
    price: "$26.00",
    oldPrice: "$42.00",
    image: "/p (4)..png",
  },
];

const ProductDisplay = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);  
                                        // here i can add as many as i want to show cards or products.
                                        // yeha agar change hoga 12 ki jaga p masal ki tor par 10 tu neche bhi jaege 10 likh hoga to look good


  const [sortBy, setSortBy] = useState("Price: Low to High");
  const [view, setView] = useState("Grid");

 
  const [currentPage, setCurrentPage] = useState(1);

 

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleViewChange = (viewType: string) => {
    setView(viewType);
  };

  const sortedData = [...productData].sort((a, b) => {
    if (sortBy === "Price: Low to High") {
      return (
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
      );
    } else if (sortBy === "Price: High to Low") {
      return (
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
      );
    }
    return 0;
  });

  const displayedProducts = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section>
      <PageHeader heading="Shop Grid Default" />
      {/* mene asko aisa banya hai take bar abr use kar skon props ke tor par ab mene wah heading define karlia hai ab just jaha jah call karwa ke heading change kar donga */}

      <div className="p-4 sm:p-6 md:p-8 max-w-[1177px] mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="mb-2 md:mb-0">
            <h2 className="text-[18px] sm:text-[22px] font-josefin text-[#151875] font-semibold">
              Ecommerce Accessories & Fashion Items
            </h2>
            <p className="text-[12px] sm:text-[14px] text-[#8A8FB9]">
              About {displayedProducts.length} results
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-between md:justify-end">
            <div className="flex gap-2 items-center">
              <label
                htmlFor="itemsPerPage"
                className="text-[14px] sm:text-[16px] text-[#3F509E]"
              >
                Per Page:
              </label>
              <select
                id="itemsPerPage"
                className="p-1 border text-[12px] sm:text-[14px] text-[#8A8FB9]"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={12}>12 items</option>
                <option value={16}>16 items</option>
                <option value={20}>20 items</option>
              </select>
            </div>

            <div className="flex gap-2 items-center">
              <label
                htmlFor="sortBy"
                className="text-[14px] sm:text-[16px] text-[#3F509E]"
              >
                Sort By:
              </label>
              <select
                id="sortBy"
                className="p-1 border text-[12px] sm:text-[14px] text-[#8A8FB9]"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="Price: Low to High">Best Match</option>
                <option value="Price: Low to High">Low to High</option>
                <option value="Price: High to Low">High to Low</option>
              </select>
            </div>

            <div className="flex gap-2 items-center">
              <label
                htmlFor="view"
                className="text-[14px] sm:text-[16px] text-[#3F509E]"
              >
                View:
              </label>
              <div className="flex gap-2">
                <FaTh
                  onClick={() => handleViewChange("Grid")}
                  size={16}
                  className={`cursor-pointer ${
                    view === "Grid" ? "text-[#151875]" : "text-[#151875]"
                  }`}
                />

                <FaList
                  onClick={() => handleViewChange("List")}
                  size={16}
                  className={`cursor-pointer ${
                    view === "List" ? "text-[#151875]" : "text-[#151875]"
                                      //yeha p mene condition main dono tarf same color dya hai agar chae tu jo unclicked hai usko hum dosra color dey skte hai
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            view === "Grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-8 md:gap-y-[70px]"
              : "flex flex-col gap-6"
          }
        >
          {displayedProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center group">
              <div className="w-full max-w-[360px] h-auto bg-white pb-2 relative">
                <div className="w-full h-[250px] sm:h-[280px] bg-[#F6F7FB] hover:bg-[#EBF4F3] relative overflow-hidden flex items-center justify-center">
                  <div className="w-[178px] h-[178px] flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="w-full h-full "
                    />
                  </div>

                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    <div className="bg-[#eeeffb] h-[30px] w-[30px] p-2 rounded-full flex items-center justify-center">
                      <PiShoppingCartSimple
                        size={19}
                        className="text-[#2F1AC4]"
                      />
                    </div>
                    <div className="h-[30px] w-[30px] p-2 flex items-center justify-center">
                      <GoHeart size={17} className="text-[#2F1AC4]" />
                    </div>
                    <div className="h-[30px] w-[30px] p-2 flex items-center justify-center">
                      <FaSearchPlus size={15} className="text-[#2F1AC4]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2 px-4 items-center">
                  <h3 className="text-sm sm:text-base text-[18px] font-semibold text-[#151875]">
                    {product.name}
                  </h3>
                  <div className="flex gap-1 items-center justify-center mt-2">
                    <div className="h-[10px] rounded-full w-[10px] bg-[#DE9034]"></div>
                    <div className="h-[10px] rounded-full w-[10px] bg-[#EC42A2]"></div>
                    <div className="h-[10px] rounded-full w-[10px] bg-[#8568FF]"></div>
                  </div>

                  <div className="flex gap-4 mt-2 items-center justify-center">
                    <p className="text-[#151875] text-[14px] sm:text-base font-josefin">
                      {product.price}
                    </p>
                    <p className="line-through text-[#FB2E86] text-sm sm:text-base font-josefin">
                      {product.oldPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;

// as main jab list main click kare tu list khulana chaoye i added something but not fully like the desimned templete
// Sir ne bhut mushkil template dedya hai mere number ke hesab se. hahahaha