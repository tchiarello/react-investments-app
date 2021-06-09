import React from "react";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const percentageFormatter = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const colors = {
  neutral: "black",
  positive: "green",
  negative: "red",
};

export default function Investment({ month, year, amount, type, percentage }) {
  const color = colors[type];
  const symbol = type === "positive" ? "+" : "";

  return (
    <tr className="gap-x-8">
      <div className="grid grid-cols-2 gap-x-4">
        <td className="">
          {month}/{year}
        </td>
        <td style={{ color }} className="">
          {currencyFormatter.format(amount)}
        </td>
      </div>
      <td style={{ color }} className="text-right">
        {symbol}
        {percentageFormatter.format(percentage)}%
      </td>
    </tr>
  );
}
