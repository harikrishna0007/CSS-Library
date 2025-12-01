import React from "react";
export default {
    title: 'Components/Buttons',
  };
  
  export const Overview = () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <button className="wmata-btn wmata-btn-primary">Primary</button>
      <button className="wmata-btn wmata-btn-secondary">Secondary</button>
      <button className="wmata-btn wmata-btn-accent">Accent</button>
    </div>
  );
  