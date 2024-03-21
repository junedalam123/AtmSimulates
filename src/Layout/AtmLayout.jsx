import React, { useState } from "react";
import Deposit from "../Component/Deposit";
import Withdraw from "../Component/Withdraw";
import Button from "../Component/Button";
import { useSelector } from "react-redux";

const AtmLayout = () => {
  const [handleScreen, setHandleScreen] = useState(false);
  const { totalAmount  } = useSelector((state) => state.atm);

  const handleToggle = () => {
    setHandleScreen((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen bg-red-500 flex justify-center flex-col  items-center">
      <h1 className="my-8 text-[35px]">ATM Simulates</h1>
      <div className="w-full md:w-[60%] lg:w-[40%] xl:w-[30%] h-auto bg-red-100 px-3 mb-5">
        <div className="flex justify-between pt-5">
          <Button text="Withdraw" onClick={handleToggle} bgColor="red"/>
          <Button text="Deposit" onClick={handleToggle} bgColor="green"/>
        </div>
        <div className="text-center mt-8">
          <h1>Total Amount</h1>
          <h1>{totalAmount}</h1>
        </div>
        <div className="ml-5">
          {handleScreen ? <Deposit /> : <Withdraw />}
        </div>
      </div>
    </div>
  );
};

export default AtmLayout;
