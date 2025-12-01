import React from "react";

export default {
  title: "Components/Iconography/Samples",
};

export const Samples = () => (
  <div
    style={{
      background: "#F4E7DA",
      padding: "32px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "row",
      gap: "48px",
    }}
  >
    {/* LEFT TEXT SECTION */}
    <div style={{ width: "280px", fontSize: "15px", lineHeight: "22px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Iconography</h2>
      <p>
        WMATA uses Department of Transportation icons for essential brand
        communications.
      </p>
      <p style={{ marginTop: "12px" }}>
        The rail and bus icons are custom-tailored to reflect the unique look
        and feel of the Metro system while staying consistent with the broader
        DOT icon set.
      </p>

      <h3 style={{ marginTop: "24px" }}>Color combination 1:</h3>
      <p>Icon color: Monumental bronze<br />Background: Statuary white</p>

      <h3 style={{ marginTop: "16px" }}>Color combination 2:</h3>
      <p>Icon color: Statuary white<br />Background: Monumental bronze</p>
    </div>

    {/* ICON GRID */}
    <div
      style={{
        background: "white",
        padding: "32px",
        borderRadius: "12px",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
        }}
      >
        {[
          "icon-bus",
          "icon-train",
          "icon-accessibility",
          "icon-escalator",
          "icon-airplane",
          "icon-arrow-right",
          "icon-no-entry",
          "icon-elevator",
        ].map((id) => (
          <div key={id} style={{ textAlign: "center" }}>
            <svg
              className="wmata-icon wmata-icon--xl wmata-icon--primary"
              style={{ width: "96px", height: "96px" }}
            >
              <use href={`#${id}`} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  </div>
);
