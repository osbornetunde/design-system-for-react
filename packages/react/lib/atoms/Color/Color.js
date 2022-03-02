import React from 'react';
import { Spacing } from '@ar.e/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `are-width-${width} are-height-${height}`;
    return (React.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
