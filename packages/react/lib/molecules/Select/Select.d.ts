import React from "react";
interface SelectOption {
    label: string;
    value: string;
}
interface RenderOptionProps {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
}
interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label?: string;
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
}
declare const Select: ({ options, label, onOptionSelected: handler, renderOption, }: SelectProps) => JSX.Element;
export default Select;
