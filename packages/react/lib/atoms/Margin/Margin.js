import React from 'react';

const Margin = ({ space = "xxxs", children, left, right, top, bottom, }) => {
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
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
