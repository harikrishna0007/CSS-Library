import React from "react";

export default {
  title: "Components/Photography/Candid",
};

export const Candid = () => (
  <div style={{ padding: "24px", background: "#F4E7DA" }}>
    <h2>Candid Photography</h2>
    <p style={{ maxWidth: "620px" }}>
      Captures real Metro riders and staff in natural, unposed moments.
    </p>

    <img
      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1600"
      alt="Candid"
      style={{
        width: "100%",
        marginTop: "24px",
        borderRadius: "12px",
      }}
    />
  </div>
);
