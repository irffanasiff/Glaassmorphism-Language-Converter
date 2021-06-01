import React from "react";

export default ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        style={{
          outline: "none",
          width: "100%",
          margin: "10px auto",
          padding: "23px 20px",
          border: "1px solid #fff",
          borderRadius: "25px",
          color: "#fff",
          fontSize: "1rem",
          backgroundColor: " rgba(255, 255, 255, .1)",
          webkitBackdropFilter: "blur(15px)",
          backdropFilter: "blur(15px)"
        }}
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
