import React from "react";

const TextField = ({ label, icon, name, value, onChange, handleError,errormessage }) => {
  return (
    <>
      <div className="flex justify-between w-[88%]">
      <label
        htmlFor={name}
        className="p-1 rounded-tl rounded-bl font-mono font-medium text-base leading-10 text-[#6B7777]"
      >
        {label}
      </label>
      { value === 0 && handleError ? <p className="font-mono font-medium text-[#B48372] mt-[10px]">{errormessage}</p>:"" }
      
      </div>
      <div
        className={`flex w-[88%] h-[50px] bg-[#F3F8FB] rounded border ${
          value > 0 && handleError ? "border-[#26C2AD]" : value <= 0 && handleError ? "border-[red]" : ""
        }`}
      >
        <div className="flex justify-center items-center pl-3">{icon}</div>
        <div className="flex flex-col justify-center w-full">
          <input
            type="number"
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            className="bg-[#F3F8FB] w-full h-[50px] focus:outline-none text-right pr-3 text-[20px]"
            pattern="[0-9]{3}"
            min="0"
          />
        </div>
      </div>
    </>
  );
};

export default TextField;
