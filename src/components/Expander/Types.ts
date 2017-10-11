export type ChildrenProps = {
    type: string;
};

export type Props = {
    collapsedHeight: string;
    collapsedClass: string;
    expandedClass: string;
    children: React.ReactElement<ChildrenProps>;
};

export type State = {
    expanded: Boolean;
    collapsible: Boolean;
    prevChildrenProps: ChildrenProps;
};