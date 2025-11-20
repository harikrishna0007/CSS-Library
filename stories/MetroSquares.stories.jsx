import React from 'react';
import '../src/components/metro-squares.scss';

export default {
  title: 'WMATA/Supporting Graphic Elements/Metro Squares'
};

export const Playground = () => (
  <div className="wmata-metro-squares-demo">

    <div className="wmata-metro-row">
      <div>
        <h3 style={{ marginBottom: 12 }}>Metro logo square</h3>
        <div className="wmata-square-logo"></div>
      </div>

      <div>
        <h3 style={{ marginBottom: 12 }}>Metro square graphic</h3>
        <div className="wmata-square-graphic">
          <div className="sq sq-red"></div>
          <div className="sq sq-blue"></div>
          <div className="sq sq-green"></div>
          <div className="sq sq-plum"></div>
        </div>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: 12 }}>Usage examples</h3>
      <div className="wmata-usage-examples">
        <div className="wmata-thumb"></div>
        <div className="wmata-thumb"></div>
        <div className="wmata-thumb"></div>
      </div>
    </div>

  </div>
);

Playground.storyName = 'Metro Squares (Usage Examples)';
