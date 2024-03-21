import React from "react";

const TextField = ({ label, name, value, onChange }) => {
  return (
    <>
      <div className="flex justify-between w-[88%]">
        <label
          htmlFor={name}
          className="rounded-tl rounded-bl font-mono font-medium text-base leading-10 text-[#6B7777]"
        >
          {label}
        </label>
      </div>
      <div className="flex w-[88%] h-[50px] bg-[#F3F8FB] rounded border">
        <div className="flex flex-col justify-center w-full">
          <input
            type="number"
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            className="bg-[#F3F8FB] w-full h-[50px] focus:outline-none  pl-3 text-[20px]"
            pattern="[0-9]{3}"
            min="0"
          />
        </div>
      </div>
    </>
  );
};

export default TextField;
