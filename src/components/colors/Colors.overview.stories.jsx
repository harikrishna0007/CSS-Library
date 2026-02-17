
import React from "react";

export default {
  title: "Foundations/Colors/overview",
};

const colors = [
  { name: "Monumental Bronze", class: "wmata-bg-monumental-bronze" },
  { name: "Monumental Bronze Shade", class: "wmata-bg-monumental-bronze-shade" },
  { name: "Monumental Bronze Tint", class: "wmata-bg-monumental-bronze-tint" },
  { name: "Statuary White", class: "wmata-bg-statuary-white", border: true },
  { name: "Capital Blue", class: "wmata-bg-capital-blue" },
  { name: "Capital Blue Shade", class: "wmata-bg-capital-blue-shade" },
  { name: "Capital Blue Tint", class: "wmata-bg-capital-blue-tint" },
  { name: "Capital Dark Blue", class: "wmata-bg-capital-dark-blue" },
  { name: "Capital Dark Blue Shade", class: "wmata-bg-capital-dark-blue-shade" },
  { name: "Capital Dark Blue Tint", class: "wmata-bg-capital-dark-blue-tint" },
  { name: "Capital Red", class: "wmata-bg-capital-red" },
  { name: "Capital Red Shade", class: "wmata-bg-capital-red-shade" },
  { name: "Capital Red Tint", class: "wmata-bg-capital-red-tint" },
  { name: "National Mall Green", class: "wmata-bg-national-mall-green" },
  { name: "National Mall Green Shade", class: "wmata-bg-national-mall-green-shade" },
  { name: "National Mall Green Tint", class: "wmata-bg-national-mall-green-tint" },
  { name: "Union Plum", class: "wmata-bg-union-plum" },
  { name: "Union Plum Shade", class: "wmata-bg-union-plum-shade" },
  { name: "Union Plum Tint", class: "wmata-bg-union-plum-tint" },
  { name: "Cherry Blossom Pink Shade", class: "wmata-bg-cherry-blossom-pink-shade" },
  {name: "Cherry Blossom Pink Tint", class: "wmata-bg-cherry-blossom-pink-tint" },
  { name: "Monument Mist Tint", class: "wmata-bg-monument-mist-tint" },
  { name: "Monument Mist Shade", class: "wmata-bg-monument-mist-shade" },
  { name: "Tidal Basin Moss Tint", class: "wmata-bg-tidal-basin-moss-tint" },
  { name: "Tidal Basin Moss Shade", class: "wmata-bg-tidal-basin-moss-shade" },
  { name: "Capital Cream Tint", class: "wmata-bg-capital-cream-tint" },
  { name: "Black", class: "wmata-bg-black" }

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
