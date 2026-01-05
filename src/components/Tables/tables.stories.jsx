import React, { useState, useMemo } from "react";

export default {
  title: "Components/Tables",
  parameters: { layout: "padded" },
};

const rows = [
  { id: "1", date: "12/18/2025", employee: "Hari K", type: "Tardy", minutes: 12, status: "Pending" },
  { id: "2", date: "12/17/2025", employee: "Hari K", type: "Absent", minutes: 480, status: "Approved" },
  { id: "3", date: "12/16/2025", employee: "Hari K", type: "Early Out", minutes: 18, status: "Rejected" },
];

const Status = ({ value }) => {
  const cls =
    value === "Approved"
      ? "wmata-table-status wmata-table-status--success"
      : value === "Pending"
      ? "wmata-table-status wmata-table-status--warning"
      : "wmata-table-status wmata-table-status--error";

  return <span className={cls}>{value}</span>;
};

/* =========================
   1) DATA TABLE PAGE
   ========================= */
export const DataTable = () => (
  <div className="wmata-table-wrap">
    <table className="wmata-table wmata-table--zebra wmata-table--bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Employee</th>
          <th>Type</th>
          <th className="wmata-td--num">Minutes</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id}>
            <td>{r.date}</td>
            <td>{r.employee}</td>
            <td>{r.type}</td>
            <td className="wmata-td--num">{r.minutes}</td>
            <td><Status value={r.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* =========================
   2) HOVER TABLE PAGE
   ========================= */
export const HoverTable = () => {
  const [selected, setSelected] = useState("2");

  return (
    <div className="wmata-table-wrap">
      <table className="wmata-table wmata-table--hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Type</th>
            <th className="wmata-td--num">Minutes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.id}
              className={selected === r.id ? "is-selected" : ""}
              onClick={() => setSelected(r.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{r.date}</td>
              <td>{r.employee}</td>
              <td>{r.type}</td>
              <td className="wmata-td--num">{r.minutes}</td>
              <td><Status value={r.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* =========================
   3) DROPDOWN TABLE PAGE
   ========================= */
export const DropdownTable = () => {
  const [openRow, setOpenRow] = useState(null);

  return (
    <div className="wmata-table-wrap">
      <table className="wmata-table wmata-table--zebra">
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Type</th>
            <th className="wmata-td--num">Minutes</th>
            <th>Status</th>
            <th className="wmata-td--actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.date}</td>
              <td>{r.employee}</td>
              <td>{r.type}</td>
              <td className="wmata-td--num">{r.minutes}</td>
              <td><Status value={r.status} /></td>
              <td className="wmata-td--actions">
                <div className="wmata-dropdown">
                  <button
                    className="wmata-table-action-btn"
                    onClick={() => setOpenRow(openRow === r.id ? null : r.id)}
                  >
                    ⋯
                  </button>
                  {openRow === r.id && (
                    <div className="wmata-dropdown-menu">
                      <button className="wmata-dropdown-item">View</button>
                      <button className="wmata-dropdown-item">Edit</button>
                      <button className="wmata-dropdown-item is-danger">Delete</button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* =========================
   4) PAGINATED TABLE PAGE
   ========================= */
export const PaginatedTable = () => {
  const data = useMemo(() => Array.from({ length: 22 }, (_, i) => ({
    id: String(i),
    date: `12/${String(i + 1).padStart(2, "0")}/2025`,
    employee: "Hari K",
    type: "Tardy",
    minutes: i * 5,
    status: i % 2 ? "Approved" : "Pending",
  })), []);

  const [page, setPage] = useState(1);
  const pageSize = 5;
  const start = (page - 1) * pageSize;
  const pageRows = data.slice(start, start + pageSize);

  return (
    <div className="wmata-table-wrap">
      <table className="wmata-table wmata-table--zebra">
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Type</th>
            <th className="wmata-td--num">Minutes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pageRows.map((r) => (
            <tr key={r.id}>
              <td>{r.date}</td>
              <td>{r.employee}</td>
              <td>{r.type}</td>
              <td className="wmata-td--num">{r.minutes}</td>
              <td><Status value={r.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="wmata-pagination" style={{ padding: 12 }}>
        <button className="wmata-page-btn" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <button className="wmata-page-btn is-active">{page}</button>
        <button className="wmata-page-btn" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};
