import React from "react";
import Investments from "./Investments";
import { investmentsData } from "./Data";

export default function Main() {
  return (
    <div className="px-3.5">
      {investmentsData.investments.map((obj) => (
        <Investments key={obj.id} description={obj.description} id={obj.id} />
      ))}
    </div>
  );
}
