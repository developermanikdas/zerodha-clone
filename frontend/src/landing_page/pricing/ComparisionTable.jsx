import React from "react";
import { charges } from "../data/charges";

function ComparisionTable({ type }) {
  const table = charges[type];

  if (!table) {
    return <h3>Invalid table type</h3>;
  }

  const renderCell = (value) => {
    if (typeof value === "string") {
      return value;
    }

    if (Array.isArray(value)) {
      return (
        <ul className="mb-0 ps-3">
          {value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th></th>

          {table.headers.map((header) => (
            <th className="text-muted" key={header}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {table.rows.map((row) => (
          <tr className="text-muted" key={row.label}>
            <td className="text-muted">{row.label}</td>

            {row.values.map((value, index) => (
              <td className="text-muted" key={index}>{renderCell(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ComparisionTable;