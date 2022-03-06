import React from "react";
import { Spacing } from "@ar.e/foundation";

export interface MarginProps {
  space?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({
  space = "xxxs",
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let className = ``;

  if (!left && !right && !top && !bottom) {
    className = `are-margin-${space}`;
  }

  if (left) {
    className = `${className} are-margin-left-${space}`;
  }

  if (right) {
    className = `${className} are-margin-right-${space}`;
  }

  if (top) {
    className = `${className} are-margin-top-${space}`;
  }

  if (bottom) {
    className = `${className} are-margin-bottom-${space}`;
  }
  return <div className={className}>{children}</div>;
};

export default Margin;
