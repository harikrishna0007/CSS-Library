import React from 'react';
import '../src/components/vertical-poster-grid.scss';

export default { 
  title: 'WMATA/Poster Grid System'
};

export const Playground = () => (
  <div className="wmata-poster-grid-demo">

    {/* Footer Example */}
    <div className="wmata-grid-block">
      <div className="wmata-grid-title">Footer</div>
      <div className="wmata-grid">
        <div className="wmata-footer-row">Row height</div>
      </div>
    </div>

    {/* Primary Logo Example */}
    <div className="wmata-grid-block">
      <div className="wmata-grid-title">Primary logo</div>
      <div className="wmata-grid">
        <div className="wmata-footer-70">Footer = 70%</div>
        <div className="wmata-primary-logo">M</div>
      </div>
    </div>

    {/* Livery Logo Example */}
    <div className="wmata-grid-block">
      <div className="wmata-grid-title">Livery logo</div>
      <div className="wmata-grid">
        <div className="wmata-footer-70">67% of footer</div>
        <div className="wmata-livery-logo">
          <div className="wmata-livery-m">M</div>
          <div className="wmata-livery-text">metro<br/>rail</div>
        </div>
      </div>
    </div>

  </div>
);

Playground.storyName = 'Vertical Poster Grid Guide';
