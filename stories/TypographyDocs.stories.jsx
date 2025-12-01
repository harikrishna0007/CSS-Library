import React from "react";
// import "../components/_typography.scss";

export default {
  title: "Documentation/Typography",
};

export const Usage = () => (
  <div style={{ padding: "20px" }}>
    <h2 className="wmata-h2">Typography Usage</h2>

    <pre>
{`
<h1 class="wmata-h1">Headline 1</h1>
<h2 class="wmata-h2">Headline 2</h2>
<p class="wmata-body">Body text</p>
<p class="wmata-caption">Small caption text</p>
`}
    </pre>

    <h1 className="wmata-h1">Headline 1</h1>
    <h2 className="wmata-h2">Headline 2</h2>
    <p className="wmata-body">This is WMATA body text.</p>
    <p className="wmata-caption">This is caption text.</p>
  </div>
);
