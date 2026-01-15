import React, { useState } from "react";

export default {
  title: "Components/Navigation",
  parameters: { layout: "padded" },
};


/* -------------------------
   BREADCRUMBS
------------------------- */
export const Breadcrumbs = () => (
  <nav className="wmata-breadcrumbs" aria-label="Breadcrumb">
    <span className="wmata-breadcrumb">
      <a href="#">Home</a>
      <span className="wmata-breadcrumb-sep">/</span>
    </span>

    <span className="wmata-breadcrumb">
      <a href="#">Operations</a>
      <span className="wmata-breadcrumb-sep">/</span>
    </span>

    <span className="wmata-breadcrumb">
      <a href="#">Attendance</a>
      <span className="wmata-breadcrumb-sep">/</span>
    </span>

    <span className="wmata-breadcrumb-current">Timecards</span>
  </nav>
);

/* -------------------------
   TABS
------------------------- */
export const Tabs = () => {
  const [active, setActive] = useState("pending");

  const Tab = ({ id, label, badge }) => (
    <button
      type="button"
      className={`wmata-tab ${active === id ? "is-active" : ""}`}
      onClick={() => setActive(id)}
    >
      {label}
      {badge != null && <span className="wmata-tab-badge">{badge}</span>}
    </button>
  );

  return (
    <div>
      <div className="wmata-tabs" role="tablist" aria-label="Attendance tabs">
        <Tab id="pending" label="Pending" badge={4} />
        <Tab id="approved" label="Approved" badge={12} />
        <Tab id="rejected" label="Rejected" badge={2} />
      </div>

      <div className="wmata-tab-panel">
        <div style={{ fontSize: 14, opacity: 0.8 }}>
          Active tab: <b>{active}</b>
        </div>
        <div style={{ marginTop: 10 }}>
          (Your table/list content goes here)
        </div>
      </div>
    </div>
  );
};

/* -------------------------
   SIDE NAV
------------------------- */
export const SideNav = () => {
  const [active, setActive] = useState("attendance");

  const Link = ({ id, label }) => (
    <a
      href="#"
      className={`wmata-sidenav-link ${active === id ? "is-active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setActive(id);
      }}
    >
      {label}
    </a>
  );

  const SubLink = ({ id, label }) => (
    <a
      href="#"
      className={`wmata-sidenav-sublink ${active === id ? "is-active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setActive(id);
      }}
    >
      {label}
    </a>
  );

  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <nav className="wmata-sidenav" aria-label="Side navigation">
        <div className="wmata-sidenav-header">Operations</div>

        <ul className="wmata-sidenav-list">
          <li className="wmata-sidenav-item"><Link id="dashboard" label="Dashboard" /></li>
          <li className="wmata-sidenav-item"><Link id="attendance" label="Attendance" /></li>

          <li className="wmata-sidenav-item">
            <a
              href="#"
              className={`wmata-sidenav-link ${["timecards","tardy","absent"].includes(active) ? "is-active" : ""}`}
              onClick={(e) => e.preventDefault()}
            >
              Time Management
            </a>

            <ul className="wmata-sidenav-sublist">
              <li><SubLink id="timecards" label="Timecards" /></li>
              <li><SubLink id="tardy" label="Tardy Records" /></li>
              <li><SubLink id="absent" label="Absent Records" /></li>
            </ul>
          </li>

          <li className="wmata-sidenav-item"><Link id="approvals" label="Approvals" /></li>
        </ul>
      </nav>

      <div style={{ paddingTop: 10 }}>
        <div style={{ fontWeight: 800 }}>Content Area</div>
        <div style={{ marginTop: 8, opacity: 0.8 }}>
          Active nav: <b>{active}</b>
        </div>
      </div>
    </div>
  );
};
