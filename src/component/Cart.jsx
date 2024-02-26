import React from "react";

const Cart = ({tipPrice,totalPrice,handleReset}) => {
  return (
    <div className="w-[83%] h-[100%] bg-[#00474B] rounded p-10">
      <div className="flex justify-between mb-1">
        <div className="mb-5">
          <p className="font-mono font-medium text-white text-[18px]">
            Tip Amount
          </p>
          <p className="font-mono font-medium text-base text-[#649BA0] leading-6">
            /Person
          </p>
        </div>
        <div className="font-mono font-bold text-[#21C3AC] text-[30px]">
          <span className="text-[25px]">$</span>
          {!isNaN(tipPrice) ? tipPrice : 0}
        </div>
      </div>
      <div className="flex justify-between mb-10">
        <div>
          <p className="font-mono font-medium text-white text-[18px]">
            Tip Amount
          </p>
          <p className="font-mono font-medium text-base text-[#649BA0] leading-6">
            /Person
          </p>
        </div>
        <div className="font-mono font-bold text-[#21C3AC] text-[30px]">
          <span className="text-[25px]">$</span>
          {!isNaN(totalPrice) ? totalPrice : 0}
        </div>
      </div>
      <button
        className={`w-[100%] h-12 rounded-md ${
          tipPrice > 0
            ? "bg-teal-400 hover:bg-teal-500"
            : "bg-[#0D686D] text-[#004849]"
        } text-white font-bold mt-[60px]`}
        disabled={tipPrice === 0}
        onClick={handleReset}
      >
        RESET
      </button>
    </div>
  );
};

export default Cart;
