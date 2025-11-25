import React from 'react';

export default { title: 'Components/Buttons/v2' };

export const Playground = () => (
  <div style={{display:'flex', gap:12, alignItems:'center'}}>
    <button className="btn btn-primaryv2">Primary</button>
    <button className="btn btn-secondaryv2">Secondary</button>

  </div>
);

Playground.storyName = 'Button variants v2';
