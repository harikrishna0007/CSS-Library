import React from "react";
import "./demo.css";

export default {
  title: "Foundations/Layout/Grid Showcase",
  parameters: {
    layout: "fullscreen",
  },
};

export const GridShowcase = () => (
  <div className="wmata-container">

    {/* AUTO COLUMNS */}
    <section className="demo-section">
      <div className="demo-title">Auto columns (.col)</div>
      <div className="demo-row-bg">
        <div className="wmata-row demo-row">
          <div className="col demo-col">col</div>
          <div className="col demo-col">col</div>
          <div className="col demo-col">col</div>
          <div className="col demo-col">col</div>
        </div>
      </div>
      <small>.col automatically divides available space equally</small>
    </section>

    {/* FIXED COLUMNS */}
    <section className="demo-section">
      <div className="demo-title">Fixed columns (.col-8 + .col-4)</div>
      <div className="demo-row-bg">
        <div className="wmata-row demo-row">
          <div className="col-8 demo-col">col-8 (8/12)</div>
          <div className="col-4 demo-col">col-4 (4/12)</div>
        </div>
      </div>
      <small>Fixed column spans always add up to 12</small>
    </section>

    {/* MIXED */}
    <section className="demo-section">
      <div className="demo-title">Mixed fixed + auto</div>
      <div className="demo-row-bg">
        <div className="wmata-row demo-row">
          <div className="col-6">      <button class="wmata-btn wmata-btn-primary">
        Primary Action
      </button></div>
          <div className="col demo-col">col (auto)</div>
          <div className="col demo-col">col (auto)</div>
        </div>
      </div>
      <small>
        Fixed columns take priority, remaining space is split by auto columns
      </small>
    </section>

    {/* EQUAL THIRDS */}
    <section className="demo-section">
      <div className="demo-title">Three equal columns (4–4–4)</div>
      <div className="demo-row-bg">
        <div className="wmata-row demo-row">
          <div className="col-4 demo-col">col-4</div>
          <div className="col-4 demo-col">col-4</div>
          <div className="col-4 demo-col">col-4</div>
        </div>
      </div>
    </section>

  </div>
);
