"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaStar,
  FaRegHeart,
  FaArrowRight,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/components/Data";
import RelatedPro from "@/components/RelatedPro";
import Logos from "@/components/Logos";
import PageHeader from "@/components/PageHeader";

const ProductDetail = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const idNumber = id ? parseInt(id) : null;

  interface Product {
    id: number;
    name: string;
    price: string | number;
    oldprice?: string | number;
    image: string;
    description?: string;
    code?: string;
    dis?: number;
  }

  const allProducts = [
    ...productData.featuredProducts,
    ...productData.executiveChairs,
    ...productData.trendingProducts,
  ];

  const product: Product = allProducts.find((item) => item.id === idNumber) || {
    name: "",
    price: "",
    image: "",
    id: 0,
    description: "",
  };

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <section>

        <PageHeader heading="Product Details"/>
      <div className="max-w-[1177px] mx-auto p-6 mt-10">
        <div className="flex flex-col lg:flex-row lg:h-[509px] shadow-custom space-y-6 lg:space-y-0">
       
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full max-w-lg object-contain"
            />
          </div>

      
          <div className="w-full lg:w-1/2 px-4 lg:pt-12 lg:pl-6 space-y-4">
            <h1 className="text-xl lg:text-3xl font-semibold text-[#0D134E] font-josefin">
              {product.name}
            </h1>

       
            <div className="flex items-center space-x-2 text-[#FFC416]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-[12px] h-[12px]" />
              ))}
              <p className="text-[#151875] font-josefin">(12)</p>
            </div>

       
            <p className="text-md lg:text-lg text-[#151875] font-josefin">
              ${product.price}{" "}
              <span className="line-through text-[#FB2E86] ml-4">
                ${product.oldprice || "not available"}
              </span>
            </p>

       
            <div>
              <span className="font-semibold text-[#0D134E] font-josefin lg:text-[16px]">
                Color:{" "}
              </span>
            </div>
            <p className="text-[#A9ACC6] font-josefin text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>

            <div className="mt-6 flex items-center space-x-1 lg:px-10">
              <button className="text-[#151875] font-josefin py-2 px-4 text-sm lg:text-[16px]">
                Add to Cart
              </button>

              <button className="text-[#535399] h-[18px] w-[18px] flex items-center justify-center">
                <FaRegHeart />
              </button>
            </div>

            <div className="mt-1">
              <span className=" text-[#151875] font-josefin text-[16px] font-semibold">
                Category:{" "}
              </span>
            </div>

       
            <div className="mt-2">
              <span className=" text-[#151875] font-josefin text-[16px] font-semibold">
                Tags:{" "}
              </span>
            </div>

         
            <div className="mt-4 flex items-center space-x-4 pb-10">
              <span className="text-sm lg:text-md text-[#151875] font-semibold">
                Share:
              </span>
              <a
                href="#"
                className="bg-[#151875] w-[20px] h-[20px] flex items-center justify-center rounded-full text-white"
              >
                <FaFacebookF size={10} />
              </a>
              <a
                href="#"
                className="bg-[#151875] w-[20px] h-[20px] flex items-center justify-center rounded-full text-white"
              >
                <RiInstagramFill size={10} />
              </a>
              <a
                href="#"
                className="bg-[#151875] w-[20px] h-[20px] flex items-center justify-center rounded-full text-white"
              >
                <FaTwitter size={10} />
              </a>
            </div>
          </div>
        </div>

      
      </div>

       
        <div className="h-auto max-w-[1920px] mx-auto mb-2 bg-[#F9F8FE] mt-16 px-4 pb-20 lg:px-16">
          <div className="flex flex-wrap gap-4 text-sm lg:text-lg text-[#151875] pt-20  font-josefin ">
            <Link href="/" className="hover:underline">
              Description
            </Link>
            <Link href="/" className="hover:underline">
              Additional Info
            </Link>
            <Link href="/" className="hover:underline">
              Reviews
            </Link>
            <Link href="/" className="hover:underline">
              Video
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="text-[#151875] text-lg lg:text-2xl font-josefin">
              Varius tempor.
            </h3>
            <p className="text-[#A9ACC6] mt-2 text-sm lg:text-md font-josefin ">
              {product.description || "Description not available."}
            </p>

            <h3 className="text-[#151875] text-[22px] font-josefin mt-8">
              More details
            </h3>

           
            <div className="flex items-start gap-2 mt-4 text-[#A9ACC6] font-josefin text-sm lg:text-md ">
              <FaArrowRight className="text-[#000000] hover:text-[#2F1AC4]" />
              <p>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
            </div>

            <div className="flex items-start gap-2 mt-3 text-[#A9ACC6] font-josefin text-sm lg:text-md ">
              <FaArrowRight className="text-[#000000] hover:text-[#2F1AC4]" />
              <p>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
            </div>

            <div className="flex items-start gap-2 mt-3 text-[#A9ACC6] font-josefin text-sm lg:text-md ">
              <FaArrowRight className="text-[#000000] hover:text-[#2F1AC4]" />
              <p>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
            </div>

            <div className="flex items-start gap-2 mt-3 text-[#A9ACC6] font-josefin text-sm lg:text-md ">
              <FaArrowRight className="text-[#000000] hover:text-[#2F1AC4]" />
              <p>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
            </div>
          </div>
        </div>
        <RelatedPro/>
        <Logos/>
    </section>
  );
};

export default ProductDetail;
