import "./form.css";
import React, { useState } from "react";
import axios from "axios";

export default function Decode() {
  const initialFormData = Object.freeze({
    URL: "",
    hashedURL: "",
  });

  const [formHashData, updateFormData] = useState(initialFormData);
  const [decoded, setDecoded] = useState("");

  const handleHashChange = (e) => {
    updateFormData({
      ...formHashData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/api/decodeHash/${formHashData.hashedURL}`)
      .then((res) => {
        console.log(res);
        setDecoded(res.data.URL);
      })
      .catch((error) => setDecoded("ERROR: URL Not Found!"));
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
        <div>
          <h3>Decoded URL:{decoded}</h3>
        </div>
      </form>
    </div>
  );
}
