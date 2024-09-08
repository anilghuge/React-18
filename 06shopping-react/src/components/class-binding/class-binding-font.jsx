import { useState } from "react";

export function ClassBindingFont() {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("20px");

  const [fontStyle, setFontStyle] = useState({
    fontFamily: "",
    color: "",
    fontSize: "",
  });

  function handleChangeFont() {
    setFontStyle({
      fontFamily: fontFamily,
      color: color,
      fontSize: fontSize,
    });
  }

  return (
    <div className="container-fluid">
      <fieldset className="w-25">
        <legend>Text Formatting</legend>
        <dl>
          <dt>Font Family</dt>
          <dd>
            <select
              className="form-select"
              onChange={(e) => setFontFamily(e.target.value)}
            >
              <option>Select Font</option>
              <option>Arial</option>
              <option>Alegerian</option>
            </select>
          </dd>
        </dl>
        <dt>Font Color</dt>
        <dd>
          <input
            type="color"
            className="form-control-color"
            onChange={(e) => setColor(e.target.value)}
          />
        </dd>
        <dt>Font Size</dt>
        <dd>
          <input
            type="range"
            min={1}
            max={100}
            onChange={(e) => setFontSize(e.target.value + "px")}
            className="form-control"
          />
        </dd>
        <dt>{fontSize}</dt>
      </fieldset>
      <button className="btn btn-primary" onClick={handleChangeFont}>
        Apply
      </button>
      <div align="center">
        <label style={fontStyle}>Sample Text</label>
      </div>
    </div>
  );
}
