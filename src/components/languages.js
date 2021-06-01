/* eslint-disable */

import React, { useState } from "react";

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];

const Languages = ({ language, onLanguageChange }) => {
  if (language === undefined) {
    language = "es";
  }
  const languageConfig = LANGUAGES.find((l) => l.value === language);
  if (!languageConfig) {
    throw new Error(`Unknown language code '${language}'`);
  }

  const [open, setOpen] = useState(false);

  const onSelect = (language) => {
    setOpen(false);
    onLanguageChange(language);
  };

  return (
    <div>
      <label
        style={{
          color: "white",
          marginTop: "10px"
        }}
        className="label"
      >
        Select Language
      </label>
      <div className={`dropdown ${open && "is-active"}`}>
        <div className="dropdown-trigger">
          <button
            style={{
              width: "100%",
              height: "50px",
              margin: "10px auto 5px",
              padding: "15px",
              border: "none",
              borderRadius: "25px",
              backgroundColor: "#fff",
              color: "#3d3935",
              fontSize: "1.25rem",
              outline: "none",
              cursor: "pointer"
            }}
            className="button"
            onClick={() => setOpen(!open)}
          >
            <span>{languageConfig.label}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu">
          <div
            style={{
              color: "white",
              width: "100%",
              margin: "0px auto 10px",
              padding: "8px",
              border: "none",
              borderRadius: "25px",
              backgroundColor: "#fff",
              color: "#3d3935",
              fontSize: "1.25rem"
            }}
            className="dropdown-content"
          >
            {LANGUAGES.map(({ label, value }) => {
              return (
                <a
                  href="#"
                  onClick={() => onSelect(value)}
                  className="dropdown-item"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
