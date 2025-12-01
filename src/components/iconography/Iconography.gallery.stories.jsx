import React from "react";

// ADD YOUR ICON IDs HERE (from your SVG sprite)
const ICON_LIST = [
  "icon-bus",
  "icon-train",
  "icon-parking",
  "icon-accessible",
  "icon-bike",
  "icon-exit",
  "icon-info",
  "icon-alert",
  "icon-clock",
  "icon-walk",
  // Add more as needed...
];

export default {
  title: "Components/Iconography/Gallery",
};

export const Gallery = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
      gap: "24px",
      padding: "16px",
    }}
  >
    {ICON_LIST.map((id) => (
      <div key={id} style={{ textAlign: "center" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            margin: "0 auto 8px",
          }}
        >
          <svg className="wmata-icon wmata-icon--lg wmata-icon--primary">
            <use href={`#${id}`} />
          </svg>
        </div>
        <div style={{ fontSize: "13px", fontWeight: 600 }}>{id}</div>
        <code style={{ fontSize: "11px", color: "gray" }}>
          &lt;use href="#{id}" /&gt;
        </code>
      </div>
    ))}
  </div>
);
