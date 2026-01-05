import React from "react";

export default {
  title: "Foundations/Typography/Overview",
};

export const BrandHierarchy = () => (
  <div style={{ maxWidth: 900 }}>
    <div className="wmata-h1">your guide to metro bus</div>

    <div className="wmata-subhead" style={{ marginTop: 16 }}>
      Courtesy metro bus stops
    </div>

    <p className="wmata-body" style={{ marginTop: 12 }}>
      Late night bus travels? Ask your metro bus operator for a courtesy stop
      to ensure a safer journey home.
    </p>

    <div className="wmata-tagline" style={{ marginTop: 16 }}>
      your safety. your metro.
    </div>

    <div className="wmata-micro" style={{ marginTop: 12 }}>
      More information: wmata.com/alerts
    </div>
  </div>
);
