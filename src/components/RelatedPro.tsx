
import { productData } from "./Data";
import { FaStar } from "react-icons/fa";
import React from 'react';
import Link from "next/link";
import Image from "next/image";


const RelatedPro = () => {
  return (
    <div className="mx-auto max-w-[1170px] font-josefin mt-20">
      <h2 className="text-3xl font-bold text-[#151875]">Related Products</h2>
      <div className="flex space-x-6 mt-6 overflow-x-auto">
        {productData.relatedProduct.map((relatedProduct) => (
          <div
            key={relatedProduct.id}
            className="flex-shrink-0 w-[270px] p-4 "
          >
          
            <Link href={ `/products/${relatedProduct.id}`} className="block">
              <Image
                src={relatedProduct?.image}
                alt={relatedProduct?.name}
                width={270}
                height={340}
                className="w-full h-[340px] object-cover "
              />
            </Link>

          
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-[14px] font-semibold whitespace-nowrap text-[#151875]">
                {relatedProduct?.name}
              </h3>
              <div className="flex space-x-1">
                <span className="text-yellow-400 w-[12px] h-[12px]">
                  <FaStar />
                </span>
                <span className="text-yellow-400 w-[12px] h-[12px]">
                  <FaStar />
                </span>
                <span className="text-yellow-400 w-[12px] h-[12px]">
                  <FaStar />
                </span>
                <span className="text-yellow-400 w-[12px] h-[12px]">
                  <FaStar />
                </span>
                <span className="text-gray-300 w-[12px] h-[12px]">
                  <FaStar />
                </span>
              </div>
            </div>

           
            <p className="text-[13px] text-[#151875] mt-2 font-medium">
              {relatedProduct?.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPro;
