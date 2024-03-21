import React, { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DepositAmount } from "../Redux/AtmSlice";

const Deposit = () => {
  const [deposableAmount, setDeposableAmount] = useState(0);
  const dispatch = useDispatch();
  const [handleNotes, sethandleNotes] = useState({
    note100: "",
    note500: "",
    note1000: "",
    note2000: "",
  });
  const handleChangeDeposit = (e) => {
    const { name, value } = e.target;
    sethandleNotes({
      ...handleNotes,
      [name]: value,
    });
  };

  useEffect(() => {
    setDeposableAmount(
      handleNotes.note100 * 100 +
        handleNotes.note500 * 500 +
        handleNotes.note1000 * 1000 +
        handleNotes.note2000 * 2000
    );
  }, [handleNotes]);

  const depositMoney = (e) => {
    e.preventDefault();
    if (deposableAmount < 100) {
      alert("Minimum deposable amount should be 100.");
    } else {
      const payload = {
        totalAmount: deposableAmount,
      };
      dispatch(DepositAmount(payload));
      sethandleNotes({
        note100: "",
        note500: "",
        note1000: "",
        note2000: "",
      });
    }
  };
  return (
    <div className="py-5">
      <form>
        <TextField
          label="Number of 100 Notes"
          name="note100"
          value={handleNotes.note100}
          onChange={handleChangeDeposit}
        />
        <TextField
          label="Number of 500 Notes"
          name="note500"
          value={handleNotes.note500}
          onChange={handleChangeDeposit}
        />
        <TextField
          label="Number of 1000 Notes"
          name="note1000"
          value={handleNotes.note1000}
          onChange={handleChangeDeposit}
        />
        <TextField
          label="Number of 2000 Notes"
          name="note2000"
          value={handleNotes.note2000}
          onChange={handleChangeDeposit}
        />
      </form>
      <div className="flex justify-between items-center mt-3 mr-10">
        <Button
          text="Submit"
          onClick={(e) => depositMoney(e)}
          bgColor="#48bb78"
        />
        <p>Deposable Amount:{deposableAmount}</p>
      </div>
    </div>
  );
};

export default React.memo(Deposit);
