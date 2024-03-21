import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { widthdrowAmount } from "../Redux/AtmSlice";

const Withdraw = () => {
  const [widthrowMoney, setWidthrowMoney] = useState("");
  const { totalAmount } = useSelector((state) => state.atm);
  const dispatch = useDispatch();

  const [currencyCount, setCurrencyCount] = useState({
    currencyOf100: 0,
    currencyOf500: 0,
    currencyOf1000: 0,
    currencyOf2000: 0,
  });

  useEffect(() => {
    let amountLeft = widthrowMoney;
    let updatedCurrencyCount = { ...currencyCount };

    const denominations = [2000, 1000, 500, 100];

    denominations.forEach((denomination) => {
      const count = Math.floor(amountLeft / denomination);
      updatedCurrencyCount[`currencyOf${denomination}`] = count;
      amountLeft -= count * denomination;
    });

    setCurrencyCount(updatedCurrencyCount);
  }, [widthrowMoney]);

  const handleChangeWidthrow = (e) => {
    setWidthrowMoney(e.target.value);
  };

  const handleWidthrowMoney = (e) => {
    e.preventDefault();
    let amount = Number(widthrowMoney);
    if (amount > totalAmount) {
      alert("Insufficient Balance!");
    } else if (amount >= 100 && amount % 100 === 0) {
      const payload = {
        totalAmount: widthrowMoney,
      };
      dispatch(widthdrowAmount(payload));
      setWidthrowMoney("");
      alert(`Money withdrawn successfully, Please collect your cash ${amount}`);
    } else {
      alert("Enter a valid amount!");
    }
  };

  return (
    <div className="py-5">
      <form>
        <TextField
          label="Enter Widthrow Amount"
          name="widthrowAmount"
          value={widthrowMoney}
          onChange={handleChangeWidthrow}
        />
      </form>
      <div className="mt-3">
        <p className="mb-3">
          2000 X {currencyCount.currencyOf2000} 1000 X{" "}
          {currencyCount.currencyOf1000} 500 X {currencyCount.currencyOf500} 100
          X {currencyCount.currencyOf100}
        </p>
        <Button text="Submit" onClick={handleWidthrowMoney} bgColor="green" />
      </div>
    </div>
  );
};

export default React.memo(Withdraw);
