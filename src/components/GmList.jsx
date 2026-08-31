import React from "react";

export default function GmList({ items }) {
  if (!items || items.length === 0) return <p>No data available.</p>;
  return (
    <div>
      {items.map((item) => (
        <div key={item.id || item.code} className="card">
          <h3>{item.flatNo}</h3>
          <p>{item.ownerName}</p>
        </div>
      ))}
    </div>
  );
}
