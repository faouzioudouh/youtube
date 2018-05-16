export type CommonProps = {
    classnames?: string;
    defaultChecked?: boolean;
};

export type FProps = CommonProps;

export type LProps = CommonProps & {
    checked: boolean;    
    hasFocus: boolean;
    handleRef: (node: HTMLInputElement) => void;
    handleClick: (node: React.MouseEvent<HTMLDivElement>) => void;
    handleTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void;
    handleTouchEnd: (event: React.TouchEvent<HTMLDivElement>) => void;
    handleTouchMove: (event: React.TouchEvent<HTMLDivElement>) => void;
    handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export type State = {
    checked: boolean;
    hasFocus: boolean;
};

export interface DefaultProps {
    defaultChecked: boolean;
}