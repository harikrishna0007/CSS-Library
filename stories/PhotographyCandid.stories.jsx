import React from 'react';
import '../src/components/photography/photography.scss';

export default {
  title: 'WMATA/Photography/Candid Portraits'
};

export const CandidPortraits = () => (
  <div className="wmata-photo-page">

    <div className="wmata-photo-row">

      {/* LEFT TEXT */}
      <div className="wmata-photo-left">
        <h2>Photography</h2>
        <h3>Candid Portraits</h3>
        <p>
          Candid portraits should feel natural and unposed, using soft or natural
          light. They highlight real people with personality and warmth,
          reflecting the diversity of the Metro riders community.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="wmata-photo-grid">

        <img
          className="wmata-photo-large"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        />

        <img
          className="wmata-photo-small"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        />

        <img
          className="wmata-photo-small"
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
        />

      </div>

    </div>

  </div>
);

CandidPortraits.storyName = "Candid Portraits";
