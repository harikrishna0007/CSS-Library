
import React from "react";

export default {
  title: "Components/Colors",
};

const colors = [
  { name: "Monumental Bronze", class: "wmata-bg-monumental-bronze" },
  { name: "Statuary White", class: "wmata-bg-statuary-white", border: true },
  { name: "Capital Red", class: "wmata-bg-capital-red" },
  { name: "Capital Blue", class: "wmata-bg-capital-blue" },
  { name: "Capital Dark Blue", class: "wmata-bg-capital-dark-blue" },
  { name: "National Mall Green", class: "wmata-bg-national-mall-green" },
  { name: "Union Plum", class: "wmata-bg-union-plum" },
];

export const Overview = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
    {colors.map((c) => (
      <div key={c.name} style={{ width: "140px" }}>
        <div
          className={c.class}
          style={{
            width: "100%",
            height: "60px",
            border: c.border ? "1px solid #ccc" : "none",
            borderRadius: "6px",
          }}
        ></div>
        <div style={{ marginTop: "8px", fontWeight: 600 }}>{c.name}</div>
        <code style={{ fontSize: "12px" }}>{c.class}</code>
      </div>
    ))}
  </div>
);
