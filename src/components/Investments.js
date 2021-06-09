import React from "react";
import Investment from "./Investment";
import { investmentsData } from "./Data";

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

export default function Investments({ id, description }) {
  const reports = investmentsData.reports
    .filter((obj) => obj.investmentId === id)
    .sort((a, b) => a.month - b.month);

  const totalIncome = reports[reports.length - 1].value - reports[0].value;
  const totalPercentage = totalIncome / 10;
  const incomeType =
    reports[reports.length - 1].value === reports[0].value
      ? "neutral"
      : reports[reports.length - 1].value > reports[0].value
      ? "positive"
      : "negative";
  const color = colors[incomeType];
  const incomeSymbol = incomeType === "positive" ? "+" : "";

  return (
    <div className="mb-6">
      <h2 className="text-center font-bold text-2xl mb-5">{description}</h2>
      <p className="text-center text-xl mb-5">
        Total Income:{" "}
        <span style={{ color }}>
          {currencyFormatter.format(totalIncome)} ({incomeSymbol}
          {percentageFormatter.format(totalPercentage)}%)
        </span>
      </p>

      <table className="text-left m-auto w-9/12">
        <tbody className="divide-y-2 divide-gray-300">
          {reports.map((obj, index) => {
            const previousReport = reports[index - 1];
            const type =
              !previousReport ||
              (previousReport && obj.value === previousReport.value)
                ? "neutral"
                : obj.value > previousReport.value
                ? "positive"
                : "negative";

            const percentage = !previousReport
              ? 0
              : (obj.value * 100) / previousReport.value - 100;

            return (
              <Investment
                key={obj.id}
                month={obj.month}
                year={obj.year}
                amount={obj.value}
                id={obj.investmentId}
                percentage={percentage}
                type={type}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
