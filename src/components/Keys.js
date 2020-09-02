import React, { useState } from "react";

const Keys = ({ action }) => {
  const [keySelected, setKeySelected] = useState("");

  const keys = [
    {
      rows: 1,
      col: [
        { key: "C", colspan: 3, type: "clear" },
        { key: "/", colspan: 1, type: "oper" },
      ],
    },
    {
      rows: 2,
      col: [
        { key: "7", colspan: 1, type: "key" },
        { key: "8", colspan: 1, type: "key" },
        { key: "9", colspan: 1, type: "key" },
        { key: "*", colspan: 1, type: "oper" },
      ],
    },
    {
      rows: 3,
      col: [
        { key: "4", colspan: 1, type: "key" },
        { key: "5", colspan: 1, type: "key" },
        { key: "6", colspan: 1, type: "key" },
        { key: "-", colspan: 1, type: "oper" },
      ],
    },
    {
      rows: 4,
      col: [
        { key: "1", colspan: 1, type: "key" },
        { key: "2", colspan: 1, type: "key" },
        { key: "3", colspan: 1, type: "key" },
        { key: "+", colspan: 1, type: "oper" },
      ],
    },
    {
      rows: 5,
      col: [
        { key: "0", colspan: 2, type: "key" },
        { key: ".", colspan: 1, type: "key" },
        { key: "=", colspan: 1, type: "equal" },
      ],
    },
  ];

  const classButtonDown = (key) => {
    setKeySelected(key);
  };

  const classButtonUp = (key) => {
    setKeySelected("");
  };

  return (
    <table className="tableKeys">
      <tbody>
        {keys.map((k) => (
          <tr key={k.rows}>
            {k.col.map((r) => (
              <td
                key={r.key}
                className={
                  keySelected === r.key ? "colKeysSelected" : "colKeys"
                }
                onClick={() => action(r)}
                colSpan={r.colspan}
                onMouseDown={() => classButtonDown(r.key)}
                onMouseUp={() => classButtonUp(r.key)}
              >
                {r.key}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Keys;
