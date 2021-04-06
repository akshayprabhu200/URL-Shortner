import "./form.css";
import React, { useState } from "react";
import axios from "axios";

export default function Encode() {
  const initialFormData = Object.freeze({
    URL: "",
    hashedURL: "",
  });

  const [formURLData, updateFormData] = useState(initialFormData);
  const [encoded, setEncoded] = useState("");

  const handleURLChange = (e) => {
    updateFormData({
      ...formURLData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/generateHash/", formURLData)
      .then((res) => setEncoded(res.data.hashedURL))
      .catch((error) => setEncoded("ERROR: Please try again!"));
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
        <div>
          <h3>Encoded URL: {encoded}</h3>
        </div>
      </form>
    </div>
  );
}
