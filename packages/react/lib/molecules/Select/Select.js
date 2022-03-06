import React, { useState, useRef, useEffect, createRef } from 'react';
import Text from '../../atoms/Text/Text.js';

const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40,
    ESC: 27,
    UP_ARROW: 38,
};
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};
const getNextOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
const Select = ({ options = [], label = "Please select an option ...", onOptionSelected: handler, renderOption, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const [optionRefs, setOptionRefs] = useState([]);
    const labelRef = useRef(null);
    const onOptionSelected = (option, optionIndex) => {
        setIsOpen(!isOpen);
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    const highlightOption = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true);
        }
        highlightOption(0);
    };
    useEffect(() => {
        setOptionRefs(options.map((_) => createRef()));
    }, [options.length]);
    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
    const onOptionKeyDown = (event) => {
        if (event.keyCode === KEY_CODES.ESC) {
            setIsOpen(false);
            return;
        }
        if (event.keyCode === KEY_CODES.DOWN_ARROW) {
            highlightOption(getNextOptionIndex(highlightedIndex, options));
            return;
        }
        if (event.keyCode === KEY_CODES.UP_ARROW) {
            highlightOption(getPreviousOptionIndex(highlightedIndex, options));
        }
        if (event.keyCode === KEY_CODES.ENTER) {
            onOptionSelected(options[highlightedIndex], highlightedIndex);
        }
    };
    return (React.createElement("div", { className: "are-select" },
        React.createElement("button", { "data-testid": "areSelectButton", "aria-controls": "are-select-list", "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, ref: labelRef, className: "are-select__label", onKeyDown: onButtonKeyDown, onClick: () => onLabelClick() },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { width: "1rem", height: "1rem", className: `are-select__caret ${isOpen ? "are-select__caret--open" : "are-select__caret--closed"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }))),
        React.createElement("ul", { role: "menu", id: "are-select-list", style: { top: overlayTop }, className: `are-select__overlay ${isOpen ? "are-select__overlay--open" : ""}` }, options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const isHighlighted = highlightedIndex === optionIndex;
            const ref = optionRefs[optionIndex];
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => {
                    return {
                        ref,
                        role: "menuitemradio",
                        "aria-label": option.label,
                        "aria-checked": isSelected ? true : undefined,
                        onKeyDown: onOptionKeyDown,
                        tabIndex: isHighlighted ? -1 : 0,
                        onMouseEnter: () => highlightOption(optionIndex),
                        onMouseLeave: () => highlightOption(null),
                        className: `are-select__option 
                  ${isSelected ? "are-select__option--selected" : ""}
                    ${isHighlighted ? "are-select__option--highlighted" : ""}
                  }`,
                        key: option.value,
                        onClick: () => onOptionSelected(option, optionIndex),
                        ...overrideProps,
                    };
                },
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", { ...renderOptionProps.getOptionRecommendedProps() },
                React.createElement(Text, null, option.label),
                isSelected && (React.createElement("svg", { width: "1rem", height: "1rem", className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" })))));
        }))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
