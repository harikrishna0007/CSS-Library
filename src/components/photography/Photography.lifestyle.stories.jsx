import React from "react";

export default {
  title: "Components/Photography/Lifestyle",
};

export const Lifestyle = () => (
  <div style={{ padding: "24px", background: "#F4E7DA" }}>
    <h2>Lifestyle Photography</h2>
    <p style={{ maxWidth: "620px" }}>
      Tells an emotional and contextual story. Highlights Metro experiences,
      neighborhoods, and daily life.
    </p>

    <img
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600"
      alt="Lifestyle"
      style={{
        width: "100%",
        marginTop: "24px",
        borderRadius: "12px",
      }}
    />
  </div>
);
