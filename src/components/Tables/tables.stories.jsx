// src/components/Tables/table.stories.jsx
import React from "react";
import "./table.scss";

export default {
  title: "Components/Table",
  parameters: { layout: "padded" },
  argTypes: {
    striped: { control: "boolean" },
    hover: { control: "boolean" },
    compact: { control: "boolean" },
    sticky: { control: "boolean" },
    stackOnMobile: { control: "boolean" },
    headerSize: { control: { type: "radio" }, options: ["sm", "lg"] },
    headerWithIcon: { control: "boolean" },
    rows: { control: { type: "number", min: 3, max: 20, step: 1 } },
    columns: { control: { type: "number", min: 2, max: 6, step: 1 } },
    includeDoubleText: { control: "boolean" },
  },
};

const IconStub = () => (
  <span
    className="wmata-table__icon"
    aria-hidden="true"
    style={{
      border: "1px solid currentColor",
      borderRadius: 3,
      boxSizing: "border-box",
    }}
  />
);

function TableTemplate({
  striped,
  hover,
  compact,
  sticky,
  stackOnMobile,
  headerSize,
  headerWithIcon,
  rows,
  columns,
  includeDoubleText,
}) {
  const tableClass = [
    "wmata-table",
    striped && "wmata-table--striped",
    hover && "wmata-table--hover",
    compact && "wmata-table--compact",
    sticky && "wmata-table--sticky",
    stackOnMobile && "wmata-table--stack",
  ]
    .filter(Boolean)
    .join(" ");

  const headerClass = [
    "wmata-table__header",
    headerSize === "sm" ? "wmata-table__header--sm" : "wmata-table__header--lg",
  ].join(" ");

  const headers = Array.from({ length: columns }).map((_, i) => `Header ${i + 1}`);

  // Sticky header needs a constrained container height to demonstrate
  const wrapStyle = sticky ? { maxHeight: 280 } : undefined;

  return (
    <div className="wmata-table-wrap" style={wrapStyle}>
      <table className={tableClass}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col" className={headerClass}>
                {headerWithIcon ? (
                  <span className="wmata-table__header-icon">
                    <IconStub />
                    {h}
                  </span>
                ) : (
                  h
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, r) => (
            <tr key={r}>
              {headers.map((h, c) => {
                // Show a double-text example in one column occasionally
                const isDouble = includeDoubleText && c === Math.min(2, columns - 1) && r % 3 === 1;

                return (
                  <td key={`${r}-${c}`} data-label={h}>
                    {isDouble ? (
                      <span className="wmata-table__cell--double">
                        <span className="wmata-table__cell-primary">Data Cell</span>
                        <span className="wmata-table__cell-secondary">Data Cell</span>
                      </span>
                    ) : (
                      "Data Cell"
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** ---------------------------------------
 *  1) Playground (your existing story)
 *  - controls everything
 * -------------------------------------- */
export const WMATATable = (args) => <TableTemplate {...args} />;
WMATATable.args = {
  striped: true,
  hover: false,
  compact: false,
  sticky: false,
  stackOnMobile: true,
  headerSize: "sm",
  headerWithIcon: false,
  rows: 8,
  columns: 4,
  includeDoubleText: true,
};

/** ---------------------------------------
 *  2) Dedicated Variant Stories
 * -------------------------------------- */

export const Base = () => (
  <TableTemplate
    striped={false}
    hover={false}
    compact={false}
    sticky={false}
    stackOnMobile={false}
    headerSize="sm"
    headerWithIcon={false}
    rows={6}
    columns={4}
    includeDoubleText={false}
  />
);

export const Striped = () => (
  <TableTemplate
    striped
    hover={false}
    compact={false}
    sticky={false}
    stackOnMobile={false}
    headerSize="sm"
    headerWithIcon={false}
    rows={8}
    columns={4}
    includeDoubleText={false}
  />
);

export const Hover = () => (
  <TableTemplate
    striped={false}
    hover
    compact={false}
    sticky={false}
    stackOnMobile={false}
    headerSize="sm"
    headerWithIcon={false}
    rows={8}
    columns={4}
    includeDoubleText={false}
  />
);

export const Compact = () => (
  <TableTemplate
    striped
    hover={false}
    compact
    sticky={false}
    stackOnMobile={false}
    headerSize="sm"
    headerWithIcon={false}
    rows={10}
    columns={4}
    includeDoubleText={false}
  />
);

export const StickyHeader = () => (
  <TableTemplate
    striped
    hover={false}
    compact={false}
    sticky
    stackOnMobile={false}
    headerSize="sm"
    headerWithIcon={false}
    rows={18}
    columns={4}
    includeDoubleText={false}
  />
);

export const HeaderWithIcon = () => (
  <TableTemplate
    striped
    hover={false}
    compact={false}
    sticky={false}
    stackOnMobile={false}
    headerSize="lg"
    headerWithIcon
    rows={6}
    columns={4}
    includeDoubleText={false}
  />
);

export const DoubleTextCell = () => (
  <TableTemplate
    striped
    hover={false}
    compact={false}
    sticky={false}
    stackOnMobile={false}
    headerSize="sm"
    headerWithIcon={false}
    rows={9}
    columns={4}
    includeDoubleText
  />
);

/**
 * Stacked Layout:
 * - This is mainly visible on mobile widths.
 * - In Storybook, you can use the viewport addon to switch to a mobile device.
 */
export const StackedMobile = () => (
  <TableTemplate
    striped
    hover={false}
    compact={false}
    sticky={false}
    stackOnMobile
    headerSize="sm"
    headerWithIcon={false}
    rows={6}
    columns={4}
    includeDoubleText
  />
);
