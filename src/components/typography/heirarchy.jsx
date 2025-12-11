import React from "react";

export const WmataHierarchyExample = () => {
  return (
    <div className="wmata-hierarchy-page">
      <div className="wmata-hierarchy-layout">
        {/* Left information column */}
        <div className="wmata-hierarchy-side">
          <h3 className="wmata-heading-md">Hierarchy</h3>
          <p className="wmata-body">
            In campaign ads, headlines are lowercase for a more informal tone.
          </p>
        </div>

        <div className="wmata-hierarchy-main">
          <h1 className="wmata-h-headline">
            your<br />
            guide to<br />
            metro bus
          </h1>

          <p className="wmata-h-subhead">Courtesy metro bus stops</p>

          <p className="wmata-h-body">
            Ask your metro operator for a courtesy stop when riding late.
          </p>

          <p className="wmata-h-tagline">your safety. your metro.</p>

          <p className="wmata-h-footer">wmata.com/alerts</p>
        </div>

      </div>
    </div >
  );
};


export default WmataHierarchyExample;