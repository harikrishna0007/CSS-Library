
import React from "react";

export default {
  title: "Components/Forms V1",
};

export const Overview = () => (
  <div style={{ width: "320px", display: "flex", flexDirection: "column", gap: "16px" }}>
    
    <div className="wmata-form-group">
      <label className="wmata-form-label">Email</label>
      <input className="wmata-form-input" placeholder="Enter email" />
    </div>

    <div className="wmata-form-group">
      <label className="wmata-form-label">Password</label>
      <input className="wmata-form-input" type="password" placeholder="Enter password" />
      <div className="wmata-form-helper">Minimum 8 characters.</div>
    </div>

    <div className="wmata-form-group">
      <label className="wmata-form-label">Username</label>
      <input className="wmata-form-input" placeholder="Enter username" />
      <div className="wmata-form-error">This username is taken.</div>
    </div>

  </div>
);
