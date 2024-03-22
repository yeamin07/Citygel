import { Helmet } from "react-helmet";
import ProductCart from "pages/Products/ProductCart";
import Header1 from "components/Header1";
import React, { useEffect, useState } from "react";
import DropdownButton from "components/Dropdown";
import DropdownButton2 from "components/Dropdown/index2";
import Footer from "components/Footer";
import useAxios from "config/api/useAxios";
import axios from "axios";

const Products = () => {
  const api = useAxios();
  const [allProduct, setAllProduct] = useState([]);
  const getAllProduct = async () => {
    const product = await axios.get(`http://localhost:5000/api/v1/ads`);
    if (product.data) {
      setAllProduct(product.data.data);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  console.log(allProduct);
  return (
    <div>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header1 className="flex flex-col justify-center items-center w-full" />

      <div className="w-[85%] h-[345px] bg-gray-200 flex ml-24 mt-10 justify-center">
        <p className="pt-[12%] text-xl">AD</p>
      </div>

      <div className="flex  w-[90%]  mx-auto flex-row">
        <div>
          <div className="w-full ">
            <div className="w-auto flex flex-row mt-16 ml-24">
              <DropdownButton text="Start Default" />
              <DropdownButton text="Filter by" />
            </div>
            <div className=" mt-5 w-[90%] ">
              <div>
                <DropdownButton2 text="Filter: default" />
              </div>
              {/* <div className='w-[65%] h-[70px] border border-solid border-black-900_87 pt-3 mr-4 space relative'>
                            <p>categories</p>
                            <p>price</p>
                        </div>
                        <div className='w-[65%] h-[70px] rounded-b-2xl border border-solid border-black-900_87 pt-3 mr-4 relative'>
                            <p>subcategories</p>
                            <p>cities</p>
                        </div> */}
              <div
                className="w-[100%] h-[120px] border border-solid border-black-900_87 mr-4 
                         grid grid-rows-2 grid-cols-2 rounded-b-4xl"
              >
                <p className="border border-solid border-black-900_87">
                  Categories
                </p>
                <p className="border border-solid border-black-900_87">Price</p>
                <p className="border border-solid border-black-900_87">
                  Subcategories
                </p>
                <p className="border border-solid border-black-900_87">
                  cities
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-[95%] grid grid-cols-4 md:grid-cols-2 mq450:grid-cols-1 mq750:grid-cols-1 mt-16">
            {/* components */}
            {allProduct.map((item) => (
              <ProductCart {...{ item }} />
            ))}
          </div>
        </div>

        <div className="h-[1200] w-[60%] bg-gray-200 mt-20 flex justify-center items-center">
          AD
        </div>
      </div>

      <Footer className="flex justify-center items-center w-full mt-[145px] p-[34px] bg-gray-100_01" />
    </div>
  );
};

export default Products;
