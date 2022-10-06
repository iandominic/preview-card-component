import React from "react";
import mobile from "./img/image-product-mobile.jpg";
import desktop from "./img/image-product-desktop.jpg";
import cart from "./img/icon-cart.svg";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg">
      <div className="flex flex-col h-[92%] w-[90%] max-h-[585px] max-w-[354px] bg-white m-auto rounded-lg overflow-hidden md:flex-row md:max-w-[605px] md:max-h-[453px]">
        <img className="h-[231px] md:hidden" src={mobile} />
        <img className="h-full w-[303px] hidden md:flex" src={desktop} />
        <div className="p-[19px] pl-[22px] md:p-[30px] flex flex-col md:gap-[18px]">
          <p className="uppercase tracking-[3.9px] montserrat text-[0.8rem] font-medium dark-grayish-blue leading-[24px] md:leading-[20px]">
            Perfume
          </p>
          <h1 className="text-3xl frounces font-bold dark-blue pt-[9px] tracking-[.5px] leading-[30px] md:pr-[20px] md:text-4xl md:pt-0 md:leading-[33px]">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="montserrat text-[0.8rem] font-medium dark-grayish-blue tracking-[.1px] leading-[22px] pt-[16px] md:pt-[6px] pr-[20px] md:pr-[2px] md:text-[0.9rem] md:leading-[23px]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center text-center pt-[21px] pb-[16px] md:p-0 md:py-[10px]">
            <p className="text-3xl frounces font-bold dark-cyan tracking-[.5px]">$149.99</p>
            <s className="dark-grayish-blue text-[0.8rem] montserrat font-medium pl-[18px]">$169.99</s>
          </div>
          <div className="flex montserrat items-center justify-center text-center w-full h-[46px] rounded-lg bg-dark-cyan text-white mx-auto md:h-[47px]">
              <img src={cart} /> 
              <p className="text-[0.8rem] tracking-[.6px] pl-[8px]">Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
