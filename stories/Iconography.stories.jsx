import React from 'react';
import '../src/components/iconography/iconography.scss';

export default {
  title: 'WMATA/Iconography/Customization'
};

export const Playground = () => (
  <div className="wmata-iconography-demo">

    <div className="wmata-icon-row">

      <div className="wmata-icon-text">
        <h2>Iconography Customization</h2>
        <p>
          Creating a 13×11 grid over the logo gives a base for future iconography.
          All icons should take up the full width and height of the grid.
        </p>
        <p>
          Radii:
          <br/>• Outside radii = 70px
          <br/>• Main radii = 35px
          <br/>• Small radii = 17.5px
        </p>
      </div>

      {/* LEFT — M Logo with Grid */}
      <div className="wmata-icon-grid">
        <div className="wmata-icon-logo">M</div>

        {/* Radii indicators */}
        <div className="wmata-radius"></div>
      </div>

      {/* RIGHT — Bus Icon with Grid */}
      <div className="wmata-icon-grid">
        <div className="wmata-icon-bus">
          <div className="wmata-bus-window top"></div>
          <div className="wmata-bus-window mid"></div>
          <div className="wmata-bus-window bottom-left"></div>
          <div className="wmata-bus-window bottom-right"></div>
        </div>

        {/* Radii Indicators */}
        <div className="wmata-radius"></div>
        <div className="wmata-radius green"></div>
        <div className="wmata-radius blue"></div>
      </div>

    </div>

  </div>
);

Playground.storyName = 'Iconography Customization';
