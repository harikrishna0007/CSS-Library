import React from "react";

export default {
  title: "Foundations/Iconography/Icons (PNG)",
};

/**
 * Small icons – inline / buttons / dense UI
 */
export const SmallIcons = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span className="wmata-icon wmata-icon--bus wmata-icon--sm" />
      <span>Bus service</span>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span className="wmata-icon wmata-icon--rail wmata-icon--sm" />
      <span>Rail service</span>
    </div>

    <button className="wmata-btn wmata-btn-primary" style={{ display: "flex", gap: 8 }}>
      <span className="wmata-icon wmata-icon--arrow-right wmata-icon--sm" />
      Continue
    </button>
  </div>
);

/**
 * Large icons – dashboards / cards / empty states
 */
export const LargeIcons = () => (
  <div style={{ display: "flex", gap: 32 }}>
    <div style={{ textAlign: "center" }}>
      <span className="wmata-icon wmata-icon--elevator wmata-icon--lg" />
      <div style={{ marginTop: 8 }}>Elevator</div>
    </div>

    <div style={{ textAlign: "center" }}>
      <span className="wmata-icon wmata-icon--wheelchair wmata-icon--lg" />
      <div style={{ marginTop: 8 }}>Accessibility</div>
    </div>

    <div style={{ textAlign: "center" }}>
      <span className="wmata-icon wmata-icon--no-entry wmata-icon--lg" />
      <div style={{ marginTop: 8 }}>Restricted</div>
    </div>
  </div>
);
