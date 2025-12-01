import React from "react";

export default {
  title: "Components/Photography/Transportation",
};

export const Transportation = () => (
  <div style={{ padding: "24px", background: "#F4E7DA" }}>
    <h2>Transportation Photography</h2>
    <p style={{ maxWidth: "620px" }}>
      Focuses on buses, trains, stations, mobility devices, escalators, and the
      movement of Metro riders.
    </p>

    <img
      src="https://images.unsplash.com/photo-1517999349374-5f1b1c1d3c56?w=1600"
      alt="Transportation"
      style={{
        width: "100%",
        marginTop: "24px",
        borderRadius: "12px",
      }}
    />
  </div>
);
