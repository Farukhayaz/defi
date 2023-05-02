import React, { useContext } from "react";
import { NameData } from "../index";
function Footer() {
  const myValue = useContext(NameData);
  return (
    <div className=" text-center text-white bg-black">
      <h1 className="w-full text-xl pb-4">
        © 2023 DEFI Theme Studio. Designed by
        <span style={{ fontWeight: "bold" }}>Muhammad Farukh Ayaz .</span>
      </h1>
    </div>
  );
}

export default Footer;
