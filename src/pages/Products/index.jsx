import { Helmet } from "react-helmet";
import ProductCart from "pages/Products/ProductCart";
import Header1 from "components/Header1";
import {useState} from "react";
import DropdownButton from "components/Dropdown";
import DropdownButton2 from "components/Dropdown/index2";
import arrow from "../../assets/images/up-and-down-arrow.png";
import Footer from "components/Footer";

const Products = () => {
     const [filter,setFilter]=useState(false);
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
              {/*This is Filter by section */}
              <div className="flex justify-center items-center space-x-1 bg-gray-100 p-4 border-[1px] border-solid border-black-900_87 rounded-31xl
              w-[150px] h-[50px] cursor-pointer" onClick={()=>setFilter(!filter)}>
                <img src={arrow} className="w-[20px] h-[26px]"/>
                <p className="text-[14px] mt-[0.5]">Filter By</p>
              </div>
            </div>
            

            {/*This is Filter Default section*/}
            {filter && (
              <div className=" mt-5 w-[90%] ">
              <div className="w-[100%] h-[60px] rounded-t-[27px] border border-solid border-gray-300 border-b-0 flex flex-row pt-3 mr-4 space-x-2">
              <img src={arrow} alt="" className="w-[22px] h-[26px] pl-1 ml-2"/>
              <p className='w-[80%] mt-[2px] text-[15px]'>Filter: Default</p>
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
                className="w-[100%] h-[150px] max-h-[200px] mq450:h-[200px] border border-solid border-gray-300 mr-4 
                         grid grid-rows-2 grid-cols-2 mq450:grid-cols-1 mq450:grid-rows-1 rounded-b-[27px]"
              >
                <p className="border border-solid border-gray-300 pl-2 font-medium">
                  Categories<br/>
                  <input type="checkbox" className="border border-solid border-gray-300 mr-1"/>
                  <label>Motor</label>   
                </p>
                <p className="border border-solid border-gray-300 pl-2 font-medium ">
                Price
                <input type="range" min={0} max="100" className="w-[90%]" style={{accentColor:"#007cb9"}}/> 
                </p>
                <p className="border-t border-r border-solid border-gray-300 pl-2 font-medium items-stretch h-[60%]">
                  Subcategories <br/>
                  <div className="space-x-3 flex">
                  <div>
                  <input type="checkbox" className="border border-solid border-gray-300 mr-1"/>
                  <label>Motor</label>
                  </div>
                  <div>
                  <input type="checkbox" className="border border-solid border-gray-300 mr-1"/>
                  <label>Motor</label>
                  </div>
                  </div>
                </p>
                <p className="border-l border-t border-solid border-gray-300 pl-2 font-medium  ">
                  cities
                </p>
              </div>
            </div>
            )}
            {/*Product cart section*/}
          </div>
          <div className="grid grid-cols-3 gap-4 w-[95%] grid grid-cols-4 md:grid-cols-2 mq450:grid-cols-1 mq750:grid-cols-1 mt-16">
            {/* components */}
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>

        <div className="h-[1200] w-[50%] bg-gray-200 mt-20 flex justify-center items-center">
          AD
        </div>
      </div>

      <Footer className="flex justify-center items-center w-full mt-[145px] p-[34px] bg-gray-100_01" />
    </div>
  );
};

export default Products;
