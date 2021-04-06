import "./form.css";
import React, { useState } from "react";

export default function Encode() {
  const initialFormData = Object.freeze({
    URL: "",
    hashedURL: "",
  });

  const [formURLData, updateFormData] = useState(initialFormData);

  const handleURLChange = (e) => {
    updateFormData({
      ...formURLData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="form">
        <div>
          <label for="URL">Encode</label>
          <input name="URL" id="URL" onChange={handleURLChange}></input>
        </div>
        <div>
          <button onClick={handleSubmit}>Encode</button>
        </div>
      </form>
    </div>
  );
}
