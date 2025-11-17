import React from 'react';

export default { title: 'Foundations/Utilities' };

export const Backgrounds = () => (
  <div style={{display:'flex', flexDirection:'column', gap:12}}>
    <div className="bg-primary">Primary background</div>
    <div className="bg-secondary">Secondary background</div>
    <div className="bg-accent">Accent background</div>
  </div>
);
