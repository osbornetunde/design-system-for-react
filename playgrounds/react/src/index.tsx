import React from "react";
import ReactDOM from "react-dom";

import { Margin, Text, Select } from "@ar.e/react";
import "@ar.e/scss/lib/Utilities.css";
import "@ar.e/scss/lib/Text.css";
import "@ar.e/scss/lib/Select.css";
import "@ar.e/scss/lib/global.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <div style={{ padding: "40px" }}>
    <Select
      options={options}
      // renderOption={({ option, getOptionRecommendedProps }) => (
      //   <p
      //     {...getOptionRecommendedProps({
      //       className: "custom",
      //     })}
      //   >
      //     {option.label}
      //   </p>
      // )}
    />
  </div>,
  document.querySelector("#root")
);
