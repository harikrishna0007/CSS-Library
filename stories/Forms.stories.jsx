import React from 'react';

export default { title: 'Components/Forms' };

export const Inputs = () => (
  <div style={{maxWidth:480}}>
    <input placeholder="Text input" className="m-1" />
    <select className="m-1"><option>Option 1</option><option>Option 2</option></select>
    <textarea className="m-1" rows="3" placeholder="Textarea"></textarea>
  </div>
);
