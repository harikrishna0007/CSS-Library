import React from "react";

export default {
  title: "Components/Typography/Overview",
};

export const Overview = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "480px" }}>

    <h1 className="wmata-h1">Heading One</h1>

    <h2 className="wmata-h2">Heading Two</h2>

    <p className="wmata-body">
      This is standard WMATA body text used across ServiceNow portals and custom UI screens.
    </p>

    <p className="wmata-caption">This is caption text (helper or metadata).</p>

  </div>
);
