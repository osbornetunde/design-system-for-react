import React from 'react';
import { FontSize } from '@ar.e/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `are-text are-text-${size}`;
    return React.createElement("div", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
