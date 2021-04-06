import "./form.css";
import React, { useState } from "react";

export default function Decode() {
  const initialFormData = Object.freeze({
    URL: "",
    hashedURL: "",
  });

  const [formHashData, updateFormData] = useState(initialFormData);

  const handleHashChange = (e) => {
    updateFormData({
      ...formHashData,

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
          <label for="hashedURL">Decode</label>
          <input
            name="hashedURL"
            id="hashedURL"
            onChange={handleHashChange}
          ></input>
        </div>
        <div>
          <button onClick={handleSubmit}>Decode</button>
        </div>
      </form>
    </div>
  );
}
