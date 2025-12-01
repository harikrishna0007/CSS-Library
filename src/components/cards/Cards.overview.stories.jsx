import React from "react";

export default {
  title: "Components/Cards",
};

export const Overview = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <div className="wmata-card" style={{ width: "260px" }}>
      <div className="wmata-card-header">Simple Card</div>
      <div className="wmata-card-body">
        This is a basic card using WMATA spacing and typography.
      </div>
    </div>

    <div className="wmata-card" style={{ width: "260px" }}>
      <div className="wmata-card-header">Card with Footer</div>
      <div className="wmata-card-body">
        Cards can contain large or small amounts of content.
      </div>
      <div className="wmata-card-footer">
        <button className="wmata-btn wmata-btn-primary">Action</button>
      </div>
    </div>
  </div>
);
