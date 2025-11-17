import React from 'react';

export default { title: 'Components/Buttons' };

export const Playground = () => (
  <div style={{display:'flex', gap:12, alignItems:'center'}}>
    <button className="btn btn-primary">Primary</button>
    <button className="btn btn-secondary">Secondary</button>
    <button className="btn btn-accent">Accent</button>
  </div>
);

Playground.storyName = 'Button variants';
