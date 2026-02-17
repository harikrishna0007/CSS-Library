import React from "react";

export default {
  title: "Foundations/Typography/Overview",
};

export const BrandHierarchy = () => (
  <div style={{ maxWidth: 900 }}>
    {/* Headline (responsive: Mobile XL -> Desktop XL) */}
    <h1 className="wmata-headline wmata-headline--xl">
      your guide to metro bus
    </h1>

    {/* Headline used as subhead (choose size based on UX intent) */}
    <h2 className="wmata-headline wmata-headline--s" style={{ marginTop: 16 }}>
      Courtesy metro bus stops
    </h2>

    {/* Body paragraph (Body/M Regular = 200 per UX token) */}
    <p className="wmata-body wmata-body--m wmata-body--regular" style={{ marginTop: 12 }}>
      Late night bus travels? Ask your metro bus operator for a courtesy stop
      to ensure a safer journey home.
    </p>

    {/* Tagline (Body/S Bold) */}
    <p className="wmata-body wmata-body--s wmata-body--bold" style={{ marginTop: 16 }}>
      your safety. your metro.
    </p>

    {/* Micro (Body/XS Regular) */}
    <p className="wmata-body wmata-body--xs wmata-body--regular" style={{ marginTop: 12 }}>
      More information: wmata.com/alerts
    </p>
  </div>
);
