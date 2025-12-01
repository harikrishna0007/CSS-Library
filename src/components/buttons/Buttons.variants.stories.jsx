import React from "react";
export default {
    title: 'Components/Buttons',
  };
  
  export const AllVariants = () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <button className="wmata-btn wmata-btn-primary">Primary</button>
      <button className="wmata-btn wmata-btn-secondary">Secondary</button>
      <button className="wmata-btn wmata-btn-accent">Accent</button>
      <button className="wmata-btn wmata-btn-primaryv2">Primary v2</button>
      <button className="wmata-btn wmata-btn-secondaryv2">Secondary v2</button>
    </div>
  );
  