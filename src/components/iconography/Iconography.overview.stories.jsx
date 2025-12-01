
import React from "react";

export default {
  title: "Components/Iconography/Overview",
};

export const Overview = () => (
  <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
    
    <div>
      <div>Default</div>
      <svg className="wmata-icon">
        <use href="#icon-bus" />
      </svg>
    </div>

    <div>
      <div>Primary</div>
      <svg className="wmata-icon wmata-icon--primary">
        <use href="#icon-bus" />
      </svg>
    </div>

    <div>
      <div>Large</div>
      <svg className="wmata-icon wmata-icon--lg wmata-icon--secondary">
        <use href="#icon-train" />
      </svg>
    </div>

  </div>
);
