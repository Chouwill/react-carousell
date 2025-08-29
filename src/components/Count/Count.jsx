import React, { useState } from "react";

import "./Count.scss";

export default function Counts() {
  const [num, setNum] = useState(0);

  const [addinputNum, addinputSetNum] = useState(0);
  const [deleteinputNum, deleteinputSetNum] = useState(0);

  function getaddValue(e) {
    console.log(typeof e.target.value);

    addinputSetNum(parseInt(e.target.value));
  }
  function getdeleteValue(e) {
    console.log(e.target.value);

    deleteinputSetNum(parseInt(e.target.value));
  }

  function addNum() {
    setNum(num + addinputNum);
  }
  function deleteNum() {
    setNum(num - deleteinputNum);
  }
  function resetNum() {
    setNum(0);
  }

  return (
    <div>
      <div className="Count-container">
        <div className="Count-box">
          <h2>自定義計數器</h2>
          <p>計數值：{num}</p>

          <div className="add">
            <label>加號數值：</label>
            <input type="number" className="addValue" onChange={getaddValue} />
            <button onClick={addNum}>+{addinputNum}</button>
          </div>

          <div className="delete">
            <label>減號數值：</label>
            <input type="number" onChange={getdeleteValue} />
            <button onClick={deleteNum}>-{deleteinputNum}</button>
          </div>

          <button className="resetNum" onClick={resetNum}>
            歸零
          </button>
        </div>
      </div>
    </div>
  );
}
