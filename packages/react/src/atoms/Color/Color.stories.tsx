import React from "react";
import Color from "./Color";
import { text, withKnobs, select } from "@storybook/addon-knobs";
import { Spacing } from "@ar.e/foundation";

//css
import "@ar.e/scss/lib/Utilities.css";

export default {
  title: "Atoms|Color",
  decorators: [withKnobs],
};

export const common = () => <Color hexCode={text("HexCode", "pink")} />;
export const customDimensions = () => (
  <Color
    hexCode={text("HexCode", "pink")}
    width={select("Width", Object.values(Spacing), "md")}
    height={select("Height", Object.values(Spacing), "md")}
  />
);
