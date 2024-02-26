import React, { useCallback, useEffect, useState } from "react";
import TextField from "./TextField";
import { FaDollarSign } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Cart from "./Cart";
import { tipTabs } from "../CustomData/data";

const Layout = () => {
  const [tipPrice, setTipPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [handleCustomPercentage, setHandleCustomPercentage] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [selectCustomPercentage, setSelectCustomPercentage] = useState("");
  const [handleError, setHandleError] = useState(false);

  const [userInfo, setUserInfo] = useState({
    amount: 0,
    personCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    setHandleError(true);
  };

  const getPercentageTip = useCallback(
    (tipPercentage, index) => {
      const selectedTipPercentage = handleCustomPercentage
        ? parseFloat(selectCustomPercentage)
        : parseFloat(tipPercentage);
      const tipAmount =
        (parseFloat(userInfo.amount) * selectedTipPercentage) / 100;
      const totalAmount = (parseFloat(userInfo.amount) + tipAmount).toFixed(2);
      setTipPrice(tipAmount.toFixed(2));
      setTotalPrice(totalAmount);
      setActiveButtonIndex(index);
    },
    [userInfo.amount, handleCustomPercentage, selectCustomPercentage]
  );

  useEffect(() => {
    getPercentageTip();
  }, [selectCustomPercentage, getPercentageTip]);

  const handleReset = () => {
    setTipPrice(0);
    setTotalPrice(0);
    setUserInfo({ amount: 0, personCount: 0 });
    setActiveButtonIndex(null);
    setHandleCustomPercentage(false);
    setSelectCustomPercentage("");
    setHandleError(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-column bg-blue-200">
      <div className="w-[20px] pb-8">
        <h1 className="font-mono font-semibold text-4xl leading-12 tracking-wider text-left text-[#406667] uppercase">
          Splt tter
        </h1>
      </div>
      <div className="w-4/5 h-[72vh] flex justify-between items-center bg-white rounded">
        <div className="w-1/2 h-[70vh] pl-14 pt-5 ">
          <div>
            <TextField
              label={"Bill"}
              icon={<FaDollarSign className="text-[#A9C3C6]" />}
              name="amount"
              value={userInfo.amount}
              onChange={handleChange}
              handleError={handleError}
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="Bill"
              className="p-1 rounded-tl rounded-bl font-mono font-medium text-base leading-10 text-[#6B7777]"
            >
              Select Tip %
            </label>
            <div className="flex flex-wrap gap-4">
              {tipTabs.map((amountPercentage, index) => (
                <button
                  key={index}
                  onClick={() => getPercentageTip(amountPercentage, index)}
                  className={`w-[134.88px] h-[42px] rounded-[10px] font-mono font-medium ${
                    activeButtonIndex === index
                      ? "bg-[#9FE8DD] text-[#00474B]"
                      : "bg-[#00474B]"
                  } text-white`}
                >
                  {amountPercentage}%
                </button>
              ))}
              {handleCustomPercentage ? (
                <input
                  type="number"
                  value={selectCustomPercentage}
                  onChange={(e) => setSelectCustomPercentage(e.target.value)}
                  pattern="[0-9]{3}"
                  className="bg-[#F3F8FB] w-[135px] h-[40px] focus:outline-none text-right pr-3 text-[20px] rounded-[10px]"
                />
              ) : (
                <button
                  onClick={() => setHandleCustomPercentage(true)}
                  className="w-[134.88px] h-[42px] rounded-[10px] bg-[#F3F8FB] text-[#00474B] font-mono font-medium"
                >
                  Custom
                </button>
              )}
            </div>
          </div>
          <div className="mt-3">
            <TextField
              label={"Number of People"}
              icon={<IoPerson className="text-[#A9C3C6]" />}
              name="personCount"
              value={userInfo.personCount}
              onChange={handleChange}
              handleError={handleError}
              errormessage="Can,t be zero"
            />
          </div>
        </div>
        <div className="w-1/2 h-[70vh] pl-14 pt-9 pb-[2.5rem]">
          <Cart {...{ tipPrice, totalPrice, handleReset }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
