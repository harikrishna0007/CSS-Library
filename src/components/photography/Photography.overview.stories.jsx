import React from "react";

export default {
  title: "Components/Photography/Overview",
};

export const Overview = () => (
  <div style={{ padding: "24px", background: "#F4E7DA" }}>
    <h2 style={{ marginBottom: "16px" }}>Photography Styles</h2>

    <p style={{ maxWidth: "620px", marginBottom: "32px" }}>
      WMATA photography showcases authentic riders, communities, and Metro
      experiences. Images should feel candid, diverse, vibrant, and energetic.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800"
        alt="Candid"
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
        alt="Lifestyle"
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <img
        src="https://images.unsplash.com/photo-1517999349374-5f1b1c1d3c56?w=800"
        alt="Transportation"
        style={{ width: "100%", borderRadius: "8px" }}
      />
    </div>
  </div>
);
