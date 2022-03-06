import React from "react";
import Select from "./Select";

export default {
  title: "Molecules|Select",
};

//css
import "@ar.e/scss/lib/Select.css";

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

export const common = () => <Select options={options} />;
export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ option, getOptionRecommendedProps, isSelected }) => (
      <span {...getOptionRecommendedProps()}>
        {option.label}
        {isSelected ? "SELECTED!" : ""}
      </span>
    )}
  />
);

export const customLabel = () => (
  <Select label="Select a color" options={options} />
);
